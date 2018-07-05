// Array para guardar dados
var arrayBrands = [];
var arrayModels = [];

// Objetos
var newUser = {};
var newVehicle = {};

// Variaveis
var name, email, password, address, zip, birth, gender, plate, brand, model, fuelType;

// Load brands and models to arrays
getBrands();
getModels();

// When document ready
$(document).ready(function() {
    // 1.1 - PRIMEIRA PAGINA
    // Botão para passar para a próxima fase
    $("#btnSkip1").click(function(e) {
        e.preventDefault();
        // Obter valores de cada input
        name = $("#name").val(); // nome
        email = $("#email").val(); // email 
        password = $("#password").val(); // palavra passe   
        var passC = $("#passwordConfirmar").val(); // confirmação da palavra passe

        /*console.log("Nome: " + name + ";")
        console.log("Email: " + email + ";")
        console.log("Password: " + password + ";")
        console.log("Confirmação da password: " + passC + ";")*/

        // Validar preenchimento dos campos
        if (name != "" && email != "" && password != "" && passC != "") {
            if (password == passC) {
                // Se tudo estiver preenchido E as palavras passe forem iguais, grava os dados e passa a próxima página
                newUser.name = name;
                newUser.email = email;
                newUser.password = password;

                // Passar pagina
                $("#carousel-item2").show();
                $("#carousel-item1").hide();
                $("#carousel-item3").hide();
            }
            else {
                alert("Make sure the passwords match, please!")
            }
        }
        else {
            alert("Fill in all form fields, please!");
        };
    });

    // 1.2 - SEGUNDA PAGINA
    gender = undefined;
    // Escolher o genero
    $('#btnFemale').click(function(e) {
        e.preventDefault();
        gender = "female";
        //console.log(gender);
        $('#gender').val(gender);
    });
    $('#btnMale').click(function(e) {
        e.preventDefault();
        gender = "male";
        //console.log(gender);
        $('#gender').val(gender);
    });

    // Botão para passar para a próxima fase
    $("#btnSkip2").click(function(e) {
        e.preventDefault();
        // Obter valores de cada input
        address = $("#adress").val(); // address
        var zip1 = $("#zip1").val(); // primeira parte do codigo postal XXXX - 111 
        var zip2 = $("#zip2").val(); // segunda parte do codigo postal  1111 - XXX
        birth = $("#birth").val(); // data de nascimento

        /*console.log("Código postal: " + zip1 + "-" + zip2 + ";")
        console.log("Data de nascimento: " + birth + ";")
        console.log("Genero: " + gender + ";")*/

        // Validar preenchimento dos campos
        if (zip1 != "" && zip2 != "" && birth != "" && address != "") {
            // ZIP no formato correto 4 + 3 numeros
            if (zip1.length == 4 && zip2.length == 3) {

                zip = zip1 + "-" + zip2
                //console.log("codigo postaaaaal: " + zip)
                // Verifica se o genero esta selecionado
                if (gender != undefined) {
                    // Obtem a data de hoje 18 anos atras
                    var today = new Date();
                    var dd = today.getDate();
                    var mm = today.getMonth() + 1; //January is 0!
                    var yyyy = today.getFullYear() - 18;

                    var myDate = yyyy + "-" + mm + "-" + dd
                    if (birth > myDate) {
                        alert("You have to be over 18 to signup!")
                    }
                    else {
                        // Depois das verificacoes grava no newUser
                        newUser.address = address;
                        newUser.postalCode = zip;
                        newUser.dateOfBirth = birth;
                        newUser.gender = gender;

                        // E muda de pagina
                        $("#carousel-item3").show();
                        $("#carousel-item1").hide();
                        $("#carousel-item2").hide();
                    }

                }
                else {
                    alert("Select your gender, please!")
                }
            }
            else {
                alert("Make sure your ZIP code is correct, please!");
            }
        }
        else {
            alert("Fill in all form fields, please!");
        }
    });

    // 1.3 - TERCEIRA PAGINA
    // "Botao" submit que verifica a validade de cada campo
    // Neste momento #botaoteste é um botão provisorio para questões de testes. Este código e para o botão SUBMIT. Só faz SUBMIT se tiver tudo ok! 
    // Ainda temos de explorar essa parte
    $("#btnSubmit").click(function(e) {
        e.preventDefault();

        //Obter valores de cada input
        plate = $("#matricula").val();
        brand = $(".selectpicker").val();
        model = $(".selectmodel").val();
        fuelType = $(".selectfuel").val();

        if (brand == null && model == null && plate == '' && fuelType == null) {
            var option = confirm("Are you sure you want to register without a Vehicle?");
            if (option == true) {
                // Gravar User na base de dados
                submitUser();
            }
            else {
                alert("Make sure you select your car model, please!");
            }
        }
        else if (brand == null || model == null) {
            alert("Make sure you select your car model, please!");
        }
        else if (brand != null && model != null && fuelType == null) {
            alert("Make sure you select the type of fuel your car uses, please!");
        }
        else if (brand != null && model != null && fuelType != null) {
            var verifyPlate = /[A-Z][A-Z]-[0-9][0-9]-[0-9][0-9]|[0-9][0-9]-[0-9][0-9]-[A-Z][A-Z]|[0-9][0-9]-[A-Z][A-Z]-[0-9][0-9]/.test(plate); // AA-00-00 or 00-00-AA or 00-AA-00
            if (verifyPlate == false) {
                alert("Make sure your number plate is correct, please!\nNote: Every letter must be capitalised.");
            }
            else {
                // Save to newVehicle
                newVehicle.nPlate = plate;
                newVehicle.model = model;
                newVehicle.fuelType = fuelType;

                // Gravar User na base de dados
                submitUser();
            }
        }
    });
});

// -- Functions -- \\
// Gravar User na base de dados
function submitUser() {
    $.ajax({
        type: 'POST',
        url: '/regSave',
        data: {
            newUser: newUser
        },
        success: function(userId) {
            // Gravar vehiculo
            if ($.isEmptyObject(newVehicle) == false) {
                submitVehicle(userId);
            }
            else {
                // Mensagem de sucesso, sem registar carro
                alert("You have successfully registered on mPark! Don't forget you have to register your car to have full access to all the functionalities! Thank you!");
                window.location.replace('/login');
            }
        }
    });
}

// Gravar Veiculo na base de dados
function submitVehicle(userId) {
    newVehicle.user = userId;
    //console.log(newVehicle);

    $.ajax({
        type: 'POST',
        url: '/saveVehicle',
        data: {
            newVehicle: newVehicle
        },
        success: function(data) {
            // Mensagem de sucesso, sem registar carro
            alert("You have successfully registered on mPark with a Vehicle! Thank you!");
            window.location.replace('/login');
        }
    });
};

// Select das Brands
function listBrands() {
    var result = '';
    result += '<select onchange="listModels()" id="selectBrand" class="selectpicker form-control reg-select"><option value="" disabled selected>Brand</option>'
    for (var i = 0; i < arrayBrands.length; i++) {
        result += '<option value="' + arrayBrands[i]._id + '">' + arrayBrands[i].name + '</option>';
    }
    result += '</select>'
    $('#targetBrandList').html(result);
}

// Select dos Models
function listModels() {
    var result = '';
    result += '<select class="selectmodel form-control reg-select"><option value="" disabled selected>Model</option>'
    for (var i = 0; i < arrayModels.length; i++) {
        if ($("#selectBrand").val() == arrayModels[i].brand) {
            result += '<option value="' + arrayModels[i]._id + '">' + arrayModels[i].name + '</option>';
        }
    }
    result += '</select>'
    $('#targetModelList').html(result);
}

// Get Brands and save to array
function getBrands() {
    console.log("Loading Brands...");

    $.ajax({
        type: 'POST',
        url: '/admin/getListBrand',
        success: function(data) {
            arrayBrands = data;
            console.log("Brands loaded!");
            listBrands();
        },
        error: function(req, status, err) {
            console.log("Brands couldn't be loaded!");
            console.log("Error: " + err);
        }
    });
};

// Get Models and save to array
function getModels() {
    console.log("Loading Models...");

    $.ajax({
        type: 'POST',
        url: '/admin/getListModel',
        success: function(data) {
            arrayModels = data;
            console.log("Models loaded!");
        },
        error: function(req, status, err) {
            console.log("Models couldn't be loaded!");
            console.log("Error: " + err);
        }
    });
};

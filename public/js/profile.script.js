// Array para guardar dados
var arrayBrands = [];
var arrayModels = [];

// Objetos
var newVehicle = {};

var logado = "5b1bd6e90b48e94564e4e244"
var user = []

// Load brands and models to arrays and Load user info
getUserInfo()
getBrands();
getModels();

$(document).ready(function() {
    // Car hides and shows
    $("#carEdit").click(function(e) {
        e.preventDefault();

        $("#coisaFofa").css("display", "none");
        $("#changeCar").css("display", "block");

    });
    $("#cancelEditCar").click(function(e) {
        e.preventDefault();

        $("#coisaFofa").css("display", "block");
        $("#changeCar").css("display", "none");

    });

    // Email hides and shows
    $("#emailEdit").click(function(e) {
        e.preventDefault();

        $("#coisaFofa").css("display", "none");
        $("#changeEmail").css("display", "block");

    });
    $("#cancelEditEmail").click(function(e) {
        e.preventDefault();

        $("#coisaFofa").css("display", "block");
        $("#changeEmail").css("display", "none");

    });

    // Password hides and shows
    $("#passwordEdit").click(function(e) {
        e.preventDefault();

        $("#coisaFofa").css("display", "none");
        $("#changePassword").css("display", "block");

    });
    $("#cancelEditPassword").click(function(e) {
        e.preventDefault();

        $("#coisaFofa").css("display", "block");
        $("#changePassword").css("display", "none");

    });

    // Botoes
    $("#confirmEditCar").click(function(e) {
        e.preventDefault();

        //Obter valores de cada input
        var plate = $("#matricula").val();
        var brand = $(".selectpicker").val();
        var model = $(".selectmodel").val();
        var fuelType = $(".selectfuel").val();

        if (brand == null) {
            alert("Make sure you select your car brand, please!");
        }
        else if (model == null) {
            alert("Make sure you select your car model, please!");
        }
        else if (fuelType == null) {
            alert("Make sure you select the type of fuel your car uses, please!");
        }
        else {
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
                submitVehicle();
            }
        }
    });


    $("#confirmEditEmail").click(function(e) {
        e.preventDefault();

        var email = $("#newEmail").val()
        var confEmail = $("#confNewEmail").val()

        if (email != "" || confEmail != "") {
            if (email == confEmail) {
                changeEmail(email);
            }
            else {
                alert("Make sure both emails match, please!")
            }
        }
        else {
            alert("Fill all the spaces, please!")
        }
    });

    $("#confirmEditPassword").click(function(e) {
        e.preventDefault();

        var password = $("#newPassword").val()
        var confPassword = $("#confNewPassword").val()

        if (password != "" || confPassword != "") {
            if (password == confPassword) {
                changePassword(password);
            }
            else {
                alert("Make sure both passwords match, please!")
            }
        }
        else {
            alert("Fill all the spaces, please!")
        }
    });

    $("#backMain").click(function(e) {
        e.preventDefault();
        window.location.replace('/home');
    });

    $("#signOut").click(function() {
        window.location.replace('/logout');
    });
})

// -- Functions -- \\
// get User Information
function getUserInfo() {
    $.ajax({
        type: 'POST',
        url: '/getUser',
        success: function(user) {
            //console.log(user);
            $("#img_perfil").attr("src", user.pic);
            $("#userName").append(user.name)
        }
    });
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

// Select das Brands
function listBrands() {
    var result = '';
    result += '<select onchange="listModels()" id="selectBrand" class="selectpicker form-control reg-select"><option value="" disabled selected>Update brand</option>'
    for (var i = 0; i < arrayBrands.length; i++) {
        result += '<option value="' + arrayBrands[i]._id + '">' + arrayBrands[i].name + '</option>';
    }
    result += '</select>'
    $('#targetBrandList').html(result);
}

// Select dos Models
function listModels() {
    var result = '';
    result += '<select class="selectmodel form-control reg-select"><option value="" disabled selected> Update model</option>'
    for (var i = 0; i < arrayModels.length; i++) {
        if ($("#selectBrand").val() == arrayModels[i].brand) {
            result += '<option value="' + arrayModels[i]._id + '">' + arrayModels[i].name + '</option>';
        }
    }
    result += '</select>'
    $('#targetModelList').html(result);
}

// Gravar Veiculo na base de dados
function submitVehicle() {
    $.ajax({
        type: 'POST',
        url: '/changeCar',
        data: {
            newVehicle: newVehicle
        },
        success: function(data) {
            // Mensagem de sucesso, sem registar carro
            alert("You have successfully updated your car details!");
            window.location.replace('/profile');
        }
    });
};

// Change Email
function changeEmail(email) {
    $.ajax({
        type: 'POST',
        url: '/changeEmail',
        data: { newEmail: email },
        success: function(data) {
            alert("You have successfully updated your email!");
            window.location.replace('/profile');
        }
    });
}

// Change password
function changePassword(password) {
    $.ajax({
        type: 'POST',
        url: '/changePassword',
        data: { newPassword: password },
        success: function(data) {
            alert("You have successfully updated your password!");
            window.location.replace('/profile');
        }
    });
}

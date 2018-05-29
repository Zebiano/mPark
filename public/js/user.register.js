$(document).ready(function() {
    // 1-REGISTO
    // Validações para registo de utilizadores

    // Array para guardar dados
    var registo = [];



    // 1.1 - PRIMEIRA PAGINA
    // Botão para passar para a próxima fase
    $("#btnSkip1").click(function(e) {
        e.preventDefault();
        // Obter valores de cada input
        var name = $("#name").val(); // nome
        var email = $("#email").val(); // email 
        var pass = $("#password").val(); // palavra passe   
        var passC = $("#passwordConfirmar").val(); // confirmação da palavra passe

        console.log("Nome: " + name + ";")
        console.log("Email: " + email + ";")
        console.log("Password: " + pass + ";")
        console.log("Confirmação da password: " + passC + ";")

        // Validar preenchimento dos campos
        if (name != "" && email != "" && pass != "" && passC != "") {
            if (pass == passC) {
                // Se tudo estiver preenchido E as palavras passe forem iguais, passa a próxima página
                $("#carousel-item2").show();
                $("#carousel-item1").hide();
                $("#carousel-item3").hide();

                // Guarda dados no array
                registo.push(name, email, pass);
                console.log("Resisto: " + registo)
            }
            else {
                // Erro
                alert("Make sure the passwords match, please!")
            }
        }
        else {
            // Erro
            alert("Fill in all form fields, please!");
        };
    });

    // 1.2 - SEGUNDA PAGINA

    var gender = undefined;

    // Escolher o genero
    $('#btnFemale').click(function(e) {
        e.preventDefault();
        gender = "female";
        console.log(gender);
        $('#gender').val(gender);
    });
    $('#btnMale').click(function(e) {
        e.preventDefault();
        gender = "male";
        console.log(gender);
        $('#gender').val(gender);
    });


    // Botão para passar para a próxima fase
    $("#btnSkip2").click(function(e) {
        e.preventDefault();
        // Obter valores de cada input
        var morada = $("#adress").val(); // morada
        var zip1 = $("#zip1").val(); // primeira parte do codigo postal XXXX - 111 
        var zip2 = $("#zip2").val(); // segunda parte do codigo postal   111 - XXX
        var birth = $("#birth").val(); // data de nascimento

        console.log("Código postal: " + zip1 + "-" + zip2 + ";")
        console.log("Data de nascimento: " + birth + ";")
        console.log("Genero: " + gender + ";")

        // Validar preenchimento dos campos
        if (zip1 != "" && zip2 != "" && birth != "") {
            // ZIP no formato correto 4 + 3 numeros
            if (zip1.length == 4 && zip2.length == 3) {

                var cp = zip1 + "-" + zip2
                console.log("codigo postaaaaal: " + cp)
                // Verifica se o genero esta selecionado
                if (gender != undefined) {
                    $("#carousel-item3").show();
                    $("#carousel-item1").hide();
                    $("#carousel-item2").hide();

                    // Guarda dados no array
                    registo.push(morada, cp, birth, gender);
                    console.log("Resisto: " + registo)
                }
                else {
                    // Erro
                    alert("Select your gender, please!")
                }
            }
            else {
                // Erro
                alert("Make sure your ZIP code is correct, please!");
            }
        }
        else {
            // Erro
            alert("Fill in all form fields, please!");
        }
    });

    // VERIFICAR O GENERO #### AINDA EM CONSTRUÇÃO ############################################

    $("#btnSubmit").click(function(e) {
        e.preventDefault();
        $("#form").submit();
    });
    // #######################################################################################


    // 1.3 - TERCEIRA PAGINA
    // Select da marca - quando o valor do select muda(change) da trigger a função
    $(".selectpicker").change(function(e) {
        e.preventDefault();
        var marca = $(".selectpicker").val();
        console.log("change funciona")
        console.log("marca: " + marca)

        // Marca selecionada é BMW
        if (marca == "bmw") {
            // Depois de saber a marca selecionada, adiciona os modelos dessa marca ao select seguinte
            $(".selectmodel").append("<option class='bmw' value='berlina'>Berlina</option><option class='bmw' value='cabrio'>Cabrio</option><option class='bmw' value='coupe'>Coupé</option>");

            // E remove os modelos que estavam anteriormente
            $(".selectmodel option[class='seat']").each(function() {
                $(this).remove();
            });
            $(".selectmodel option[class='porsche']").each(function() {
                $(this).remove();
            });
            $(".selectmodel option[class='lamborghini']").each(function() {
                $(this).remove();
            });
        }
        // Marca selecionada é Seat
        else if (marca == "seat") {
            // Depois de saber a marca selecionada, adiciona os modelos dessa marca ao select seguinte
            $(".selectmodel").append("<option class='seat' value='ibiza'>Ibiza</option><option class='seat' value='mii'>Mii</option><option class='seat' value='ateca'>Ateca</option>");

            // E remove os modelos que estavam anteriormente
            $(".selectmodel option[class='bmw']").each(function() {
                $(this).remove();
            });
            $(".selectmodel option[class='porsche']").each(function() {
                $(this).remove();
            });
            $(".selectmodel option[class='lamborghini']").each(function() {
                $(this).remove();
            });
        }
        // Marca selecionada é Porsche
        else if (marca == "porsche") {
            // Depois de saber a marca selecionada, adiciona os modelos dessa marca ao select seguinte
            $(".selectmodel").append("<option class='porsche' value='carrera'>Carrera</option><option class='porsche' value='boxster'>Boxster</option><option class='porsche' value='macan'>Macan</option>");

            // E remove os modelos que estavam anteriormente
            $(".selectmodel option[class='seat']").each(function() {
                $(this).remove();
            });
            $(".selectmodel option[class='bmw']").each(function() {
                $(this).remove();
            });
            $(".selectmodel option[class='lamborghini']").each(function() {
                $(this).remove();
            });
        }
        // Marca selecionada é Lamborghini
        else if (marca == "lamborghini") {
            // Depois de saber a marca selecionada, adiciona os modelos dessa marca ao select seguinte
            $(".selectmodel").append("<option class='lamborghini' value='urus'>Urus</option><option class='lamborghini' value='huracan'>Huracán</option><option class='lamborghini'value='aventador'>Aventador</option>");

            // E remove os modelos que estavam anteriormente
            $(".selectmodel option[class='seat']").each(function() {
                $(this).remove();
            });
            $(".selectmodel option[class='porsche']").each(function() {
                $(this).remove();
            });
            $(".selectmodel option[class='bmw']").each(function() {
                $(this).remove();
            });
        };
    });

    // "Botao" submit que verifica a validade de cada campo
    // Neste momento #botaoteste é um botão provisorio para questões de testes. Este código e para o botão SUBMIT. Só faz SUBMIT se tiver tudo ok! 
    // Ainda temos de explorar essa parte
    $("#btnSubmit").click(function(e) {
        e.preventDefault();
        //Obter valores de cada input
        var matricula = $("#matricula").val();
        var marca = $(".selectpicker").val();
        var modelo = $(".selectmodel").val();
        var combustivel = $(".selectfuel").val();

        // Marca selecionada
        if (marca != null) {
            console.log("A marca do carro é: " + marca)
            // Modelo Selecionado
            if (modelo != null) {
                console.log("O modelo do carro é: " + modelo)
                // Verifica se a matrícula está no formato correto
                // Valor retornado é "true" ou "false"
                var matriculaTest1 = /^\d{2} ?- ?[A-Z]{2} ?- ?[A-Z]{2}$/.test(matricula); // 00-AA-AA
                var matriculaTest2 = /^[A-Z]{2} ?- ?\d{2} ?- ?[A-Z]{2}$/.test(matricula); // AA-00-AA
                var matriculaTest3 = /^[A-Z]{2} ?- ?[A-Z]{2} ?- ?\d{2}$/.test(matricula); // AA-AA-00

                console.log("test1= " + matriculaTest1);
                console.log("test2= " + matriculaTest2);
                console.log("test3= " + matriculaTest3);

                //Se a matrícula estiver preenchida tem de estar num formato correto
                if (matricula != "" && (matriculaTest1 == true || matriculaTest2 == true || matriculaTest3 == true)) {
                    console.log("A matrícula, " + matricula + " é válida")
                    // Combustivel selecionado
                    if (combustivel != null) {
                        console.log("O combustivel do carro é: " + combustivel)
                        registo.push(matricula, marca, modelo, combustivel);
                        console.log("Resisto: " + registo)

                        registo.submit();
                    }
                    else {
                        // Erro
                        alert("Make sure you select the type of fuel your car uses, please!")
                    }
                }
                else {
                    // Erro
                    alert("Make sure your number plate is correct, please!")
                };
            }
            else {
                // Erro
                alert("Make sure you select your car model, please!")
            }
        }
        else {
            // Mensagem de sucesso, sem registar carro
            alert("You have successfully registered on mPark! Don't forget you have to register your car to have full access to all the functionalities! Thank you!")
        }

    });
});

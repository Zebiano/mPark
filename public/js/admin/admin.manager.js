$(document).ready(function() {
    // --- Default states on load -- \\
    // Parking Lot
    $('#btnParkNew').focus();
    $('#divBtnsEdit').hide();
    $('#btnParkSubmit').hide();
    $('#btnUserSubmit').hide();
    $('#btnVehicleSubmit').hide();
    $('#btnBmSubmit').hide();

    // -- OnClick events -- \\
    // Parking Lot
    $('#btnParkNew').click(function(e) {
        e.preventDefault();
        // Hide
        $('#divBtnsEdit').hide();
        $('#btnParkSubmit').hide();
        // Show
        $('#formPark').show();
        $('#btnParkFormSubmit').show();
    });
    $('#btnParkEdit').click(function(e) {
        e.preventDefault();
        // Hide
        $('#btnParkFormSubmit').hide();
        // Show
        $('#formPark').show();
        $('#divBtnsEdit').show();
        $('#btnParkSubmit').show();
    });
    $('#btnParkDelete').click(function(e) {
        e.preventDefault();
        // Hide
        $('#formPark').hide();
        $('#divBtnsEdit').hide();
        $('#btnParkSubmit').hide();
        $('#btnParkFormSubmit').hide();
    });

    // Users
    $('#btnUserNew').click(function(e) {
        e.preventDefault();
        // Show
        $('#formUser').show();
        $('#btnUserFormSubmit').show();
        // Hide
        $('#btnUserSubmit').hide();
    });
    $('#btnUserEdit').click(function(e) {
        e.preventDefault();
        // Show
        $('#formUser').show();
        $('#btnUserSubmit').show();
        // Hide
        $('#btnUserFormSubmit').hide();
    });
    $('#btnUserDelete').click(function(e) {
        e.preventDefault();
        // Hide
        $('#formUser').hide();
        $('#btnUserSubmit').hide();
        $('#btnUserSubmit').hide();
    });

    // Personal Vehicles
    $('#btnVehicleNew').click(function(e) {
        e.preventDefault();
        // Show
        $('#formVehicle').show();
        $('#btnVehicleFormSubmit').show();
        // Hide
        $('#btnVehicleSubmit').hide();
    });
    $('#btnVehicleEdit').click(function(e) {
        e.preventDefault();
        // Show
        $('#formVehicle').show();
        $('#btnVehicleSubmit').show();
        // Hide
        $('#btnVehicleFormSubmit').hide();
    });
    $('#btnVehicleDelete').click(function(e) {
        e.preventDefault();
        // Hide
        $('#formVehicle').hide();
        $('#btnVehicleSubmit').hide();
        $('#btnVehicleFormSubmit').hide();
    });

    // Brands and Models
    $('#btnBmNew').click(function(e) {
        e.preventDefault();
        // Show
        $('#formBm').show();
        $('#btnBmFormSubmit').show();
        // Hide
        $('#btnBmSubmit').hide();
    });
    $('#btnBmEdit').click(function(e) {
        e.preventDefault();
        // Show
        $('#formBm').show();
        $('#btnBmSubmit').show();
        // Hide
        $('#btnBmFormSubmit').hide();
    });
    $('#btnBmDelete').click(function(e) {
        e.preventDefault();
        // Hide
        $('#formBm').hide();
        $('#btnBmSubmit').hide();
        $('#btnBmFormSubmit').hide();
    });


    var brands = {};

    $.ajax({
            type: 'GET',
            url: '/admin',
            //os dados recebidos do model estão na variável data
            success: function(data) {
                function loadUser() {
                    var template = $('#template').html();
                    Mustache.parse(template); // optional, speeds up future uses
                    res.render('template/geral.html', {
                        // Mustache code in here
                        cssFiles: css,
                        targetInput: html,
                        scriptFiles: scripts
                    });
                });
            $('#target').html(rendered);
        }

    }
});



// -- Lists -- \\
// Parking Lot
// Users
// Personal Vehicles
// Brands and Models
// get all the users

$(document).ajaxError(function(err) {
//console.log(err);
});
});

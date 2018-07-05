// Variables: Arrays
var arrayParks = [{ name: "Error loading Parks. Please refresh." }];
var arrayUsers = [{ name: "Error loading Users. Please refresh." }];
var arrayVehicles = [{ name: "Error loading Vehicles. Please refresh." }];
var arrayBrands = [{ name: "Error loading Brands. Please refresh." }];
var arrayModels = [{ name: "Error loading Models. Please refresh." }];
var arrayIds = [];
//var arrayTabs = ["pLot-tab", "user-tab", "vehicle-tab", "bm-tab"];

// Varibales
var visible = false;

$(document).ready(function() {
    // -- Lists -- \\
    // Parking Lot
    getParks(function(output) {
        // Save Parks to array
        arrayParks = output;

        // Prepares a beautiful table to show a list of Parking Lots
        listParks();

        // Check if all arrays are loaded
        checkArrays();
    });

    // Users
    getUsers(function(output) {
        // Save Users to array
        arrayUsers = output;

        // Prepares a beautiful table to show a list of Users
        listUsers();

        // Personal Users Vehicles
        listUsersVehicle();

        // Check if all arrays are loaded
        checkArrays();
    });

    // Personal Vehicles
    getVehicles(function(output) {
        // Save Vehicles to array
        arrayVehicles = output;

        // Prepares a beautiful table to show a list of Vehicles
        listVehicles();

        // Check if all arrays are loaded
        checkArrays();
    });

    // Brands
    getBrands(function(output) {
        // Save brands to array
        arrayBrands = output;

        /*// Saves Id to arrayIds
        arrayIds.push(arrayBrands[0]._id);
        console.log(arrayIds);*/

        // Prepares a beautiful table to show a list of Brands
        listBrands();

        // Check if all arrays are loaded
        checkArrays();

    });

    // Models
    getModels(function(output) {
        // Save models to array
        arrayModels = output;

        // Check if all arrays are loaded
        checkArrays();
    });

    // --- Default states on load -- \\
    // Load as navTabs
    //loadNavTabs("pLot-tab");

    // Parking Lots
    $('#formPark').hide();
    $('#btnEditingPark').hide();
    // Users
    $('#formUser').hide();
    $('#btnEditingUser').hide();
    // Personal Vehicles
    $('#formVehicle').hide();
    $('#btnEditingVehicle').hide();
    // Brands
    $('#formBrand').hide();
    $('#btnEditingBrand').hide();
    // Models
    $('#formModel').hide();
    $('#btnEditingModel').hide();

    // -- OnClick events -- \\
    // Torna os campos da password visiveis ou nao
    $("#visiblePass").click(function(e) {
        e.preventDefault();
        if (!visible) {
            // campos ficam visiveis
            $("#adminUserPass").prop('type', 'text');
            $(this).html("<i class='far fa-eye'></i>")
            visible = true;
        }
        else if (visible) {
            // campos ficam escondidos
            $("#adminUserPass").prop('type', 'password');
            $(this).html("<i class='far fa-eye-slash'></i>")
            visible = false;
        }
    });

    // - Tabs - \\
    // Parking Lots
    $('#pLot-tab').click(function() {
        resetVariables();
    });
    // Users
    $('#user-tab').click(function() {
        resetVariables();
    });
    // Personal Vehicles
    $('#vehicle-tab').click(function() {
        resetVariables();
    });
    // Brands and Models
    $('#bm-tab').click(function() {
        resetVariables();
    });

    // - Buttons - \\
    // Parking Lots
    $('#btnParkNew').click(function(e) {
        e.preventDefault()
        $('#formPark').show();
    });
    $('#btnCancelParkNew').click(function(e) {
        e.preventDefault();
        // Hide
        $('#formPark').hide();
        $('#btnEditingPark').hide();
        // Show
        $('#btnParkNew').show();
        $('#btnParkFormSubmit').show();

        // Change action of form
        $("#formPark").attr("action", "/admin/savePark");
    });
    $("#btnParkFormSubmit").click(function(e) {
        // Ask user if he/she is sure
        var option = areYouSure($("#formPark").attr("action"), $("#adminParkName").val());
        if (option == false) {
            e.preventDefault();
        }
        else {
            window.location.reload();
        }
    });

    // Users
    $('#btnUserNew').click(function(e) {
        e.preventDefault()
        $('#formUser').show();
    });
    $('#btnCancelUserNew').click(function(e) {
        e.preventDefault();
        // Hide
        // Hide
        $('#formUser').hide();
        $('#btnEditingUser').hide();
        // Show
        $('#btnUserNew').show();
        $('#btnUserFormSubmit').show();

        // Change action of form
        $("#formUser").attr("action", "/admin/saveUser");
    });
    $("#btnUserFormSubmit").click(function(e) {
        // Ask user if he/she is sure
        var option = areYouSure($("#formUser").attr("action"), $("#adminUserName").val());
        if (option == false) {
            e.preventDefault();
        }
        else {
            window.location.reload();
        }
    });

    // Personal Vehicles
    $('#btnVehicleNew').click(function(e) {
        e.preventDefault()
        $('#formVehicle').show();

        // Assign userId to Vehicle Form
        $('#saveVehicleUserIdHidden').val(arrayIds[0]);
    });
    $('#btnCancelVehicleNew').click(function(e) {
        e.preventDefault();
        // Hide
        $('#formVehicle').hide();
        $('#btnEditingVehicle').hide();
        // Show
        $('#btnVehicleNew').show();
        $('#btnVehicleFormSubmit').show();

        // Change action of form
        $("#formVehicle").attr("action", "/admin/saveVehicle");
    });
    $("#btnVehicleFormSubmit").click(function(e) {
        var option = areYouSure($("#formVehicle").attr("action"), $("#adminVehicleNumberPLate").val());
        if (option == false) {
            e.preventDefault();
        }
        else {
            window.location.reload();
        }
    });

    // Brands
    $('#btnBrandNew').click(function(e) {
        e.preventDefault()
        $('#formBrand').show();
    });
    $('#btnCancelBrandNew').click(function(e) {
        e.preventDefault();
        // Hide
        $('#formBrand').hide();
        $('#btnEditingBrand').hide();
        // Show
        $('#btnBrandNew').show();
        $('#btnBrandFormSubmit').show();

        // Change action of form
        $("#formBrand").attr("action", "/admin/saveBrand");
    });
    $("#btnBrandFormSubmit").click(function(e) {
        // Ask user if he/she is sure
        var option = areYouSure($("#formBrand").attr("action"), $("#adminBrandName").val());
        if (option == false) {
            e.preventDefault();
        }
        else {
            window.location.reload();
        }
    });

    // Models
    $('#btnModelNew').click(function(e) {
        e.preventDefault()
        $('#formModel').show();

        // Assign brandId to Model Form
        $('#saveModelBrandIdHidden').val(arrayIds[0]);
    });
    $('#btnCancelModelNew').click(function(e) {
        e.preventDefault();
        // Hide
        $('#formModel').hide();
        $('#btnEditingModel').hide();
        // Show
        $('#btnModelNew').show();
        $('#btnModelFormSubmit').show();

        // Change action of form
        $("#formModel").attr("action", "/admin/saveModel");
    });
    $("#btnModelFormSubmit").click(function(e) {
        // Ask user if he/she is sure
        var option = areYouSure($("#formModel").attr("action"), $("#adminModelName").val());
        if (option == false) {
            e.preventDefault();
        }
        else {
            window.location.reload();
        }
    });
});

// --- Functions --- \\
// Reset variables
function resetVariables() {
    // Arrays
    arrayIds = [];

    // -- Hides -- \\
    // Forms
    $('#formPark').hide();
    $('#formUser').hide();
    $('#formVehicle').hide();
    $('#formBrand').hide();
    $('#formModel').hide();
    // Buttons
    $('#btnEditingPark').hide();
    $('#btnEditingUser').hide();
    $('#btnEditingVehicle').hide();
    $('#btnEditingBrand').hide();
    $('#btnEditingModel').hide();
    $('#btnModelNew').hide();
    $('#btnVehicleNew').hide();

    // -- Shows -- \\
    // Buttons
    $('#btnParkNew').show();
    $('#btnUserNew').show();
    $('#btnBrandNew').show();

    // -- Change actions of forms -- \\
    $("#formPark").attr("action", "/admin/savePark");
    $("#formUser").attr("action", "/admin/saveUser");
    $("#formVehicle").attr("action", "/admin/saveVehicle");
    $("#formBrand").attr("action", "/admin/saveBrand");
    $("#formModel").attr("action", "/admin/saveModel");

    // Tells the user to click on a brand to display the models
    listModels(undefined);
    // Tells the user to click on a user to display the vehicles
    listVehicles(undefined);

    console.log("Variables reset!");
}

// Checks if Arrays are populated by the database
function checkArrays() {
    if (arrayBrands.length >= 2 && arrayModels.length >= 2 && arrayParks.length >= 2 && arrayUsers.length >= 2 && arrayVehicles.length >= 2) {
        console.log("Arrays loaded!");

        // Tells the user to click on a brand to display the models
        listModels(undefined);
        // Tells the user to click on a user to display the vehicles
        listVehicles(undefined);
    }
}

// -- Fill in the lists -- \\
// Show a list with all the Parks
function listParks() {
    var result = "";
    result += '<table id="tableUsers" class="table table-striped table-hover table-light">';
    result += '<thead class="bg-green" style="color:white"><tr><th>Park</th><th>Latitude</th><th>Longitude</th><th></th></tr></thead>';
    result += '<tbody id="tableusersBody">';
    for (var i = 0; i < arrayParks.length; i++) {
        result += '<tr onclick="selectPark(this.id)" id="' + arrayParks[i]._id + '"><td>' + arrayParks[i].name + '</td><td>' + arrayParks[i].lat + '</td><td>' + arrayParks[i].lon + '</td><td class="table-bordered"><button onclick="btnEditPark(this.id)" id="' + i + '" type="button" style="margin-right: 10px" class="btn btn-primary "><i class="fas fa-edit"></i></button><button onclick="btnTrashPark(this.id)" id="' + i + '" type="button" style="margin-left: 10px" class="btn btn-danger"><i class="fas fa-trash"></i></button></td></tr>';
    };
    result += "</tbody></table>";

    // Associates the table to the div
    $("#targetParkList").html(result);
}

// Show a list with all the Users
function listUsers() {
    var result = "";
    result += '<table id="tableUsers" class="table table-striped table-hover table-light">';
    result += '<thead class="bg-green" style="color:white"><tr><th>Name</th><th>Email</th><th>Status</th><th></th></tr></thead>';
    result += '<tbody id="tableusersBody">';
    for (var i = 0; i < arrayUsers.length; i++) {
        // Turn boolean into nice information
        var status;
        if (arrayUsers[i].admin) {
            status = "Admin";
        }
        else {
            status = "User";
        }
        result += '<tr onclick="selectUser(this.id)" id="' + arrayUsers[i]._id + '"><td>' + arrayUsers[i].name + '</td><td>' + arrayUsers[i].email + '</td><td>' + status + '</td><td class="table-bordered"><button onclick="btnEditUser(this.id)" id="' + i + '" type="button" style="margin-right: 10px" class="btn btn-primary"><i class="fas fa-edit"></i></button><button onclick="btnTrashUser(this.id)" id="' + i + '" type="button" style="margin-left: 10px" class="btn btn-danger"><i class="fas fa-trash"></i></button></td></tr>';
    };
    result += "</tbody></table>";

    // Associates the table to the div
    $("#targetUsersList").html(result);
}

// Show a list with all the Users
function listUsersVehicle() {
    var result = "";
    result += '<table id="tableUsersVehicle" class="table table-striped table-hover table-light">';
    result += '<thead class="bg-green" style="color:white"><tr><th>Email</th></tr></thead>';
    result += '<tbody>';
    for (var i = 0; i < arrayUsers.length; i++) {
        // Turn boolean into nice information
        var status;
        if (arrayUsers[i].admin) {
            status = "Admin";
        }
        else {
            status = "User";
        }
        result += '<tr onclick="selectUserVehicle(this.id)" id="' + arrayUsers[i]._id + '"><td>' + arrayUsers[i].email + '</td></tr>';
    };
    result += "</tbody></table>";

    // Associates the table to the div
    $("#targetUserVehicleList").html(result);
}

// Show a list with all the Vehicles
function listVehicles(userId) {
    // Prepares a beautiful table to show a list of the brands
    var result = "";
    if (userId == undefined) {
        result += '<table id="tableModels" class="table table-hover table-light">';
        result += '<thead class="bg-green" style="color:white"><tr><th class="w-75">Name</th></tr></thead>';
        result += '<tbody id="tableModelsBody">';
        for (var i = 0; i < 2; i++) {
            if (i == 0) {
                result += '<tr><td>Select a User to display its Vehicles!</td></tr>';
            }
            else if (i == 1) {
                result += '<tr><td><---</td></tr>';
            }
        }
    }
    else {
        var userHasVehicle = false;

        result += '<table id="tableVehicles" class="table table-striped table-hover table-light">';
        result += '<thead class="bg-green" style="color:white"><tr><th>nPlate</th><th>User Id</th><th>Model Id</th><th>Fuel Type</th><th></th></tr></thead>';
        result += '<tbody id="tableVehiclesBody">';
        for (var i = 0; i < arrayVehicles.length; i++) {
            if (arrayVehicles[i].user == userId) {
                result += '<tr onclick="selectVehicle(this.id)" id="' + arrayVehicles[i]._id + '"><td>' + arrayVehicles[i].nPlate + '</td><td>' + arrayVehicles[i].user + '</td><td>' + arrayVehicles[i].model + '</td><td>' + arrayVehicles[i].fuelType + '</td><td class="table-bordered"><button onclick="btnEditVehicle(this.id)" id="' + i + '" type="button" style="margin-right: 10px" class="btn btn-primary"><i class="fas fa-edit"></i></button><button onclick="btnTrashVehicle(this.id)" id="' + i + '" type="button" style="margin-left: 10px" class="btn btn-danger"><i class="fas fa-trash"></i></button></td></tr>';
                userHasVehicle = true;
            }
        }
        if (userHasVehicle == false) {
            result += "<tr><td>This user doesn't have any Vehicles registered!</td></tr>";
        }
    }
    result += "</tbody></table>";

    // Associates the table to the div
    $("#targetVehiclesList").html(result);
}

// Show a list with all the Brands
function listBrands() {
    // Prepares a beautiful table to show a list of the Brands
    var result = "";
    result += '<table id="tableBrands" class="table table-striped table-hover table-light">';
    result += '<thead class="bg-green" style="color:white"><tr><th class="w-75">Name</th><th></th></tr></thead>';
    result += '<tbody id="tableBrandsBody">';
    for (var i = 0; i < arrayBrands.length; i++) {
        result += '<tr onclick="selectBrand(this.id)" id="' + arrayBrands[i]._id + '"><td>' + arrayBrands[i].name + '</td><td class="table-bordered"><button onclick="btnEditBrand(this.id)" id="' + i + '" type="button" style="margin-right: 10px" class="btn btn-primary"><i class="fas fa-edit"></i></button><button onclick="btnTrashBrand(this.id)" id="' + i + '" type="button" style="margin-left: 10px" class="btn btn-danger"><i class="fas fa-trash"></i></button></td></tr>';
    };
    result += "</tbody></table>";

    // Associates the table to the div
    $("#targetBrandList").html(result);
}

// Show a list with all the Models from a certain brand
function listModels(brandId) {
    // Prepares a beautiful table to show a list of the brands
    var result = "";
    if (brandId == undefined) {
        result += '<table id="tableModels" class="table table-hover table-light">';
        result += '<thead class="bg-green" style="color:white"><tr><th class="w-75">Name</th></tr></thead>';
        result += '<tbody id="tableModelsBody">';
        for (var i = 0; i < 2; i++) {
            if (i == 0) {
                result += '<tr><td>Select a Brand to display its Models!</td></tr>';
            }
            else if (i == 1) {
                result += '<tr><td><---</td></tr>';
            }
        }
    }
    else if (arrayModels.length != 0) {
        result += '<table id="tableModels" class="table table-striped table-hover table-light">';
        result += '<thead class="bg-green" style="color:white"><tr><th class="w-75">Name</th><th></th></tr></thead>';
        result += '<tbody id="tableModelsBody">';
        for (var i = 0; i < arrayModels.length; i++) {
            if (arrayModels[i].brand == brandId) {
                result += '<tr onclick="selectModel(this.id)" id="' + arrayModels[i]._id + '"><td>' + arrayModels[i].name + '</td><td class="table-bordered"><button onclick="btnEditModel(this.id)" id="' + i + '" type="button" style="margin-right: 10px" class="btn btn-primary"><i class="fas fa-edit"></i></button><button onclick="btnTrashModel(this.id)" id="' + i + '" type="button" style="margin-left: 10px" class="btn btn-danger"><i class="fas fa-trash"></i></button></td></tr>';
            }
            else if (arrayModels[0].name == "Error loading Models. Please refresh." || arrayBrands[0].name == "Error loading Brands. Please refresh.") {
                result += '<tr onclick="selectModel(this.id)" id="' + arrayModels[i]._id + '"><td>' + arrayModels[i].name + '</td><td class="table-bordered"><button onclick="btnEditModel(this.id)" id="' + i + '" type="button" style="margin-right: 10px" class="btn btn-primary"><i class="fas fa-edit"></i></button><button onclick="btnTrashModel(this.id)" id="' + i + '" type="button" style="margin-left: 10px" class="btn btn-danger "><i class="fas fa-trash"></i></button></td></tr>';
            }
        }
    }
    else {
        alert("Please wait until the database has loaded all the models... Try again in a bit.");
    }
    result += "</tbody></table>";

    // Associates the table to the div
    $("#targetModelList").html(result);
}

// -- When user clicks on a row -- \\
// When user clicks on a Park from the list
function selectPark(parkId) {
    // Set parkId
    arrayIds[0] = parkId;
    console.log(arrayIds);
}

// When user clicks on a User from the list
function selectUser(userId) {
    // Set userId
    arrayIds[0] = userId;
    console.log(arrayIds);
}

// When user clicks on a Vehicle from the list
function selectUserVehicle(userId) {
    // Set userId
    arrayIds[0] = userId;
    console.log(arrayIds);

    // Shows
    $('#btnVehicleNew').show();

    listVehicles(userId);
}

// When user clicks on a Vehicle from the list
function selectVehicle(vehicleId) {
    // Set vehicleId
    arrayIds[1] = vehicleId;
    console.log(arrayIds);
}

// When user clicks on a Brand from the list
function selectBrand(brandId) {
    // Set brandId
    arrayIds[0] = brandId;
    console.log(arrayIds);

    listModels(brandId);

    // Hides
    $('#formModel').hide();
    $('#btnEditingModel').hide();

    // Shows
    $('#btnModelNew').show();

    // Change actions of forms
    $("#formModel").attr("action", "/admin/saveModel");
}

// When user clicks on a model from the list
function selectModel(modelId) {
    // Set modelId
    arrayIds[1] = modelId;
    console.log(arrayIds);
};

// -- When user clicks on the Trash icon -- \\
// Park
function btnTrashPark(index) {
    // Ask user if he/she is sure
    var option = areYouSure("DELETE", arrayParks[index].name);
    if (option == true) {
        deletePark(arrayParks[index]._id);
        refreshPage("pLot-tab");
    }
}

// User
function btnTrashUser(index) {
    // Ask user if he/she is sure
    var option = areYouSure("DELETE", arrayUsers[index].name);
    if (option == true) {
        deleteUser(arrayUsers[index]._id);
        refreshPage("user-tab");
    }
}

// Vehicle
function btnTrashVehicle(index) {
    // Ask user if he/she is sure
    var option = areYouSure("DELETE", arrayVehicles[index].nPlate);
    if (option == true) {
        deleteVehicle(arrayVehicles[index]._id);
        refreshPage("vehicle-tab");
    }
}

// Brand
function btnTrashBrand(index) {
    // Ask user if he/she is sure
    var option = areYouSure("DELETE", arrayBrands[index].name);
    if (option == true) {
        deleteBrand(arrayBrands[index]._id);
        refreshPage("bm-tab");
    }
}

// Model
function btnTrashModel(index) {
    // Ask user if he/she is sure
    var option = areYouSure("DELETE", arrayModels[index].name);
    if (option == true) {
        deleteModel(arrayModels[index]._id);
        refreshPage("bm-tab");
    }
}

// -- When user clicks on the Edit icon -- \\
// Park
function btnEditPark(index) {
    // Change action of form
    $("#formPark").attr("action", "/admin/editPark");

    // Assign id to hidden input
    $('#editParkIdHidden').val(arrayParks[index]._id);

    // Hide
    $('#btnParkNew').hide();
    // Show
    $('#btnEditingPark').show();
    $('#formPark').show();

    // Fill form with Park data
    fillPark(index);
}

// User
function btnEditUser(index) {
    // Change action of form
    $("#formUser").attr("action", "/admin/editUser");

    // Assign id to hidden input
    $('#editUserIdHidden').val(arrayUsers[index]._id);

    // Hide
    $('#btnUserNew').hide();
    // Show
    $('#btnEditingUser').show();
    $('#formUser').show();

    // Fill form with Park data
    fillUser(index);
}

// Vehicle
function btnEditVehicle(index) {
    // Change action of form
    $("#formVehicle").attr("action", "/admin/editVehicle");

    // Assign id to hidden input
    $('#editVehicleIdHidden').val(arrayVehicles[index]._id);
    $('#saveVehicleUserIdHidden').val(arrayIds[0]);

    // Hide
    $('#btnVehicleNew').hide();
    // Show
    $('#btnEditingVehicle').show();
    $('#formVehicle').show();

    // Fill form with Vehicle data
    fillVehicle(index);
}

// Brand
function btnEditBrand(index) {
    // Change action of form
    $("#formBrand").attr("action", "/admin/editBrand");

    // Assign id to hidden input
    $('#editBrandIdHidden').val(arrayBrands[index]._id);

    // Hide
    $('#btnBrandNew').hide();
    // Show
    $('#btnEditingBrand').show();
    $('#formBrand').show();

    // Fill form with Park data
    fillBrand(index);
}

// Model
function btnEditModel(index) {
    // Change action of form
    $("#formModel").attr("action", "/admin/editModel");

    // Assign id to hidden input
    $('#editModelIdHidden').val(arrayModels[index]._id);
    $('#saveModelBrandIdHidden').val(arrayIds[0]);

    // Hide
    $('#btnModelNew').hide();
    // Show
    $('#btnEditingModel').show();
    $('#formModel').show();

    // Fill form with Park data
    fillModel(index);
}

// -- Fill the form -- \\
// Fill Park
function fillPark(index) {
    $('#adminParkName').val(arrayParks[index].name);
    $('#adminParkLat').val(arrayParks[index].lat);
    $('#adminParkLon').val(arrayParks[index].lon);
    $('#adminPlacesNormal').val(arrayParks[index].placesNormal);
    $('#adminPlacesDisabled').val(arrayParks[index].placesDisabled);
    $('#adminPlacesPregnant').val(arrayParks[index].placesPregnant);
};

// Fill User
function fillUser(index) {
    $('#adminUserName').val(arrayUsers[index].name);
    $('#adminUserEmail').val(arrayUsers[index].email);
    $('#adminUserPass').val(arrayUsers[index].password);
    $('#adminUserZip1').val(arrayUsers[index].postalCode);
    $('#adminUserAddress').val(arrayUsers[index].address);
    var string = arrayUsers[index].dateOfBirth;
    var substring = string.substring(0, 10);
    $('#adminUserBirth').val(substring);
    //$('#adminUserVehicle').val(arrayUsers[index].vehicles[0]._id); // VEICULOS AQUI
    if (arrayUsers[index].gender == "female") {
        $("#adminUserRadioFemale").prop("checked", true);
    }
    else if (arrayUsers[index].gender == "male") {
        $("#adminUserRadioMale").prop("checked", true);
    }
    else {
        $("#adminUserRadioOther").prop("checked", true);
    }
    if (arrayUsers[index].admin == true) {
        $("#defaultCheck1").prop("checked", true);
    }
    else {
        $("#defaultCheck1").prop("checked", false);
    }
};

// Fill Vehicle
function fillVehicle(index) {
    $('#adminVehicleNumberPLate').val(arrayVehicles[index].nPlate);
    $('#adminVehicleUserId').val(arrayVehicles[index].user);
    $('#adminVehicleModelId').val(arrayVehicles[index].model);
    $('#adminVehicleFuelType').val(arrayVehicles[index].fuelType);
};

// Fill Brand
function fillBrand(index) {
    $('#adminBrandName').val(arrayBrands[index].name);
};

// Fill Model
function fillModel(index) {
    $('#adminModelName').val(arrayModels[index].name);
    $('#adminBrandId').val(arrayIds[0]);
};

// Asks the user again before taking an action
function areYouSure(type, input) {
    if (type.indexOf("/") != -1) {
        type = type.substring(7, 11);
    }
    if (input != '') {
        var option = window.confirm("Hold on!\nYou're about to " + type + " " + input + "!\nAre you sure?");
        return option;
    }
}

// Refresh page
function refreshPage(tab) {
    window.location.reload();
    //loadNavTabs(tab);
}


/*// LoadTabs on certain Tag
function loadNavTabs(tab) {
    console.log(tab);
    var nome = tab.substring(0, tab.indexOf("-"));
    console.log(nome);
    var result = '';
    result += '<ul class="nav nav-tabs" id="myTab" role="tablist">';
    for (var i = 0; i < arrayTabs.length; i++) {
        result += '<li class="nav-item">';
        if (arrayTabs[i] == tab) {
            result += '<a class="nav-link active" id="' + arrayTabs[i] + '" data-toggle="tab" href="#' + nome + '" role="tab" aria-controls="' + nome + '" aria-selected="true">' + nome + '</a>';
        }
        else {
            // Fazer substring de cada nav
            nome = arrayTabs[i].substring(0, arrayTabs[i].indexOf("-"));
            result += '<a class="nav-link" id="' + arrayTabs[i] + '" data-toggle="tab" href="#' + nome + '" role="tab" aria-controls="' + nome + '" aria-selected="false">' + nome + '</a>'
        }
        result += '</li>';
    }
    result += '</ul>';
    console.log(result);

    $("#targetNavTabs").html(result);
}*/

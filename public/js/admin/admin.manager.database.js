// -- Load the arrays -- \\
// Get Parks for the list
function getParks(handleData) {
    console.log("Loading Parks...");

    $.ajax({
        type: 'POST',
        url: '/admin/getListParks',
        success: function(data) {
            handleData(data);
            console.log("Parks loaded!");
        },
        error: function(req, status, err) {
            console.log("Parks couldn't be loaded!");
            console.log("Error: " + err);
        }
    });
};

// Get Users for the list
function getUsers(handleData) {
    console.log("Loading Users...");

    $.ajax({
        type: 'POST',
        url: '/admin/getListUsers',
        success: function(data) {
            handleData(data);
            console.log("Users loaded!");
        },
        error: function(req, status, err) {
            console.log("Users couldn't be loaded!");
            console.log("Error: " + err);
        }
    });
};

// Get Vehicles for the list
function getVehicles(handleData) {
    console.log("Loading Vehicles...");

    $.ajax({
        type: 'POST',
        url: '/admin/getListVehicles',
        success: function(data) {
            handleData(data);
            console.log("Vehicles loaded!");
        },
        error: function(req, status, err) {
            console.log("Vehicles couldn't be loaded!");
            console.log("Error: " + err);
        }
    });
};

// Get Brands for the list
function getBrands(handleData) {
    console.log("Loading Brands...");

    $.ajax({
        type: 'POST',
        url: '/admin/getListBrand',
        success: function(data) {
            handleData(data);
            console.log("Brands loaded!");
        },
        error: function(req, status, err) {
            console.log("Brands couldn't be loaded!");
            console.log("Error: " + err);
        }
    });
};

// Get Models from the _id of the selected Brand for the list
function getModels(handleData) {
    console.log("Loading Models...");

    $.ajax({
        type: 'POST',
        url: '/admin/getListModel',
        success: function(data) {
            handleData(data);
            console.log("Models loaded!");
        },
        error: function(req, status, err) {
            console.log("Models couldn't be loaded!");
            console.log("Error: " + err);
        }
    });
};

// Delete chosen Park
function deletePark(parkId) {
    console.log("Deleting Park...");

    $.ajax({
        type: 'POST',
        url: '/admin/deletePark',
        data: {
            parkId: parkId
        }
    });
}

// Delete chosen User
function deleteUser(userId) {
    console.log("Deleting User...");

    $.ajax({
        type: 'POST',
        url: '/admin/deleteUser',
        data: {
            userId: userId
        }
    });
}

// Delete chosen Vehicle
function deleteVehicle(vehicleId) {
    console.log("Deleting Vehicle...");

    $.ajax({
        type: 'POST',
        url: '/admin/deleteVehicle',
        data: {
            vehicleId: vehicleId
        }
    });
}

// Delete chosen Brand
function deleteBrand(brandId) {
    console.log("Deleting Brand...");

    $.ajax({
        type: 'POST',
        url: '/admin/deleteBrand',
        data: {
            brandId: brandId
        }
    });
}

// Delete chosen Model
function deleteModel(modelId) {
    console.log("Deleting Model...");

    $.ajax({
        type: 'POST',
        url: '/admin/deleteModel',
        data: {
            modelId: modelId
        }
    });
}

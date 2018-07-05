// Arrays
var arrayUser = {};

$(document).ready(function() {
    // Click events
    $('#btnStart').click(function(e) {
        if (arrayUser.vehicles.length == 0) {
            alert("You must register a vehicle in order to get full access to the app!");
        }
        else {
            window.location.href = '/parksearch';
        }
    });
    $('#btnCheckData').click(function() {
        window.location.href = '/parkcharts';
    });
    // /profile
    document.addEventListener('click', callProfile);

    getUser();
})

function getUser() {
    $.ajax({
        type: 'POST',
        url: '/getUser',
        success: function(user) {
            arrayUser = user;
            getBrandPic(user);

            if (user.parked.length > 0) {
                $("#rowImg").append('<button type="button" name="' + user._id + '" onclick="leavePark(this.name)" id="parkSituation" style="z-index: 98; font-size: 3.5vw"><i class="fas fa-times"></i> Leave Park</button>')
                $("#btnStart").prop('disabled', true);
            }
            $("#imgUser").attr("src", user.pic);
            if (user.vehicles <= 0) {
                $("#imgCar").attr("src", "img/questionmark.jpg");
            }
            $("#userName").append(user.name)
        }
    });
}

function getBrandPic(user) {
    $.ajax({
        type: 'POST',
        url: '/getBrandPic',
        data: { user: user },
        success: function(brand) {
            $("#imgCar").attr("src", brand.pic);
        }
    });
}

function leavePark(userId) {
    console.log(userId);

    $.ajax({
        type: 'POST',
        url: '/leavePark',
        data: { userId: userId },
        success: function(data) {
            $("#btnStart").prop('disabled', false);
        }
    });
    window.location.reload()
}

// click on image to redirect to profile
function callProfile() {
    var offsets = $('#imgUser').offset();
    var top = offsets.top;
    var left = offsets.left;
    var height = $('#imgUser').height();
    var width = $('#imgUser').width()

    var x = event.clientX; // Get the horizontal coordinate
    var y = event.clientY; // Get the vertical coordinate

    if (x >= left && x <= left + width && y >= top && y <= top + height) {
        window.location.href = '/profile';
    }
}

// Arrays
var arrayMarkers = []
var arrayMaps = []
var arrayParks = []
var newMarker = [];

// Variables mapa
var bounds, myLatlng, mapOptions, map, pos, marker, destino;
var directionsService
var directionsDisplay
var attrChecked = 'checked';
var attrDisabledNormal = '';
var attrDisabledPregnant = '';
var attrDisabledDisabled = '';

// Coordenadas da esmad: 41.3667916,-8.7383636
var esmad = {
    lat: 41.3667916,
    lng: -8.7383636
};
var userLocation = {
    lat: 41.2002323,
    lng: -8.6931127
}
var destination = {}

// When document is ready
$(document).ready(function() {
    // Saves Parks to arrayParks
    saveMarkers();

    // Default states on load
    $("#btnArrived").hide();

    $("#backMain").click(function(e) {
        e.preventDefault();
        window.location.replace('/home');
    });
});

// Onlick events
/*$("#btnDirecao").click(function () {
    
});*/

// Saves Parks to arrayParks
function saveMarkers() {
    $.ajax({
        type: 'POST',
        url: '/admin/getListParks',
        success: function(data) {
            // Gravar parques no arrayParks
            arrayParks = data;
            //console.log(arrayParks);

            // Display markers
            showMarkers();
        }
    });
}

// --- Functions --- \\
// Initiate map
function initMap() {
    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;
    bounds = new google.maps.LatLngBounds();
    myLatlng = new google.maps.LatLng(41.3645647, -8.7417842); // A
    mapOptions = {
        mapTypeId: 'roadmap',
        zoom: 16, // The initial zoom level when your map loads (0-20)
        center: myLatlng, // Centre the Map to our coordinates variable
        scrollwheel: false, // Disable Mouse Scroll zooming (Essential for responsive sites!)
        // All of the below are set to true by default, so simply remove if set to true:
        panControl: false, // Set to false to disable
        mapTypeControl: false, // Disable Map/Satellite switch
        scaleControl: false, // Set to false to hide scale
        streetViewControl: false, // Set to disable to hide street view
        overviewMapControl: false, // Set to false to remove overview control
        rotateControl: false // Set to false to disable rotate control
    };

    // Display a map on the page
    map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
    console.log("Map loaded!");

    directionsDisplay.setMap(map);
}


/*
    //GET USER CURRENT LOCATION
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function() {
        });
    }
    else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }
    */

// Shows markers on the map
function showMarkers() {
    // InfoWindow
    var infoWindow = new google.maps.InfoWindow();

    // For loop through arrayParks
    for (var i = 0; i < arrayParks.length; i++) {
        pos = new google.maps.LatLng(arrayParks[i].lat, arrayParks[i].lon);
        bounds.extend(pos);

        // New marker
        marker = new google.maps.Marker({
            position: pos,
            map: map,
            icon: "favicon/favicon-32x32.png",
            title: arrayParks[i].name
        });

        console.log("---");
        console.log("Creating infoWindow for " + marker.title);
        // Event listener + infoWindow
        var content = createInfoWindow(i);
        marker.content = content;
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(this.content);
            infoWindow.open(this.getMap(), this);
        });

        console.log("Created marker " + marker.title);
    }
}

// Look for parks
function lookForPark() {
    var parkName = $("#lookForPark").val()

    $.ajax({
        type: 'POST',
        url: '/lookForPark',
        data: { parkName: parkName },
        success: function(data) {
            // Prepares a beautiful table to show a list of the users
            //console.log(data[0].lat)
            var center = {
                lat: data[0].lat,
                lng: data[0].lon
            };
            mapProp = {
                center: new google.maps.LatLng(center),
                zoom: 15
            };
            map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

            //markers()
        }
    });
}

// Creates the infoWidnows for each marker
function createInfoWindow(index) {
    // reset to defaults
    attrChecked = 'checked';
    attrDisabledNormal = '';
    attrDisabledPregnant = '';
    attrDisabledDisabled = '';

    if (arrayParks[index].placesFreeNormal <= 0) {
        //$("#placesNormal").attr('disabled', true);
        attrChecked = '';
        attrDisabledNormal = "disabled";
        console.log("Normal: Disabled");
    }
    if (arrayParks[index].placesFreePregnant <= 0) {
        //$("#placesPregnant").attr('disabled', true);
        attrDisabledPregnant = "disabled";
        console.log("Pregnant: Disabled");
    }
    if (arrayParks[index].placesFreeDisabled <= 0) {
        //$("#placesDisabled").attr('disabled', true);
        attrDisabledDisabled = "disabled";
        console.log("Disabled: Disabled");
    }

    var result = '';
    result += '<div class="container">';
    result += '<h5 style="color:#A6D785;">' + arrayParks[index].name + '</h5>';
    result += '<form action="javascript:direcao(' + arrayParks[index].lat + ', ' + arrayParks[index].lon + ',' + index + ');" method="POST">';
    result += '<div class="form-check">';
    result += '<input class="form-check-input" type="radio" name="placeType" id="placesNormal" value="normal" ' + attrChecked + ' ' + attrDisabledNormal + '>';
    result += '<label class="form-check-label" for="placesNormal" disabled>Normal [' + arrayParks[index].placesFreeNormal + '/' + arrayParks[index].placesNormal + ']</label>';
    result += '</div>';
    result += '<div class="form-check">';
    result += '<input class="form-check-input" type="radio" name="placeType" id="placesPregnant" value="pregnant" ' + attrDisabledPregnant + '>';
    result += '<label class="form-check-label" for="placesPregnant">Pregnant [' + arrayParks[index].placesFreePregnant + '/' + arrayParks[index].placesPregnant + ']</label>';
    result += '</div>';
    result += '<div class="form-check disabled">';
    result += '<input class="form-check-input" type="radio" name="placeType" id="placesDisabled" value="disabled" ' + attrDisabledDisabled + '>';
    result += '<label class="form-check-label" for="placesDisabled">Disabled [' + arrayParks[index].placesFreeDisabled + '/' + arrayParks[index].placesDisabled + ']</label>';
    result += '</div>';
    result += '<div>';
    result += '<br><button type="submit" class="btn bg-green txt-white">Confirm</button>';
    result += '</div>';
    result += '</form>';
    result += '</div>';

    //console.log(attrChecked + ', ' + attrDisabled);

    // Return
    return result;
}

// Mostrar como chegar ao parque
function direcao(latitude, longitude, index) {
    // Books a place on specified park
    var placeType = $('input[name=placeType]:checked').val();
    bookPlace(arrayParks[index]._id, placeType);

    console.log("---");
    console.log("Park Latitude: " + latitude);
    console.log("Park Longitude: " + longitude);

    destino = latitude + "," + longitude;

    // Calcula o caminho para o parque
    calculateAndDisplayRoute(directionsService, directionsDisplay, destino);
}

// Calcula o caminho para o parque
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var origem = userLocation.lat + "," + userLocation.lng;
    directionsService.route({
        origin: origem,
        destination: destino,
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            //console.log(response);
            directionsDisplay.setDirections(response);
        }
        else {
            window.alert('Directions request failed due to ' + status);
        }
    });

    $("#btnSearch").hide();
    $("#btnArrived").show();
}

// Book a place on a specified park
function bookPlace(parkId, placeType) {
    $.ajax({
        type: 'POST',
        url: '/bookPlace',
        data: {
            parkId: parkId,
            placeType: placeType
        },
        success: function(data) {
            console.log("Success! Booked a place.");
        }
    });
}

// Cancel the booked place
function leavePark() {
    window.location.replace('/home');
    $.ajax({
        type: 'POST',
        url: '/leavePark',
        success: function(data) {
            console.log("Success! Left Park.");
        }
    });
};

// -- Testes -- \\
/*
    // rip pq temos de usar postman. Nearbysearch?
    $.ajax({
        type: 'POST',
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyAbxJHkznPg8GMTqHzmv1fdgd8eFMus7W8',
        success: function(data) {
            console.log(data);
        }
    });

}
*/

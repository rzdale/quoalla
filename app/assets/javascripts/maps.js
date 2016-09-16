var map;
var pos;
var shelter;
var food;
var wifi;
var charging;
var restroom;
var health

function initMap() {
	console.log("callback hit!")
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.878114,lng: -87.629798},
    zoom: 18
  });
// var lat = 41.831064;
// var lon = -87.648322;
// var home = {lat: 41.831064, lng: -87.648322};
// var marker = new google.maps.Marker({
//   position: home,
//   map: map,
//   title: 'Home!'
// });

  var infoWindow = new google.maps.InfoWindow({
      content: "Hey!"
    });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  }

  // google.maps.event.addListener(map, 'click', function( event ) {
  //   // alert( "Latitude: "+event.latLng.lat()+" "+", longitude: "+event.latLng.lng() );
  //   var marker = new google.maps.Marker({
  //     position: {lat: event.latLng.lat(), lng: event.latLng.lng()},
  //     map: map,
  //     draggable: true,
  //     title: 'This is a marker!'
  //   });

  // });

  $("#new-marker").on('submit', function(e) {
    e.preventDefault();
    var $form = $(this);
    var image;
    var spotType = $('#spot_type').val();
    console.log(spotType);
    switch (spotType) {
      case "shelter":
        image = "http://jellyfishpi.com/images/shelterPin.png";
        break;
      case "food":
        image = "http://jellyfishpi.com/images/foodPin.png";
        break;
      case "restroom":
        image = "http://jellyfishpi.com/images/shelterPin.png";
        break;
      case "shelter":
        image = "http://jellyfishpi.com/images/wifiPin.png";
        break;
      case "shelter":
        image = "http://jellyfishpi.com/images/chargingPin.png";
        break;
      case "":
        image = "http://jellyfishpi.com/images/healthPin.png";
        break;
    
      default:
        image = "http://jellyfishpi.com/images/shelterPin.png";
        break;
    }
    console.log("form clicked");
    console.log($('#title').val());
    var marker = new google.maps.Marker({
      position: pos,
      map: map,
      draggable: true,
      title: $('#title').val(),
      icon: image
    });
  });
}



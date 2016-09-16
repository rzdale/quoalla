var map;
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
    var pos = {
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
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
infoWindow.setPosition(pos);
infoWindow.setContent(browserHasGeolocation ?
                      'Error: The Geolocation service failed.' :
                      'Error: Your browser doesn\'t support geolocation.');
}




// Try HTML5 geolocation.



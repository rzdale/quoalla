// var home = {lat: 41.831064, lng: -87.648322};
// var marker = new google.maps.Marker({
//   position: home,
//   map: map,
//   title: 'Home!'
// });

function loadMarkers(){

  $.ajax({
      type: "GET",
      url: "/spots",
      dataType: "json",
      success: function(response){
        for (var i = 0; i < response.length; i++) {

      var image;
      switch (response[i].spot_type) {
        case "shelter":
          image = "http://jellyfishpi.com/images/shelterPin.png";
          break;
        case "food":
          image = "http://jellyfishpi.com/images/foodPin.png";
          break;
        case "restroom":
          image = "http://jellyfishpi.com/images/shelterPin.png";
          break;
        case "wifi":
          image = "http://jellyfishpi.com/images/wifiPin.png";
          break;
        case "charging":
          image = "http://jellyfishpi.com/images/chargingPin.png";
          break;
        case "":
          image = "http://jellyfishpi.com/images/healthPin.png";
          break;
        default:
          image = "http://jellyfishpi.com/images/shelterPin.png";
          break;
      }

        var home = {lat: parseFloat(response[i].latitude), lng: parseFloat(response[i].longitude)};
        var marker = new google.maps.Marker({
            position: home,
            map: map,
            title: response[i].name,
            icon: image
          });

        }
      }
  });

}












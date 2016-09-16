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

        var home = {lat: parseFloat(response[i].latitude), lng: parseFloat(response[i].longitude)};
        var marker = new google.maps.Marker({
            position: home,
            map: map,
            title: response[i].name
          });

        }
      }
  });

}












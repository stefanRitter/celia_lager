var geocoder;
var map;

function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(52.638917, -0.864622);
  var mapOptions = {
    zoom: 7,
    center: latlng
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var ctaLayer = new google.maps.KmlLayer({
    url: 'https://maps.google.com/maps/ms?ie=UTF8&hl=en&oe=UTF8&msa=0&msid=202716945335560966128.0004cce3230ba2281e3b3&ll=52.638917,-0.864622&spn=3.640448,4.318534&t=m&output=kml'
  });
  ctaLayer.setMap(map);
}

function codeAddress() {
  var address = document.getElementById('address').value;
  
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      map.setZoom(15);
      
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

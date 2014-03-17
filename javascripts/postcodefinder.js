var geocoder;
var map;

function initialize() {
  geocoder = new google.maps.Geocoder();
}

function codeAddress() {
  var address = document.getElementById('address').value + ', UK';
  
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var url = 'https://maps.google.com/maps/ms?ie=UTF8&amp;hl=en&amp;oe=UTF8&amp;msa=0&amp;' +
                'msid=202716945335560966128.0004cce3230ba2281e3b3&amp;ll=' +
                results[0].geometry.location.lat() + ',' +
                results[0].geometry.location.lng() +
                '&amp;z=14&amp;t=m&amp;output=embed';

      var iframe = $('<iframe width="100%" height="100%" frameborder="0" scrolling="no" ' +
        'marginheight="0" marginwidth="0" src=' +
        url + ' ></iframe>');

      var container = $('#mapIframe');
      container.empty().append(iframe);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

var map;
function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('mapa'), {
          center: {lat: -33.47302199866159, lng: -70.62983129999998},
          scrollwheel: false,
          zoom: 5
        });
 }

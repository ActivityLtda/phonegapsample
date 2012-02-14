/* ---------------------------------------------------------------------------
  Developed by Servicios Avanzados para las Instituciones S.L. (VIAVANSI)
  Contact: comercial@viavansi.com
  http://www.viavansi.com

  Encoding: UTF-8
  Author:   Juan G. Hurtado
  e-Mail:   jghurtado@viavansi.com
--------------------------------------------------------------------------- */

/* =PAGE EVENTS
--------------------------------------------------------------------------- */
(function() {
  $('#maps').bind('pagebeforeshow', function() {
    var $page = $(this);
    var $map = $page.find('#map');

    $map.gmap({
      'overviewMapControl' : false,
      'streetViewControl' : false,
      'mapTypeControl' : false,
      'zoomControl' : true,
      'zoomControlOptions' : {
        'position' : google.maps.ControlPosition.TOP_LEFT
      }
    }).bind('init', function(event, map) {
      // 1.- Put default markers
      var json = {
        "markers": [
        {
          "latitude":"37.373974",
          "longitude":"-6.044954",
          "title":"Sevilla",
          "content":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "latitude":"37.38264",
          "longitude":"-5.996295",
          "title":"Tomares",
          "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
        }
      ]};

      $.each(json.markers, function(i, marker) {
        $map.gmap('addMarker', {
          'position': marker.latitude +','+ marker.longitude,
          'bounds': true
        }).click(function() {
          $map.gmap('openInfoWindow', { 'content': marker.content }, this);
        });
      });

      // 2.- Add click support for adding markers
      $(map).click( function(event) {
          $map.gmap('addMarker', {
            'position': event.latLng,
            'draggable': true,
            'bounds': false
          });
        });
    });
  });
})();
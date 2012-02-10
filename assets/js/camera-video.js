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
  $('#camera-video').bind('pageinit', function() {
    var $page       = $(this);
    var $shootvideo = $page.find('#shoot-video');
    var $uri        = $page.find('#uri');

    /* =|Shoot video click
    ----------------------------------------- */
    $shootvideo.bind('click', function(e) {
      navigator.device.capture.captureVideo(function(files) {
        var i, len;
        for (i = 0, len = files.length; i < len; i += 1) {
          var path = files[i].fullPath;

          $uri.text(path);
          $page.find('source').attr('src', 'file://'+ path);

          if (device.name.match(/iPhone|iPad/)) {
            $page.find('video').attr('src', 'file://'+ path);
          }
        }

        $page.find('video').show();
      }, shootError);

      e.preventDefault();
    });
  });

  /* =|shootError(message)
   *  - message (String): Error message
  --------------------------------------------------------------------------- */
  function shootError(message) {
    navigator.notification.alert(message);
  }
})();
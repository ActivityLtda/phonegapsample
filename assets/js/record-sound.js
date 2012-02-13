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
  $('#record-sound').bind('pagebeforeshow', function() {
    var $page        = $(this);
    var $recordaudio = $page.find('#record-audio');
    var $uri         = $page.find('#uri');

    /* =|Shoot video click
    ----------------------------------------- */
    $recordaudio.bind('click', function(e) {
      navigator.device.capture.captureAudio(function(files) {
        var i, len;
        for (i = 0, len = files.length; i < len; i += 1) {
          var path = files[i].fullPath;

          $uri.text(path);
          $page.find('source').attr('src', 'file://'+ path);

          if (device.platform.match(/iPhone|iPad/)) {
            $page.find('audio').attr('src', 'file://'+ path);
            $page.find('source').attr('type', 'audio/wav');
          }
        }

        $page.find('#audio-wrapper').show();
      }, recordError);

      e.preventDefault();
    });
  });

  /* =|recordError(message)
   *  - message (String): Error message
  --------------------------------------------------------------------------- */
  function recordError(message) {
    navigator.notification.alert(message);
  }
})();
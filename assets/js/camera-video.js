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
    var $video      = $page.find('#video');
    var $source     = $page.find('#source');

    /* =|Shoot video click
    ----------------------------------------- */
    $shootvideo.bind('click', function(e) {
      navigator.device.capture.captureVideo(function(files) {
        shootSuccess($video, $source, files);
      }, shootError);

      e.preventDefault();
    });

    /* =|Video click
    ----------------------------------------- */
    $video.bind('click', function() {
      jQuery(this)[0].play();
      e.preventDefault();
    });
  });

  /* =|shootSuccess($video, $source, files)
   *  - $video (jQuery): VIDEO element to put the video on
   *  - $source (jQuery): TEXTAREA element to put the video raw data on
   *  - files (Array): Array of videos
  --------------------------------------------------------------------------- */
  function shootSuccess($video, $source, files) {
    var i, len;
    for (i = 0, len = files.length; i < len; i += 1) {
      $video.attr('src', files[i].fullPath)
        .css({
          width : '100%'
        }).show();

      $source.text(files[i].fullPath);
    }
  }

  /* =|shootError(message)
   *  - message (String): Error message
  --------------------------------------------------------------------------- */
  function shootError(message) {
    navigator.notification.alert(message);
  }
})();
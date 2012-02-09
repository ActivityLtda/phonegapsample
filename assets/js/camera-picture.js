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
  $('#camera-picture').bind('pageinit', function(event) {
    var $page = $(this);
    var $takepicture         = $page.find('#take-picture');
    var $takeeditablepicture = $page.find('#take-editable-picture');
    var $fromlibrary         = $page.find('#from-library');
    var $fromalbum           = $page.find('#from-album');
    var $picture             = $page.find('#picture');
    var $source              = $page.find('#source');
    var pictureQuality       = 25;

    /* =|Take picture click
    ----------------------------------------- */
    $takepicture.bind('click', function(e) {
      navigator.camera.getPicture(function(imageSource) {
        pictureSuccess($picture, $source, imageSource);
      }, pictureFail, {
        destinationType : Camera.DestinationType.DATA_URL, // Use FILE_URI for local file URI
        quality: pictureQuality
      });

      e.preventDefault();
    });

    /* =|Take editable picture click
    ----------------------------------------- */
    $takeeditablepicture.bind('click', function(e) {
      navigator.camera.getPicture(function(imageSource) {
        pictureSuccess($picture, $source, imageSource);
      }, pictureFail, {
        allowEdit: true,
        destinationType : Camera.DestinationType.DATA_URL, // Use FILE_URI for local file URI
        quality: pictureQuality
      });

      e.preventDefault();
    });

    /* =|Choose from library click
    ----------------------------------------- */
    $fromlibrary.bind('click', function(e) {
      navigator.camera.getPicture(function(imageSource) {
        pictureSuccess($picture, $source, imageSource);
      }, pictureFail, {
        destinationType : Camera.DestinationType.DATA_URL, // Use FILE_URI for local file URI
        quality: pictureQuality,
        sourceType : navigator.camera.PictureSourceType.PHOTOLIBRARY
      });

      e.preventDefault();
    });

    /* =|Choose from album click
    ----------------------------------------- */
    $fromalbum.bind('click', function(e) {
      navigator.camera.getPicture(function(imageSource) {
        pictureSuccess($picture, $source, imageSource);
      }, pictureFail, {
        destinationType : Camera.DestinationType.DATA_URL, // Use FILE_URI for local file URI
        quality: pictureQuality,
        sourceType : navigator.camera.PictureSourceType.SAVEDPHOTOALBUM
      });

      e.preventDefault();
    });
  });

  /* =|pictureSuccess(image)
   *  - $picture (jQuery): IMG element to put the picture on
   *  - $source (jQuery): TEXTAREA element to put the picture source on
   *  - imageSource (String): URI or base64 data of the taken picture
  --------------------------------------------------------------------------- */
  function pictureSuccess($picture, $source, imageSource) {
    $picture.attr('src', 'data:image/jpeg;base64,'+imageSource)
      .css({
        width : '100%'
      }).show();

    $source.text(imageSource);
  }

  /* =|pictureFail(message)
   *  - message (String): Error message
  --------------------------------------------------------------------------- */
  function pictureFail(message) {
    navigator.notification.alert(message);
  }
})();
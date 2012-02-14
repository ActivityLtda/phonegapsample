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
  $('#index').bind('pageinit', function(event) {
    var $page = $(this);

    /* =|Click on Twitter and Facebook links
    ----------------------------------------- */
    $page.find('#twitter, #facebook').bind('click', function(e) {
      app.openExternalLink($(this).attr('href'));

      e.preventDefault();
    });
  });
})();
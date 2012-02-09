/* ---------------------------------------------------------------------------
  Developed by Servicios Avanzados para las Instituciones S.L. (VIAVANSI)
  Contact: comercial@viavansi.com
  http://www.viavansi.com

  Encoding: UTF-8
  Author:   Juan G. Hurtado
  e-Mail:   jghurtado@viavansi.com
--------------------------------------------------------------------------- */

/* =GLOBALS
--------------------------------------------------------------------------- */

$(function() {

  /* =|Global jQuery Mobile config
  ----------------------------------------- */
  document.addEventListener('deviceready', function() {
    // Auto show "back" button on headers
    $.mobile.page.prototype.options.addBackBtn = true;

    // Turn off page cache (it quickly fills browser memory)
    $.mobile.page.prototype.options.domCache = false;
  },false);

  /* =|Remove hidden pages
  ----------------------------------------- */
  $(document).bind('pagehide', function(event) {
    $(event.target).remove();
  });
});
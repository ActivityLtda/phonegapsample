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
  $('#charts').bind('pageinit', function(event) {
    var $page = $(this);

    //
    //     var r = Raphael("chart");
    //
    //     pie = r.piechart(
    //       160, 160, 100,
    //       [55, 20, 13, 32, 5, 1, 2, 10],
    //       {
    //         legend: [55, 20, 13, 32, 5, 1, 2, 10],
    //         legendpos: "west"
    //       }
    //     );

    var pie2 = new RGraph.Pie('pie2', [12,29,45,17,7]); // Create the pie object
    pie2.Set('chart.gutter.left', 45);
    pie2.Set('chart.colors', ['red', 'pink', '#6f6', 'blue', 'yellow']);
    pie2.Set('chart.key', ['John (2%)', 'Richard (29%)', 'Fred (45%)', 'Brian (17%)', 'Peter (7%)']);
    pie2.Set('chart.key.background', 'rgba(255,255,255,.5)');
    pie2.Set('chart.strokestyle', '#555');
    pie2.Set('chart.linewidth', 1);
    pie2.Set('chart.shadow', false);

    pie2.Draw();

    var bar1 = new RGraph.Bar('bar1', [[50,75],[32, 44],[61, 56],[91, 81],[92, 8],[34, 57],[56, 62],[55, 45],[36, 12],[44, 56],[51, 66],[68, 88]]);
    bar1.Set('chart.background.barcolor1', 'white');
    bar1.Set('chart.background.barcolor2', 'white');
    bar1.Set('chart.labels', ['E','F','M','A','M','J','J','A','S','O','N','D']);
    bar1.Set('chart.key', ['John', 'Bob']);
    bar1.Set('chart.key.position.y', 5);
    bar1.Set('chart.key.position', 'gutter');
    bar1.Set('chart.key.background', 'rgb(255,255,255)');
    bar1.Set('chart.colors', ['blue', 'green']);
    bar1.Set('chart.shadow', false);
    bar1.Set('chart.strokestyle', '#555');
    bar1.Draw();
  });
})();
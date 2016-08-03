var Chart = require('chart.js/src/chart.js')
var $ = require('jquery');

$(document).ready(function(){
  alert('funciona');

  var ctxLine = document.getElementById("grafico").getContext("2d");
  var dataLine = {
    labels: ['Em reais', 'Em KW/h'],
    datasets: [
    {
      label: "Gráfico Diario Total",
      fillColor: "rgba(36,68,174,0.65)",
      strokeColor: "rgba(228,18,18,0.7)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [5.43,3.76]
    },
    ]
  };
  window.myBar = new Chart(ctxLine).Bar(dataLine, {responsive: true});

  
});
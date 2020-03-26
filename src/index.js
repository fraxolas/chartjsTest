import Chart from "chart.js";
var test = ['Outubro', 'Novembro', 'Dezembro', 'Janeiro', 'Fevereiro', 'Março', 'Abril'];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: [
      'Apoio Financeiro 1',
      'Estudo prévio',
      'Execução',
      'Negociação de emp - fase 1'
    ],
    datasets: [
      {
        pointStyle: 'line',
        label: 'Progresso da fase',
        data: [[2,3],[2,3]],
        backgroundColor: 'rgba(158, 158, 158, 1)',
        borderDash: [15, 4],
        borderColor: 'rgba(158, 158, 158, 1)'
      },
      {
        pointStyle: 'line',
        label: 'Prorrogação',
        data: [[2,3],[2,3]],
        backgroundColor: 'rgba(235, 66, 47, 1)',
        borderDash: [15, 4],
        borderColor: 'rgba(235, 66, 47, 1)'
      },
      {
        pointStyle: 'line',
        label: 'Antecipações',
        data: [[2,3],[2,3]],
        backgroundColor: 'rgba(0, 200, 180, 1)',
        borderDash: [15, 4],
        borderColor: 'rgba(0, 200, 180, 1)'
      },
      {
        pointStyle: 'line',
        label: 'Duração contratual',
        data: [
          [200,3],
          [2,3]
        ],
        backgroundColor: 'rgba(0, 0, 0, 1)',
        borderDash: [15, 4],
        borderColor: 'rgba(0, 0, 0, 1)'
      },
    ]
  },
  options: {
    legend:{
      position: 'bottom',
      labels: {
        padding: 24,
        usePointStyle: true,
      }
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 1,
            max: 5,
            stepSize: 1,
            suggestedMin: 1,
            suggestedMax: 5.5,
              callback: function(value, index, values) {
                return test[value];
              },
            fontColor: '#00000'
          },
          gridLines: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: '#00000'
          },
          gridLines: {
            display: false
          },
          barPercentage: 0.2
        }
      ]
    },
  }
});

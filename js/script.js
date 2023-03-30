document.addEventListener('DOMContentLoaded', function () {
  Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
      return {
        radialGradient: {
          cx: 0.5,
          cy: 0.3,
          r: 0.7,
        },
        stops: [
          [0, color],
          [1, Highcharts.color(color).brighten(-0.3).get('rgb')], // darken
        ],
      }
    }),
  })
  Highcharts.chart('container', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      backgroundColor: '#292C33',
      type: 'pie',
    },
    title: {
      text: 'Top 10 US State Populations per January 2023',
      style: {
        color: 'white',
      },
      align: 'center',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          connectorColor: 'silver',
        },
      },
    },
    series: [
      {
        name: 'Share',
        data: [
          { name: 'Other 40 States', y: 46.02 },
          { name: 'California', y: 11.86 },
          { name: 'Texas', y: 8.95 },
          { name: 'Florida', y: 6.6 },
          { name: 'New York', y: 6.03 },
          { name: 'Pennsylvania', y: 3.86 },
          { name: 'Illinios', y: 3.78 },
          { name: 'Ohio', y: 3.5 },
          { name: 'Georgia', y: 3.25 },
          { name: 'North Carolina', y: 3.16 },
          { name: 'Michigan', y: 2.99 },
        ],
      },
    ],
  })
})

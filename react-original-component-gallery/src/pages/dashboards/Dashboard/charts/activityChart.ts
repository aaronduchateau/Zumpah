import echarts from 'echarts';

export default {
  color: ['#f741b5'],
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  xAxis: {
    boundaryGap: false,
    show: true,
    type: 'category',
    data: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
  },
  yAxis: {
    show: false
  },
  tooltip: {
    trigger: 'axis'
  },
  series: [
    {
      name: 'Activity',
      type: 'line',
      data: [180, 200, 330, 200, 360, 180, 270, 190],
      smooth: true,
      symbol: 'none',
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(247,86,189,0.2)'
            },
            {
              offset: 0.6,
              color: 'rgba(242,142,206,0.2)'
            },
            {
              offset: 1,
              color: 'rgba(249,227,241,0.2)'
            }
          ])
        }
      },
      markLine: {
        symbol: ['emptyCircle'],
        itemStyle: {
          normal: {
            color: '#d69f9f',
            lineStyle: {
              type: 'solid'
            }
          }
        },
        data: [
          [{ xAxis: '12:00', yAxis: 50 }, { xAxis: '12:00', yAxis: 300 }],
          [{ xAxis: '13:00', yAxis: 50 }, { xAxis: '13:00', yAxis: 300 }],
          [{ xAxis: '14:00', yAxis: 50 }, { xAxis: '14:00', yAxis: 300 }],
          [{ xAxis: '15:00', yAxis: 50 }, { xAxis: '15:00', yAxis: 300 }],
          [{ xAxis: '16:00', yAxis: 50 }, { xAxis: '16:00', yAxis: 300 }],
          [{ xAxis: '17:00', yAxis: 50 }, { xAxis: '17:00', yAxis: 300 }]
        ]
      }
    }
  ]
};

export default {
  color: ['#2fa7ff'],
  grid: {
    left: 50,
    right: 0,
    top: 10,
    bottom: 20
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#2fa7ff'
        }
      },
      data: [
        '5th',
        '6th',
        '7th',
        '8th',
        '9th',
        '10th',
        '11th',
        '12th',
        '13th',
        '14th',
        '15th',
        '16th',
        '17th'
      ]
    }
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#c5c4c2'
        }
      },
      axisLabel: {
        formatter: '${value} K'
      }
    }
  ],
  series: [
    {
      name: 'Revenue',
      type: 'line',
      smooth: true,
      showAllSymbol: true,
      symbolSize: 12,
      data: [0.9, 1.2, 2.1, 2.3, 2, 1.9, 2.1, 2.4, 1.7, 1.2, 0.8, 1, 1.4]
    }
  ]
};

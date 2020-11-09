export default {
  color: ['#3640f9', '#99dced'],
  grid: {
    left: 22,
    right: 20,
    top: 20,
    bottom: 20
  },
  legend: {
    data: ['Online', 'Offline']
  },
  tooltip: {
    trigger: 'axis'
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      axisLine: {
        lineStyle: {
          color: '#c5c4c2'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#3640f9'
        }
      },
      splitLine: {
        show: false
      }
    }
  ],
  series: [
    {
      name: 'Online',
      type: 'bar',
      data: [20, 34, 17, 35, 57, 60, 62, 47],
      barWidth: 10,
      itemStyle: {
        normal: {
          barBorderRadius: 5
        }
      },
      markPoint: {
        data: [{ type: 'max', name: 'Highest' }, { type: 'min', name: 'Lowest' }]
      },
      markLine: {
        data: [{ type: 'average', name: 'Average' }]
      }
    },
    {
      name: 'Offline',
      type: 'bar',
      data: [12, 31, 15, 29, 38, 45, 32, 48],
      barWidth: 10,
      itemStyle: {
        normal: {
          barBorderRadius: 5
        }
      },
      markPoint: {
        data: [{ type: 'max', name: 'Highest' }, { type: 'min', name: 'Lowest' }]
      },
      markLine: {
        data: [{ type: 'average', name: 'Average' }]
      }
    }
  ]
};

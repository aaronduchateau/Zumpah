export default {
  color: ['#ed253d', '#2fa7ff'],
  tooltip: {
    trigger: 'none',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: ['Clients 2018', 'Clients 2019']
  },
  grid: {
    left: 30,
    right: 30,
    top: 50,
    bottom: 50
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: '#2fa7ff'
        }
      },
      axisPointer: {
        label: {
          formatter: function(params) {
            return (
              'Clients ' +
              params.value +
              (params.seriesData.length ? '：' + params.seriesData[0].data : '')
            );
          }
        }
      },
      data: [
        '2019-1',
        '2019-2',
        '2019-3',
        '2019-4',
        '2019-5',
        '2019-6',
        '2019-7',
        '2019-8',
        '2019-9',
        '2019-10',
        '2019-11',
        '2019-12'
      ]
    },
    {
      type: 'category',
      boundaryGap: false,
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: '#ed253d'
        }
      },
      axisPointer: {
        label: {
          formatter: function(params) {
            return (
              'Clients ' +
              params.value +
              (params.seriesData.length ? '：' + params.seriesData[0].data : '')
            );
          }
        }
      },
      data: [
        '2018-1',
        '2018-2',
        '2018-3',
        '2018-4',
        '2018-5',
        '2018-6',
        '2018-7',
        '2018-8',
        '2018-9',
        '2018-10',
        '2018-11',
        '2018-12'
      ]
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: ''
      }
    }
  ],
  series: [
    {
      name: 'Clients 2018',
      type: 'line',
      xAxisIndex: 1,
      smooth: true,
      areaStyle: {
        color: 'rgba(237,37,61,0.2)'
      },
      data: [159, 163, 174, 182, 174, 176, 175, 182, 119, 118, 112, 96]
    },
    {
      name: 'Clients 2019',
      type: 'line',
      smooth: true,
      areaStyle: {
        color: 'rgba(47,167,255,0.2)'
      },
      data: [83, 94, 100, 114, 124, 178, 194, 211, 234, 257, 263, 270]
    }
  ]
};

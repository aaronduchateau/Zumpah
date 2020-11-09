import echarts from 'echarts';

export default {
  color: ['#c565e7'],
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  xAxis: {
    boundaryGap: false,
    type: 'category'
  },
  yAxis: {
    show: false
  },
  series: [
    {
      name: 'Patients 2019',
      step: false,
      type: 'line',
      smooth: true,
      symbol: 'none',
      data: [95, 180, 220, 180, 142, 103, 143, 243, 304, 243, 144, 107, 141, 226],
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#c565e7'
            },
            {
              offset: 0.6,
              color: '#d5ade4'
            },
            {
              offset: 1,
              color: '#f8e5ff'
            }
          ])
        }
      }
    }
  ]
};

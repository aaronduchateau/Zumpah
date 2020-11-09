export default {
  color: ['#805aff'],
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  calculable: true,
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
      type: 'line',
      smooth: true,
      symbolSize: 6,
      data: [95, 124, 132, 143, 138, 178, 194, 211, 234, 257, 241, 226],
      areaStyle: {}
    }
  ]
};

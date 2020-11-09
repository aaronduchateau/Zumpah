export default {
  color: ['#cd5447'],
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
      type: 'line',
      smooth: true,
      symbolSize: 6,
      data: [94, 111, 90, 85, 70, 83, 94, 109, 89, 74, 83, 78],
      areaStyle: {}
    }
  ]
};

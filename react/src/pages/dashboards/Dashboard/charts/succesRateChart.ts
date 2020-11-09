export default {
  color: ['#7cdb86', '#fc8b37', '#805aff'],
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      show: false
    }
  ],
  yAxis: [
    {
      type: 'value',
      show: false
    }
  ],
  series: [
    {
      name: 'Forest',
      type: 'bar',
      smooth: true,
      barWidth: '7px',
      barMaxWidth: '10px',
      barGap: '1px',
      data: [320, 332, 301, 334, 390, 420, 430, 400],
      itemStyle: {
        barBorderRadius: 50
      }
    },
    {
      name: 'Steppe',
      type: 'bar',
      barWidth: '7px',
      barMaxWidth: '10px',
      data: [220, 182, 191, 234, 290, 320, 380, 370],
      itemStyle: {
        barBorderRadius: 50
      }
    },
    {
      name: 'Desert',
      type: 'bar',
      barWidth: '7px',
      barMaxWidth: '10px',
      data: [150, 232, 201, 154, 190, 210, 240, 230],
      itemStyle: {
        barBorderRadius: 50
      }
    }
  ]
};

export default {
  color: ['#f741b5', '#2fa7ff', '#7cdb86'],
  series: [
    {
      type: 'pie',
      radius: ['90%', '88%'],
      label: {
        show: false
      },
      data: [{ value: 250 }, { value: 500 }, { value: 250 }],
      markPoint: {
        data: [
          {
            x: '50%',
            y: '10px',
            symbol: 'emptyCircle',
            symbolSize: 15,
            itemStyle: {
              normal: {
                color: 'rgba(247,65,181,0.1)',
                borderWidth: 5
              }
            }
          },
          {
            x: '50%',
            y: '10px',
            symbol: 'circle',
            symbolSize: 5,
            itemStyle: {
              normal: {
                color: '#F741B5'
              }
            }
          },
          {
            x: '170px',
            y: '50%',
            symbol: 'emptyCircle',
            symbolSize: 15,
            itemStyle: {
              normal: {
                color: 'rgba(47,167,255,0.1)',
                borderWidth: 5
              }
            }
          },
          {
            x: '170px',
            y: '50%',
            symbol: 'circle',
            symbolSize: 5,
            itemStyle: {
              normal: {
                color: '#2fa7ff'
              }
            }
          },
          {
            x: '10px',
            y: '50%',
            symbol: 'emptyCircle',
            symbolSize: 15,
            itemStyle: {
              normal: {
                color: 'rgba(124,219,134,0.1)',
                borderWidth: 5
              }
            }
          },
          {
            x: '10px',
            y: '50%',
            symbol: 'circle',
            symbolSize: 5,
            itemStyle: {
              normal: {
                color: '#7cdb86'
              }
            }
          }
        ]
      }
    }
  ]
};

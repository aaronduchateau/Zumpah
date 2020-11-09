export default {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data: ['Chrome', 'Safari', 'IE9+', 'Firefox']
  },
  calculable: true,
  series: (() => {
    const series = [];

    for (let i = 0; i < 30; i++) {
      const options = {
        name: 'Usage browser',
        type: 'pie',
        itemStyle: {
          normal: {
            label: {
              show: i > 28
            },
            labelLine: {
              show: i > 28,
              length: 20
            }
          }
        },
        radius: [i * 4 + 40, i * 4 + 42],
        data: [
          {
            value: i * 128 + 80,
            name: 'Chrome',
            itemStyle: { normal: { color: '#f741b5' } }
          },
          {
            value: i * 32 + 320,
            name: 'Safari',
            itemStyle: { normal: { color: '#2fa7ff' } }
          },
          {
            value: i * 16 + 640,
            name: 'IE9+',
            itemStyle: { normal: { color: '#305dff' } }
          },
          {
            value: i * 64 + 160,
            name: 'Firefox',
            itemStyle: { normal: { color: '#fc8b37' } }
          }
        ]
      };
      series.push(options);
    }

    return series;
  })()
};

import piOption from './piOption';
import echarts from 'echarts';

export default {
  ...piOption,
  ...{
    color: ['#47bf62'],
    series: [
      {
        name: 'Income in month',
        step: false,
        type: 'line',
        smooth: true,
        symbol: 'none',
        data: [95, 202, 240, 202, 142, 103, 143, 243, 304, 243, 144, 107, 141, 226],
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(71, 191, 98, .3)'
              },
              {
                offset: 0.6,
                color: 'rgba(98, 234, 129, .2)'
              },
              {
                offset: 1,
                color: 'rgba(111, 219, 136, .1)'
              }
            ])
          }
        }
      }
    ]
  }
};

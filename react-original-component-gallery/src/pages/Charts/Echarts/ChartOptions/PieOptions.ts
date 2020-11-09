export default {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  grid: {
    left: 0,
    right: 0,
    bottom: 0,
    containLabel: true
  },
  color: ['#f741b5', '#2fa7ff', '#7cdb86'],
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: 'Schedule',
      type: 'pie',
      radius: '90%',
      center: ['50%', '50%'],
      data: [{ value: 335 }, { value: 310 }, { value: 274 }, { value: 235 }, { value: 400 }].sort(
        function(a, b) {
          return a.value - b.value;
        }
      ),
      roseType: 'radius',
      label: {
        show: false
      },
      itemStyle: {
        normal: {
          color: '#b3589c'
        }
      },

      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function(idx) {
        return Math.random() * 200;
      }
    }
  ]
};

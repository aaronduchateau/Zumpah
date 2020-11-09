const pieStyle = {
  normal: {
    label: {
      color: '#000',
      position: 'inner'
    },
    labelLine: {
      show: false
    }
  }
};

const clientGenderOptions = {
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br>{c} ({d}%)'
  },
  series: [
    {
      name: 'pie',
      type: 'pie',
      selectedMode: 'single',
      selectedOffset: 30,
      clockwise: true,
      radius: ['50%', '90%'],
      data: [
        {
          value: 347,
          name: '3-10',
          itemStyle: { normal: { color: '#fdd9f0', borderColor: '#f741b5' } }
        },
        {
          value: 310,
          name: '10-20',
          itemStyle: { normal: { color: '#d5edff', borderColor: '#2fa7ff' } }
        },
        {
          value: 234,
          name: '20-30',
          itemStyle: { normal: { color: '#fee8d7', borderColor: '#fc8b37' } }
        },
        {
          value: 195,
          name: '30-40',
          itemStyle: { normal: { color: '#ffd8dc', borderColor: '#ed253d' } }
        },
        {
          value: 670,
          name: '40+',
          itemStyle: { normal: { color: '#e6deff', borderColor: '#805aff' } }
        }
      ],
      itemStyle: pieStyle
    }
  ]
};

const clientAgeOptions = {
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br>{c} ({d}%)'
  },
  series: [
    {
      name: 'pie',
      type: 'pie',
      selectedMode: 'single',
      selectedOffset: 30,
      clockwise: true,
      radius: [0, '90%'],
      data: [
        {
          value: 154,
          name: 'Female',
          itemStyle: {
            normal: {
              color: '#fdd9f0',
              borderColor: '#f741b5'
            }
          }
        },
        {
          value: 173,
          name: 'Male',
          itemStyle: {
            normal: {
              color: '#d5edff',
              borderColor: '#2fa7ff'
            }
          }
        }
      ],
      itemStyle: pieStyle
    }
  ]
};

const departmentsOptions = {
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  tooltip : {
    trigger: 'item',
    formatter: '{b}<br>{c} ({d}%)'
  },
  series: [{
    name: 'pie',
    type: 'pie',
    radius: [20, '90%'],
    roseType : 'radius',
    label: {
      normal: {
        show: true
      }
    },
    data: [
      { value: 115, name: 'Production', itemStyle: { normal: { color: '#fdd9f0', borderColor: '#f741b5' } } },
      { value: 173, name: 'Development', itemStyle: { normal: { color: '#fee8d7', borderColor: '#fc8b37' } } },
      { value: 154, name: 'Purchasing', itemStyle: { normal: { color: '#e6deff', borderColor: '#805aff' } } },
      { value: 180, name: 'Marketing', itemStyle: { normal: { color: '#d5edff', borderColor: '#2fa7ff' } } },
      { value: 219, name: 'Finance', itemStyle: { normal: { color: '#c1efc6', borderColor: '#7cdb86' } } },
    ],
    itemStyle: pieStyle
  }]
};

export {
  clientAgeOptions,
  clientGenderOptions,
  departmentsOptions
}

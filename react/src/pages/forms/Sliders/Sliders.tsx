import React, { CSSProperties, useEffect, useState } from 'react';
import { Card, Icon, Input, InputNumber, Slider } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

import './Sliders.scss';

function formatter(value) {
  return `${value}%`;
}

const style: CSSProperties = {
  height: '300px',
  marginLeft: '70px',
  float: 'left'
};

const marks = {
  0: '0°C',
  26: '26°C',
  45: '45°C',
  100: {
    style: {
      color: '#f50'
    },
    label: <strong>100°C</strong>
  }
};

const SliderWithIcon: React.FC<{ beforeIcon: string; afterIcon: string } | any> = props => {
  const { beforeIcon, afterIcon, max, min } = props;
  const [value, setValue] = useState<number>(25);

  const mid = parseInt(((max - min) / 2).toFixed(5));

  const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
  const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';

  const handleSliderChange = value => setValue(value);
  return (
    <div className='icon-wrapper'>
      <Icon type={beforeIcon} style={{ color: preColor }} />
      <Slider {...props} value={value} onChange={handleSliderChange} />
      <Icon type={afterIcon} style={{ color: nextColor }} />
    </div>
  );
};

SliderWithIcon.defaultProps = {
  min: 1,
  max: 100
};

const SliderWithStep: React.FC<{ min?: number; max?: number; initValue?: number }> = props => {
  const { min, max, initValue } = props;
  const [value, setValue] = useState(initValue || 50);

  const handleChange = value => setValue(value);

  const handleInputChange = e => {
    const value = e.target.value;

    if (!isNaN(value) && value >= min && value <= max) {
      setValue(value);
    }
  };

  return (
    <div className='row'>
      <div className='col-8'>
        <Slider min={min} max={max} value={value} onChange={handleChange} />
      </div>
      <div className='col-4'>
        <Input value={value} type='number' onChange={handleInputChange} />
      </div>
    </div>
  );
};

SliderWithStep.defaultProps = {
  min: 1,
  max: 100
};

const PageSliders: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Sliders',
    loaded: true,
    breadcrumbs: [
      {
        title: 'Home',
        route: 'dashboard'
      },
      {
        title: 'UI Kit ',
        route: 'dashboard'
      },
      {
        title: 'Sliders'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <Card title='Basic Slider' className='component-demo-card'>
        <Slider />
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter language='jsx' style={docco}>
          {'<Slider />'}
        </SyntaxHighlighter>
      </Card>

      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <div className='row'>
            <div className='col-12'>
              <Card title='Slider connected to input'>
                <SliderWithStep />
              </Card>
              <Card title='Vertical slider'>
                <div style={{ height: 300 }}>
                  <div style={style}>
                    <Slider vertical defaultValue={30} />
                  </div>
                  <div style={style}>
                    <Slider vertical range step={10} defaultValue={[20, 50]} />
                  </div>
                  <div style={style}>
                    <Slider vertical range marks={marks} defaultValue={[26, 37]} />
                  </div>
                </div>
              </Card>

              <Card title='Custom tooltip' className='mb-md-0'>
                <Slider tipFormatter={formatter} />
                <Slider tipFormatter={null} />
              </Card>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-sm-12'>
          <div className='row'>
            <div className='col-12'>
              <Card title='Slider with marks'>
                <div>
                  <h6 className='mt-0'>included=true</h6>
                  <Slider marks={marks} defaultValue={37} />
                  <Slider range marks={marks} defaultValue={[26, 37]} />

                  <h6>included=false</h6>
                  <Slider marks={marks} included={false} defaultValue={37} />

                  <h6>marks & step</h6>
                  <Slider marks={marks} step={10} defaultValue={37} />

                  <h6>step=null</h6>
                  <Slider marks={marks} step={null} defaultValue={37} />
                </div>
              </Card>

              <Card title='Slider with icon' className='mb-0'>
                <SliderWithIcon beforeIcon='frown-o' afterIcon='smile-o' />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageSliders;

import React, { CSSProperties, useEffect, useState } from 'react';
import { Input, Slider, Button } from 'antd';
import uuid from 'uuid/v4';

const ButtonGroup = Button.Group;

const SliderWithInputCustom: React.FC<{ min?: number; max?: number; initValue?: number, callback, uuid: uuid, typeComplete: number }> = props => {
  const { min, max, initValue, typeComplete } = props;
  const [value, setValue] = useState(initValue || 50);

  const handleAfterChange = () => {

    props.callback(props.uuid, value);
  };

  const handleMarkCompleteChange = () => {

    props.callback(props.uuid, 100);
  };

  const handleChange = value => {
    setValue(value);

  };

  const handleInputChange = e => {
    const value = e.target.value;

    if (!isNaN(value) && value >= 0 && value <= 100) {
      setValue(value);

    }
  };



  return (
    <div className='row' style={{ minHeight: '50px' }}>
      {(typeComplete === 1) &&
        <div className='col-12'>
          <ButtonGroup className='mb-3' >
            <Button type='primary'>View details</Button>
            <Button type='primary' onClick={handleMarkCompleteChange}>Mark Complete</Button>
          </ButtonGroup>
        </div>}

      {(typeComplete === 2) &&
        <><div className='col-2'>
          <Button type='primary'>View details</Button>
        </div>
          <div className='col-3'>
            <Slider min={min} max={max} value={value} onChange={handleChange} />
          </div>
          <div className='col-2'>
            <Input value={value} type='number' onChange={handleInputChange} style={{ maxWidth: '90px' }} />
          </div>
          <div className='col-5'>
            {initValue !== value &&
              <div className={""} style={{ maxWidth: '100px', textAlign: 'center' }}>
                <Button type='primary' icon='check' shape='circle' size="large" onClick={handleAfterChange} />
                  &nbsp;&nbsp;
                  <Button type='danger' icon='close' shape='circle' onClick={() => setValue(props.initValue)} />
              </div>
            }
          </div>
        </>
      }
    </div>

  );
};


export default SliderWithInputCustom;

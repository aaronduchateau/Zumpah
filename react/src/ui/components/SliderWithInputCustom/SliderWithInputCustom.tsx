import React, { CSSProperties, useEffect, useState }  from 'react';
import { Input, Slider } from 'antd';
import uuid from 'uuid/v4';

const SliderWithInputCustom: React.FC<{ min?: number; max?: number; initValue?: number, callback, uuid: uuid }> = props => {
    const { min, max, initValue } = props;
    const [value, setValue] = useState(initValue || 50);
  
    const handleAfterChange = value => {
      
      props.callback(props.uuid, value);
  };
    
    const handleChange = value => {
        setValue(value);

    };
  
    const handleInputChange = e => {
      const value = e.target.value;
  
      if (!isNaN(value) && value >= 0 && value <= 100) {
        setValue(value);
        props.callback(props.uuid, value);
      }
    };
  
    return (
      <div className='row'>
        <div className='col-5'>
          <Slider min={min} max={max} value={value} onChange={handleChange} onAfterChange={handleAfterChange} />
        </div>
        <div className='col-7'>
          <Input value={value} type='number' onChange={handleInputChange} style={{maxWidth: '80px'}}/>
        </div>
      </div>
    );
  };


  export default SliderWithInputCustom;

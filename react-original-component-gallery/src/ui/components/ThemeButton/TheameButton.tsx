import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button';

const ThemeButton: React.FC<ButtonProps> = props => {
  return (
    <Button className='theme-button' {...props}>
      {props.children}
    </Button>
  );
};

export default ThemeButton;

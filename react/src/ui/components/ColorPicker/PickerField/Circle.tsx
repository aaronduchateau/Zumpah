import React from 'react';
import className from "../../../../utils/classNames";

interface ColorCircleProps {
  color: string;
  onClick: () => void;
  contrastColor?: string;
}

const ColorCircle: React.FC<ColorCircleProps> = props => {
  const { color, onClick, contrastColor } = props;

  const handleCircleClick = () => onClick();

  const cursorClasses = className({
    'cursor': true,
    'black': contrastColor !== '#ffffff'
  });

  return (
    <div className='circle' onClick={handleCircleClick}>
      <div className='bg'>
        <div className='white' />
        <div className='transparent' />
        <div className='bg-color' style={{ backgroundColor: color }} />
      </div>
      <div className={cursorClasses} />
    </div>
  );
};

ColorCircle.defaultProps = {
  contrastColor: '#ffffff',
  color: 'transparent'
};

export default ColorCircle;

import React from 'react';
import ColorCircle from './Circle';

import ColorUtils from '../../../../utils/ColorUtils';

import './PickerField.scss';
import className from '../../../../utils/classNames';

interface PickerFieldProps {
  savedColor: string;
  secondColor?: string;
  onOpenPicker: (color: string) => void;
  onOpenSecond: (color: string) => void;
}

const getContrast = (hexColor: string) => {
  const [r, g, b] = ColorUtils.hexToRgb(hexColor);
  return ColorUtils.checkContrastColor(r, g, b);
};

const PickerField: React.FC<PickerFieldProps> = props => {
  const { savedColor, secondColor, onOpenPicker, onOpenSecond } = props;

  const handleOpenPicker = () => onOpenPicker(savedColor);

  const handleOpenSecond = () => onOpenSecond(secondColor);

  const value = secondColor ? `${savedColor} - ${secondColor}` : savedColor;

  const fieldClasses = className({
    'color-field': true,
    gradient: !!secondColor
  });

  return (
    <div className={fieldClasses}>
      <ColorCircle
        color={savedColor}
        onClick={handleOpenPicker}
        contrastColor={getContrast(savedColor)}
      />

      {secondColor && (
        <ColorCircle
          color={secondColor}
          onClick={handleOpenSecond}
          contrastColor={getContrast(secondColor)}
        />
      )}

      <div className='selected-color-value'>{value}</div>
    </div>
  );
};

export default PickerField;

import React, { useState, forwardRef, useEffect } from 'react';
import { SketchPicker } from 'react-color';

import PickerField from './PickerField/PickerFileld';
import ColorUtils from '../../../utils/ColorUtils';

interface PickerColor {
  color: string;
  contrast: string;
}

export type PickerTuple = [PickerColor, PickerColor?];

const getContrast = (hexColor: string) => {
  if (!hexColor) {
    return null;
  }

  const [r, g, b] = ColorUtils.hexToRgb(hexColor);
  return ColorUtils.checkContrastColor(r, g, b);
};

const getColorTuple = (firstColor: string, secondColor: string): PickerTuple => [
  {
    color: firstColor,
    contrast: getContrast(firstColor)
  },
  {
    color: secondColor,
    contrast: getContrast(secondColor)
  }
];

interface ColorPickerProps {
  firstColor?: string;
  secondColor?: string;
  opened?: boolean;
  onColorChange?: (colors: PickerTuple) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = (props, ref) => {
  const { firstColor, secondColor } = props;

  const { onColorChange } = props;
  const [opened, setOpened] = useState<boolean>(props.opened);
  const [secondOpened, setSecondOpened] = useState<boolean>(props.opened);

  const handlePickerOpen = () => setOpened(true);
  const handleOpenSecond = () => setSecondOpened(true);

  const handleFirstColorChange = color => {
    onColorChange(getColorTuple(color.hex, secondColor));
  };

  const handleSecondColorChange = color => {
    onColorChange(getColorTuple(firstColor, color.hex));
  };

  const handleClose = () => {
    setOpened(false);
    setSecondOpened(false);
  };

  return (
    <>
      <PickerField
        savedColor={firstColor}
        secondColor={secondColor}
        onOpenPicker={handlePickerOpen}
        onOpenSecond={handleOpenSecond}
      />

      {opened && (
        <>
          <div className='picker-cover' onClick={handleClose} />
          <SketchPicker
            onChangeComplete={handleFirstColorChange}
            color={firstColor}
            presetColors={[]}
            disableAlpha
          />
        </>
      )}

      {secondOpened && (
        <>
          <div className='picker-cover' onClick={handleClose} />
          <SketchPicker
            onChangeComplete={handleSecondColorChange}
            color={secondColor}
            presetColors={[]}
            disableAlpha
          />
        </>
      )}
    </>
  );
};

export default ColorPicker;

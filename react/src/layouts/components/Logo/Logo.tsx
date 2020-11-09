import React, {CSSProperties} from 'react';

import './Logo.scss';
import className from "../../../utils/classNames";

import LogoSvg from '../../../assets/img/logo.svg';
import LogoLightSvg from '../../../assets/img/logo-light.svg';

interface LogoProps {
  alt?: string;
  light?: boolean;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: CSSProperties;
}

const Logo: React.FunctionComponent<LogoProps> = props => {
  const { width, height, alt, className: classNames, light, style } = props;

  const logoClassNames = className({
    'logo': true,
    [classNames]: props.className
  });

  const LogoSrc = light ? LogoLightSvg : LogoSvg;

  return (
    <div className={logoClassNames} style={style}>
      <div className='logo-wrap'>
        <img src={LogoSrc} alt={props.alt} width={props.width} height={props.height}/>
      </div>
    </div>
  )
};

Logo.defaultProps = {
  width: 'auto',
  height: 'auto',
  light: false,
  alt: ''
};

export default Logo;

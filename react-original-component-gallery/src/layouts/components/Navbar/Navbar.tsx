import React, { CSSProperties } from 'react';
import './Navbar.scss';

import classNames from '../../../utils/classNames';

interface NavbarProps {
  boxed?: boolean;
  className?: string;
  opened?: boolean;
  minHeight?: number | string;
  style?: CSSProperties;
  orientation?: 'horizontal' | 'vertical' | 'horizontal-vertical';
  onCloseNavbar?: () => void;
}

const Navbar: React.FunctionComponent<NavbarProps> = props => {
  const navbarClasses = classNames({
    navbar: true,
    boxed: props.boxed,
    opened: props.opened,
    'horizontal-navbar': props.orientation === 'horizontal',
    vertical: props.orientation === 'vertical',
    'horizontal-vertical': props.orientation === 'horizontal-vertical',
    [props.className]: !!props.className
  });

  const overlayClasses = classNames({
    overlay: true,
    opened: props.opened
  });

  const MIN_HEIGHT = props.minHeight;

  const onOverlayClick = () => {
    props.onCloseNavbar();
  };

  return (
    <>
      <div className={navbarClasses} style={{ ...props.style, minHeight: MIN_HEIGHT }}>
        <div className='navbar-wrap'>{props.children}</div>
      </div>
      <div className={overlayClasses} onClick={() => onOverlayClick()} />
    </>
  );
};

Navbar.defaultProps = {
  boxed: false,
  opened: false,
  orientation: 'horizontal'
};

export default Navbar;

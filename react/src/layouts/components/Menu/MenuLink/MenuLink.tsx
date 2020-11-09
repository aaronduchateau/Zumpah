import React, { CSSProperties, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IMenuItemIcon } from '../../../../interfaces/menu';

interface MenuLinkProps {
  layout: string;
  routing: string;
  icon?: IMenuItemIcon;
  className?: string;
  style?: CSSProperties;
  accentColor?: string;
  activeBg: string;
  color: string;
}

const MenuLink: React.FC<MenuLinkProps> = props => {
  const {
    layout,
    routing,
    icon,
    children,
    style,
    className,
    color,
    activeBg,
    accentColor
  } = props;
  const [linkColor, setLinkColor] = useState<string>(null);

  const handleMouseEnter = () => {
    setLinkColor(accentColor);
  };

  const handleMouseLeave = () => {
    setLinkColor(color);
  };

  return (
    <>
      <NavLink
        to={`/${layout}/${routing}`}
        className={`item-link ${className}`}
        activeClassName='active'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        replace
        style={style}>
        {icon && (
          <span
            className={`link-icon ${icon.class}`}
            style={{ backgroundColor: icon.bg, color: icon.color }}
          />
        )}
        <span className='link-text'>{children}</span>
      </NavLink>
    </>
  );
};

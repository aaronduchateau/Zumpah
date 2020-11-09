import React, { useEffect, useState } from 'react';

import './Menu.scss';

import { IMenuItem } from '../../../interfaces/menu';

import WithSub from './WithSub/WithSub';
import SimpleItem from './SimpleItem/SimpleItem';
import className from '../../../utils/classNames';

interface MenuProps {
  orientation?: 'vertical' | 'horizontal';
  layout?: string;
  data?: IMenuItem[];
  color?: string;
  contrast?: string;
  accentColor?: string;
  accentContrast?: string;
}

const Menu: React.FunctionComponent<MenuProps> = props => {
  const [menu, setMenu] = useState<IMenuItem[]>([]);
  const { layout } = props;

  useEffect(() => {
    setMenu(props.data);
  }, [props.data]);

  const menuClasses = className({
    menu: true,
    horizontal: props.orientation === 'horizontal'
  });

  const toggle = (title: string, active: boolean) => {
    const UPDATED = [...menu];
    UPDATED.forEach(_item => (_item.active = _item.title === title && !active));
    setMenu(UPDATED);
  };

  const groupTitle = (item: IMenuItem, index: number) => (
    <li className='menu-item group' key={index}>
      <span style={{ color: props.accentColor }} className='group-title'>
        {item.title}
      </span>
    </li>
  );

  const menuItems = menu.map((item, index) => {
    if (item.groupTitle) {
      return groupTitle(item, index);
    }

    if (item.sub) {
      return <WithSub {...item} {...props} layout={layout} key={index} onClick={toggle} />;
    }

    return (
      <SimpleItem {...item} {...props} layout={item.layout ? item.layout : layout} key={index} />
    );
  });

  return (
    <div className={menuClasses}>
      <nav className='main-menu-wrap'>
        <ul className='menu-ul'>{menuItems}</ul>
      </nav>
    </div>
  );
};

export default Menu;

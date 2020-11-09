import React, { CSSProperties, ReactNode } from 'react';

import classNames from '../../../utils/classNames';

interface ListItemProps {
  style?: CSSProperties;
  renderer: ReactNode;
  key?: any;
  className?: string;
}

const ListItem: React.FC<ListItemProps> = props => {
  const { className, style, renderer, key } = props;

  const listClassName = classNames({
    [className]: !!className,
    'tc-list-item': true
  });

  return (
    <li className={listClassName} key={key} style={style}>
      {renderer}
    </li>
  );
};

export default ListItem;

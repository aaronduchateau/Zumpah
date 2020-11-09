import React, { CSSProperties, ReactNode } from 'react';
import ListItem from './ListItem';

import classNames from '../../../utils/classNames';

import './List.scss';

interface ListProps {
  style?: CSSProperties;
  className?: string;
  items: any[];
  key?: any;
  itemRenderer: (any) => ReactNode;
}

const List: React.FC<ListProps> = props => {
  const { items, itemRenderer, className, key, style } = props;

  const listClasses = classNames({
    'tc-list': true,
    [className]: !!className
  });

  let renderItem;

  if (React.isValidElement(itemRenderer)) {
    renderItem = (_, i) => <ListItem renderer={itemRenderer} key={i} />;
  } else {
    renderItem = (data, i) => <ListItem renderer={itemRenderer(data)} key={i} />;
  }

  return (
    <ul className={listClasses} style={style} key={key}>
      {items.map(renderItem)}
    </ul>
  );
};

export default List;

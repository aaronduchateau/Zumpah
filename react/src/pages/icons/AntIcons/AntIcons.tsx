import React, { useEffect } from 'react';
import { Icon } from 'antd';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

import iconsList from './IconsList';

import './Icons.scss';

const IconWrap: React.FC = props => <div className='icon-wrap'>{props.children}</div>;

const PageAntIcons: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Icons',
    loaded: true,
    breadcrumbs: [
      {
        title: 'Home',
        route: 'dashboard'
      },
      {
        title: 'UI Kit ',
        route: 'dashboard'
      },
      {
        title: 'Icons'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const getIconTuple = list => Object.keys(list).map(key => [key, list[key]]);

  const icons = getIconTuple(iconsList);
  return (
    <>
      {icons.map(([key, icons]) => (
        <div key={key}>
          <h4 className='section-title mb-4'>{key}</h4>

          <div className='elem-list'>
            {icons.map(icon => (
              <IconWrap key={icon}>
                <Icon style={{ fontSize: 20 }} type={icon} />
              </IconWrap>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PageAntIcons;

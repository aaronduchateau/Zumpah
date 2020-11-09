import React, { CSSProperties, useEffect } from 'react';
import { Card, Icon } from 'antd';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const colors = ['#7cdb86', '#2fa7ff', '#fc8b37', '#ed253d', '#6e40d8'];

const iconTypes = [
  'bell',
  'book',
  'bug',
  'bulb',
  'calculator',
  'build',
  'calendar',
  'camera',
  'car',
  'carry-out',
  'cloud',
  'code',
  'dislike',
  'environment',
  'experiment',
  'eye',
  'file',
  'filter',
  'fire',
  'flag',
  'folder',
  'folder-open'
];

const PageIconsOptions: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Icons options',
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
        title: 'Icons Options'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const displayIcons = (icons, props) => (
    <div className='elem-list'>
      {icons.map(icon => (
        <Icon key={icon} type={icon} {...props} />
      ))}
    </div>
  );

  const smallFZ: CSSProperties = { fontSize: 16 };
  const mediumFZ: CSSProperties = { fontSize: 20 };
  const largeFZ: CSSProperties = { fontSize: 24 };

  const coloredIcons = (icons, props, colors) => (
    <div className='elem-list'>
      {icons.map((icon, index) => (
        <Icon
          key={icon}
          type={icon}
          theme='twoTone'
          twoToneColor={colors[index % colors.length]}
          {...props}
        />
      ))}
    </div>
  );

  return (
    <>
      <Card title='Default icons'>{displayIcons(iconTypes, null)}</Card>

      <Card title='Icon sizes'>
        <h4 className='section-title mt-0'>16px font size</h4>
        {displayIcons(iconTypes, { style: smallFZ })}

        <h4 className='section-title'>20px font size</h4>
        {displayIcons(iconTypes, { style: mediumFZ })}

        <h4 className='section-title'>24px font size</h4>
        {displayIcons(iconTypes, { style: largeFZ })}
      </Card>

      <Card title='Icon theme' className='mb-0'>
        <h4 className='section-title mt-0'>Outlined</h4>
        {displayIcons(iconTypes, { style: mediumFZ })}

        <h4 className='section-title'>Filled</h4>
        {displayIcons(iconTypes, { style: mediumFZ, theme: 'filled' })}

        <h4 className='section-title'>Two tones</h4>
        {displayIcons(iconTypes, { style: mediumFZ, theme: 'twoTone' })}

        <h4 className='section-title'>Two tones colored</h4>
        {coloredIcons(iconTypes, { style: mediumFZ }, colors)}
      </Card>
    </>
  );
};

export default PageIconsOptions;

import React, { useEffect } from 'react';

import VectorMap from '@south-paw/react-vector-maps';
import world from '@south-paw/react-vector-maps/maps/json/world.json';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const PageVectorMaps: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Vector map',
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
        title: 'Vector Maps'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <div className='full-height-page'>
        <VectorMap style={{ maxHeight: '100%' }} {...world} />
      </div>
    </>
  );
};

export default PageVectorMaps;

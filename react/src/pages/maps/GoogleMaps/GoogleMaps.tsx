import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

import './GoogleMaps.scss';

const apiKey = 'AIzaSyAbIFQ5ffgouATqs-sp8hgQf3zV4dTLzaU';

const mapStyles = {
  width: 'calc(100% - 40px)',
  height: 'calc(100% - 180px)'
};

const phoneStyles = {
  width: 'calc(100% - 40px)',
  height: 'calc(100% - 120px)'
};

const centerCoord = {
  lat: 51.678418,
  lng: 7.809007
};

const PageGoogleMaps: React.FC<IPageProps | any> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Google map',
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
        title: 'Google Maps'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const [style, setStyle] = useState(mapStyles);

  useEffect(() => {
    const updateMapStyles = () => {
      const styles = window.innerWidth < 768 ? phoneStyles : mapStyles;
      setStyle(styles);
    };

    updateMapStyles();

    window.addEventListener('resize', updateMapStyles);
    return () => window.removeEventListener('resize', updateMapStyles);
  }, []);

  const onMarkerClick = e => {
    console.log('Marker clicked', e);
  };

  return (
    <div className='full-height-page'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={centerCoord}
        defaultZoom={15}
      />
    </div>
  );
};

export default PageGoogleMaps;

import React from 'react';

import { publicRoutes } from '../../routes';
import { Route } from 'react-router';

import Logo from '../components/Logo/Logo';

import './Public.scss';

const PublicLayout = props => (
  <div className='public-layout'>
    <div className='bg' />

    <div className='content-box'>
      <div className='content-header'>
        <Logo light width={112} />
      </div>

      <div className='content-body'>
        {publicRoutes.map((route, i) => (
          <Route
            exact
            key={i}
            path={`/public${route.path}`}
            render={() => <route.component onSetPage={props.onSetPage} />}
          />
        ))}
      </div>
    </div>
  </div>
);

export default PublicLayout;

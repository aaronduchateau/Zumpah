import React from 'react';

import { Route } from 'react-router';

import { errorRoutes } from '../../routes';

import './Error.scss';

const ErrorLayout = props => {
  return (
    <div className='error-layout'>
      {errorRoutes.map((route, i) => (
        <Route
          exact
          key={i}
          path={`/error${route.path}`}
          render={() => <route.component onSetPage={props.onSetPage} />}
        />
      ))}
    </div>
  );
};

export default ErrorLayout;

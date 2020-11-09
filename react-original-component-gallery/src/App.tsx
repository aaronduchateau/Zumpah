import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { routes } from './routes';
import './App.scss';
import './assets/sass/styles.scss';

const App: React.FC = () => {
  return (
    <div className='App'>
      {routes.map((route, i) => (
        <Route key={i} path={route.path} component={() => <route.component />} />
      ))}
      <Route exact path='/' render={() => <Redirect exact to='/vertical/dashboard' />} />
    </div>
  );
};

export default App;

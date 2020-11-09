import React from 'react';
import { NavLink } from 'react-router-dom';

import WrappedForm from './SignInForm';

import './SignIn.scss';

const PageSignIn = () => {
  return (
    <>
      <div className='title-block'>
        <h5 className='form-title'>Sign In</h5>
        <NavLink to='/public/sign-up' className='link right'>New user ?</NavLink>
      </div>
      <WrappedForm />
    </>
  );
};

export default PageSignIn;

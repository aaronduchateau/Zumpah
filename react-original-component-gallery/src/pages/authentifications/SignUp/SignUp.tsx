import React from 'react';
import { NavLink } from 'react-router-dom';

import WrappedForm from './SignUpForm';

const PageSignUp = () => {
  return (
    <>
      <div className='title-block'>
        <h5 className='form-title'>Sign Up</h5>
        <NavLink to='/public/sign-in' className='link right'>Already registered ?</NavLink>
      </div>
      <WrappedForm />
    </>
  );
};

export default PageSignUp;

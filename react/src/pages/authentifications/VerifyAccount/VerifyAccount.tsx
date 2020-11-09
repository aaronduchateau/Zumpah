import React from 'react';
import { Button } from 'antd';
import { navigateTo } from '../../../utils/history';

const navigateHome = () => {
  navigateTo('/');
};

const PageVerifyAccount = () => {
  return (
    <form>
      <div className='title-block mb-4 flex-column p-0'>
        <h5 className='form-title mb-4'>Verify your email address</h5>

        <span className='desc'>
          Please check your email and click the verify button or link to verify your account
        </span>
      </div>

      <div className='elem-list'>
        <Button onClick={navigateHome} type='danger'>
          Resend verification
        </Button>

        <Button onClick={navigateHome} type='primary'>
          Contact support
        </Button>
      </div>
    </form>
  );
};

export default PageVerifyAccount;

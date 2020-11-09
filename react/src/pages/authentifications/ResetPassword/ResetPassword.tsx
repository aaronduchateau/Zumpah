import React from 'react';
import { Button, Form, Icon, Input } from 'antd';

import { navigateTo } from '../../../utils/history';

const navigateHome = () => {
  navigateTo('/');
};

const PageResetPassword = () => {
  return (
    <>
      <div className='title-block d-flex flex-column mb-4 p-0'>
        <h5 className='form-title mb-4'>Reset your password</h5>

        <span className='desc'>
          Enter your username or email address and we will send you a link to reset your password.
        </span>
      </div>

      <div className='row'>
        <div className='col-sm-8 col-12'>
          <Input
            className='mb-3 mb-sm-0'
            prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)', width: '100%' }} />}
            placeholder='Email'
          />
        </div>
        <div className='col-sm-4 col-12'>
          <Button style={{ width: '100%' }} type='primary' htmlType='submit' onClick={navigateHome}>
            Reset
          </Button>
        </div>
      </div>
    </>
  );
};

export default PageResetPassword;

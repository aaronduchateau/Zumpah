import React, { useState } from 'react';
import { Checkbox, Form, Input } from 'antd';

import { navigateTo } from '../../../utils/history';
import ThemeButton from '../../../ui/components/ThemeButton/TheameButton';

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 24,
      offset: 0
    }
  }
};

const SingUpForm: React.FC<any> = props => {
  const [isDirty, setDirty] = useState<boolean>(false);
  const { getFieldDecorator } = props.form;

  const handleConfirmBlur = e => {
    const { value } = e.target;
    setDirty(isDirty || !!value);
  };

  const compareToFirstPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && isDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  return (
    <Form style={{ width: '100%' }}>
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: 'The input is not valid E-mail!'
            },
            {
              required: true,
              message: 'Please input your E-mail!'
            }
          ]
        })(<Input placeholder='Email' />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [
            {
              required: true,
              message: 'Please input your password!'
            },
            {
              validator: validateToNextPassword
            }
          ]
        })(<Input.Password placeholder='Password' />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('confirm', {
          rules: [
            {
              required: true,
              message: 'Please confirm your password!'
            },
            {
              validator: compareToFirstPassword
            }
          ]
        })(<Input.Password onBlur={handleConfirmBlur} placeholder='Confirm password' />)}
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        {getFieldDecorator('agreement', {
          valuePropName: 'checked'
        })(
          <Checkbox>
            I have read the <a href=''>terms and condition</a>
          </Checkbox>
        )}
      </Form.Item>
      <Form.Item>
        <span className='d-flex flex-row-reverse justify-content-between'>
          <ThemeButton type='primary' htmlType='submit' onClick={() => navigateTo('/')}>
            Sign Up
          </ThemeButton>
        </span>
      </Form.Item>
    </Form>
  );
};

const WrappedSignUpForm = Form.create({ name: 'sign-up' })(SingUpForm);

export default WrappedSignUpForm;

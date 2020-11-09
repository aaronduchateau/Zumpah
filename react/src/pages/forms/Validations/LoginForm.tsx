import React, { FormEvent } from 'react';
import { Button, Checkbox, Form, Icon, Input } from 'antd';
import { FormProps } from 'antd/es/form';

interface LoginFormProps {
  withLabels: boolean;
  form?: any;
}

const LoginForm: React.FC<LoginFormProps> = props => {
  const { withLabels, form } = props;
  const { getFieldDecorator } = form;

  const formItemLayout = {
    labelCol: withLabels
      ? {
          xs: { span: 24 },
          sm: { span: 6 }
        }
      : null,
    wrapperCol: withLabels
      ? {
          xs: { span: 24 },
          sm: { span: 18 }
        }
      : {
          xs: { span: 24 }
        }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: `', values);
      }
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className='login-form' {...formItemLayout} labelAlign='left'>
        <Form.Item label={withLabels ? 'First name' : null}>
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: <span className='error-message'>Please enter your first name</span> }]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='First name'
            />
          )}
        </Form.Item>
        <Form.Item label={withLabels ? 'Last name' : null}>
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: <span className='error-message'>Please enter your last name</span> }]
          })(
            <Input
              prefix={<Icon type='solution' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Username'
            />
          )}
        </Form.Item>
        <Form.Item label={withLabels ? 'Email' : null}>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: <span className='error-message'>Please input your email</span> }]
          })(
            <Input
              prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Username'
            />
          )}
        </Form.Item>
        <Form.Item label={withLabels ? 'Password' : null}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: <span className='error-message'>Please input your password</span> }]
          })(
            <Input
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder='Password'
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' className='login-form-button'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export { LoginForm, WrappedLoginForm };

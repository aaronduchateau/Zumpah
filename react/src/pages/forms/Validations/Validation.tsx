import React, { FormEvent, useEffect } from 'react';

import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

import { WrappedLoginForm } from './LoginForm';
import WithLabels from './FormWithLabels';
import RegistrationForm from './RegistrationForm';

import './Validations.scss';

const PageFormValidation: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Form validation',
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
        title: 'Form validation'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <Card title='Login form'>
            <WrappedLoginForm />
          </Card>
        </div>
        <div className='col-sm-12 col-md-6'>
          <Card title='With labels markers'>
            <WithLabels />
          </Card>
        </div>
      </div>
      <Card title='Validation with messages' className='mb-0'>
        <RegistrationForm />
      </Card>
    </>
  );
};

export default PageFormValidation;

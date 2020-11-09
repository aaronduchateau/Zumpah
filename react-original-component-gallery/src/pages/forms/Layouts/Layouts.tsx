import React, { useEffect } from 'react';
import { AutoComplete, Button, Card, Form, Icon, Input } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const formItemLayout = {
  labelCol:  {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 }
  }
};

const PageFormLayouts: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Form layouts',
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
        title: 'Form layouts'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <Card title='With labels'>
            <Form layout='vertical'>
              <Form.Item label='First name'>
                <Input placeholder='First name' />
              </Form.Item>
              <Form.Item label='Last name'>
                <Input placeholder='Last name' />
              </Form.Item>
              <Form.Item label='Email'>
                <Input placeholder='Email' />
              </Form.Item>
              <Form.Item label='Password'>
                <Input placeholder='Password' />
              </Form.Item>
              <Form.Item>
                <Button type='primary'>Submit</Button>
              </Form.Item>
            </Form>
          </Card>

          <Card title='Horizontal'>
            <Form labelAlign='left' layout='horizontal' {...formItemLayout}>
              <Form.Item label='First name'>
                <Input placeholder='First name' />
              </Form.Item>
              <Form.Item label='Last name'>
                <Input placeholder='Last name' />
              </Form.Item>
              <Form.Item label='Email'>
                <Input placeholder='Email' />
              </Form.Item>
              <Form.Item label='Password'>
                <Input placeholder='Password' />
              </Form.Item>
              <Form.Item wrapperCol={{ xs: 24 }}>
                <Button block type='primary'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
        <div className='col-md-6 col-sm-12'>
          <Card title='Without labels'>
            <Form layout='vertical'>
              <Form.Item>
                <Input placeholder='First name' />
              </Form.Item>
              <Form.Item>
                <Input placeholder='Last name' />
              </Form.Item>
              <Form.Item>
                <Input placeholder='Email' />
              </Form.Item>
              <Form.Item>
                <Input placeholder='Password' />
              </Form.Item>
              <Form.Item>
                <Input.TextArea placeholder='About you' rows={4} />
              </Form.Item>
              <Form.Item>
                <Button block type='primary'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>

          <Card title='Horizontal with icons'>
            <Form layout='horizontal' {...formItemLayout}>
              <Form.Item label='First name'>
                <Input
                  prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder='First name'
                />
              </Form.Item>
              <Form.Item label='Last name'>
                <Input
                  prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder='Last name'
                />
              </Form.Item>
              <Form.Item label='Email'>
                <Input
                  prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder='Email'
                />
              </Form.Item>
              <Form.Item label='Password'>
                <Input
                  prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder='Password'
                />
              </Form.Item>
              <Form.Item wrapperCol={{ xs: 24 }}>
                <Button block>Submit</Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>

      <Card title='Inline' className='mb-0'>
        <Form layout='inline' style={{ width: '100%' }}>
          <Form.Item>
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='First name'
            />
          </Form.Item>

          <Form.Item>
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Last name'
            />
          </Form.Item>

          <Form.Item>
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Password'
            />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default PageFormLayouts;

import React, { useEffect,  useState } from 'react';
import { Card, Input, Form, Icon } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const PageInputs: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Inputs',
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
        title: 'Inputs'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const [firstChar, setFirstChar] = useState(0);
  const [secondChar, setSecondChar] = useState(0);
  const [thirdChar, setThirdChar] = useState(0);

  const handleChange = (maxCount: number, setter: (val) => void) => event => {
    const charLeft = maxCount - event.target.value.length;
    setter(charLeft);
  };

  return (
    <>
      <Card className='component-demo-card' title='Basic input'>
        <Input placeholder='Basic input' />
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter>{"<Input placeholder='Basic input'/>"}</SyntaxHighlighter>
      </Card>

      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <div className='row'>
            <div className='col-12'>
              <Card title='Basic inputs'>
                <Form layout='vertical'>
                  <Form.Item>
                    <Input placeholder='With placeholder' defaultValue='With value' />
                  </Form.Item>

                  <Form.Item>
                    <Input placeholder='With placeholder' />
                  </Form.Item>

                  <Form.Item label='Input label'>
                    <Input placeholder='With label' />
                  </Form.Item>
                </Form>
              </Card>
            </div>

            <div className='col-12'>
              <Card title='Input sizes'>
                <Form layout='vertical'>
                  <Form.Item>
                    <Input defaultValue='Small input' size='small' />
                  </Form.Item>

                  <Form.Item>
                    <Input defaultValue='Default input' />
                  </Form.Item>

                  <Form.Item>
                    <Input defaultValue='Large size' size='large' />
                  </Form.Item>
                </Form>
              </Card>
            </div>

            <div className='col-12'>
              <Card title='Char limiting' className='mb-md-0'>
                <Form layout='vertical'>
                  <Form.Item>
                    <Input
                      placeholder='10 char limit'
                      maxLength={10}
                      onChange={handleChange(10, setFirstChar)}
                      prefix={<Icon type='font-size' />}
                      suffix={<span style={{ color: 'rgba(0,0,0,.2)' }}>{firstChar || 0}</span>}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Input
                      placeholder='20 char limit'
                      maxLength={20}
                      onChange={handleChange(20, setSecondChar)}
                      prefix={<span style={{ color: 'rgba(0,0,0,.2)' }}>{secondChar || 0}</span>}
                      suffix={<Icon type='edit' />}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Input
                      placeholder='30 char limit'
                      maxLength={30}
                      onChange={handleChange(30, setThirdChar)}
                      prefix={
                        <>
                          <span style={{ color: '#cd5447' }}>{thirdChar || 0}</span>
                        </>
                      }
                      suffix={<Icon type='pushpin' />}
                    />
                  </Form.Item>
                </Form>
              </Card>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-sm-12'>
          <div className='row'>
            <div className='col-12'>
              <Card title='Prefix/Suffix'>
                <Form layout='vertical'>
                  <Form.Item>
                    <Input
                      defaultValue='With prefix'
                      placeholder='Enter your username'
                      prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Input
                      defaultValue='With suffix'
                      placeholder='Enter your username'
                      suffix={<Icon type='info-circle' style={{ color: 'rgba(0,0,0,.45)' }} />}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Input
                      placeholder='Enter your username'
                      defaultValue='Colored'
                      prefix={<Icon type='user' style={{ color: '#f8e71c' }} />}
                      suffix={<Icon type='info-circle' style={{ color: '#f8e71c' }} />}
                    />
                  </Form.Item>
                </Form>
              </Card>
            </div>

            <div className='col-12'>
              <Card title='Input types'>
                <Form layout='vertical'>
                  <Form.Item>
                    <Input placeholder='Text input' />
                  </Form.Item>

                  <Form.Item>
                    <Input placeholder='Email input' type='email' />
                  </Form.Item>

                  <Form.Item>
                    <Input placeholder='Number input' type='number' />
                  </Form.Item>

                  <Form.Item>
                    <Input placeholder='Password input' type='password' />
                  </Form.Item>
                </Form>
              </Card>
            </div>

            <div className='col-12'>
              <Card title='Input types' className='mb-0'>
                <Form layout='vertical'>
                  <Form.Item>
                    <Input placeholder='Square' style={{ borderRadius: '0' }} />
                  </Form.Item>
                  <Form.Item>
                    <Input placeholder='Rounded' style={{ borderRadius: '10px' }} />
                  </Form.Item>
                  <Form.Item>
                    <Input placeholder='Default' />
                  </Form.Item>
                </Form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageInputs;

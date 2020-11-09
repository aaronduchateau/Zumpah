import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, Icon, Switch } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './Badges.scss';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const ButtonGroup = Button.Group;

const PageBadges: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Badges',
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
        title: 'Badges'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const [count, setCount] = useState(5);
  const [visible, setVisible] = useState(true);

  const increase = () => setCount(count + 1);
  const decrease = () => count - 1 >= 0 && setCount(count - 1);
  const toggle = () => setVisible(!visible);

  return (
    <>
      <Card className='component-demo-card'>
        <Badge count={5}>
          <a href='#' className='head-example' />
        </Badge>
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter language='jsx' style={docco}>
          {'<Badge count={5}>\n' + "   <a href='#' className='head-example' />\n" + '</Badge>'}
        </SyntaxHighlighter>
      </Card>

      <div className='row'>
        <div className='col-md-12 col-lg-6'>
          <Card title='Custom count'>
            <div className='elem-list'>
              <Badge count={5}>
                <a href='#' className='head-example' />
              </Badge>
              <Badge count={0} showZero>
                <a href='#' className='head-example' />
              </Badge>
              <Badge count={<Icon type='clock-circle' style={{ color: '#805AFF' }} />}>
                <a href='#' className='head-example' />
              </Badge>
            </div>
          </Card>
        </div>

        <div className='col-md-12 col-lg-6'>
          <Card title='Overflow count'>
            <div className='elem-list'>
              <Badge count={99}>
                <a href='#' className='head-example' />
              </Badge>
              <Badge count={100}>
                <a href='#' className='head-example' />
              </Badge>
              <Badge count={99} overflowCount={10}>
                <a href='#' className='head-example' />
              </Badge>
              <Badge count={1000} overflowCount={999}>
                <a href='#' className='head-example' />
              </Badge>
            </div>
          </Card>
        </div>

        <div className='col-md-12 col-lg-6'>
          <Card title='Standalone badge'>
            <div className='elem-list'>
              <Badge count={25} />
              <Badge
                count={4}
                style={{
                  backgroundColor: '#fff',
                  color: '#999',
                  boxShadow: '0 0 0 1px #d9d9d9 inset'
                }}
              />
              <Badge count={109} style={{ backgroundColor: '#52c41a' }} />
            </div>
          </Card>
        </div>

        <div className='col-md-12 col-lg-6'>
          <Card title='Dot badge'>
            <div className='elem-list'>
              <Badge dot>
                <Icon type='notification' />
              </Badge>
              <Badge count={0} dot>
                <Icon type='notification' />
              </Badge>
              <Badge dot>
                <a href='#'>Link something</a>
              </Badge>
            </div>
          </Card>
        </div>

        <div className='col-md-12 col-lg-6'>
          <Card title='Status badge' className='mb-lg-0'>
            <div className='elem-list mb-2'>
              <Badge status='success' />
              <Badge status='error' />
              <Badge status='default' />
              <Badge status='processing' />
              <Badge status='warning' />
            </div>

            <div className='d-flex flex-column'>
              <Badge status='success' text='Success' />
              <Badge status='error' text='Error' />
              <Badge status='default' text='Default' />
              <Badge status='processing' text='Processing' />
              <Badge status='warning' text='Warning' />
            </div>
          </Card>
        </div>

        <div className='col-md-12 col-lg-6'>
          <Card title='Conntroled badge' className='mb-0'>
            <div>
              <div>
                <Badge count={count}>
                  <a href='#' className='head-example'/>
                </Badge>
                <ButtonGroup style={{ marginLeft: 25 }}>
                  <Button onClick={decrease}>
                    <Icon type='minus' />
                  </Button>
                  <Button onClick={increase}>
                    <Icon type='plus' />
                  </Button>
                </ButtonGroup>
              </div>
              <div style={{ marginTop: 10 }}>
                <Badge dot={visible}>
                  <a href='#' className='head-example' />
                </Badge>
                <Switch onChange={toggle} checked={visible} style={{ marginLeft: 25 }} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PageBadges;

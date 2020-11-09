import React, { CSSProperties, useEffect, useState } from 'react';
import { Avatar, Card, Icon, Skeleton, Switch } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

import user1 from '../../../assets/content/user-40-4.jpg';
import userCover from '../../../assets/content/card-cover-1.jpg';
import cardCover from '../../../assets/content/bg-card-1-420.jpg';

const { Meta } = Card;

const gridStyle: CSSProperties = {
  width: '25%',
  textAlign: 'center'
};

const tabList = [
  {
    key: 'tab1',
    tab: 'Tab1'
  },
  {
    key: 'tab2',
    tab: 'Tab2'
  }
];

const contentList = {
  tab1: <p>Content1</p>,
  tab2: <p>Content2</p>
};

const tabListNoTitle = [
  {
    key: 'article',
    tab: 'Article'
  },
  {
    key: 'app',
    tab: 'App'
  },
  {
    key: 'project',
    tab: 'Project'
  }
];

const contentListNoTitle = {
  article: <p>Article content</p>,
  app: <p>App content</p>,
  project: <p>Project content</p>
};

const PageCards: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Cards',
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
        title: 'Cards'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const [key, setKey] = useState('tab1');
  const [noTitleKey, setNoTitleKey] = useState('app');

  const onTabChange = (setter: (val: string) => void) => (key: string) => {
    setter(key);
  };

  const [loading, setLoading] = useState<boolean>(true);

  const handleSwitchChange = (checked: boolean) => setLoading(!checked);

  return (
    <>
      <h4 className='section-title'>Basic card</h4>

      <Card title='Card title' className='component-demo-card'>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter language='jsx' style={docco}>
          {"<Card title='Card title'>\n" +
            ' <p>Card content</p>\n' +
            ' <p>Card content</p>\n' +
            ' <p>Card content</p>\n' +
            '</Card>'}
        </SyntaxHighlighter>
      </Card>

      <h4 className='section-title'>Card grid</h4>

      <Card title='Card Title'>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
      </Card>

      <h4 className='section-title'>Inner cards</h4>

      <Card title='Card title'>
        <p
          style={{
            fontSize: 14,
            color: 'rgba(0, 0, 0, 0.85)',
            marginBottom: 16,
            fontWeight: 500
          }}>
          Group title
        </p>
        <Card type='inner' title='Inner Card title' extra={<a href='#'>More</a>}>
          Inner Card content
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type='inner'
          title='Inner Card title'
          extra={<a href='#'>More</a>}>
          Inner Card content
        </Card>
      </Card>

      <h4 className='section-title'>With tabs</h4>

      <Card
        style={{ width: '100%' }}
        title='Card title'
        extra={<a href='#'>More</a>}
        tabList={tabList}
        activeTabKey={key}
        onTabChange={onTabChange(setKey)}>
        {contentList[key]}
      </Card>

      <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={noTitleKey}
        onTabChange={onTabChange(setNoTitleKey)}>
        {contentListNoTitle[noTitleKey]}
      </Card>

      <div className='row'>
        <div className='col-md-4 col-sm-12'>
          <h4 className='section-title'>Content loading</h4>

          <Card loading={loading}>
            <p>
              Suspendisse lobortis dapibus nibh eu tincidunt. Nam egestas molestie purus vel
              suscipit.Donec viverra congue nisl vitae lobortis. Mauris neque eros, sollicitudin id
              consequat eget, ultricies at velit.
            </p>
          </Card>

          <Card actions={[<Icon type='setting' />, <Icon type='edit' />, <Icon type='ellipsis' />]}>
            <Skeleton loading={loading} avatar active>
              <Meta
                avatar={<Avatar src={user1} />}
                title='Card title'
                description='This is the description'
              />
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos, lobortis dapibus nibh.
              </p>
            </Skeleton>
          </Card>

          <Switch checked={!loading} onChange={handleSwitchChange} />
        </div>

        <div className='col-md-5 col-sm-12'>
          <h4 className='section-title'>Custom content configuration</h4>

          <Card
            className='mb-md-0'
            style={{ maxWidth: 420 }}
            cover={<img alt='example' src={cardCover} />}
            actions={[<Icon type='setting' />, <Icon type='edit' />, <Icon type='ellipsis' />]}>
            <Meta
              avatar={<Avatar src={user1} />}
              title='Card title'
              description='This is the description'
            />
          </Card>
        </div>

        <div className='col-md-3 col-sm-12'>
          <h4 className='section-title'>Custom content</h4>

          <Card
            className='mb-0'
            hoverable
            style={{ width: 240 }}
            cover={<img alt='example' src={userCover} />}>
            <Meta title='Croatia nature' description='www.instagram.com' />
          </Card>
        </div>
      </div>
    </>
  );
};

export default PageCards;

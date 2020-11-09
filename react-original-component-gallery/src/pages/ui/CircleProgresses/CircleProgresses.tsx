import React, { useEffect } from 'react';
import { Card, Progress } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const PageCircularProgresses: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Circular progresses',
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
        title: 'Circular progresses'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <Card title='Basic progress' className='component-demo-card'>
        <Progress type='circle' percent={30} />
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter language='jsx' style={docco}>
          {'<Progress type="circle" percent={30} />'}
        </SyntaxHighlighter>
      </Card>

      <Card title='Progress styles'>
        <div className='elem-list'>
          <Progress type='circle' percent={30} />
          <Progress type='circle' percent={50} status='active' />
          <Progress type='circle' percent={70} status='exception' />
          <Progress type='circle' percent={100} />
          <Progress type='circle' percent={50} />
        </div>
      </Card>

      <Card title='Dashboard style'>
        <div className='elem-list'>
          <Progress type='dashboard' percent={30} size='small' />
          <Progress type='dashboard' percent={50} size='small' status='active' />
          <Progress type='dashboard' percent={70} size='small' status='exception' />
          <Progress type='dashboard' percent={100} size='small' />
        </div>
      </Card>

      <Card title='Square linecaps'>
        <div className='elem-list'>
          <Progress type='circle' strokeLinecap='square' percent={30} status='exception' />
          <Progress type='circle' strokeLinecap='square' percent={50} status='active' />
          <Progress type='circle' strokeLinecap='square' percent={75} />
        </div>
      </Card>

      <Card title='Line gradient' className='mb-0'>
        <div className='elem-list'>
          <Progress
            type="circle"
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
            percent={90}
          />
          <Progress
            type="circle"
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
            percent={100}
          />
        </div>
      </Card>
    </>
  );
};

export default PageCircularProgresses;

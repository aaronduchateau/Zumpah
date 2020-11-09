import React, { useEffect } from 'react';
import { Card, Progress } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const PageProgresses: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Progresses',
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
        title: 'Progresses'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <Card title='Basic progress' className='component-demo-card'>
        <Progress percent={30} />
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter language='jsx' style={docco}>
          {'<Progress percent={30} />'}
        </SyntaxHighlighter>
      </Card>

      <Card title='Progress styles'>
        <Progress percent={30} />
        <Progress percent={50} status='active' />
        <Progress percent={70} status='exception' />
        <Progress percent={100} />
        <Progress percent={50} />
      </Card>

      <Card title='Small size'>
        <Progress percent={30} size='small' />
        <Progress percent={50} size='small' status='active' />
        <Progress percent={70} size='small' status='exception' />
        <Progress percent={100} size='small' />
      </Card>

      <Card title='Square linecaps'>
        <Progress strokeLinecap='square' percent={30} status='exception' />
        <Progress strokeLinecap='square' percent={50} status='active' />
        <Progress strokeLinecap='square' percent={75} />
      </Card>

      <Card title='Line gradient' className='mb-0'>
        <Progress
          strokeColor={{
            '0%': '#ed253d',
            '100%': '#cd5447'
          }}
          percent={99.9}
        />
        <Progress
          strokeColor={{
            from: '#108ee9',
            to: '#87d068'
          }}
          percent={99.9}
          status='active'
        />
      </Card>
    </>
  );
};

export default PageProgresses;

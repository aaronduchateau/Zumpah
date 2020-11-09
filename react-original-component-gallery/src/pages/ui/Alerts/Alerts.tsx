import React, { useEffect } from 'react';
import { Alert, Button, Card } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const PageAlerts: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Alerts',
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
        title: 'Alerts'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <Card title='Basic alert' className='component-demo-card'>
        <div className='elem-list'>
          <Alert message='This is Default alert. Lorem ipsum dolor sit amet.' type='info' />
        </div>
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter language='jsx' style={docco}>
          {'<Alert message=\'This is Default alert. Lorem ipsum dolor sit amet.\' type=\'info\' />'}
        </SyntaxHighlighter>
      </Card>

      <Card title='Alert styles'>
        <div className="elem-list">
          <Alert message='This is Default alert. Lorem ipsum dolor sit amet.' type='info' />
          <Alert message='This is Success alert. Lorem ipsum dolor sit amet.' type='success' />
          <Alert message='This is Warning alert. Lorem ipsum dolor sit amet.' type='warning' />
          <Alert message='This is Error alert. Lorem ipsum dolor sit amet.' type='error' />
        </div>
      </Card>

      <Card title='Removable alerts'>
        <div className="elem-list">
          <Alert closable message='This is Default alert. Lorem ipsum dolor sit amet.' type='info' />
          <Alert closable message='This is Success alert. Lorem ipsum dolor sit amet.' type='success' />
          <Alert closable message='This is Warning alert. Lorem ipsum dolor sit amet.' type='warning' />
          <Alert closable message='This is Error alert. Lorem ipsum dolor sit amet.' type='error' />
        </div>
      </Card>

      <Card title='With icons' className='mb-0'>
        <div className="elem-list">
          <Alert showIcon description='Lorem ipsum dolor sit amet.' message='This is Default alert' type='info' />
          <Alert showIcon description='Lorem ipsum dolor sit amet.' message='This is Success alert' type='success' />
          <Alert showIcon description='Lorem ipsum dolor sit amet.' message='This is Warning alert' type='warning' />
          <Alert showIcon description='Lorem ipsum dolor sit amet.' message='This is Error alert' type='error' />
        </div>
      </Card>
    </>
  );
};

export default PageAlerts;

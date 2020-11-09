import React, { useEffect, useState } from 'react';
import { Button, Card, Switch } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const PageSwitchers: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Switchers',
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
        title: 'Switchers'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const [disabled, setDisabled] = useState(false);

  const toggle = () => setDisabled(!disabled);

  return (
    <>
      <Card title='Basic switch' className='component-demo-card'>
        <Switch />
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter language='jsx' style={docco}>
          {'<Switch />'}
        </SyntaxHighlighter>
      </Card>

      <Card title='Basic switchers'>
        <div className='elem-list flex-column'>
          <Switch />
          <div className='field-with-label'>
            <Switch />
            <span className='label'>Switch label</span>
          </div>

          <div className='field-with-label'>
            <Switch defaultChecked />
            <span className='label'>Checked</span>
          </div>

          <div className='field-with-label'>
            <Switch disabled />
            <span className='label'>Disabled</span>
          </div>

          <div className='field-with-label'>
            <Switch defaultChecked disabled />
            <span className='label'>Checked </span>
          </div>
        </div>
      </Card>

      <Card title='Toggle disabled' className='mb-0'>
        <div className='elem-list flex-column'>
          <Switch disabled={disabled} defaultChecked />
          <br />
          <Button type='primary' onClick={toggle}>
            Toggle disabled
          </Button>
        </div>
      </Card>
    </>
  );
};

export default PageSwitchers;

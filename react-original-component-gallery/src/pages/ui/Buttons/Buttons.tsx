import React, { useEffect } from 'react';
import { Button, Card } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const ButtonGroup = Button.Group;

const PageButtons: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Buttons',
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
        title: 'Buttons'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <Card title='Default button' className='component-demo-card'>
        <div className='elem-list'>
          <Button type='primary'>Default button</Button>
        </div>
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter language='jsx' style={docco}>
          {"<Button type='primary'>Default button</Button>"}
        </SyntaxHighlighter>
      </Card>

      <Card title='Button shapes'>
        <div className='elem-list'>
          <Button type='primary' size='small'>
            Small button
          </Button>
          <Button type='primary'>Default button</Button>
          <Button type='primary' size='large'>
            Large button
          </Button>
        </div>
      </Card>

      <Card title='Button styles'>
        <div className='elem-list'>
          <Button type='primary'>Default</Button>
          <Button>Secondary</Button>
          <Button type='danger'>Danger</Button>
          <Button type='link'>Link</Button>
        </div>
      </Card>

      <Card title='Button loading'>
        <div className='elem-list'>
          <Button type='primary' loading>
            Loading
          </Button>
          <Button type='primary' size='small' loading>
            Loading
          </Button>
          <Button shape='circle' loading />
          <Button type='primary' shape='circle' loading />
        </div>
      </Card>

      <Card title='With icons'>
        <div className='elem-list'>
          <Button type='primary' shape='circle' icon='search' />
          <Button type='primary' icon='search'>
            Search
          </Button>
          <Button shape='circle' icon='search' />
          <Button icon='search'>Search</Button>
        </div>
      </Card>

      <Card title='Button groups'>
        <div className='elem-list'>
          <ButtonGroup>
            <Button type='primary'>Cancel</Button>
            <Button type='primary'>OK</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button disabled>L</Button>
            <Button disabled>M</Button>
            <Button disabled>R</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>L</Button>
            <Button>M</Button>
            <Button>R</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button type='primary' icon='cloud' />
            <Button type='primary' icon='cloud-download' />
          </ButtonGroup>
        </div>
      </Card>

      <Card title='Outline buttons' className='ghost-demo-card mb-0'>
        <div className='elem-list'>
          <Button type='primary' ghost>
            Default
          </Button>
          <Button ghost>Secondary</Button>
          <Button type='danger' ghost>
            Danger
          </Button>
          <Button type='link' ghost>
            Link
          </Button>
        </div>
      </Card>
    </>
  );
};

export default PageButtons;

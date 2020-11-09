import React, { useEffect } from 'react';
import { Card, Checkbox } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' }
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false }
];

const PageCheckboxes: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Checkboxes',
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
        title: 'Checkboxes'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <Card title='Basic checkbox' className='component-demo-card'>
        <Checkbox>Checkbox</Checkbox>
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter language='jsx' style={docco}>
          {'<Checkbox>Checkbox</Checkbox>'}
        </SyntaxHighlighter>
      </Card>

      <Card title='Checkbox group'>
        <Checkbox.Group options={plainOptions} defaultValue={['Apple']} />
        <br />
        <br />
        <Checkbox.Group options={options} defaultValue={['Pear']} />
        <br />
        <br />
        <Checkbox.Group
          options={optionsWithDisabled}
          disabled
          defaultValue={['Apple']}
        />
      </Card>

      <Card title='Disabled checkboxes' className='mb-0'>
        <Checkbox defaultChecked={false} disabled />
        <br />
        <Checkbox defaultChecked disabled />
      </Card>
    </>
  );
};

export default PageCheckboxes;

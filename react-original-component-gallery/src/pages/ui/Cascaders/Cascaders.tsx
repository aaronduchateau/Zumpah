import React, { useEffect, useState } from 'react';
import { Card, Cascader } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            code: 453400
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            code: 453400
          }
        ]
      }
    ]
  }
];

const PageCascaders: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Cascaders',
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
        title: 'Cascaders'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const [customText, setCustomText] = useState('Unselected');

  const handleChange = (value, selectedOptions) =>
    setCustomText(selectedOptions.map(o => o.label).join(', '));

  const filter = (inputValue, path) =>
    path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

  const handleAreaClick = (e, label, option) => e.stopPropagation();

  const displayRender = (labels, selectedOptions) =>
    labels.map((label, i) => {
      const option = selectedOptions[i];
      if (i === labels.length - 1) {
        return (
          <span key={option.value}>
            {label} (<a onClick={e => handleAreaClick(e, label, option)}>{option.code}</a>)
          </span>
        );
      }
      return <span key={option.value}>{label} / </span>;
    });

  return (
    <>
      <Card title='Basic cascader' className='component-demo-card'>
        <Cascader options={options} placeholder='Please select' />
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter language='jsx' style={docco}>
          {'<Cascader options={options} placeholder="Please select" />'}
        </SyntaxHighlighter>
      </Card>

      <Card title='Custom trigger'>
        <span>
          {customText}
          &nbsp;
          <Cascader options={options} onChange={handleChange}>
            <a href='#'>Change city</a>
          </Cascader>
        </span>
      </Card>

      <Card title='Cascaders sizes'>
        <Cascader placeholder='Large cascader' size='large' options={options} />
        <br />
        <br />
        <Cascader placeholder='Default cascader' options={options} />
        <br />
        <br />
        <Cascader placeholder='Small cascader' size='small' options={options} />
      </Card>

      <Card title='Options filter'>
        <Cascader options={options} placeholder='Please select' showSearch={{ filter }} />
      </Card>

      <Card title='Custom render'>
        <Cascader
          options={options}
          defaultValue={['zhejiang', 'hangzhou', 'xihu']}
          displayRender={displayRender}
        />
      </Card>

      <Card title='Option trigger by hover' className='mb-0'>
        <Cascader options={options} expandTrigger='hover' />
      </Card>
    </>
  );
};

export default PageCascaders;

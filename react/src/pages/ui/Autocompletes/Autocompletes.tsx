import React, { useEffect, useState } from 'react';
import { AutoComplete, Card, Icon, Input } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';
import Autocomplete from 'antd';

const { TextArea } = Input;

const PageAutocomplete: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Autocomplete',
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
        title: 'Autocomplete'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const [dataSource, setDataSource] = useState([]);

  const handleSearch = value =>
    setDataSource(!value ? [] : [value, value + value, value + value + value]);

  const handleSearchWithCount = (maxCount: number, setter) =>  (value: string) => {
    setter(maxCount - value.length);
    handleSearch(value);
  };

  const [charLeft1, setCharLen1 ] = useState(10);
  const [charLeft2, setCharLen2] = useState(20);

  const handleChange = (maxCount: number, setter: (val) => void) => event => {
    const charLeft = maxCount - event.target.value.length;
    setter(charLeft);
  };

  return (
    <>
      <Card title='Basic autocomplete' className='component-demo-card'>
        <AutoComplete dataSource={['Some', 'Data', 'To', 'Complete']} placeholder='Input here' />
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter>
          {'<AutoComplete\n' +
            " dataSource={['Some', 'Data', 'To', 'Complete']}\n" +
            " placeholder='Input here'\n" +
            '/>'}
        </SyntaxHighlighter>
      </Card>

      <Card title='Input sizes'>
        <AutoComplete dataSource={dataSource} onSearch={handleSearch}>
          <Input placeholder='input here' className='custom' size={'small'} />
        </AutoComplete>

        <br />
        <br />

        <AutoComplete dataSource={dataSource} onSearch={handleSearch}>
          <Input placeholder='input here' className='custom' size={'large'} />
        </AutoComplete>
      </Card>

      <Card title='With icons'>
        <AutoComplete dataSource={dataSource} onSearch={handleSearch}>
          <Input placeholder='input here' className='custom' prefix={<Icon type="book" />} />
        </AutoComplete>

        <br />
        <br />

        <AutoComplete dataSource={dataSource} onSearch={handleSearch}>
          <Input placeholder='input here' className='custom' suffix={<Icon type="edit" />} />
        </AutoComplete>
      </Card>

      <Card title={'Char limiting'} className='mb-0'>
        <AutoComplete dataSource={dataSource} onSearch={handleSearchWithCount(10, setCharLen1)}>
          <Input
            placeholder='10 char limit'
            maxLength={10}
            onChange={handleChange(10, setCharLen1)}
            prefix={<Icon type='font-size' />}
            suffix={<span style={{ color: 'rgba(0,0,0,.2)' }}>{charLeft1 || 0}</span>}
          />
        </AutoComplete>

        <br />
        <br />

        <AutoComplete dataSource={dataSource} onSearch={handleSearchWithCount(20, setCharLen2)}>
          <Input
            placeholder='20 char limit'
            maxLength={20}
            onChange={handleChange(20, setCharLen2)}
            prefix={<Icon type='edit' />}
            suffix={<span style={{ color: 'rgba(0,0,0,.2)' }}>{charLeft2 || 0}</span>}
          />
        </AutoComplete>
      </Card>
    </>
  );
};

export default PageAutocomplete;

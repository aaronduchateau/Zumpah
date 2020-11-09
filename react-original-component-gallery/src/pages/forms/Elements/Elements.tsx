import React, {useEffect, useState} from 'react';
import {Alert, AutoComplete, Button, Card, Checkbox, Icon, Input, Radio, Rate, Select, Switch, Tag} from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';
import { NavLink } from 'react-router-dom';

const { TextArea } = Input;
const { Option } = Select;

const options = [
  { label: 'Checkbox 1', value: '1' },
  { label: 'Checkbox 2', value: '2' },
  { label: 'Checkbox 3', value: '3' }
];

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px'
};

const PageFormElements: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Form elements',
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
        title: 'Form elements'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const [dataSource, setDataSource] = useState([]);

  const handleSearch = value =>
    setDataSource(!value ? [] : [value, value + value, value + value + value]);

  const [radioValue, setRadioValue] = useState(1);

  const handleRadioChange = e => setRadioValue(e.target.value);

  return (
    <>
      <Card title='Inputs'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <Input defaultValue='Value' placeholder='Enter your username' />
          </div>
          <div className='col-md-6 col-sm-12'>
            <Input
              defaultValue='With prefix'
              placeholder='Enter your username'
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          </div>
        </div>

        <Alert
          className='mt-4'
          type='info'
          message={''}
          showIcon
          description={
            <span>
              You can find more information about this component{' '}
              <NavLink to={'/vertical/inputs'}>on this page</NavLink>.
            </span>
          }
        />
      </Card>

      <Card title='Selects'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <Select defaultValue='lucy' placeholder='Select a person' optionFilterProp='children'>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
              <Option value='tom'>Tom</Option>
            </Select>
          </div>
          <div className='col-md-6 col-sm-12'>
            <Select
              defaultValue={['lucy']}
              placeholder='Select a person'
              optionFilterProp='children'
              mode='multiple'>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
              <Option value='tom'>Tom</Option>
            </Select>
          </div>
        </div>
        <Alert
          className='mt-4'
          type='info'
          message={''}
          showIcon
          description={
            <span>
              You can find more information about this component{' '}
              <NavLink to={'/vertical/selects'}>on this page</NavLink>.
            </span>
          }
        />
      </Card>

      <Card title='Autocompletes'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <AutoComplete dataSource={dataSource} onSearch={handleSearch}>
              <Input placeholder='input here' />
            </AutoComplete>
          </div>
          <div className='col-md-6 col-sm-12'>
            <AutoComplete dataSource={dataSource} onSearch={handleSearch}>
              <Input placeholder='input here' className='custom' prefix={<Icon type="book" />} />
            </AutoComplete>
          </div>
        </div>
        <Alert
          className='mt-4'
          type='info'
          message={''}
          showIcon
          description={
            <span>
              You can find more information about this component{' '}
              <NavLink to={'/vertical/autocompletes'}>on this page</NavLink>.
            </span>
          }
        />
      </Card>

      <Card title='Checkboxes'>
        <Checkbox.Group options={options} defaultValue={['1']} />

        <Alert
          className='mt-4'
          type='info'
          message={''}
          showIcon
          description={
            <span>
              You can find more information about this component{' '}
              <NavLink to={'/vertical/checkboxes'}>on this page</NavLink>.
            </span>
          }
        />
      </Card>

      <Card title='Radio'>
        <Radio.Group onChange={handleRadioChange} value={radioValue}>
          <Radio style={radioStyle} value={1}>
            First option
          </Radio>
          <Radio style={radioStyle} value={2}>
            Second option
          </Radio>
          <Radio style={radioStyle} value={3}>
            Third options
          </Radio>
          <Radio style={radioStyle} value={4}>
            Fourth options
          </Radio>
        </Radio.Group>

        <Alert
          className='mt-4'
          type='info'
          message={''}
          showIcon
          description={
            <span>
              You can find more information about this component{' '}
              <NavLink to={'/vertical/radio-buttons'}>on this page</NavLink>.
            </span>
          }
        />
      </Card>

      <Card title='Switchers'>
        <div className="elem-list flex-column">
          <div className='field-with-label'>
            <Switch />
            <span className='label'>Control 1</span>
          </div>

          <div className='field-with-label'>
            <Switch defaultChecked />
            <span className='label'>Control 2</span>
          </div>

          <div className='field-with-label'>
            <Switch disabled />
            <span className='label'>Control 3</span>
          </div>
        </div>

        <Alert
          className='mt-4'
          type='info'
          message={''}
          showIcon
          description={
            <span>
              You can find more information about this component{' '}
              <NavLink to={'/vertical/switchers'}>on this page</NavLink>.
            </span>
          }
        />
      </Card>

      <Card title='Buttons'>
        <div className="elem-list">
          <Button type='primary'>Default</Button>
          <Button>Secondary</Button>
          <Button type='danger'>Danger</Button>
          <Button type='link'>Link</Button>
        </div>

        <Alert
          className='mt-4'
          type='info'
          message={''}
          showIcon
          description={
            <span>
              You can find more information about this component{' '}
              <NavLink to={'/vertical/buttons'}>on this page</NavLink>.
            </span>
          }
        />
      </Card>

      <Card title='Tags'>
        <div className='elem-list'>
          <Tag color='magenta'>magenta</Tag>
          <Tag color='red'>red</Tag>
          <Tag color='volcano'>volcano</Tag>
          <Tag color='orange'>orange</Tag>
          <Tag color='gold'>gold</Tag>
          <Tag color='lime'>lime</Tag>
          <Tag color='green'>green</Tag>
          <Tag color='cyan'>cyan</Tag>
          <Tag color='blue'>blue</Tag>
          <Tag color='geekblue'>geekblue</Tag>
          <Tag color='purple'>purple</Tag>
        </div>

        <Alert
          className='mt-4'
          type='info'
          message={''}
          showIcon
          description={
            <span>
              You can find more information about this component{' '}
              <NavLink to={'/vertical/tags'}>on this page</NavLink>.
            </span>
          }
        />
      </Card>

      <Card title='Ratings' className='mb-0'>
        <Rate value={5} />

        <Alert
          className='mt-4'
          type='info'
          message={''}
          showIcon
          description={
            <span>
              You can find more information about this component{' '}
              <NavLink to={'/vertical/ratings'}>on this page</NavLink>.
            </span>
          }
        />
      </Card>
    </>
  );
};

export default PageFormElements;

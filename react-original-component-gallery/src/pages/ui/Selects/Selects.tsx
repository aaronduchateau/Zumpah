import React, { useEffect } from 'react';
import { Card, Select } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const { Option } = Select;

const optionFilter = (input, option) =>
  option.props.children
    .toString()
    .toLowerCase()
    .indexOf(input.toLowerCase()) >= 0;

const PageSelects: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Selects',
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
        title: 'Selects'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <div className='row'>
        <div className='col-md-12 col-lg-6'>
          <Card title='Single' className='component-demo-card'>
            <Select>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
              <Option value='disabled' disabled>
                Disabled
              </Option>
              <Option value='Yiminghe'>yiminghe</Option>
            </Select>
          </Card>
          <Card className='code-demo-card'>
            <SyntaxHighlighter language='jsx' style={docco}>
              {'<Select>\n' +
                " <Option value='jack'>Jack</Option>\n" +
                " <Option value='lucy'>Lucy</Option>\n" +
                " <Option value='disabled' disabled>Disabled</Option>\n" +
                " <Option value='Yiminghe'>yiminghe</Option>\n" +
                '</Select>'}
            </SyntaxHighlighter>
          </Card>
        </div>

        <div className='col-md-12 col-lg-6'>
          <Card title='Multiple' className='component-demo-card'>
            <Select mode='multiple'>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
              <Option value='disabled' disabled>
                Disabled
              </Option>
              <Option value='Yiminghe'>yiminghe</Option>
            </Select>
          </Card>
          <Card className='code-demo-card'>
            <SyntaxHighlighter language='jsx' style={docco}>
              {"<Select mode='multiple'>\n" +
                " <Option value='jack'>Jack</Option>\n" +
                " <Option value='lucy'>Lucy</Option>\n" +
                " <Option value='disabled' disabled>Disabled</Option>\n" +
                " <Option value='Yiminghe'>yiminghe</Option>\n" +
                '</Select>'}
            </SyntaxHighlighter>
          </Card>
        </div>
      </div>

      <Card title='Selected option'>
        <div className='row'>
          <div className='col-md-12 col-lg-6'>
            <Select
              className='mb-lg-0 mb-4'
              defaultValue='lucy'
              placeholder='Select a person'
              optionFilterProp='children'
              filterOption={optionFilter}>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
              <Option value='tom'>Tom</Option>
            </Select>
          </div>

          <div className='col-md-12 col-lg-6'>
            <Select
              defaultValue={['lucy']}
              placeholder='Select a person'
              optionFilterProp='children'
              mode='multiple'
              filterOption={optionFilter}>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
              <Option value='tom'>Tom</Option>
            </Select>
          </div>
        </div>
      </Card>

      <Card title='With clear'>
        <div className='row'>
          <div className='col-md-12 col-lg-6'>
            <Select
              allowClear
              defaultValue='lucy'
              className='mb-lg-0 mb-4'
              placeholder='Select a person'
              optionFilterProp='children'
              filterOption={optionFilter}>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
              <Option value='tom'>Tom</Option>
            </Select>
          </div>

          <div className='col-md-12 col-lg-6'>
            <Select
              allowClear
              defaultValue={['lucy']}
              placeholder='Select a person'
              optionFilterProp='children'
              mode='multiple'
              filterOption={optionFilter}>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
              <Option value='tom'>Tom</Option>
            </Select>
          </div>
        </div>
      </Card>

      <Card title='With option filter'>
        <div className='row'>
          <div className='col-md-12 col-lg-6'>
            <Select
              showSearch
              className='mb-lg-0 mb-4'
              placeholder='Select a person'
              optionFilterProp='children'
              filterOption={optionFilter}>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
              <Option value='tom'>Tom</Option>
            </Select>
          </div>

          <div className='col-md-12 col-lg-6'>
            <Select
              showSearch
              placeholder='Select a person'
              optionFilterProp='children'
              mode='multiple'
              filterOption={optionFilter}>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
              <Option value='tom'>Tom</Option>
            </Select>
          </div>
        </div>
      </Card>

      <Card title='Select sizes' className='mb-0'>
        <div className='row'>
          <div className='col-md-12 col-lg-6'>
            <Select size='small' placeholder='Select a person'>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
              <Option value='tom'>Tom</Option>
            </Select>
            <br />
            <br />
            <Select placeholder='Select a person'>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
              <Option value='tom'>Tom</Option>
            </Select>
            <br />
            <br />
            <Select size='large' placeholder='Select a person' className='mb-lg-0 mb-4'>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
              <Option value='tom'>Tom</Option>
            </Select>
          </div>

          <div className='col-md-12 col-lg-6'>
            <Select mode='multiple' size='small' placeholder='Select a person'>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
              <Option value='tom'>Tom</Option>
            </Select>
            <br />
            <br />
            <Select mode='multiple' placeholder='Select a person'>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
              <Option value='tom'>Tom</Option>
            </Select>
            <br />
            <br />
            <Select mode='multiple' size='large' placeholder='Select a person'>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
              <Option value='tom'>Tom</Option>
            </Select>
          </div>
        </div>
      </Card>
    </>
  );
};

export default PageSelects;

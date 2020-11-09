import React, { useEffect } from 'react';
import { Card, Divider, Table, Tag } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../interfaces/page-data';

import WithSelection from './tables/WithSelection';
import WithOperations from './tables/WithOperations';
import WithCustomSelection from './tables/WithCustomSelection';
import WithFilterAndSorting from './tables/WithFilterAndSorting';
import WithFilterReset from './tables/WithFilterReset';
import WithTableSize from './tables/WithTableSize';
import WithCustomOptions from './tables/WithCustomOptions';
import WithCollSpan from './tables/WithCollSpan';
import WithFixedColumns from './tables/WithFixedColumns';
import WithEditableCells from './tables/WithEditableCells';
import WithNestedTable from './tables/WithNestedTable';

const { Column } = Table;

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  },
  {
    key: '3',
    name: 'Bob',
    age: 28,
    address: '10 Downing Street'
  }
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }
];

const PageTables: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Tables',
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
        title: 'Tables'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <div className='row'>
        <div className='col-md-12 col-lg-6'>
          <Card title='Basic table' className='component-demo-card'>
            <Table pagination={false} dataSource={dataSource} columns={columns} />
          </Card>
          <Card className='code-demo-card'>
            <SyntaxHighlighter language='jsx' style={docco}>
              {'<Table pagination={false} dataSource={dataSource} columns={columns} />'}
            </SyntaxHighlighter>
          </Card>
        </div>
        <div className='col-md-12 col-lg-6'>
          <Card title='Jsx style' className='component-demo-card'>
            <Table pagination={false} dataSource={dataSource.slice(0, 2)}>
              <Column title='Name' dataIndex='name' key='name' />
              <Column title='Age' dataIndex='age' key='age' />
              <Column title='Address' dataIndex='address' key='address' />
            </Table>
          </Card>
          <Card className='code-demo-card'>
            <SyntaxHighlighter language='jsx' style={docco}>
              {'<Table pagination={false} dataSource={dataSource}>\n' +
                " <Column title='Name' dataIndex='name' key='name' />\n" +
                " <Column title='Age' dataIndex='age' key='age' />\n" +
                " <Column title='Address' dataIndex='address' key='address' />\n" +
                '</Table>'}
            </SyntaxHighlighter>
          </Card>
        </div>
      </div>

      <Card title='With selection'>
        <WithSelection />
      </Card>

      <Card title='With selection and operations'>
        <WithOperations />
      </Card>

      <Card title='With custom selection'>
        <WithCustomSelection />
      </Card>

      <Card title='With filters and sorting'>
        <WithFilterAndSorting />
      </Card>

      <Card title='With filters and sorting reset'>
        <WithFilterReset />
      </Card>

      <Card title='Table sizes'>
        <WithTableSize />
      </Card>

      <Card title='Bordered with header and footer'>
        <WithCustomOptions />
      </Card>

      <Card title='With colSpan and rowSpan'>
        <WithCollSpan />
      </Card>

      <Card title='With fixed columns and header'>
        <WithFixedColumns />
      </Card>

      <Card title='With editable cells'>
        <WithEditableCells />
      </Card>

      <Card title='With nested tables' className='mb-0'>
        <WithNestedTable />
      </Card>
    </>
  );
};

export default PageTables;

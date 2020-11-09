import React, { useEffect, useState } from 'react';

import uuid from 'uuid/v4';
import { Card, Icon, Table } from 'antd';
import { IPageData, IPageProps } from '../../../interfaces/page-data';

const columns = [
  {
    title: 'Icon',
    dataIndex: 'icon',
    key: 'icon',
    render: icon => <span style={{ fontSize: 50, color: '#1f2022' }} className={icon} />
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: date => (
      <div>
        <Icon type='clock-circle' /> {date}
      </div>
    )
  },
  {
    title: 'Recipient',
    dataIndex: 'recipient',
    key: 'recipient',
    render: recipient => <strong>{recipient}</strong>
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status =>
      status === 'Paid' ? (
        <span style={{ color: '#7cbd86' }}>
          <Icon type='check-circle' /> Paid
        </span>
      ) : (
        <span style={{ color: '#ed253d' }}>
          <Icon type='close-circle' /> Un-Paid
        </span>
      )
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount'
  }
];

const PageInvoices: React.FC<IPageProps> = props => {
  const { onSetPage, getPageData } = props;

  const [tableData, setTableData] = useState([]);

  const pageData: IPageData = {
    title: 'Invoices',
    loaded: true,
    breadcrumbs: [
      {
        title: 'Home',
        route: 'dashboard'
      },
      {
        title: 'Service Pages ',
        route: 'dashboard'
      },
      {
        title: 'Invoices'
      }
    ]
  };

  useEffect(() => {
    onSetPage(pageData);

    async function getData() {
      const result = await getPageData('./data/invoices.json ');
      setTableData(result);
    }

    getData().catch(err => console.error('Error fetching data', err));
  }, []);

  return (
    <>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <p style={{ color: '#a5a5a5' }} className='mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, dolorem excepturi facilis
            magni necessitatibus perspiciatis repellendus sunt veniam? A ad architecto aspernatur
            cupiditate dignissimos distinctio earum, eligendi eum iusto laboriosam maxime minima
            necessitatibus nemo nesciunt odio perferendis, quaerat qui quo repellendus sapiente.
          </p>
        </div>

        <div className='col-12 col-md-6'>
          <Card style={{ backgroundColor: '#dc877e', color: '#000' }}>
            <div className='row text-center align-items-center'>
              <div className='col-6'>
                <h6 className='mt-1 mb-1'>Amount received</h6>
                <strong style={{ fontSize: 20 }}>$35,570</strong>
              </div>

              <div className='col-6'>
                <h6 className='mt-1 mb-1'>Amount pending</h6>
                <strong style={{ fontSize: 20 }}>$2,540</strong>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className='mb-0' bodyStyle={{ padding: 0 }}>
        <Table
          rowKey={() => uuid()}
          pagination={{ style: { marginRight: 16 } }}
          columns={columns}
          dataSource={tableData}
        />
      </Card>
    </>
  );
};

export default PageInvoices;

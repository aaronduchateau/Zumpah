import React, { useEffect, useState } from 'react';
import { Button, Card, Icon, Table } from 'antd';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const senderName = 'Forrest Ray';
const senderAddress = '191-103 Integer Rd.';
const senderCity = 'Corona New Mexico 08219';
const senderFax = '(404) 960-3807';

const customerName = 'Richard Knight';
const customerAddress = '711-2880 Nulla St.';
const customerCity = 'Mankato Mississippi 96522';
const customerFax = '(257) 563-7401';

const invoiceDate = 'May 15, 2019';
const dueTo = 'May 20, 2019';

const PageInvoice: React.FC<IPageProps> = props => {
  const { onSetPage, getPageData } = props;

  const [invoice, setInvoice] = useState([]);

  const pageData: IPageData = {
    title: 'Invoice',
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
        title: 'Invoice'
      }
    ]
  };

  useEffect(() => {
    onSetPage(pageData);

    async function getData() {
      const result = await getPageData('./data/invoice.json ');
      getInvoiceTotal(result);
    }

    getData().catch(err => console.error('Error fetching data', err));
  }, []);

  const getInvoiceTotal = invoice => setInvoice(invoice);

  const invoiceTotal = invoice
    .map(el => (!isNaN(el.cost * el.quantity) ? el.cost * el.quantity : 0))
    .reduce((cost, acc) => acc + cost, 0);

  const vat = Math.floor(invoiceTotal / 10);

  const columns = [
    {
      title: '#',
      dataIndex: '#',
      key: '#'
    },
    {
      title: 'GROUP NAME',
      dataIndex: 'groupName',
      key: 'group',
      render: name =>
        name !== 'total' ? (
          name
        ) : (
          <div className='d-flex flex-column'>
            <div className='mb-2'>
              <span className='w-50 mr-4'>Subtotal</span>
              <span>${invoiceTotal}</span>
            </div>

            <div>
              <span className='w-50 mr-4'>Vat</span>
              <span>${vat}</span>
            </div>
          </div>
        )
    },
    {
      title: 'QUANTITY',
      dataIndex: 'quantity',
      key: 'qnt',
    },
    {
      title: 'COST',
      dataIndex: 'cost',
      key: 'cost',
      render: cost => (cost !== 'total' ? '$' + cost : 'Total')
    },
    {
      title: 'Total',
      key: 'total',
      render: ({ total, quantity, cost }) =>
        !total ? `$${quantity * cost}` : <span style={{ fontSize: 30 }}>${invoiceTotal + vat}</span>
    }
  ];

  return (
    <>
      <Card className='mb-0'>
        <div className='title-box'>
          <h3 className='title' style={{ fontSize: 26 }}>Invoice #INV-17</h3>
        </div>

        <hr />

        <div className='row info-block'>
          <div className='col-md-3 col-sm-6 col-12'>
            <div className='sender'>
              <h5 className='title'>Invoice from</h5>

              <div className='info'>
                <span className='info-label'>{senderName}</span>
                <br />
                <span className='info-label'>{senderAddress}</span> <br />
                <span className='info-label'>{senderCity}</span> <br />
                <span className='info-label'>{senderFax}</span>
              </div>
            </div>
          </div>

          <div className='col-md-3 col-sm-6 col-12'>
            <h5 className='title'>Invoice to</h5>

            <div className='info'>
              <span className='info-label'>{customerName}</span>
              <br />
              <span className='info-label'>{customerAddress}</span> <br />
              <span className='info-label'>{customerCity}</span> <br />
              <span className='info-label'>{customerFax}</span>
            </div>
          </div>

          <div className='col-md-3 col-sm-6 col-12'>
            <h5 className='title'>Invoice Date</h5>

            <div className='info'>
              <span className='info-label'>{invoiceDate}</span>
            </div>
          </div>

          <div className='col-md-3 col-sm-6 col-12'>
            <h5 className='title'>Due to</h5>

            <div className='info'>
              <span className='info-label'>{dueTo}</span>
            </div>
          </div>
        </div>

        <Table columns={columns} dataSource={invoice} pagination={false} className='my-4' />

        <div className='d-flex align-items-center justify-content-end elem-list w-100'>
          <a href=''>
            <Icon className='print-icon' type='printer' style={{ fontSize: 25 }} />
          </a>
          <Button>Send invoice</Button>
        </div>
      </Card>
    </>
  );
};

export default PageInvoice;

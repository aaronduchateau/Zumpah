import React, {useEffect, useRef, useState} from 'react';

import uuid from 'uuid/v4';
import ReactEcharts from 'echarts-for-react';
import { Alert, Avatar, Button, Card, List, Progress, Select, Table, Tag } from 'antd';

import revenueChart from './charts/revenueChart';
import salesChart from './charts/salesChart';

import AvatarGroup from '../../../ui/components/AvatarGroup/AvatarGroup';

import { IPageData, IPageProps } from '../../../interfaces/page-data';
const columns: any[] = [
  {
    title: 'ID',
    dataIndex: 'order',
    key: 'order',
    render: order => <span style={{ opacity: 0.6 }}>{order}</span>
  },
  {
    title: 'Team',
    dataIndex: 'imgs',
    key: 'team',
    render: imgs => {
      return (
        <AvatarGroup>
          {imgs.map((img, i) => (
            <Avatar key={i} size={60} src={window.location.origin + img} />
          ))}
        </AvatarGroup>
      );
    }
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: val => <strong className='nowrap'>{val}</strong>
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: date => <span className='nowrap' style={{ opacity: 0.6 }}>{date}</span>
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status => {
      let color = '';
      let label = '';

      switch (status) {
        case 'info':
          color = '#2fa7ff';
          label = 'PENDING';
          break;
        case 'warning':
          color = '#fc8b37';
          label = 'SENT';
          break;
        default:
          color = '#7cdb86';
          label = 'SUCCESS';
      }

      return (
        <Tag style={{ color: '#fff' }} color={color}>
          {label}
        </Tag>
      );
    }
  }
];

const renderBadge = (type: string) => {
  let color = '';
  let label = '';

  switch (type) {
    case 'info':
      color = '#2fa7ff';
      label = 'NEW';
      break;
    case 'warning':
      color = '#fc8b37';
      label = 'TOP';
      break;
    case 'error':
      color = '#ed253d';
      label = 'BEST';
      break;
    default:
      color = '#f8e71c';
      label = 'HIGH';
  }

  return (
    <Tag style={{ color: '#fff' }} color={color}>
      {label}
    </Tag>
  );
}

const topProducts = [
  { img: '/content/product-60-1.jpg', name: 'Iphone 10', badge: 'warning' },
  { img: '/content/product-60-2.jpg', name: 'Samsung galaxy S10', badge: 'info' },
  { img: '/content/product-60-3.jpg', name: 'IMac Pro', badge: 'error' },
  { img: '/content/product-60-4.jpg', name: 'Canon EOS M50', badge: 'high' }
];
const renderProductItem = ({ img, name, badge }, i) => (
  <div className={i !== 0 ? 'd-flex align-items-center mt-4' : 'd-flex align-items-center'}>
    <Avatar size={60} src={window.location.origin + img} className='mr-4' />
    <div style={{ flex: 1 }} className='d-flex flex-column justify-content-between'>
      <span style={{ fontSize: '1.2em', fontWeight: 700 }}>{name}</span>

      <div className='elem-list sm justify-content-between flex-wrap flex-grow-1'>
        <span>{badge}</span>
        {renderBadge(badge)}
      </div>
    </div>
  </div>
);

const PageECommerce: React.FunctionComponent<IPageProps> = props => {
  const { onSetPage, getPageData } = props;
  const [tableData, setTableData] = useState([]);

  const pageData: IPageData = {
    title: 'eCommerce',
    loaded: false,
    breadcrumbs: [
      {
        title: 'Home',
        route: 'dashboard'
      },
      {
        title: 'eCommerce'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  useEffect(() => {
    getPageData('./data/recent-orders.json').then(data => (setTableData(data)));
  }, []);

  return (
    <>
      <div className='row'>
        <div className='col col-12 col-xl-6'>
          <div className='row'>
            <div className='col col-12 col-md-6'>
              <Card
                className='animated fadeIn delay-01s'
                style={{ backgroundColor: '#fff', border: '1px solid #7cdb86' }}>
                <div className='row pt-2'>
                  <div className='col col-7'>
                    <h6 className='mt-0 mb-1 nowrap' style={{ color: 'rgba(114,132,154,0.7)' }}>
                      Sales
                    </h6>
                    <div className='count' style={{ fontSize: 20 }}>
                      <strong>$30,845</strong>
                    </div>
                  </div>

                  <div className='col col-5 pt-2 text-right'>
                    <Tag
                      style={{
                        backgroundColor: 'rgba(124,219,134,0.2)',
                        color: '#7cdb86',
                        borderRadius: 500,
                        borderColor: 'transparent'
                      }}>
                      <span style={{ fontSize: 14 }} className='icofont-arrow-up' />
                      7.25%
                    </Tag>
                  </div>
                </div>
                <div
                  className='label-block d-flex justify-content-between mt-4'
                  style={{ fontSize: '0.8em' }}>
                  <span className='label'>Monthly goal</span>
                  <span style={{ opacity: 0.8 }} className='value'>
                    63%
                  </span>
                </div>
                <Progress percent={63} showInfo={false} status='success' />
              </Card>
            </div>

            <div className='col col-12 col-md-6'>
              <Card
                className='animated fadeIn delay-01s'
                style={{ backgroundColor: '#fff', border: '1px solid #fc8b37' }}>
                <div className='row pt-2'>
                  <div className='col col-7'>
                    <h6 className='mt-0 mb-0 nowrap' style={{ color: 'rgba(114,132,154,0.7)' }}>
                      Orders
                    </h6>
                    <div className='count' style={{ fontSize: 20 }}>
                      <strong>957</strong>
                    </div>
                  </div>

                  <div className='col col-5 pt-2 text-right'>
                    <Tag
                      style={{
                        backgroundColor: 'rgba(237,37,61,0.2)',
                        color: '#ed253d',
                        borderRadius: 500,
                        borderColor: 'transparent'
                      }}>
                      <span style={{ fontSize: 14 }} className='icofont-arrow-down' />
                      2.25%
                    </Tag>
                  </div>
                </div>
                <div
                  className='label-block d-flex justify-content-between mt-4'
                  style={{ fontSize: '0.8em' }}>
                  <span className='label'>Monthly goal</span>
                  <span style={{ opacity: 0.8 }} className='value'>
                    75%
                  </span>
                </div>
                <Progress percent={75} showInfo={false} />
              </Card>
            </div>

            <div className='col col-12 col-md-6'>
              <Card
                className='animated fadeIn delay-01s'
                style={{ backgroundColor: '#fff', border: '1px solid #ed253d' }}>
                <div className='row pt-2'>
                  <div className='col col-7'>
                    <h6 className='mt-0 mb-0 nowrap' style={{ color: 'rgba(114,132,154,0.7)' }}>
                      Margin
                    </h6>
                    <div className='count' style={{ fontSize: 20 }}>
                      <strong>$6,762</strong>
                    </div>
                  </div>

                  <div className='col col-5 pt-2 text-right'>
                    <Tag
                      style={{
                        backgroundColor: 'rgba(124,219,134,0.2)',
                        color: '#7cdb86',
                        borderRadius: 500,
                        borderColor: 'transparent'
                      }}>
                      <span style={{ fontSize: 14 }} className='icofont-arrow-up' />
                      10.25%
                    </Tag>
                  </div>
                </div>
                <div
                  className='label-block d-flex justify-content-between mt-4'
                  style={{ fontSize: '0.8em' }}>
                  <span className='label'>Monthly goal</span>
                  <span style={{ opacity: 0.8 }} className='value'>
                    94%
                  </span>
                </div>
                <Progress percent={94} showInfo={false} status='exception' />
              </Card>
            </div>

            <div className='col col-12 col-md-6'>
              <Card
                className='animated fadeIn delay-01s'
                style={{ backgroundColor: '#fff', border: '1px solid #2fa7ff' }}>
                <div className='row pt-2'>
                  <div className='col col-7'>
                    <h6 className='mt-0 mb-0 nowrap' style={{ color: 'rgba(114,132,154,0.7)' }}>
                      Affiliate
                    </h6>
                    <div className='count' style={{ fontSize: 20 }}>
                      <strong>$30,845</strong>
                    </div>
                  </div>

                  <div className='col col-5 pt-2 text-right'>
                    <Tag
                      style={{
                        backgroundColor: 'rgba(252,139,55,0.2)',
                        color: '#fc8b37',
                        borderRadius: 500
                      }}>
                      N/A
                    </Tag>
                  </div>
                </div>
                <div
                  className='label-block d-flex justify-content-between mt-4'
                  style={{ fontSize: '0.8em' }}>
                  <span className='label'>Monthly goal</span>
                  <span style={{ opacity: 0.8 }} className='value'>
                    86%
                  </span>
                </div>
                <Progress percent={86} showInfo={false} status='active' />
              </Card>
            </div>
          </div>
        </div>

        <div className='col col-12 col-xl-6'>
          <Card title='Sales statistics'>
            <ReactEcharts option={salesChart} className='chart-container container-h-250' />
          </Card>
        </div>

        <div className='col col-12 col-xl-8'>
          <Card title='Revenue'>
            <div className='row mb-3'>
              <div className='col mb-2'>
                <h6 className='mt-0 mb-0 nowrap' style={{ color: '#2fa7ff' }}>
                  Net Revenue
                </h6>
                <div className='count' style={{ fontSize: 16 }}>
                  <strong className='mr-2'>49,845</strong>
                  <Tag
                    color='rgba(124,219,134,0.2)'
                    style={{ color: '#7cdb86', fontSize: 14, border: 'none' }}>
                    <span className='icofont-arrow-up' style={{ fontSize: 14 }} />
                  </Tag>
                </div>
              </div>

              <div className='col mb-2'>
                <h6 className='mt-0 mb-0 nowrap' style={{ color: '#fc8b37' }}>
                  Selling
                </h6>
                <div className='count' style={{ fontSize: 16 }}>
                  <strong className='mr-2'>49,845</strong>
                  <Tag color='rgba(237,37,61,0.2)' style={{ color: '#ed253d', fontSize: 14 }}>
                    <span className='icofont-arrow-down' style={{ fontSize: 14 }} />
                    7.24%
                  </Tag>
                </div>
              </div>

              <div className='col mb-2'>
                <h6 className='mt-0 mb-0 nowrap' style={{ color: '#f741b5' }}>
                  Cost
                </h6>
                <div className='count' style={{ fontSize: 16 }}>
                  <strong className='mr-2'>49,845</strong>
                  <Tag color='rgba(247,65,181,0.2)' style={{ color: '#f741b5', fontSize: 14 }}>
                    <span className='icofont-check-alt' style={{ fontSize: 14 }} />
                    3.87%
                  </Tag>
                </div>
              </div>
            </div>

            <ReactEcharts option={revenueChart} className='chart-container container-h-250' />
          </Card>
        </div>

        <div className='col col-12 col-xl-4'>
          <Card title='Top products'>
            <List dataSource={topProducts} renderItem={renderProductItem} />
          </Card>
        </div>
      </div>

      <Card title='Recent orders' className='mb-0' bodyStyle={{ padding: 0 }}>
        {tableData && <Table rowKey={() => uuid()} pagination={false} columns={columns} dataSource={tableData} />}
      </Card>
    </>
  );
};

export default PageECommerce;

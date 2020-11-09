import React, { useEffect, useState } from 'react';

import uuid from 'uuid/v4';
import { IPageData, IPageProps } from '../../../interfaces/page-data';
import { Avatar, Button, Card, Progress, Rate, Table, Tag, Timeline } from 'antd';

import userCover from '../../../assets/content/user-profile.jpg';
import userAvatar from '../../../assets/content/user-400-1.jpg';

import User from '../../../layouts/components/User/User';

const skils = [
  'HTML',
  'PHP',
  'CSS',
  'SCSS',
  'ANGUlAR',
  'REACT',
  'VUE.JS',
  'JAVASCRIPT',
  'TYPESCRIPT'
];

const columns = [
  {
    title: 'User',
    key: 'user',
    render: ({ img, person }) => {
      return (
        <div className='person-block d-flex align-items-center' key={person + img}>
          <Avatar
            className='mr-3'
            style={{ minWidth: 36, minHeight: 36 }}
            src={window.location.origin + img}
          />
          <span>{person}</span>
        </div>
      );
    }
  },
  {
    title: 'Order',
    dataIndex: 'order',
    key: 'order'
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
    render: text => <span className='nowrap'>{text}</span>
  },
  {
    title: 'Page',
    dataIndex: 'page',
    key: 'page',
    render: (link, record, index) => (
      <a className='nowrap' key={index} href={link}>
        Link to page
      </a>
    )
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status, record, index) => {
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
        <Tag key={index} style={{ color: '#fff' }} color={color}>
          {label}
        </Tag>
      );
    }
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: price => `#${price}`
  },
  {
    title: 'Left',
    dataIndex: 'left',
    key: 'left'
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
};

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

const users = [
  {
    bg: '/content/bg-card-2.jpg',
    name: 'Anna Smith',
    role: 'Manager',
    img: '/content/user-76-2.jpg'
  },
  {
    bg: '/content/bg-card-3.jpg',
    name: 'Barbara  Jones',
    role: 'Designer',
    img: '/content/user-76-3.jpg'
  },
  {
    bg: '/content/bg-card-4.jpg',
    name: 'Daisy Anderson',
    role: 'Software engineer',
    img: '/content/user-76-4.jpg'
  }
];

const PageWidgets: React.FunctionComponent<IPageProps> = props => {
  const { onSetPage, getPageData } = props;
  const [tableData, setTableData] = useState([]);
  const pageData: IPageData = {
    title: 'Widgets',
    loaded: false,
    breadcrumbs: [
      {
        title: 'Home',
        route: 'dashboard'
      },
      {
        title: 'Widgets'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  useEffect(() => {
    getPageData('./data/table.json').then(setTableData );
  }, []);

  return (
    <>
      <div className='row'>
        <div className='col col-12 col-md-6 col-xl-3'>
          <Card>
            <div className='row align-items-center pt-2'>
              <div className='col col-auto'>
                <span
                  className='icofont-dollar-plus'
                  style={{
                    borderRadius: 500,
                    fontSize: 20,
                    padding: 25,
                    color: '#805aff',
                    backgroundColor: 'rgba(110,64,216,0.2)'
                  }}
                />
              </div>

              <div className='col col-auto'>
                <div className='count' style={{ fontSize: 20 }}>
                  <strong>$30,845</strong>
                </div>
                <h6 className='mt-1 mb-0 nowrap' style={{ color: '#805aff' }}>
                  Profit
                </h6>
              </div>
            </div>
          </Card>
        </div>

        <div className='col col-12 col-md-6 col-xl-3'>
          <Card>
            <div className='row align-items-center pt-2'>
              <div className='col col-auto'>
                <span
                  className='icofont-chart-growth'
                  style={{
                    borderRadius: 500,
                    fontSize: 20,
                    padding: 25,
                    color: '#fc8b37',
                    backgroundColor: 'rgba(252,139,55,0.2)'
                  }}
                />
              </div>

              <div className='col col-auto'>
                <div className='count' style={{ fontSize: 20 }}>
                  <strong>+24,17%</strong>
                </div>
                <h6 className='mt-1 mb-0 nowrap' style={{ color: '#fc8b37' }}>
                  Growth
                </h6>
              </div>
            </div>
          </Card>
        </div>

        <div className='col col-12 col-md-6 col-xl-3'>
          <Card>
            <div className='row align-items-center pt-2'>
              <div className='col col-auto'>
                <span
                  className='icofont-cart'
                  style={{
                    borderRadius: 500,
                    fontSize: 20,
                    padding: 25,
                    color: '#f741b5',
                    backgroundColor: 'rgba(247,65,181,0.2)'
                  }}
                />
              </div>

              <div className='col col-auto'>
                <div className='count' style={{ fontSize: 20 }}>
                  <strong>2,584</strong>
                </div>
                <h6 className='mt-1 mb-0 nowrap' style={{ color: '#f741b5' }}>
                  Orders
                </h6>
              </div>
            </div>
          </Card>
        </div>

        <div className='col col-12 col-md-6 col-xl-3'>
          <Card>
            <div className='row align-items-center pt-2'>
              <div className='col col-auto'>
                <span
                  className='icofont-users-social'
                  style={{
                    borderRadius: 500,
                    fontSize: 20,
                    padding: 25,
                    color: '#2fa7ff',
                    backgroundColor: 'rgba(47,167,255,0.2)'
                  }}
                />
              </div>

              <div className='col col-auto'>
                <div className='count' style={{ fontSize: 20 }}>
                  <strong>$30,845</strong>
                </div>
                <h6 className='mt-1 mb-0 nowrap' style={{ color: '#2fa7ff' }}>
                  Customers
                </h6>
              </div>
            </div>
          </Card>
        </div>

        <div className='col col-12 col-md-6 col-xl-3'>
          <Card
            className='animated zoomIn delay-01s'
            style={{ backgroundColor: 'rgba(119,27,189,0.1)' }}>
            <div className='row align-items-center pt-2'>
              <div className='col col-auto'>
                <span
                  className='icofont-handshake-deal'
                  style={{
                    color: 'rgba(119,27,189,0.5)',
                    fontSize: 48,
                    padding: 0
                  }}
                />
              </div>

              <div className='col col-7'>
                <h6 className='mt-0 mb-1 nowrap'>Appointments</h6>
                <div className='count' style={{ fontSize: 20, color: '#771bbd' }}>
                  329
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col col-12 col-md-6 col-xl-3'>
          <Card
            className='animated zoomIn delay-02s'
            style={{ backgroundColor: 'rgba(252,139,55,0.1)' }}>
            <div className='row align-items-center pt-2'>
              <div className='col col-auto'>
                <span
                  className='icofont-credit-card'
                  style={{
                    color: 'rgba(252,139,55,0.5)',
                    fontSize: 48,
                    padding: 0
                  }}
                />
              </div>

              <div className='col col-7'>
                <h6 className='mt-0 mb-1 nowrap'>Sales</h6>
                <div className='count' style={{ fontSize: 20, color: '#fc8b37' }}>
                  36
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col col-12 col-md-6 col-xl-3'>
          <Card
            className='animated zoomIn delay-03s'
            style={{ backgroundColor: 'rgba(247,65,181,0.1)' }}>
            <div className='row align-items-center pt-2'>
              <div className='col col-auto'>
                <span
                  className='icofont-users-alt-1'
                  style={{
                    color: 'rgba(247,65,181,0.5)',
                    fontSize: 48,
                    padding: 0
                  }}
                />
              </div>

              <div className='col col-7'>
                <h6 className='mt-0 mb-1 nowrap'>New users</h6>
                <div className='count' style={{ fontSize: 20, color: '#f741b5' }}>
                  154
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col col-12 col-md-6 col-xl-3'>
          <Card
            className='animated zoomIn delay-04s'
            style={{ backgroundColor: 'rgba(47,167,255,0.1)' }}>
            <div className='row align-items-center pt-2'>
              <div className='col col-auto'>
                <span
                  className='icofont-money'
                  style={{
                    color: 'rgba(47,167,255,0.5)',
                    fontSize: 48,
                    padding: 0
                  }}
                />
              </div>

              <div className='col col-7'>
                <h6 className='mt-0 mb-1 nowrap'>Income</h6>
                <div className='count' style={{ fontSize: 20, color: '#2fa7ff' }}>
                  $9238
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className='row'>
        <div className='col-12 col-md-6 col-sm-12'>
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

        <div className='col-12 col-md-6 col-sm-12'>
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

        <div className='col-12 col-md-6 col-sm-12'>
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

        <div className='col-12 col-md-6 col-sm-12'>
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

      <div className='row'>
        <div className='col-xl-3 col-sm-12'>
          <Card>
            <div className='widget-card d-flex flex-column justify-content-center align-items-center'>
              <Progress
                type='circle'
                strokeColor={{
                  '25%': '#6ec8ff',
                  '65%': '#b3589c',
                  '100%': '#9d5ce5'
                }}
                percent={84}
              />

              <div className='info'>
                <h6 className='title mb-0'>Server load</h6>

                <div className='desc text-center'>Operations run according to general amount</div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col-xl-3 col-sm-12'>
          <Card>
            <div className='widget-card d-flex flex-column justify-content-center align-items-center'>
              <span
                className='mb-3 icofont-color-picker'
                style={{
                  borderRadius: 500,
                  fontSize: 20,
                  padding: 25,
                  color: '#6e40d8',
                  backgroundColor: 'rgba(110,64,216, .2)'
                }}
              />

              <div className='info text-center'>
                <span className='title' style={{ fontSize: 40 }}>
                  15.2k
                </span>

                <div style={{ fontSize: 16 }} className='desc mb-2'>
                  <span className='desc font-weight-bold'>Followers</span>
                </div>

                <p style={{ color: '#7ed321' }}>
                  <i className='icofont-caret-up ' />
                  98,5%
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className='col-xl-3 col-lg-6 col-sm-12'>
          <div className='row'>
            <div className='col-12'>
              <Card>
                <div className='mb-4' style={{ fontSize: 40 }}>
                  $34.4k
                </div>

                <div className='info'>
                  <span className='title'>Sales</span> <br />
                  <span className='desc'>Operations run according to general amount</span>
                </div>
              </Card>
            </div>

            <div className='col-12'>
              <Card>
                <div className='mb-4' style={{ fontSize: 40 }}>
                  2.1k
                </div>

                <div className='info'>
                  <span className='title'>Orders</span> <br />
                  <span className='desc'>Operations run according to general amount</span>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className='col-xl-3 col-lg-6 col-sm-12'>
          <Card
            style={{
              backgroundImage:
                'linear-gradient(215deg, rgb(205, 84, 71), rgb(179, 88, 156) 65%, rgb(157, 92, 229))'
            }}>
            <div
              className='widget-card d-flex flex-column justify-content-center align-items-center'
              style={{ color: '#fff' }}>
              <span
                className='mb-3 mt-auto icofont-color-picker'
                style={{
                  borderRadius: 500,
                  fontSize: 20,
                  padding: 25,
                  color: '#f8e71c',
                  backgroundColor: 'rgba(74,74,74, .15)'
                }}
              />

              <div className='info text-center mb-auto' style={{ color: '#fff' }}>
                <div style={{ fontSize: 16 }} className='desc mb-2'>
                  <span className='desc'>San Francisco</span>
                </div>

                <span className='title' style={{ fontSize: 40, color: '#fff' }}>
                  -5&#176;
                </span>
              </div>

              <div className='w-100 align-self-end d-flex d-flex justify-content-between'>
                <div
                  className='d-flex align-items-center justify-content-between'
                  style={{ fontSize: 12 }}>
                  <span
                    className='icofont-water-drop mr-2'
                    style={{ color: '#f8e71c', fontSize: 20 }}
                  />
                  98,5%
                </div>

                <div
                  className='d-flex align-items-center justify-content-between'
                  style={{ fontSize: 12 }}>
                  98,5%
                </div>

                <div
                  className='d-flex align-items-center justify-content-between'
                  style={{ fontSize: 12 }}>
                  <span
                    className='icofont-paper-plane mr-2'
                    style={{ color: '#f8e71c', fontSize: 20 }}
                  />
                  98,5%
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <Card>
            <div className='title-box'>
              <h5 className='title'>Tickets overview</h5>
            </div>
            <div className='d-flex justify-content-center align-items-center mb-5 mt-2'>
              <div className='d-lg-flex flex-column d-none mr-auto' style={{ fontSize: 13 }}>
                <span className='card-label'>Completed</span>
                <span>78,661</span>
              </div>
              <Progress
                type='dashboard'
                width={142}
                percent={80}
                strokeColor={{
                  '25%': '#6ec8ff',
                  '65%': '#b3589c',
                  '100%': '#9d5ce5'
                }}
              />

              <div className='d-lg-flex flex-column d-none ml-auto' style={{ fontSize: 13 }}>
                <span className='card-label'>Left</span>
                <span>1,356</span>
              </div>
            </div>
            <div className='button-group'>
              <button className='btn active no-style'>Today</button>
              <button className='btn disabled no-style'>Last Week</button>
            </div>
          </Card>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card
            className='mb-md-0'
            title={
              <div className='title-box' style={{ fontSize: 14 }}>
                <h5 className='title mb-1'>Performance</h5>
                <span className='sub-title'>Operations run according to general amount</span>
              </div>
            }>
            <div className='d-flex flex-column justify-content-end pt-5'>
              <div
                className='label-block d-flex justify-content-between'
                style={{ fontSize: '0.9em' }}>
                <span className='label'>Angular</span>
                <span style={{ opacity: 0.8 }} className='value'>
                  35%
                </span>
              </div>
              <Progress percent={30} showInfo={false} />

              <div
                className='label-block d-flex justify-content-between mt-2'
                style={{ fontSize: '0.8em' }}>
                <span className='label'>Html</span>
                <span style={{ opacity: 0.8 }} className='value'>
                  50%
                </span>
              </div>
              <Progress percent={50} showInfo={false} status='active' />

              <div
                className='label-block d-flex justify-content-between mt-2'
                style={{ fontSize: '0.8em' }}>
                <span className='label'>JavaScript</span>
                <span style={{ opacity: 0.8 }} className='value'>
                  65%
                </span>
              </div>
              <Progress percent={65} showInfo={false} status='exception' />

              <div
                className='label-block d-flex justify-content-between mt-2'
                style={{ fontSize: '0.8em' }}>
                <span className='label'>React</span>
                <span style={{ opacity: 0.8 }} className='value'>
                  80%
                </span>
              </div>
              <Progress percent={80} showInfo={false} status='success' />
            </div>
          </Card>
        </div>

        <div className='col col-12 col-md-6'>
          <Card title=' Websites & social channel'>
            <div className='row align-items-center mb-3'>
              <div className='col col-auto'>
                <span className='icofont-github' style={{ fontSize: 30, color: '#24292e' }} />
              </div>
              <div className='col'>
                <div>Github</div>
                <a href='#' onClick={e => e.preventDefault()}>
                  github.com/liam-jouns
                </a>
              </div>
            </div>

            <div className='row align-items-center mb-3'>
              <div className='col col-auto'>
                <span className='icofont-twitter' style={{ fontSize: 30, color: '#1da1f2' }} />
              </div>
              <div className='col'>
                <div>Twitter</div>
                <a href='#' onClick={e => e.preventDefault()}>
                  twitter.com/liam-jouns
                </a>
              </div>
            </div>

            <div className='row align-items-center mb-3'>
              <div className='col col-auto'>
                <span className='icofont-linkedin' style={{ fontSize: 30, color: '#0073b1' }} />
              </div>
              <div className='col'>
                <div>LinkedIn</div>
                <a href='#' onClick={e => e.preventDefault()}>
                  linkedin.com/liam-jouns
                </a>
              </div>
            </div>

            <div className='row align-items-center mb-3'>
              <div className='col col-auto'>
                <span className='icofont-youtube' style={{ fontSize: 30, color: '#ff0000' }} />
              </div>
              <div className='col'>
                <div>YouTube</div>
                <a href='#' onClick={e => e.preventDefault()}>
                  youtube.com/liam-jouns
                </a>
              </div>
            </div>
          </Card>
        </div>

        <div className='col-12 col-md-6'>
          <Card title=' Contact information'>
            <div className='row align-items-center mb-3'>
              <div className='col col-auto'>
                <span
                  className='icofont-ui-touch-phone'
                  style={{ fontSize: 30, color: '#8f8f90' }}
                />
              </div>
              <div className='col'>
                <div>Mobile</div>
                0126596578
              </div>
            </div>

            <div className='row align-items-center mb-3'>
              <div className='col col-auto'>
                <span className='icofont-slack' style={{ fontSize: 30, color: '#8f8f90' }} />
              </div>
              <div className='col'>
                <div>Slack</div>
                @liam.joun
              </div>
            </div>

            <div className='row align-items-center mb-3'>
              <div className='col col-auto'>
                <span className='icofont-skype' style={{ fontSize: 30, color: '#8f8f90' }} />
              </div>
              <div className='col'>
                <div>Skype</div>
                liam0jouns
              </div>
            </div>

            <div className='row align-items-center mb-3'>
              <div className='col col-auto'>
                <span className='icofont-location-pin' style={{ fontSize: 30, color: '#8f8f90' }} />
              </div>
              <div className='col'>
                <div>Current Address</div>
                71 Pilgrim Avenue Chevy Chase, MD 20815
              </div>
            </div>
          </Card>
        </div>

        <div className='col col-12 col-md-6'>
          <Card cover={<img src={userCover} alt='user-cover' />} className='personal-info-card'>
            <div className='d-flex align-items-center justify-content-between user-actions'>
              <Avatar src={userAvatar} size={100} />

              <Button
                style={{
                  backgroundColor: '#e91e63',
                  borderRadius: 500,
                  color: '#fff',
                  border: 'none'
                }}>
                Subscribe
              </Button>
            </div>

            <div className='d-flex align-items-center justify-content-between'>
              <h5 className='mb-0 mt-0 mr-1'>David Liam</h5>

              <Rate value={4} />
            </div>

            <p style={{ color: '#8f8f90' }}>Front-end developer</p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo
              nihil non omnis temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Dicta, provident?
            </p>
          </Card>
        </div>

        <div className='col col-12 col-md-6'>
          <Card title=' Skills'>
            <div className='elem-list skills-list'>
              {skils.map((skill, i) => (
                <Tag
                  key={i}
                  color={'#cd5447'}
                  style={{ color: '#fff', borderRadius: 500 }}>
                  {skill}
                </Tag>
              ))}
            </div>
          </Card>
          <Card title='Education'>
            <Timeline>
              <Timeline.Item color={'red'}>
                <div style={{ opacity: 0.8 }} className='date w-100'>
                  2008 - 2009
                </div>
                <span className='primary-text'>
                  <strong>Special schools</strong> - Edison Schools
                </span>
              </Timeline.Item>

              <Timeline.Item color={'red'}>
                <div style={{ opacity: 0.8 }} className='date w-100'>
                  2007 - 2008
                </div>
                <span className='primary-text'>
                  <strong>Technical schools </strong> - Jules E. Mastbaum Technical High School
                </span>
              </Timeline.Item>

              <Timeline.Item color={'red'}>
                <div style={{ opacity: 0.8 }} className='date w-100'>
                  2005 - 2007
                </div>
                <span className='primary-text'>
                  <strong>High schools</strong> - Benjamin Franklin High School
                </span>
              </Timeline.Item>
            </Timeline>
          </Card>
        </div>

        {users.map((user, i) => (
          <div key={i} className='col-12 col-md-4'>
            <User user={user} />
          </div>
        ))}

        <div className='col-12 col-md-4'>
          <Card title='Personal' style={{ textAlign: 'center' }}>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='mr-2' style={{ fontSize: 50 }}>
                39
              </div>
              <div style={{ color: '#8f8f90' }}>
                <div style={{ fontSize: 20 }}>USD</div>
                <div>month</div>
              </div>
            </div>

            <hr className='mt-4 mb-4' />

            <ul className='list-unstyled text-left'>
              <li className='d-flex align-items-center pt-2 pb-2'>
                <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
                <span className='ml-1'>5GB Disk Space</span>
              </li>
              <li className='d-flex align-items-center pt-2 pb-2'>
                <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
                <span className='ml-1'>25GB Monthly Bandwith</span>
              </li>
              <li className='d-flex align-items-center pt-2 pb-2'>
                <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
                <span className='ml-1'>5 Email Accounts</span>
              </li>
              <li className='d-flex align-items-center pt-2 pb-2'>
                <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
                <span className='ml-1'>Unlimited Subdomains</span>
              </li>
              <li className='d-flex align-items-center pt-2 pb-2'>
                <span className='icofont-close-circled' style={{ color: '#8f8f90' }} />
                <span className='ml-1'>Free support</span>
              </li>
            </ul>

            <Button type='primary' className='mb-3' block>
              Purchase
            </Button>
          </Card>
        </div>

        <div className='col-12 col-md-4'>
          <Card title='Developers' style={{ textAlign: 'center' }}>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='mr-2' style={{ fontSize: 50, color: '#6e40d8' }}>
                59
              </div>
              <div style={{ color: '#8f8f90' }}>
                <div style={{ fontSize: 20 }}>USD</div>
                <div>month</div>
              </div>
            </div>

            <hr className='mt-4 mb-4' />

            <ul className='list-unstyled text-left'>
              <li className='d-flex align-items-center pt-2 pb-2'>
                <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
                <span className='ml-1'>1GB Disk Space</span>
              </li>
              <li className='d-flex align-items-center pt-2 pb-2'>
                <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
                <span className='ml-1'>10GB Monthly Bandwith</span>
              </li>
              <li className='d-flex align-items-center pt-2 pb-2'>
                <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
                <span className='ml-1'>2 Email Accounts</span>
              </li>
              <li className='d-flex align-items-center pt-2 pb-2'>
                <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
                <span className='ml-1'>Unlimited Subdomains</span>
              </li>
              <li className='d-flex align-items-center pt-2 pb-2'>
                <span className='icofont-close-circled' style={{ color: '#8f8f90' }} />
                <span className='ml-1'>Free support</span>
              </li>
            </ul>

            <Button type='primary' className='mb-3' block>
              Purchase
            </Button>
          </Card>
        </div>

        <div className='col-12 col-md-4'>
          <Card title='Premium' style={{ textAlign: 'center' }}>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='mr-2' style={{ fontSize: 50 }}>
                99
              </div>
              <div style={{ color: '#8f8f90' }}>
                <div style={{ fontSize: 20 }}>USD</div>
                <div>month</div>
              </div>
            </div>

            <hr className='mt-4 mb-4' />

            <ul className='list-unstyled text-left'>
              <li className='d-flex align-items-center pt-2 pb-2'>
                <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
                <span className='ml-1'>10GB Disk Space</span>
              </li>
              <li className='d-flex align-items-center pt-2 pb-2'>
                <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
                <span className='ml-1'>100GB Monthly Bandwith</span>
              </li>
              <li className='d-flex align-items-center pt-2 pb-2'>
                <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
                <span className='ml-1'>20 Email Accounts</span>
              </li>
              <li className='d-flex align-items-center pt-2 pb-2'>
                <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
                <span className='ml-1'>Unlimited Subdomains</span>
              </li>
              <li className='d-flex align-items-center pt-2 pb-2'>
                <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
                <span className='ml-1'>Free support</span>
              </li>
            </ul>

            <Button type='primary' className='mb-3' block>
              Purchase
            </Button>
          </Card>
        </div>
      </div>

      <Card title='Recent orders' className='mb-0' bodyStyle={{ padding: 0 }}>
        {tableData && (
          <Table
            rowKey={() => uuid()}
            pagination={false}
            columns={columns}
            dataSource={tableData}
          />
        )}
      </Card>
    </>
  );
};

export default PageWidgets;

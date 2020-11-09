import React, { useEffect } from 'react';
import { Avatar, Card, Icon, Tag, Timeline } from 'antd';

import { IPageData, IPageProps } from '../../../interfaces/page-data';
import Logo from '../../../layouts/components/Logo/Logo';
import ReactEcharts from 'echarts-for-react';
import List from '../../../ui/components/List/List';

const events = [
  {
    date: 'May 15',
    title: 'Android Dev Summit 2019',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.',
    icon: 'android',
    iconBg: '#cd5447',
    iconColor: '#fff'
  },
  {
    date: 'May 1',
    title: 'Chrome Dev Summit 2019',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi veniam.',
    icon: 'chrome',
    iconBg: '#ED6C9C',
    iconColor: '#fff'
  },
  {
    date: 'April 23',
    title: 'AMP Conf 2019',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.',
    icon: 'calendar',
    iconBg: '#7cdb86',
    iconColor: '#fff'
  },
  {
    date: 'April 20',
    title: 'DevFest OnAir',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi veniam.',
    icon: 'bar-chart',
    iconBg: '#9d5ce5',
    iconColor: '#fff'
  }
];
const meetings = [
  {
    date: 'May 15',
    title: 'Developer meeting May 2019',
    content: 'Lorem ipsum dolor sit.',
    icon: 'pushpin',
    iconBg: '#f8e71c',
    iconColor: '#000'
  },
  {
    date: 'April 14',
    title: 'Developer meeting April 2019',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi veniam.',
    icon: 'api',
    iconBg: '#ed253d',
    iconColor: '#fff'
  },
  {
    date: 'March 13',
    title: 'Developer meeting March 2019',
    content: 'Lorem ipsum dolor sit.',
    icon: 'rocket',
    iconBg: '#fc8b37',
    iconColor: '#fff'
  }
];

const lastPayments = [
  {
    date: '24 May 2019',
    amount: '$155'
  },
  {
    date: '23 May 2019',
    amount: '$365'
  },
  {
    date: '22 Feb 2019',
    amount: '$234'
  },
  {
    date: '21 May 2019',
    amount: '$190'
  }
];

const lastClients = [
  {
    date: '23 May 2019',
    client: {
      name: 'Liam',
      img: '/content/user-40-1.jpg'
    }
  },
  {
    date: '22 May 2019',
    client: {
      name: 'Emma',
      img: '/content/user-40-2.jpg'
    }
  },
  {
    date: '21 May 2019',
    client: {
      name: 'Olivia',
      img: '/content/user-40-3.jpg'
    }
  },
  {
    date: '20 May 2019',
    client: {
      name: 'Ava',
      img: '/content/user-40-4.jpg'
    }
  },
  {
    date: '19 May 2019',
    client: {
      name: 'Sam',
      img: '/content/user-40-5.jpg'
    }
  }
];

const renderClients = clientItem => {
  const { date, client } = clientItem;
  return (
    <div className='d-flex justify-content-between' style={{ flex: 1 }}>
      <div className='client-block d-flex align-items-center'>
        <Avatar className='mr-4' src={window.location.origin + client.img} size={36} />
        <div className='name'>
          <strong>{client.name}</strong>
        </div>
      </div>

      <div className='date-block d-flex align-items-center'>
        <span style={{ opacity: 0.6 }} className='date'>
          {date}
        </span>
      </div>
    </div>
  );
};

const renderPayments = payment => {
  const { date, amount } = payment;

  return (
    <div className='d-flex justify-content-between' style={{ flex: 1 }}>
      <div className='date-block d-flex align-items-center'>
        <span style={{ opacity: 0.6 }} className='date'>
          {date}
        </span>
      </div>

      <div className='payment-block'>
        <Tag className='m-0' color='#7cdb86' style={{ color: '#fff', padding: '4px 20px' }}>
          {amount}
        </Tag>
      </div>
    </div>
  );
};

const chart = {
  color: ['#fff'],
  grid: {
    left: 5,
    right: 5,
    top: 0,
    bottom: 0
  },
  xAxis: {
    boundaryGap: false,
    type: 'category'
  },
  yAxis: {
    show: false
  },
  series: [
    {
      name: 'Income this week',
      type: 'line',
      smooth: true,
      data: [60, 124, 132, 143, 138, 178, 194, 211, 234, 257, 241, 226],
      areaStyle: {},
      markLine: {
        data: [{ type: 'average', name: 'Average' }]
      }
    }
  ]
};

const PageEventsTimeline: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Events timeline',
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
        title: 'Events Timeline'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <Card
        style={{
          backgroundImage: 'linear-gradient(90deg, rgb(157, 92, 229), rgb(205, 84, 71) 65%)'
        }}>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4 mb-md-0'>
            <Logo style={{ padding: 0 }} light />
            <h3 style={{ color: '#fff' }}>Development company</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus id perferendis
              unde voluptas voluptatem? Ad alias deleniti eum nulla tempore.
            </p>
          </div>

          <div className='col-12 col-md-6 text-right'>
            <h4 className='mt-0 mb-1' style={{ color: '#fff' }}>
              $17,843
            </h4>
            <p style={{ color: ' rgba(255,255,255,0.5)' }}>Income this week</p>
            <ReactEcharts option={chart} className='chart-container container-h-100' />
          </div>
        </div>
      </Card>

      <div className='row'>
        <div className='col-12 col-md-8'>
          <Card title='Our timeline' className='      mb-0'>
            <Tag className='timeline-tag mb-5' color='#2fa7ff' style={{ color: '#fff' }}>
              Events
            </Tag>
            <Timeline>
              {events.map((item, i) => (
                <Timeline.Item
                  key={i}
                  dot={
                    <div
                      className='timeline-dot'
                      style={{
                        backgroundColor: item.iconBg
                      }}>
                      <Icon type={item.icon} />
                    </div>
                  }>
                  <div className='title-block p-0 mb-2'>
                    <h5 className='item-title m-0'>{item.title}</h5>
                  </div>
                  <div style={{ opacity: 0.8, fontSize: '1.1em' }} className='date w-100 mb-2'>
                    {item.date}
                  </div>
                  <span className='primary-text'>{item.content}</span>
                </Timeline.Item>
              ))}
            </Timeline>

            <Tag className='timeline-tag mb-5' color='#cd5447' style={{ color: '#fff' }}>
              Meetings
            </Tag>
            <Timeline>
              {meetings.map((item, i) => (
                <Timeline.Item
                  key={i}
                  dot={
                    <div
                      className='timeline-dot'
                      style={{
                        backgroundColor: item.iconBg
                      }}>
                      <Icon type={item.icon} />
                    </div>
                  }>
                  <div className='title-block p-0 mb-2'>
                    <h5 className='item-title m-0'>{item.title}</h5>
                  </div>
                  <div style={{ opacity: 0.8, fontSize: '1.1em' }} className='date w-100 mb-2'>
                    {item.date}
                  </div>
                  <span className='primary-text'>{item.content}</span>
                </Timeline.Item>
              ))}
            </Timeline>
          </Card>
        </div>

        <div className='col-12 col-md-4'>
          <Card title='Introduction'>
            <h6 className='mt-0 mb-0'>Address</h6>
            <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
            <h6 className='mt-0 mb-0'>Email</h6>
            <p>devcomp@gmail.com</p>
            <h6 className='mt-0 mb-0'>Phone</h6>
            <p>0126596452</p>
          </Card>

          <h4 className='section-title'>Last clients</h4>

          <List items={lastClients} itemRenderer={renderClients} />

          <h4 className='section-title'>Last payments</h4>

          <List items={lastPayments} itemRenderer={renderPayments} />
        </div>
      </div>
    </>
  );
};

export default PageEventsTimeline;

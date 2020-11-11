import React, { useEffect, CSSProperties, useRef, useState } from 'react';

import uuid from 'uuid/v4';
import ReactEcharts from 'echarts-for-react';
import { Alert, Avatar, Button, Card, List, Progress, Select, Table, Tag, Timeline, Icon, Badge } from 'antd';

import User from '../../../layouts/components/User/User';
import EventsCalendarTwo from '../../../pages/servicePages/EventsCalendar/EventsCalendarTwo';

import activityChart from './charts/activityChart';
import browsersOptions from './charts/browsersOptions';

import user1 from '../../../assets/content/user-76-1.jpg';
import user2 from '../../../assets/content/user-76-2.jpg';
import user3 from '../../../assets/content/user-76-3.jpg';

import piOptions from './charts/piOption';
import pi2Options from './charts/pi2Options';
import popularityChart from './charts/popularityChart';
import succesRateChart from './charts/succesRateChart';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const { Option } = Select;
const ButtonGroup = Button.Group;

const user = {
  bg: '/content/bg-card-2.jpg',
  name: 'Anna Smith',
  role: 'Manager',
  img: '/content/user-76-2.jpg'
};

const gridStyle: CSSProperties = {
  width: '100%',
  textAlign: 'left',
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'pointer'
};

const dataPastSteps = [
  {
    title: 'Attend math tutoring',
    time: '11:55',
    date: 'Oct 5th',
    bounty: 5.00,
    points: 200,
    desc: 'Oct 5th | $15 | 20pts',
    content:
      'Morbi venenatis ligula non enim porttitor, ac mattis massa gravida. Aliquam ut odio et enim pretium laoreet. Vivamus ac laoreet lacus. Phasellus ac erat non libero iaculis placerat. Donec in suscipit dui, et elementum tortor.',
    avatar: 'user1'
  },
  {
    title: 'List itemRenderer title 2',
    time: '14:25',
    content:
      'Morbi venenatis ligula non enim porttitor, ac mattis massa gravida. Aliquam ut odio et enim pretium laoreet. Vivamus ac laoreet lacus. Phasellus ac erat non libero iaculis placerat. Donec in suscipit dui, et elementum tortor.',
    desc: 'Fusce a fringilla mauris, pulvinar gravida ipsum.',
    avatar: 'user1'
  },
  {
    title: 'List itemRenderer title 3',
    time: '18:23',
    content:
      'Morbi venenatis ligula non enim porttitor, ac mattis massa gravida. Aliquam ut odio et enim pretium laoreet. Vivamus ac laoreet lacus. Phasellus ac erat non libero iaculis placerat. Donec in suscipit dui, et elementum tortor.',
    desc: 'Fusce a fringilla mauris, pulvinar gravida ipsum.',
    avatar: 'user1'
  },
  {
    title: 'List itemRenderer title 4',
    time: '10:12',
    content:
      'Morbi venenatis ligula non enim porttitor, ac mattis massa gravida. Aliquam ut odio et enim pretium laoreet. Vivamus ac laoreet lacus. Phasellus ac erat non libero iaculis placerat. Donec in suscipit dui, et elementum tortor.',
    desc: 'Fusce a fringilla mauris, pulvinar gravida ipsum.',
    avatar: 'user1'
  }
];

const columns = [
  {
    title: 'User',
    key: 'user',
    render: ({ img, person }) => {
      return (
        <div className='person-block d-flex align-items-center' key={person + img}>
          <Avatar className='mr-3' style={{ minWidth: 36, minHeight: 36 }} src={window.location.origin + img} />
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

const data = [
  {
    title: 'It’s all about simplicity…',
    desc: 'Ian Holm ',
    avatar: user1
  },
  {
    title: 'Chocolate Cake exclusively brings you the classic...',
    desc: 'Anna Smith',
    avatar: user2
  },
  {
    title: 'Say something I’m giving up on you',
    desc: 'James Holt',
    avatar: user3
  }
];

const DashboardClient: React.FunctionComponent<IPageProps> = props => {
  const { onSetPage, getPageData } = props;
  const [recentOrders, setRecentOrders] = useState([]);

  const pageData: IPageData = {
    title: 'Maintain a G.P.A of 3.8 or Higher and make mom proud!',
    loaded: false,
    breadcrumbs: [
      {
        title: 'Home',
        route: 'dashboard'
      },
      {
        title: 'Dashboard'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  useEffect(() => {
    getPageData('./data/table.json').then(setRecentOrders);
  }, []);

  return (
    <>
      <Alert
        className='mb-4'
        message={null}
        type='success'
        showIcon
        description='Your Changes have been updated again'
      />



      <div className='row'>
        <div className='col-xl-4 col-lg-4 col-sm-12'>
          <Card>
            <div className='widget-card d-flex flex-column justify-content-center align-items-center'>
              <h3 className='title mb-7'>Don't stop Now!</h3>
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
                <h6 className='title mb-0'>Goal Completion</h6>

                <div className='desc text-center'>Only 16% of your campaign remains</div>
              </div>
            </div>
          </Card>
        </div>



        <div className='col-xl-4 col-lg-4 col-sm-12'>
          <div className='row'>
            <div className='col-12'>
              <Card
                className='animated zoomIn delay-03s'
                style={{ backgroundColor: 'rgba(252,139,55,0.1)' }}>
                <div className='row align-items-center pt-2'>
                  <div className='col col-auto'>
                    <span
                      className='icofont-money'
                      style={{
                        color: 'rgba(252,139,55,0.5)',
                        fontSize: 48,
                        padding: 0
                      }}
                    />
                  </div>

                  <div className='col col-7'>
                    <h6 className='mt-0 mb-1 nowrap'>Potential Money on the table:</h6>
                    <div className='count' style={{ fontSize: 20, color: '#fc8b37' }}>
                      $9,154
                        </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className='col-12'>
              <Card
                className='animated zoomIn delay-04s'
                style={{ backgroundColor: 'rgba(247,65,181,0.1)' }}>
                <div className='row align-items-center pt-2'>
                  <div className='col col-auto'>
                    <span
                      className='icofont-dollar-plus'
                      style={{
                        color: 'rgba(247,65,181,0.5)',
                        fontSize: 48,
                        padding: 0
                      }}
                    />
                  </div>

                  <div className='col col-7'>
                    <h6 className='mt-0 mb-1 nowrap'>Money in your Pocket:</h6>
                    <div className='count' style={{ fontSize: 20, color: '#f741b5' }}>
                      $7,894
                        </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className='col-12'>
              <Card
                className='animated zoomIn delay-04s'
                style={{ backgroundColor: 'rgba(47,167,255,0.1)' }}>
                <div className='row align-items-center pt-2'>
                  <div className='col col-auto'>
                    <span
                      className='icofont-chart-growth'
                      style={{
                        color: 'rgba(47,167,255,0.5)',
                        fontSize: 48,
                        padding: 0
                      }}
                    />
                  </div>

                  <div className='col col-7'>
                    <h6 className='mt-0 mb-1 nowrap'>Zen Points:</h6>
                    <div className='count' style={{ fontSize: 20, color: '#2fa7ff' }}>
                      500
                        </div>
                  </div>
                </div>
              </Card>
            </div>


          </div>
        </div>

        <div className='col-xl-4 col-lg-4 col-sm-12'>
          <Card title='Recent goal activity'>
            <List
              itemLayout='horizontal'
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar size={40} src={item.avatar} />}
                    title={<a href='https://ant.design'>{item.title}</a>}
                    description={
                      <div className='description-block'>
                        <span className='description'>{item.desc}</span>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
            <Button className='view-more-btn mt-3' block>
              View more
            </Button>
          </Card>
        </div>

      </div>

      <div className='row'>
        <div className='col-4 col-md-4'>
          <Card
            title='My current step'
            style={{ textAlign: 'center' }}
            actions={
              [<span style={{ color: 'rgb(47, 167, 255)' }}><Icon type='thunderbolt' /> 120pts</span>,
              <span style={{ color: 'rgb(252, 139, 55)' }}><Icon type='sketch' /> $200</span>,
              <span style={{ color: 'rgb(247, 65, 181)' }}><Icon type='carry-out' /> Oct 5</span>]
            }>


            <hr className='mt-4 mb-4' />
            <h3>Buy Books, not booze!</h3>
            <div className='mt-4 mb-4' />

            Hey Kiddo, after you buy your books please take a snapshot of the reciept from the bookstore and upload for us to take a look, and then we'll check you off for the next step. We love you!
            <div className='mt-4 mb-4' />
            <br />
            <div className='mt-4 mb-4' />
            <ButtonGroup className='mb-3' >
              <Button type='primary'>View details</Button>
              <Button type='primary'>Yay! I'm all done!</Button>
            </ButtonGroup>

            <div className='mt-4 mb-4' />
          </Card>
        </div>
        <div className='col-8 col-md-8'>
          <Card type='inner' title='My next 3 steps' extra={<a href='#'>More</a>}>
            {dataPastSteps.map((icon) => {
              return (
                <Card.Grid style={gridStyle}>
                  <div style={{ display: 'block' }}><div style={{ opacity: 0.45 }}>Oct 15th</div>  <h5 className='mt-0 mb-0'>Talk to Guidance Counselor</h5></div>
                  <div style={{ display: 'flex' }}>

                    <div className='icon-wrap mt-1'>
                      <span key={'sli-menu'} className={'sli-menu'} style={{ fontSize: 20, color: 'rgb(247, 65, 181)' }} />
                    </div></div>
                </Card.Grid>
              );
            }
            )}


          </Card>

        </div>
      </div>



      <div className='row'>
        <div className='col-4 col-md-4'>
          <Card
            title='My current step'
            style={{ textAlign: 'center' }}
            actions={[<Icon type='sketch' />, <Icon type='team' />, <Icon type='ellipsis' />]}>


            <hr className='mt-4 mb-4' />
            <h3>Buy Books, not booze!</h3>
            <div className='mt-4 mb-4' />

            Hey Kiddo, after you buy your books please take a snapshot of the reciept from the bookstore and upload for us to take a look, and then we'll check you off for the next step. We love you!
            <div className='mt-4 mb-4' />
            <br />
            <div className='mt-4 mb-4' />
            <ButtonGroup className='mb-3' >
              <Button type='primary'>View details</Button>
              <Button type='primary'>Yay! I'm all done!</Button>
            </ButtonGroup>

            <div className='mt-4 mb-4' />
          </Card>
        </div>
        <div className='col-8 col-md-8'>
          <Card>
            <EventsCalendarTwo />
          </Card>
        </div>
      </div>


      <div className='row'>
        <div className='col-4 col-md-4'>
          <Card
            title='My current step'
            style={{ textAlign: 'center' }}
            actions={[<Icon type='sketch' />, <Icon type='team' />, <Icon type='ellipsis' />]}>


            <hr className='mt-4 mb-4' />
            <h3>Buy Books, not booze!</h3>
            <div className='mt-4 mb-4' />

            Hey Kiddo, after you buy your books please take a snapshot of the reciept from the bookstore and upload for us to take a look, and then we'll check you off for the next step. We love you!
            <div className='mt-4 mb-4' />
            <br />
            <div className='mt-4 mb-4' />
            <ButtonGroup className='mb-3' >
              <Button type='primary'>View details</Button>
              <Button type='primary'>Yay! I'm all done!</Button>
            </ButtonGroup>

            <div className='mt-4 mb-4' />
          </Card>
        </div>
        <div className='col-8 col-md-8'>
          <Card title='My completed steps'>
            <List
              itemLayout='horizontal'
              dataSource={dataPastSteps}
              renderItem={item => (
                <List.Item
                  style={{ background: 'rgba(124, 219, 134, 0.35)', padding: '20px' }}
                  actions={[

                    <div className='icon-wrap'>
                      <span key={'sli-menu'} className={'sli-menu'} style={{ fontSize: 20 }} />
                    </div>
                  ]}>
                  <List.Item.Meta
                    avatar={<Progress
                      type="circle"
                      strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                      }}
                      percent={100}
                      width={50}
                    />}
                    title={<a href='https://ant.design'>{item.title}</a>}
                    description={item.desc}
                  />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </div>








      <div className='row'>
        <div className='col-4 col-md-4'>
          <Card title='Custom timeline'>
            <Timeline>
              <Timeline.Item>Create a services site 2019-09-01</Timeline.Item>
              <Timeline.Item>Solve initial network problems 2019-09-01</Timeline.Item>
              <Timeline.Item
                dot={<Icon type='clock-circle-o' style={{ fontSize: '16px' }} />}
                color='red'>
                Technical testing 2019-09-01
          </Timeline.Item>
              <Timeline.Item>Network problems being solved 2019-09-01</Timeline.Item>
            </Timeline>
          </Card>
        </div>
        <div className='col-8 col-md-8'>
          <Card
            bodyStyle={{ padding: 0 }}
            title={
              <div className='card-header mb-4'>
                <div className='title-box'>
                  <h5 className='title'>Here are the steps you've Completed!</h5>
                </div>

                <div className='actions d-flex'>
                  <span className='icofont-trash' />
                  <span className='icofont-archive' />
                  <span className='icofont-navigation-menu' />
                </div>
              </div>
            }>
            {recentOrders && (
              <Table
                rowKey={() => uuid()}
                pagination={false}
                columns={columns}
                dataSource={recentOrders}
              />
            )}
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
                width={154}
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
          <Card>
            <div className='d-flex justify-content-between align-items-start'>
              <div className='title-box'>
                <h5 className='title mb-1'>Popularity</h5>
              </div>

              <Select
                style={{ maxWidth: 140 }}
                defaultValue='google'
                placeholder='Person'
                optionFilterProp='children'>
                <Option value='google'>Bill Gates</Option>
                <Option value='apple'>Tim Cook</Option>
                <Option value='microsoft'>Sati Nadela</Option>
              </Select>
            </div>

            <div className='chart-card'>
              <div className='d-flex justify-content-center'>
                <ReactEcharts
                  option={popularityChart}
                  className='chart-container container-h-180 container-w-180'
                />
              </div>

              <div className='chart-text-block'>
                <div style={{ fontSize: 28 }} className='title'>
                  110k
                </div>
                <div className='label'>VOTES</div>
              </div>

              <div className='markers d-flex justify-content-start flex-column'>
                <div className='marker-block d-flex justify-content-start align-items-center'>
                  <div style={{ backgroundColor: '#f741b5' }} className='marker' />
                  <div className='marker-label'>Bill Gates</div>
                </div>
                <div className='marker-block d-flex justify-content-start align-items-center'>
                  <div style={{ backgroundColor: '#2fa7ff' }} className='marker' />
                  <div className='marker-label'>Tim Cook</div>
                </div>
                <div className='marker-block d-flex justify-content-start align-items-center'>
                  <div style={{ backgroundColor: '#7cdb86' }} className='marker' />
                  <div className='marker-label'>Jeff Bezos</div>
                </div>
              </div>
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
            <div className='d-flex flex-column justify-content-end chart-container container-h-300'>
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

        <div className='col-md-6 col-sm-12'>
          <Card
            className='mb-0'
            title={
              <div className='d-flex justify-content-between align-items-start'>
                <div className='title-box' style={{ maxWidth: '60%', fontSize: 14 }}>
                  <h5 className='title mb-1'>Success rate</h5>
                  <span className='sub-title'>Operations run according to general amount</span>
                </div>

                <Select
                  style={{ maxWidth: 140, marginLeft: 'auto' }}
                  defaultValue='google'
                  placeholder='Company'
                  optionFilterProp='children'>
                  <Option value='google'>Bill Gates</Option>
                  <Option value='apple'>Tim Cook</Option>
                  <Option value='microsoft'>Sati Nadela</Option>
                </Select>
              </div>
            }>
            <ReactEcharts option={succesRateChart} />
          </Card>
        </div>
      </div>
    </>
  );
};

export default DashboardClient;

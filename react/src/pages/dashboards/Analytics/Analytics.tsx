import React, { useEffect, useRef, useState } from 'react';

import uuid from 'uuid/v4';

import ReactEcharts from 'echarts-for-react';
import { Alert, Avatar, Button, Card, List, Progress, Select, Table, Tag } from 'antd';

import user1 from '../../../assets/content/user-76-1.jpg';
import user2 from '../../../assets/content/user-76-2.jpg';
import user3 from '../../../assets/content/user-76-3.jpg';

import lineChart1 from './charts/lineChart1';
import lineChart2 from './charts/lineChart2';
import clientsMap from './charts/clientsMap';

import { departmentsOptions, clientAgeOptions, clientGenderOptions } from './charts/clientCharts';

import AvatarGroup from '../../../ui/components/AvatarGroup/AvatarGroup';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const columns: any[] = [
  {
    title: 'Team',
    dataIndex: 'imgs',
    key: 'team',
    render: imgs => {
      return (
        <AvatarGroup>
          {imgs.map((img, i) => (
            <Avatar key={i} src={window.location.origin + img} />
          ))}
        </AvatarGroup>
      );
    }
  },
  {
    title: 'Group Name',
    dataIndex: 'name',
    key: 'group',
    render: val => <strong>{val}</strong>
  },
  {
    title: 'Created',
    dataIndex: 'date',
    key: 'created',
    render: text => <span className='nowrap'>{text}</span>
  },
  {
    title: 'Departments',
    dataIndex: 'department',
    key: 'departments',
    render: department => (
      <AvatarGroup>
        {department.map((dep, i) => (
          <Avatar key={i}>{dep}</Avatar>
        ))}
      </AvatarGroup>
    )
  },
  {
    title: 'Edit',
    dataIndex: 'edit',
    key: 'edit',
    render: () => (
      <Button type='primary' style={{ borderRadius: 6, padding: '0 15px', height: 30 }}>
        Edit
      </Button>
    )
  }
];

const PageAnalytics: React.FunctionComponent<IPageProps> = props => {
  const [tableData, setTableData] = useState([]);
  const { onSetPage, getPageData } = props;

  const pageData: IPageData = {
    title: 'Analytics',
    loaded: false,
    breadcrumbs: [
      {
        title: 'Home',
        route: 'dashboard'
      },
      {
        title: 'Analytics'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  useEffect(() => {
    getPageData('./data/team-activity.json').then(data => setTableData(data));
  }, []);

  return (
    <>
      <div className='row'>
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

        <div className='col col-12 col-md-6'>
          <Card className='chart-card' bodyStyle={{ padding: 0 }}>
            <h4 className='m-4 pt-4 mt-0'>$70038</h4>
            <p className='m-4 mt-2' style={{ color: '#9d9d9d' }}>
              Income in current month
              <span className='icofont-long-arrow-up' style={{ color: '#7cdb86' }} />
            </p>

            <ReactEcharts option={lineChart1} className='chart-container negative-indents' />
          </Card>
        </div>

        <div className='col col-12 col-md-6'>
          <Card className='chart-card' bodyStyle={{ padding: 0 }}>
            <h4 className='ml-4 pt-4'>$15038</h4>
            <p className='ml-4 mt-2' style={{ color: '#9d9d9d' }}>
              Income in current week
              <span className='icofont-long-arrow-down' style={{ color: '#ed253d', padding: 0 }} />
            </p>

            <ReactEcharts option={lineChart2} className='chart-container negative-indents' />
          </Card>
        </div>
      </div>

      <Card title='Clients Map'>
        <ReactEcharts option={clientsMap} className='chart-container container-h-400' />
      </Card>

      <div className='row'>
        <div className='col col-12 col-md-4'>
          <Card title='Clients age'>
            <ReactEcharts className='chart-container container-h-300' option={clientAgeOptions} />
          </Card>
        </div>

        <div className='col col-12 col-md-4'>
          <Card title='Clients gender'>
            <ReactEcharts
              className='chart-container container-h-300'
              option={clientGenderOptions}
            />
          </Card>
        </div>

        <div className='col col-12 col-md-4'>
          <Card title='Clients gender'>
            <ReactEcharts className='chart-container container-h-300' option={departmentsOptions} />
          </Card>
        </div>
      </div>

      <Card title='Team activity' className='mb-0' bodyStyle={{ padding: 0 }}>
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

export default PageAnalytics;

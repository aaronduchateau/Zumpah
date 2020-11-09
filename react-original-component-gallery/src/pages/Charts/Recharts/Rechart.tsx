import React, { useEffect } from 'react';
import { Card } from 'antd';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

import SimpleAreaChart from './charts/SimpleAreaChart';
import PercentAreaChart from './charts/PercentAreaChart';
import AreaChartFillByValue from './charts/AreaChartFillByValue';
import StackedAreaChart from './charts/StackedAreaChart';
import SimpleLineChart from './charts/SimpleLineChart';
import VerticalLineChart from './charts/VerticalLineChart';
import SimpleBarChart from './charts/SimpleBarCharts';
import WithCustomShape from './charts/CustomShapeBarChart';
import WithCustomActiveShape from './charts/CustomActiveShapeChart';
import TwoLevelPieChart from './charts/TwoLevelPieChart';

const PageRechart: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Recharts',
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
        title: 'Recharts'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <h4 className='section-title'>Area charts</h4>
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <Card title='Simple area chart'>
            <SimpleAreaChart />
          </Card>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card title='Percent area chart'>
            <PercentAreaChart />
          </Card>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card title='Area chart fill by value'>
            <AreaChartFillByValue />
          </Card>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card title='Area chart fill by value'>
            <StackedAreaChart />
          </Card>
        </div>
      </div>

      <h4 className='section-title'>Line charts</h4>
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <Card title='Simple line chart'>
            <SimpleLineChart />
          </Card>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card title='Vertical line chart'>
            <VerticalLineChart />
          </Card>
        </div>
      </div>

      <h4 className='section-title'>Bar charts</h4>
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <Card title='Simple bar chart'>
            <SimpleBarChart />
          </Card>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card title='Custom shape bar chart'>
            <WithCustomShape />
          </Card>
        </div>
      </div>

      <h4 className='section-title'>Pie charts</h4>
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <Card title='Two level pie chart' className='mb-md-0'>
            <TwoLevelPieChart />
          </Card>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card title='Custom active shape' className='mb-0'>
            <WithCustomActiveShape />
          </Card>
        </div>
      </div>
    </>
  );
};

export default PageRechart;

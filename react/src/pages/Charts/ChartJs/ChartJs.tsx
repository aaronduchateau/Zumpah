import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { IPageData, IPageProps } from '../../../interfaces/page-data';
import lineChart from './options/linearChart';
import barChart from './options/barChart';
import doughnutChart from './options/doughnutChart';
import radarChart from './options/radarChart';
import polarAreaChart from './options/polarAreaChart';
import pieChart from './options/pieChart';

const PageChartJs: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Chart js',
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
        title: 'Chart Js'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <Card title='Linear'>
            <Line {...lineChart} />
          </Card>
        </div>

        <div className='col-12 col-md-6'>
          <Card title='Bar'>
            <Bar {...barChart} />
          </Card>
        </div>

        <div className='col-12 col-md-6'>
          <Card title='Doughnut'>
            <Doughnut {...doughnutChart} />
          </Card>
        </div>

        <div className='col-12 col-md-6'>
          <Card title='Radar'>
            <Radar {...radarChart} />
          </Card>
        </div>

        <div className='col-12 col-md-6'>
          <Card title='Pie' className='mb-lg-0'>
            <Pie {...pieChart} />
          </Card>
        </div>

        <div className='col-12 col-md-6'>
          <Card title='Polar area chart' className='mb-0'>
            <Polar {...polarAreaChart} />
          </Card>
        </div>
      </div>
    </>
  );
};

export default PageChartJs;

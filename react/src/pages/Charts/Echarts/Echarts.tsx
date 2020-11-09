import React, {useEffect} from 'react';
import { Card } from 'antd';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

import ReactEcharts from 'echarts-for-react';

import AreaOptions from './ChartOptions/AreaOptions';
import BarOptions from './ChartOptions/BarOptions';
import LineOptions from './ChartOptions/LineOptions';
import Line2Options from './ChartOptions/Line2Options';
import Pi2Options from './ChartOptions/Pi2Options';
import PieOptions from './ChartOptions/PieOptions';

const PageEcharts: React.FC<IPageProps> = (props) => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Echarts',
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
        title: 'Echarts'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <Card title='Area chart'>
        <ReactEcharts option={AreaOptions} />
      </Card>

      <Card title='Bar chart'>
        <ReactEcharts option={BarOptions()} />
      </Card>

      <Card title='Line chart'>
        <ReactEcharts option={LineOptions} />
      </Card>

      <Card title='Line chart with points'>
        <ReactEcharts option={Line2Options} />
      </Card>

      <div className='row'>
        <div className='col-lg-6 col-md-12'>
          <Card title='Pie chart' className='mb-lg-0'>
            <ReactEcharts option={PieOptions} />
          </Card>
        </div>

        <div className='col-lg-6 col-md-12'>
          <Card title='Hole pie chart' className='mb-0'>
            <ReactEcharts option={Pi2Options} />
          </Card>
        </div>
      </div>
    </>
  );
};

export default PageEcharts;

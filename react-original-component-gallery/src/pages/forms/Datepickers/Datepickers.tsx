import React, {CSSProperties, useEffect, useState} from 'react';
import { Card, DatePicker } from 'antd';
import moment from 'moment';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const PageDatePickers: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Date pickers',
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
        title: 'Date pickers'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endOpen, setEndOpen] = useState(false);

  const onStartChange = value => {
    setStartDate(value);
  };

  const onEndChange = value => {
    setEndDate(value);
  };

  const handleStartOpenChange = open => {
    if (!open) {
      setEndOpen(true);
    }
  };

  const handleEndOpenChange = open => {
    setEndOpen(true);
  };

  return (
    <>
      <Card title='Basic datepicker' className='component-demo-card'>
        <DatePicker />
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter language='jsx' style={docco}>
          {'<DatePicker />'}
        </SyntaxHighlighter>
      </Card>

      <div className='row'>
        <div className='col-md-12 col-lg-6'>
          <div className='row'>
            <div className='col-12'>
              <Card title='Basic pickers'>
                <div className='elem-list flex-column'>
                  <DatePicker />
                  <MonthPicker placeholder='Select month' />
                  <RangePicker />
                  <WeekPicker placeholder='Select week' />
                </div>
              </Card>

              <Card title='Disabled pickers'>
                <div className='elem-list flex-column'>
                  <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />

                  <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />

                  <RangePicker
                    defaultValue={[
                      moment('2015-06-06', dateFormat),
                      moment('2015-06-06', dateFormat)
                    ]}
                    disabled
                  />
                </div>
              </Card>

              <Card title='Extra footer'>
                <div className='elem-list flex-column'>
                  <DatePicker renderExtraFooter={() => 'extra footer'} />
                  <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
                  <RangePicker renderExtraFooter={() => 'extra footer'} />
                </div>
              </Card>
              <Card title='Custom data render' className='mb-lg-0'>
                <div className='elem-list flex-column'>
                  <DatePicker
                    dateRender={current => {
                      const style: CSSProperties = {};
                      if (current.date() === 1) {
                        style.border = '1px solid #1890ff';
                        style.borderRadius = '50%';
                      }
                      return (
                        <div className="ant-calendar-date" style={style}>
                          {current.date()}
                        </div>
                      );
                    }}
                  />
                  <RangePicker
                    dateRender={current => {
                      const style: CSSProperties = {};
                      if (current.date() === 1) {
                        style.border = '1px solid #1890ff';
                        style.borderRadius = '50%';
                      }
                      return (
                        <div className='ant-calendar-date' style={style}>
                          {current.date()}
                        </div>
                      );
                    }}
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className='col-md-12 col-lg-6'>
          <div className='row'>
            <div className='col-12'>
              <Card title='Custom date format'>
                <div className='elem-list flex-column'>
                  <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />

                  <DatePicker
                    defaultValue={moment('01/01/2015', dateFormatList[0])}
                    format={dateFormatList}
                  />

                  <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />

                  <RangePicker
                    defaultValue={[
                      moment('2015/01/01', dateFormat),
                      moment('2015/01/01', dateFormat)
                    ]}
                    format={dateFormat}
                  />
                </div>
              </Card>

              <Card title='Range pickers'>
                <div className='flex-column'>
                  <RangePicker className='mb-4' />

                  <div className='d-flex elem-list'>
                    <DatePicker
                      showTime
                      format='YYYY-MM-DD HH:mm:ss'
                      value={startDate}
                      placeholder='Start'
                      onChange={onStartChange}
                      onOpenChange={handleStartOpenChange}
                    />

                    <DatePicker
                      showTime
                      format='YYYY-MM-DD HH:mm:ss'
                      value={endDate}
                      placeholder='End'
                      onChange={onEndChange}
                      open={endOpen}
                      onOpenChange={handleEndOpenChange}
                    />
                  </div>
                </div>
              </Card>

              <Card title='Select time'>
                <div className='elem-list flex-column'>
                  <DatePicker showTime placeholder='Select Time' />

                  <RangePicker
                    style={{ width: 'unset' }}
                    showTime={{ format: 'HH:mm' }}
                    format='YYYY-MM-DD HH:mm'
                    placeholder={['Start Time', 'End Time']}
                  />
                </div>
              </Card>

              <Card title='Data presets'>
                <div className='elem-list flex-column'>
                  <RangePicker
                    style={{ width: 'unset' }}
                    ranges={{
                      Today: [moment(), moment()],
                      'This Month': [moment().startOf('month'), moment().endOf('month')]
                    }}
                  />

                  <RangePicker
                    style={{ width: 'unset' }}
                    ranges={{
                      Today: [moment(), moment()],
                      'This Month': [moment().startOf('month'), moment().endOf('month')]
                    }}
                    showTime
                    format='YYYY/MM/DD HH:mm:ss'
                  />
                </div>
              </Card>

              <Card title='Data presets' className='mb-0'>
                <DatePicker mode={'month'} showTime />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageDatePickers;

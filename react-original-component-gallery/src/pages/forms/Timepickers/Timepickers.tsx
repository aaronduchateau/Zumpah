import React, {useEffect, useState} from 'react';
import {AutoComplete, Button, Card, Input, TimePicker} from 'antd';
import moment from 'moment';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const format = 'HH:mm';

const PageTimePickers: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Time pickers',
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
        title: 'Time pickers'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const [openState, setOpenState] = useState<boolean>(false);

  const  handleOpenChange = (open: boolean) => {
    setOpenState(open)
  };

  const handleClose = () => setOpenState(false);


  return (
    <>
      <Card title='Base time picker' className='component-demo-card'>
        <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter language='jsx' style={docco}>
          {"<TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />"}
        </SyntaxHighlighter>
      </Card>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="row">
            <div className="col-12">
              <Card title='Hour and minutes'>
                <TimePicker defaultValue={moment('12:08', format)} format={format} />
              </Card>

              <Card title='Addon content' className='mb-md-0'>
                <TimePicker
                  open={openState}
                  onOpenChange={handleOpenChange}
                  addon={() => (
                    <Button size="small" onClick={handleClose}>
                      Ok
                    </Button>
                  )}
                />
              </Card>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="row">
            <div className="col-12">
              <Card title='Disabled'>
                <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
              </Card>

              <Card title='Step options' className='mb-0'>
                <TimePicker minuteStep={15} secondStep={10} />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTimePickers;

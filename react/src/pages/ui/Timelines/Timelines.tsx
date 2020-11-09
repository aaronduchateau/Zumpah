import React, { useEffect, useState } from 'react';
import { Button, Card, Icon, Timeline } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const PageTimelines: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Timelines',
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
        title: 'Timelines'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const [reversal, setReversal] = useState<boolean>(false);

  return (
    <>
      <Card title='Basic timeline' className='component-demo-card'>
        <Timeline>
          <Timeline.Item>Create a services site 2019-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2019-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2019-09-01</Timeline.Item>
          <Timeline.Item>Network problems being solved 2019-09-01</Timeline.Item>
        </Timeline>
      </Card>

      <Card className='code-demo-card'>
        <SyntaxHighlighter language='jsx' style={docco}>
          {'<Timeline>\n' +
            ' <Timeline.Item>Create a services site 2019-09-01</Timeline.Item>\n' +
            ' <Timeline.Item>Solve initial network problems 2019-09-01</Timeline.Item>\n' +
            ' <Timeline.Item>Technical testing 2019-09-01</Timeline.Item>\n' +
            ' <Timeline.Item>Network problems being solved 2019-09-01</Timeline.Item>\n' +
            '</Timeline>'}
        </SyntaxHighlighter>
      </Card>

      <Card title='Different item colors'>
        <Timeline>
          <Timeline.Item color='green'>Create a services site 2019-09-01</Timeline.Item>
          <Timeline.Item color='green'>Create a services site 2019-09-01</Timeline.Item>
          <Timeline.Item color='red'>
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
          </Timeline.Item>
          <Timeline.Item>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2019-09-01</p>
          </Timeline.Item>
          <Timeline.Item color='gray'>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
          </Timeline.Item>
          <Timeline.Item color='gray'>
            <p>Technical testing 1</p>
          </Timeline.Item>
        </Timeline>
      </Card>

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

      <Card title='Alternate timeline'>
        <Timeline mode='alternate'>
          <Timeline.Item>Create a services site 2019-09-01</Timeline.Item>
          <Timeline.Item color='green'>Solve initial network problems 2019-09-01</Timeline.Item>
          <Timeline.Item dot={<Icon type='clock-circle-o' style={{ fontSize: '16px' }} />}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </Timeline.Item>
          <Timeline.Item color='red'>Network problems being solved 2019-09-01</Timeline.Item>
          <Timeline.Item>Create a services site 2019-09-01</Timeline.Item>
          <Timeline.Item dot={<Icon type='clock-circle-o' style={{ fontSize: '16px' }} />}>
            Technical testing 2019-09-01t
          </Timeline.Item>
        </Timeline>
      </Card>

      <Card title='Last node and reverse' className='mb-0'>
        <Timeline pending='Recording...' reverse={reversal}>
          <Timeline.Item>Create a services site 2019-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2019-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2019-09-01</Timeline.Item>
        </Timeline>
        <Button type='primary' style={{ marginTop: 16 }} onClick={() => setReversal(!reversal)}>
          Toggle Reverse
        </Button>
      </Card>
    </>
  );
};

export default PageTimelines;

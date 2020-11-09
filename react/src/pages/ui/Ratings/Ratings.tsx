import React, { useEffect } from 'react';
import { Card, Icon, Rate } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const PageRatings: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Ratings',
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
        title: 'Ratings'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <Card title='Default rate' className='component-demo-card'>
        <Rate />
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter>{'<Rate />'}</SyntaxHighlighter>
      </Card>

      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <div className='row'>
            <div className='col-12'>
              <Card title='With current value'>
                <Rate value={5} />
              </Card>

              <Card title='Custom icons'>
                <div className='elem-list sm flex-column'>
                  <Rate value={4} />
                  <Rate value={3} character={<Icon type='heart' />} />
                  <Rate value={2} character={<Icon type='fire' />} />
                </div>
              </Card>

              <Card title='Allow half' className='mb-md-0'>
                <div className='elem-list sm flex-column'>
                  <Rate value={1.5} allowHalf />
                  <Rate value={2.5} allowHalf />
                  <Rate value={3.5} allowHalf />
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-sm-12'>
          <div className='row'>
            <div className='col-12'>
              <Card title='Disabled'>
                <Rate disabled value={5} />
              </Card>

              <Card title='Custom items sizes'>
                <div className='elem-list sm flex-column'>
                  <Rate value={3} style={{ fontSize: '15px' }} />
                  <Rate value={2} style={{ fontSize: '20px' }} />
                  <Rate value={5} style={{ fontSize: '25px' }} />
                </div>
              </Card>

              <Card title='Custom items count' className='mb-0'>
                <div className='elem-list sm flex-column'>
                  <Rate count={6} value={4} />
                  <Rate count={8} value={6} />
                  <Rate count={10} value={8} />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageRatings;

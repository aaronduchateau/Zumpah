import React, { useEffect } from 'react';
import { Card, Pagination } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const PagePaginations: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Paginations',
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
        title: 'Paginations'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const itemRender = (current, type: string, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };

  return (
    <>
      <Card title='Basic pagination' className='component-demo-card'>
        <Pagination defaultCurrent={1} total={50} />
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter anguage='jsx' style={docco}>
          {'<Pagination defaultCurrent={1} total={50} />'}
        </SyntaxHighlighter>
      </Card>

      <Card title='More pages'>
        <Pagination defaultCurrent={6} total={500} />
      </Card>

      <Card title='Change page size'>
        <Pagination
          showSizeChanger
          defaultCurrent={3}
          total={500}
        />
        <br />
        <Pagination
          showSizeChanger
          defaultCurrent={3}
          total={500}
          disabled
        />
      </Card>

      <Card title='Jump to page'>
        <Pagination showQuickJumper defaultCurrent={2} total={500} />
        <br />
        <Pagination showQuickJumper defaultCurrent={2} total={500} disabled />
      </Card>

      <Card title='Simple mode'>
        <Pagination simple defaultCurrent={2} total={50} />
      </Card>

      <Card title='Total page'>
        <Pagination
          total={85}
          showTotal={total => `Total ${total} items`}
          pageSize={20}
          defaultCurrent={1}
        />
        <br />
        <Pagination
          total={85}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
          pageSize={20}
          defaultCurrent={1}
        />
      </Card>

      <Card title='Custom prev and next btn'>
        <Pagination total={500} itemRender={itemRender} />
      </Card>
    </>
  );
};

export default PagePaginations;

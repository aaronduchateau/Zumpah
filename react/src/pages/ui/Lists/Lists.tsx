import React, { useEffect } from 'react';
import { Avatar, Card, Icon, List } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

import user1 from '../../../assets/content/user-40-1.jpg';
import user2 from '../../../assets/content/user-40-2.jpg';
import user3 from '../../../assets/content/user-40-3.jpg';
import user4 from '../../../assets/content/user-40-4.jpg';

import bgImage from '../../../assets/content/bg-card-6.jpg';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const listData = [
  ['Racing car sprays burning fuel into crowd.'],
  ['Japanese princess to wed commoner.'],
  ['Australian walks 100km after outback crash.'],
  ['Man charged over missing wedding girl.']
];

const data = [
  {
    title: 'List itemRenderer title 1',
    time: '11:55',
    desc: 'Fusce a fringilla mauris, pulvinar gravida ipsum.',
    content:
      'Morbi venenatis ligula non enim porttitor, ac mattis massa gravida. Aliquam ut odio et enim pretium laoreet. Vivamus ac laoreet lacus. Phasellus ac erat non libero iaculis placerat. Donec in suscipit dui, et elementum tortor.',
    avatar: user1
  },
  {
    title: 'List itemRenderer title 2',
    time: '14:25',
    content:
      'Morbi venenatis ligula non enim porttitor, ac mattis massa gravida. Aliquam ut odio et enim pretium laoreet. Vivamus ac laoreet lacus. Phasellus ac erat non libero iaculis placerat. Donec in suscipit dui, et elementum tortor.',
    desc: 'Fusce a fringilla mauris, pulvinar gravida ipsum.',
    avatar: user2
  },
  {
    title: 'List itemRenderer title 3',
    time: '18:23',
    content:
      'Morbi venenatis ligula non enim porttitor, ac mattis massa gravida. Aliquam ut odio et enim pretium laoreet. Vivamus ac laoreet lacus. Phasellus ac erat non libero iaculis placerat. Donec in suscipit dui, et elementum tortor.',
    desc: 'Fusce a fringilla mauris, pulvinar gravida ipsum.',
    avatar: user3
  },
  {
    title: 'List itemRenderer title 4',
    time: '10:12',
    content:
      'Morbi venenatis ligula non enim porttitor, ac mattis massa gravida. Aliquam ut odio et enim pretium laoreet. Vivamus ac laoreet lacus. Phasellus ac erat non libero iaculis placerat. Donec in suscipit dui, et elementum tortor.',
    desc: 'Fusce a fringilla mauris, pulvinar gravida ipsum.',
    avatar: user4
  }
];

const PageLists: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Lists',
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
        title: 'Lists'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <Card title='Basic list' className='component-demo-card'>
        <List dataSource={listData} renderItem={item => <List.Item>{item}</List.Item>} />
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter>
          {'<List dataSource={listData} renderItem={itemRenderer => <List.Item>{itemRenderer}</List.Item>} />'}
        </SyntaxHighlighter>
      </Card>

      <div className='row'>
        <div className='col-md-12 col-lg-5'>
          <Card title='List sizes'>
            <h4 className='section-title mt-0'>Small size</h4>

            <List
              size='small'
              dataSource={listData}
              renderItem={item => <List.Item>{item}</List.Item>}
            />

            <h4 className='section-title'>Default size</h4>

            <List dataSource={listData} renderItem={item => <List.Item>{item}</List.Item>} />

            <h4 className='section-title'>Large size</h4>

            <List
              size='large'
              dataSource={listData}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </Card>
        </div>

        <div className='col-md-12 col-lg-7'>
          <Card title='With images'>
            <List
              itemLayout='horizontal'
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href='https://ant.design'>{item.title}</a>}
                    description={
                      <div className='description-block'>
                        <span className='description'>{item.desc}</span>
                        <span className='time'>{item.time}</span>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>

          <Card title='With actions'>
            <List
              itemLayout='horizontal'
              dataSource={data}
              renderItem={item => (
                <List.Item
                  actions={[
                    <a className='edit-btn' href='#'>
                      <Icon type='edit' />
                    </a>,
                    <a className='delete-btn' href='#'>
                      <Icon type='delete' />
                    </a>
                  ]}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href='https://ant.design'>{item.title}</a>}
                    description={item.desc}
                  />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </div>

      <Card title='Vertical list' className='mb-0'>
        <List
          itemLayout='vertical'
          size='large'
          dataSource={data.slice(0, 3)}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <IconText type='star-o' text='156' />,
                <IconText type='like-o' text='156' />,
                <IconText type='message' text='2' />
              ]}
              extra={<img className='list-img' src={bgImage} alt='bg-image' width={180} />}>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={'#'}>{item.title}</a>}
                description={item.desc}
              />
              {item.content}
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};

export default PageLists;

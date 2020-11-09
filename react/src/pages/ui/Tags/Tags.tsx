import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Tag } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const { CheckableTag } = Tag;

const MyTag: React.FC = props => {
  const [checked, setChecked] = useState(false);

  const handleChange = checked => setChecked(checked);

  return <CheckableTag {...props} checked={checked} onChange={handleChange} />;
};

const PageTags: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Tags',
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
        title: 'Tags'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const [tagState, setTagState] = useState(true);

  const tagsList = ['Movies', 'Books', 'Music', 'Sports'];

  const [categories, setCategories] = useState([]);

  const addTag = tag => setCategories([...categories, tag]);
  const removeTag = tag => setCategories(categories.filter(_tag => _tag !== tag));

  const handleChange = (tag: string, checked: boolean) => {
    if (checked) {
      addTag(tag);
    } else {
      removeTag(tag);
    }
  };

  return (
    <>
      <Card title='Basic tag' className='component-demo-card'>
        <Tag>Tag 1</Tag>
        <Tag>
          <a href='https://github.com/ant-design/ant-design/issues/1862'>Link</a>
        </Tag>
        <Tag closable>Tag 2</Tag>
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter>
          {'<Tag>Tag 1</Tag>\n' +
          '<Tag>\n' +
          ' <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>\n' +
          '</Tag>\n' +
          '<Tag closable>\n' +
          ' Tag 2\n' +
          '</Tag>'}
        </SyntaxHighlighter>
      </Card>

      <Card title='Colorful tags '>
        <div className='elem-list'>
          <Tag color='magenta'>magenta</Tag>
          <Tag color='red'>red</Tag>
          <Tag color='volcano'>volcano</Tag>
          <Tag color='orange'>orange</Tag>
          <Tag color='gold'>gold</Tag>
          <Tag color='lime'>lime</Tag>
          <Tag color='green'>green</Tag>
          <Tag color='cyan'>cyan</Tag>
          <Tag color='blue'>blue</Tag>
          <Tag color='geekblue'>geekblue</Tag>
          <Tag color='purple'>purple</Tag>
        </div>
      </Card>

      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <Card title='Toggle tag' className='mb-md-0'>
            <div className='d-flex align-items-center'>
              <Button
                size='small'
                onClick={() => setTagState(!tagState)}
                style={{ marginRight: '15px' }}>
                Toggle
              </Button>
              <Tag closable visible={tagState} onClose={() => setTagState(false)}>
                Movies
              </Tag>
            </div>
          </Card>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card title='Checkable tags' className='mb-sm-0'>
            <div>
              <h6 style={{ marginRight: 8, display: 'inline' }}>Categories:</h6>
              {tagsList.map(tag => (
                <CheckableTag
                  key={tag}
                  checked={categories.indexOf(tag) > -1}
                  onChange={checked => handleChange(tag, checked)}>
                  {tag}
                </CheckableTag>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PageTags;

import React, { useEffect, useState } from 'react';
import { Button, Card, Radio } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px'
};

const PageRadioButtons: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Radio buttons',
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
        title: 'Radio Buttons'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const [formValue, setValue] = useState(1);
  const [secondValue, setSecond] = useState(1);
  const [thirdValue, setThird] = useState(1);
  const [fourthValue, setFourth] = useState(1);
  const [fifthValue, setFifthValue] = useState(1);

  const [disabled, setDisabled] = useState(false);

  const handleChange = setter => e => {
    setter(e.target.value);
  };

  const toggleDisabled = () => setDisabled(!disabled);

  return (
    <>
      <Card title='Basic radio button' className='component-demo-card'>
        <Radio>Radio</Radio>
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter language='jsx' style={docco}>
          {'<Radio>Radio</Radio>'}
        </SyntaxHighlighter>
      </Card>
      <Card title='Radio group'>
        <h6 className='mt-0'>Without label</h6>
        <Radio.Group onChange={handleChange(setValue)} value={formValue}>
          <Radio value={1} />
          <Radio value={2} />
          <Radio value={3} />
        </Radio.Group>

        <h6>With labels</h6>

        <Radio.Group onChange={handleChange(setSecond)} value={secondValue}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
        </Radio.Group>

        <h6>Disabled option</h6>

        <Radio.Group onChange={handleChange(setFourth)} value={fourthValue}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio disabled value={3}>
            C
          </Radio>
        </Radio.Group>

        <h6>Vertical</h6>

        <Radio.Group onChange={handleChange(setThird)} value={thirdValue}>
          <Radio style={radioStyle} value={1}>
            First option
          </Radio>
          <Radio style={radioStyle} value={2}>
            Second option
          </Radio>
          <Radio style={radioStyle} value={3}>
            Third options
          </Radio>
          <Radio style={radioStyle} value={4}>
            Fourth options
          </Radio>
        </Radio.Group>
      </Card>

      <Card title='Toggle disabled' className='mb-0'>
        <Radio.Group onChange={handleChange(setFifthValue)} value={fifthValue}>
          <Radio disabled={disabled} style={radioStyle} value={1}>
            First option
          </Radio>
          <Radio disabled={disabled} style={radioStyle} value={2}>
            Second option
          </Radio>
          <Radio disabled={disabled} style={radioStyle} value={3}>
            Third options
          </Radio>
        </Radio.Group>
        <br />
        <br />
        <Button type='primary' onClick={toggleDisabled}>
          Toggle disabled
        </Button>
      </Card>
    </>
  );
};

export default PageRadioButtons;

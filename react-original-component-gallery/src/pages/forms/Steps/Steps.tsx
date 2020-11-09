import React, { useEffect, useState } from 'react';
import { Button, Card, Divider, Icon, message, Popover, Steps } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

import './Steps.scss';

const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: 'First-content'
  },
  {
    title: 'Second',
    content: 'Second-content'
  },
  {
    title: 'Last',
    content: 'Last-content'
  }
];

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }>
    {dot}
  </Popover>
);

const PageSteps: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Steps',
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
        title: 'Steps'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const [dotDirection, setDotDirection] = useState<'vertical' | 'horizontal'>('horizontal');

  useEffect(() => {
    const updateDirection = () => {
      const direction = window.innerWidth < 768 ? 'vertical' : 'horizontal';
      setDotDirection(direction);
    };

    window.addEventListener('resize', updateDirection);

    return () => window.removeEventListener('resize', updateDirection);
  }, []);

  const [current, setCurrent] = useState<number>(0);
  const [currStep, setCurrStep] = useState<number>(0);

  const next = () => setCurrStep(currStep + 1);
  const prev = () => setCurrStep(currStep - 1);

  return (
    <>
      <Card title='Basic steps' className='component-demo-card'>
        <Steps current={1}>
          <Step title='Finished' description='This is a description.' />
          <Step title='In Progress' description='This is a description.' />
          <Step title='Waiting' description='This is a description.' />
        </Steps>
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter language='jsx' style={docco}>
          {'<Steps current={1}>\n' +
            ' <Step title="Finished" description="This is a description." />\n' +
            ' <Step title="In Progress" description="This is a description." />\n' +
            ' <Step title="Waiting" description="This is a description." />\n' +
            '</Steps>'}
        </SyntaxHighlighter>
      </Card>

      <Card title='Small size'>
        <Steps size='small' current={1}>
          <Step title='Finished' />
          <Step title='In Progress' />
          <Step title='Waiting' />
        </Steps>
      </Card>

      <Card title='With icons'>
        <Steps>
          <Step status='finish' title='Login' icon={<Icon type='user' />} />
          <Step status='finish' title='Verification' icon={<Icon type='solution' />} />
          <Step status='process' title='Pay' icon={<Icon type='loading' />} />
          <Step status='wait' title='Done' icon={<Icon type='smile-o' />} />
        </Steps>
      </Card>

      <Card title='Vertical steps'>
        <Steps direction='vertical' current={1}>
          <Step title='Finished' description='This is a description.' />
          <Step title='In Progress' description='This is a description.' />
          <Step title='Waiting' description='This is a description.' />
        </Steps>

        <br />
        <br />

        <Steps size='small' direction='vertical' current={1}>
          <Step title='Finished' description='This is a description.' />
          <Step title='In Progress' description='This is a description.' />
          <Step title='Waiting' description='This is a description.' />
        </Steps>
      </Card>

      <Card title='Errors'>
        <Steps current={1} status='error'>
          <Step title='Finished' description='This is a description' />
          <Step title='In Process' description='This is a description' />
          <Step title='Waiting' description='This is a description' />
        </Steps>
      </Card>

      <Card title='Dot style'>
        <Steps progressDot current={1} direction={dotDirection}>
          <Step title='Finished' description='This is a description.' />
          <Step title='In Progress' description='This is a description.' />
          <Step title='Waiting' description='This is a description.' />
        </Steps>

        <br />
        <br />

        <Steps current={1} progressDot={customDot} direction='vertical'>
          <Step title='Finished' description='You can hover on the dot.' />
          <Step title='In Progress' description='You can hover on the dot.' />
          <Step title='Waiting' description='You can hover on the dot.' />
          <Step title='Waiting' description='You can hover on the dot.' />
        </Steps>
      </Card>

      <Card title='Switch step'>
        <Steps current={currStep}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className='steps-content'>{steps[currStep].content}</div>
        <div className='steps-action'>
          {currStep < steps.length - 1 && (
            <Button type='primary' onClick={() => next()}>
              Next
            </Button>
          )}
          {currStep === steps.length - 1 && (
            <Button type='primary' onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {currStep > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </Card>

      <Card title='Clickable' className='mb-0'>
        <Steps current={current} onChange={setCurrent}>
          <Step title='Step 1' description='This is a description.' />
          <Step title='Step 2' description='This is a description.' />
          <Step title='Step 3' description='This is a description.' />
        </Steps>

        <Divider />

        <Steps current={current} onChange={setCurrent} direction='vertical'>
          <Step title='Step 1' description='This is a description.' />
          <Step title='Step 2' description='This is a description.' />
          <Step title='Step 3' description='This is a description.' />
        </Steps>
      </Card>
    </>
  );
};

export default PageSteps;

import React, { CSSProperties, useEffect, useState } from 'react';
import { Input, Slider, Button, Modal, Form, Progress, Card, Icon } from 'antd';
import uuid from 'uuid/v4';

const ButtonGroup = Button.Group;

const PercentageUpdateModal: React.FC<{ currentModalFlow, stepData, successCallback?, closeCallback?, nullFlowStep: any }> = props => {
  const { currentModalFlow, stepData, successCallback, closeCallback, nullFlowStep } = props;

  //const [value, setValue] = useState(initValue || 50);

  const handleAfterChange = value => {

    //props.callback(props.uuid, value);
  };

  const closeModal = () => {
    closeCallback(nullFlowStep);
    //props.callback(props.uuid, 100);
  };


  const isViewOneActive = (currentModalFlow.name === 'TRY_MODIFY_STEP_PERCENTAGE' && currentModalFlow.proposedUpdatePercentage != 100);
  const isViewTwoActive = (currentModalFlow.name === 'TRY_MODIFY_STEP_PERCENTAGE' && currentModalFlow.proposedUpdatePercentage === 100);
  const currentStep = stepData.find(item => (item.uuid === currentModalFlow.proposedUuidUpdate));

  let modalBody, modalTitle, modalFooter;

  if (isViewOneActive) {
    modalBody = (
      <div className='d-flex flex-column'>
        <div className='event-time flex-column mb-4' style={{ textAlign: 'center' }}>
          <div className="mb-2 mt-2" />
          <div className="row">
            <div className="col-1" />
            <div className="col-10" >
              <div className="d-flex justify-content-between">
                <Progress type="circle" percent={currentStep.percentageComplete} width={150} />
                <div className="mt-5">
                  <h2 className="mt-4"><Icon type='rise' /> </h2>
                </div>
                <Progress type="circle" percent={currentModalFlow.proposedUpdatePercentage} width={150} strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }} />
              </div>
            </div>
            <div className="col-1" />
          </div>
          <div className="mt-5 mb-5" />
          <Form layout='vertical'>
          <h3 className='modal-title m-0'>
          Tell us about it.
        </h3>
            <Form.Item>
              <Input.TextArea />
            </Form.Item>
          </Form>
        </div>
      </div>
    );

    modalTitle = (
      <div className='title-block p-0 m-0'>
        <h3 className='modal-title m-0'>
          Progress is Awesome.
        </h3>
      </div>
    );

    modalFooter = (
      <div className='d-flex justify-content-between modal-footer'>

        <Button type='primary' onClick={closeModal} >Submit</Button>
        <Button onClick={closeModal} type='danger'>
          Close
        </Button>
      </div>
    );


  }

  if (isViewTwoActive) {
    modalBody = (
      <div className='d-flex flex-column'>
        <div className='event-time flex-column mb-4' style={{ textAlign: 'center' }}>
          <div className="mb-2 mt-2" />
          <div className="row">
            <div className="col-2" />
            <div className="col-8" >
              <div className="d-flex justify-content-between">
                <h1 className="mt-4"><Icon type='trophy' /> </h1>
                <div className="mt-3">
                  <h4 ><Icon type='arrow-right' /> </h4>
                </div>
                <h1 className="mt-4"><Icon type='fire' /> </h1>
              </div>
            </div>
            <div className="col-2" />
          </div>
          <div className="mt-5 mb-2" />
          <h3 className='modal-title mb-2'>
          Here is what's on the table.
        </h3>
          <div className="row mt-1 mb-5">
            <div className="col-2" />
            <div className="col-8" >

              <div className="d-flex justify-content-between">
                <span style={{ color: 'rgb(47, 167, 255)' }}><Icon type='thunderbolt' /> 120pts</span>
                <span style={{ color: 'rgb(252, 139, 55)' }}><Icon type='sketch' /> $200</span>
                <span style={{ color: 'rgb(247, 65, 181)' }}><Icon type='fire' /> icon</span>
              </div>

            </div>
            <div className="col-2" />
          </div>
          <Button type='primary'>Let's Review</Button>
        </div>
      </div>
    );

    modalTitle = (
      <div className='title-block p-0 m-0'>
        <h3 className='modal-title m-0'>
          Ready to mark as complete?
        </h3>
      </div>
    );

    modalFooter = null;


  }




  return (
    <>
      <Modal
        title={modalTitle}
        footer={modalFooter}
        visible={isViewOneActive || isViewTwoActive}
        onCancel={closeModal}>
        {modalBody}
      </Modal>
    </>

  );
};


export default PercentageUpdateModal;

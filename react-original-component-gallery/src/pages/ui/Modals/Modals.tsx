import React, { useEffect, useState } from 'react';
import { Button, Card, Input, Modal, Tag } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

enum modalsEnum {
  basic = 'basic',
  withText = 'withText',
  withHeader = 'withHeader',
  withCustomHeader = 'withCustomHeader',
  withFooter = 'withFooter',
  withOverlayClose = 'withOverlayClose',
  withCloseBtn = 'withCloseBtn',
  withCustomCloseBtn = 'withCustomCloseBtn',
  withDefaultOverlay = 'withDefaultOverlay',
  withNoOverlay = 'withNoOverlay',
  withOverlayWithoutClose = 'withOverlayWithoutClose',
  withCustomWidth = 'withCustomWidth',
  withFullWidth = 'withFullWidth',
  withCustomHeight = 'withCustomHeight'
}

const PageModals: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Modals',
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
        title: 'Modals'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const [modals, setModals] = useState({});

  const openModal = (name: modalsEnum) => () => setModals({ ...modals, [name]: true });
  const closeModal = (name: modalsEnum) => () => setModals({ ...modals, [name]: false });

  return (
    <>
      <Card title='Basic modal' className='component-demo-card'>
        <Button type='primary' onClick={openModal(modalsEnum.basic)}>
          Open Modal
        </Button>
        <Modal
          title='Basic Modal'
          visible={modals[modalsEnum.basic]}
          onCancel={closeModal(modalsEnum.basic)}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eum eveniet fugiat fugit
            illum, natus porro possimus quisquam soluta vitae. Aperiam molestias quae quaerat
            quibusdam rerum voluptates! Aspernatur, magnam quas?
          </p>

          <Input placeholder='Subscribe' />
        </Modal>
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter language='jsx' style={docco}>
          {"<Button type='primary' onClick={() => setFirstVisibility(true)}>\n" +
            ' Open Modal\n' +
            '</Button>\n' +
            '<Modal\n' +
            " title='Basic Modal'\n" +
            ' visible={firstVisibility}\n' +
            ' onCancel={closeModal(setFirstVisibility)}>\n\n' +
            ' <p>\n' +
            '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eum eveniet fugiat fugit\n' +
            '   illum, natus porro possimus quisquam soluta vitae. Aperiam molestias quae quaerat\n' +
            '   quibusdam rerum voluptates! Aspernatur, magnam quas?\n' +
            ' </p>\n' +
            '\n' +
            " <Input placeholder='Subscribe' />\n" +
            '</Modal>'}
        </SyntaxHighlighter>
      </Card>

      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <Card title='Custom content'>
            <div className='elem-list'>
              <Button type='primary' onClick={openModal(modalsEnum.withText)}>
                With text
              </Button>

              <Button type='primary' onClick={openModal(modalsEnum.withHeader)}>
                With header
              </Button>

              <Button type='primary' onClick={openModal(modalsEnum.withCustomHeader)}>
                With custom header
              </Button>

              <Button type='primary' onClick={openModal(modalsEnum.withFooter)}>
                With custom footer
              </Button>
            </div>
            <Modal
              visible={modals[modalsEnum.withText]}
              footer={null}
              closable={false}
              title={null}
              onCancel={closeModal(modalsEnum.withText)}>
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>
            </Modal>

            <Modal
              visible={modals[modalsEnum.withHeader]}
              footer={null}
              closable={false}
              title='Modal with header'
              onCancel={closeModal(modalsEnum.withHeader)}>
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>

            <Modal
              visible={modals[modalsEnum.withCustomHeader]}
              footer={null}
              closable={false}
              title={
                <>
                  <span>Modal with custom header</span> <Tag color='red'>New</Tag>
                </>
              }
              onCancel={closeModal(modalsEnum.withCustomHeader)}>
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>

            <Modal
              visible={modals[modalsEnum.withFooter]}
              closable={false}
              title={null}
              onCancel={closeModal(modalsEnum.withFooter)}>
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>
          </Card>

          <Card title='Overlay' className='mb-md-0'>
            <div className='elem-list'>
              <Button type='primary' onClick={openModal(modalsEnum.withDefaultOverlay)}>
                Default overlay
              </Button>

              <Button type='primary' onClick={openModal(modalsEnum.withNoOverlay)}>
                Without overlay
              </Button>

              <Button type='primary' onClick={openModal(modalsEnum.withOverlayWithoutClose)}>
                overlay without close
              </Button>
            </div>

            <Modal
              visible={modals[modalsEnum.withDefaultOverlay]}
              title='Modal with default overlay'
              closable={false}
              onCancel={closeModal(modalsEnum.withDefaultOverlay)}>
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />

              <Input placeholder={'Subscribe'} />
            </Modal>

            <Modal
              visible={modals[modalsEnum.withNoOverlay]}
              footer={null}
              mask={false}
              onCancel={closeModal(modalsEnum.withNoOverlay)}>
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>

            <Modal
              visible={modals[modalsEnum.withOverlayWithoutClose]}
              closable={true}
              maskClosable={false}
              title='Overlay withount close'
              onCancel={closeModal(modalsEnum.withOverlayWithoutClose)}>
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>
          </Card>
        </div>

        <div className='col-sm-12 col-md-6'>
          <Card title='Close options'>
            <div className='elem-list'>
              <Button type='primary' onClick={openModal(modalsEnum.withOverlayClose)}>
                With overlay close
              </Button>

              <Button type='primary' onClick={openModal(modalsEnum.withCloseBtn)}>
                With close btn
              </Button>

              <Button type='primary' onClick={openModal(modalsEnum.withCustomCloseBtn)}>
                With custom close btn
              </Button>
            </div>

            <Modal
              visible={modals[modalsEnum.withOverlayClose]}
              footer={null}
              closable={false}
              title={'Modal with overlay close'}
              onCancel={closeModal(modalsEnum.withOverlayClose)}>
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>

            <Modal
              visible={modals[modalsEnum.withCloseBtn]}
              footer={null}
              closable={true}
              title='Modal with close btn'
              onCancel={closeModal(modalsEnum.withCloseBtn)}>
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>

            <Modal
              visible={modals[modalsEnum.withCustomCloseBtn]}
              closable={false}
              title='Modal with custom close'
              cancelButtonProps={{ type: 'danger' }}
              onCancel={closeModal(modalsEnum.withCustomCloseBtn)}>
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>
          </Card>

          <Card title='Width & height' className='mb-0'>
            <div className='elem-list'>
              <Button type='primary' onClick={openModal(modalsEnum.withCustomWidth)}>
                Custom width
              </Button>

              <Button type='primary' onClick={openModal(modalsEnum.withFullWidth)}>
                Full width
              </Button>

              <Button type='primary' onClick={openModal(modalsEnum.withCustomHeight)}>
                With custom height
              </Button>
            </div>
            <Modal
              visible={modals[modalsEnum.withCustomWidth]}
              footer={null}
              width='50%'
              closable={false}
              title={null}
              onCancel={closeModal(modalsEnum.withCustomWidth)}>
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>

            <Modal
              visible={modals[modalsEnum.withFullWidth]}
              footer={null}
              closable={false}
              width='95%'
              title='Modal with header'
              onCancel={closeModal(modalsEnum.withFullWidth)}>
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>

            <Modal
              visible={modals[modalsEnum.withCustomHeight]}
              footer={null}
              closable={false}
              bodyStyle={{ height: 500, maxHeight: '100%', overflow: 'auto' }}
              title='Modal with custom height'
              onCancel={closeModal(modalsEnum.withCustomHeight)}>
              <p>Text content ....</p>
              <p>Text content ....</p>
              <p>Text content ....</p>

              <Input placeholder={'Subscribe'} />
            </Modal>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PageModals;

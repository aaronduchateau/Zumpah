import React, { useEffect } from 'react';
import { Avatar, Card } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageProps, IPageData } from '../../../interfaces/page-data';

import AvatarGroup from '../../../ui/components/AvatarGroup/AvatarGroup';

const PageAvatars: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Avatars',
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
        title: 'Avatars'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <div className='row'>
        <div className='col-md-12 col-lg-6'>
          <div className='row'>
            <div className='col-12'>
              <Card title='Basic avatar' className='component-demo-card'>
                <Avatar icon='user' />
              </Card>
              <Card className='code-demo-card'>
                <SyntaxHighlighter language='jsx' style={docco}>
                  {'<Avatar icon="user" />'}
                </SyntaxHighlighter>
              </Card>
            </div>

            <div className='col-12'>
              <Card title='Initials'>
                <Avatar>AI</Avatar>
                <Avatar>GF</Avatar>
                <Avatar>JP</Avatar>
              </Card>
            </div>

            <div className='col-12'>
              <Card title='Avatar sizes'>
                <div className='elem-list'>
                  <Avatar size={76} src={require('../../../assets/content/user-76-3.jpg')} />
                  <Avatar size={50} src={require('../../../assets/content/user-50-2.jpg')} />
                  <Avatar size='large' src={require('../../../assets/content/user-40-1.jpg')} />
                  <Avatar icon='user' />
                  <Avatar size='small' icon='user' />
                </div>
              </Card>
            </div>

            <div className='col-12'>
              <Card title='Avatar shapes' className='mb-lg-0'>
                <div className='elem-list'>
                  <Avatar style={{ borderRadius: '0' }} icon='user' />
                  <Avatar shape='square' icon='user' />
                  <Avatar style={{ borderRadius: '30%' }} icon='user' />
                  <Avatar style={{ borderRadius: '40%' }} icon='user' />
                  <Avatar icon='user' />
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className='col-md-12 col-lg-6'>
          <div className='row'>
            <div className='col'>
              <Card title='Avatar group' className='component-demo-card'>
                <AvatarGroup>
                  <Avatar>U</Avatar>
                  <Avatar icon='user' />
                  <Avatar>AJ</Avatar>
                  <Avatar icon='user' />
                </AvatarGroup>
              </Card>

              <Card className='code-demo-card'>
                <SyntaxHighlighter language='jsx' style={docco}>
                  {'<AvatarGroup>\n' +
                    ' <Avatar>U</Avatar>\n' +
                    ' <Avatar icon="user" />\n' +
                    ' <Avatar>AJ</Avatar>\n' +
                    ' <Avatar icon="user" />\n' +
                    '</AvatarGroup>'}
                </SyntaxHighlighter>
              </Card>
            </div>

            <div className='col-12'>
              <Card title='Grouped initials'>
                <AvatarGroup>
                  <Avatar>AI</Avatar>
                  <Avatar>GF</Avatar>
                  <Avatar>JP</Avatar>
                </AvatarGroup>
              </Card>
            </div>

            <div className='col-12'>
              <Card title='Custom size grouped'>
                <AvatarGroup>
                  <Avatar size='large' icon='user' />
                  <Avatar size='large' icon='user' />
                  <Avatar size='large' icon='user' />
                  <Avatar size='large' icon='user' />
                </AvatarGroup>
              </Card>
            </div>

            <div className='col-12'>
              <Card title='Avatar shapes grouped' className='mb-0'>
                <AvatarGroup>
                  <Avatar style={{ borderRadius: '45%' }} icon='user' />
                  <Avatar style={{ borderRadius: '45%' }} icon='user' />
                  <Avatar style={{ borderRadius: '45%' }} icon='user' />
                  <Avatar style={{ borderRadius: '45%' }} icon='user' />
                </AvatarGroup>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAvatars;

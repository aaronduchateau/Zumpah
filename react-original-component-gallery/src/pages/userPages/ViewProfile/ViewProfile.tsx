import React, { useEffect } from 'react';
import { Avatar, Button, Card, Rate, Tag, Timeline } from 'antd';

import { IPageData, IPageProps } from '../../../interfaces/page-data';
import userCover from '../../../assets/content/user-profile.jpg';
import userAvatar from '../../../assets/content/user-400-1.jpg';

const skills = [
  'HTML',
  'PHP',
  'CSS',
  'SCSS',
  'ANGUlAR',
  'REACT',
  'VUE.JS',
  'JAVASCRIPT',
  'TYPESCRIPT'
];

const PageViewProfile: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'View profile',
    loaded: true,
    breadcrumbs: [
      {
        title: 'Home',
        route: 'dashboard'
      },
      {
        title: 'User Pages ',
        route: 'dashboard'
      },
      {
        title: 'View Profile'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <div className='row'>
        <div className='col col-12 col-md-6'>
          <Card cover={<img src={userCover} alt='user-cover' />} className='personal-info-card'>
            <div className='d-flex align-items-center justify-content-between user-actions'>
              <Avatar src={userAvatar} size={100} />

              <Button
                style={{
                  backgroundColor: '#e91e63',
                  borderRadius: 500,
                  color: '#fff',
                  border: 'none'
                }}>
                Subscribe
              </Button>
            </div>

            <div className='d-flex align-items-center justify-content-between'>
              <h5 className='mb-0 mt-0 mr-1'>David Liam</h5>

              <Rate value={4} />
            </div>

            <p style={{ color: '#8f8f90' }}>Front-end developer</p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim, nemo
              nihil non omnis temporibus? Blanditiis culpa labore velit.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Dicta, provident?
            </p>
          </Card>

          <Card title=' Websites & social channel'>
            <div className='row align-items-center mb-3'>
              <div className='col col-auto'>
                <span className='icofont-github' style={{ fontSize: 30, color: '#24292e' }} />
              </div>
              <div className='col'>
                <div>Github</div>
                <a href='#' onClick={e => e.preventDefault()}>
                  github.com/liam-jouns
                </a>
              </div>
            </div>

            <div className='row align-items-center mb-3'>
              <div className='col col-auto'>
                <span className='icofont-twitter' style={{ fontSize: 30, color: '#1da1f2' }} />
              </div>
              <div className='col'>
                <div>Twitter</div>
                <a href='#' onClick={e => e.preventDefault()}>
                  twitter.com/liam-jouns
                </a>
              </div>
            </div>

            <div className='row align-items-center mb-3'>
              <div className='col col-auto'>
                <span className='icofont-linkedin' style={{ fontSize: 30, color: '#0073b1' }} />
              </div>
              <div className='col'>
                <div>LinkedIn</div>
                <a href='#' onClick={e => e.preventDefault()}>
                  linkedin.com/liam-jouns
                </a>
              </div>
            </div>

            <div className='row align-items-center mb-3'>
              <div className='col col-auto'>
                <span className='icofont-youtube' style={{ fontSize: 30, color: '#ff0000' }} />
              </div>
              <div className='col'>
                <div>YouTube</div>
                <a href='#' onClick={e => e.preventDefault()}>
                  youtube.com/liam-jouns
                </a>
              </div>
            </div>
          </Card>

          <Card title=' Contact information' className='mb-md-0'>
            <div className='row align-items-center mb-3'>
              <div className='col col-auto'>
                <span
                  className='icofont-ui-touch-phone'
                  style={{ fontSize: 30, color: '#8f8f90' }}
                />
              </div>
              <div className='col'>
                <div>Mobile</div>
                0126596578
              </div>
            </div>

            <div className='row align-items-center mb-3'>
              <div className='col col-auto'>
                <span className='icofont-slack' style={{ fontSize: 30, color: '#8f8f90' }} />
              </div>
              <div className='col'>
                <div>Slack</div>
                @liam.joun
              </div>
            </div>

            <div className='row align-items-center mb-3'>
              <div className='col col-auto'>
                <span className='icofont-skype' style={{ fontSize: 30, color: '#8f8f90' }} />
              </div>
              <div className='col'>
                <div>Skype</div>
                liam0jouns
              </div>
            </div>

            <div className='row align-items-center mb-3'>
              <div className='col col-auto'>
                <span className='icofont-location-pin' style={{ fontSize: 30, color: '#8f8f90' }} />
              </div>
              <div className='col'>
                <div>Current Address</div>
                71 Pilgrim Avenue Chevy Chase, MD 20815
              </div>
            </div>
          </Card>
        </div>

        <div className='col col-12 col-md-6'>
          <Card title='Experience'>
            <Timeline>
              <Timeline.Item color={'green'}>
                <div style={{ opacity: 0.8 }} className='date w-100 mb-2'>
                  20017 - 2018
                </div>
                <span className='primary-text mb-4'>
                  <strong>UI/UX Designers</strong> - IronSketch
                </span>
              </Timeline.Item>

              <Timeline.Item color={'blue'}>
                <div style={{ opacity: 0.8 }} className='date w-100 mb-2'>
                  2015 - 2017
                </div>
                <span className='primary-text mb-4'>
                  <strong>Art & Multimedia From</strong> - Oxford University
                </span>
              </Timeline.Item>

              <Timeline.Item color={'red'}>
                <div style={{ opacity: 0.8 }} className='date w-100 mb-2'>
                  2013 - 2015
                </div>
                <span className='primary-text mb-4'>
                  <strong>Web Designer</strong> - WebDev Company
                </span>
              </Timeline.Item>

              <Timeline.Item color={'red'}>
                <div style={{ opacity: 0.8 }} className='date w-100 mb-2'>
                  2009 - 2013
                </div>
                <span className='primary-text mb-4'>
                  <strong>UI/UX Designer</strong> - Design ArtData
                </span>
              </Timeline.Item>
            </Timeline>
          </Card>

          <Card title='Education'>
            <Timeline>
              <Timeline.Item color={'red'}>
                <div style={{ opacity: 0.8 }} className='date w-100 mb-2'>
                  2008 - 2009
                </div>
                <span className='primary-text mb-4'>
                  <strong>Special schools</strong> - Edison Schools
                </span>
              </Timeline.Item>

              <Timeline.Item color={'red'}>
                <div style={{ opacity: 0.8 }} className='date w-100 mb-2'>
                  2007 - 2008
                </div>
                <span className='primary-text mb-4'>
                  <strong>Technical schools</strong> - Jules E. Mastbaum Technical High School
                </span>
              </Timeline.Item>

              <Timeline.Item color={'red'}>
                <div style={{ opacity: 0.8 }} className='date w-100 mb-2'>
                  2005 - 2007
                </div>
                <span className='primary-text mb-4'>
                  <strong>High schools</strong> - Benjamin Franklin High School
                </span>
              </Timeline.Item>

              <Timeline.Item color={'green'}>
                <div style={{ opacity: 0.8 }} className='date w-100 mb-2'>
                  1996 - 2004
                </div>
                <span className='primary-text mb-4'>
                  <strong>Middle schools</strong> - Bethune, Mary Mcleod School
                </span>
              </Timeline.Item>
            </Timeline>
          </Card>

          <Card title=' Skills' className='mb-0'>
            <div className='elem-list skills-list'>
              {skills.map((skill, i) => (
                <Tag
                  key={i}
                  color={'#cd5447'}
                  style={{ color: '#fff', borderRadius: 500, fontSize: 14 }}>
                  {skill}
                </Tag>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PageViewProfile;

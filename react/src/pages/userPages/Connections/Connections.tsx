import React, { useEffect, useState } from 'react';
import { Card, Tag } from 'antd';

import { IPageData, IPageProps } from '../../../interfaces/page-data';
import User from '../../../layouts/components/User/User';

import classes from './Connections.module.scss';
import className from '../../../utils/classNames';

const PageConnections: React.FC<IPageProps> = props => {
  const [users, setUsers] = useState([]);

  const userClasses = i =>
    className({
      'mb-xl-0': 4 > users.length - i,
      'mb-lg-0': 3 > users.length - i
    });

  const pageData: IPageData = {
    title: 'Connections',
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
        title: 'Connections'
      }
    ]
  };

  const { onSetPage, getPageData } = props;

  useEffect(() => onSetPage(pageData), []);

  useEffect(() => {
    async function getData() {
      const result = await getPageData('./data/connections.json');
      setUsers(result);
    }

    getData().catch(err => console.error('Error fetching data', err));
  }, []);

  return (
    <>
      {users && (
        <>
          <div className={`${classes.MenuBlock} d-md-block d-sm-none`}>
            <ul className={classes.Menu}>
              <li className={`${classes.MenuItem} ${classes.active}`}>
                <a href='' className={classes.link}>
                  Followers
                </a>
                <Tag>229</Tag>
              </li>

              <li className={classes.MenuItem}>
                <a href='' className={classes.link}>
                  Following
                </a>
                <Tag>987</Tag>
              </li>

              <li className={classes.MenuItem}>
                <a href='' className={classes.link}>
                  Request
                </a>
                <Tag>13</Tag>
              </li>
            </ul>
          </div>

          <div className='row'>
            {users.map((user, i) => (
              <div className='col-lg-4 col-md-6 col-sm-6 col-12' key={i}>
                <User className={userClasses(i)} user={user} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default PageConnections;

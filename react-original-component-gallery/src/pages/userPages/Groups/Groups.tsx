import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

import { IPageData, IPageProps } from '../../../interfaces/page-data';
import Group from '../../../layouts/components/Group/Group';
import GroupsSidebar from './GroupsSidebar/GroupSidebar';
import className from '../../../utils/classNames';

const PageGroups: React.FC<IPageProps> = props => {
  const { onSetPage, getPageData } = props;
  const [groups, setGroups] = useState(null);

  const pageData: IPageData = {
    title: 'Groups',
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
        title: 'Groups'
      }
    ]
  };

  const groupClasses = i =>
    className({
      'mb-xl-0': 4 > groups.length - i,
      'mb-lg-0': 3 > groups.length - i
    });

  useEffect(() => {
    onSetPage(pageData);

    async function getData() {
      const result = await getPageData('./data/groups.json ');
      setGroups(result);
    }

    getData().catch(err => console.error('Error fetching data', err));
  }, []);

  return (
    <>
      {groups && (
        <div className='row'>
          <div className='col-md-12 col-lg-8 col-xl-9'>
            <div className='row'>
              {groups.map((group, i) => (
                <div className='col-xl-4 col-lg-6 col-sm-6 col-12' key={i}>
                  <Group group={group} className={groupClasses(i)} />
                </div>
              ))}
            </div>
          </div>

          <div className='col-12 col-lg-4 col-xl-3'>
            <GroupsSidebar groups={groups} />
          </div>
        </div>
      )}
    </>
  );
};

export default PageGroups;

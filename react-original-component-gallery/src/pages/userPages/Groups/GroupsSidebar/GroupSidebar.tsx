import React from 'react';
import { Avatar, Card } from 'antd';
import { IGroup } from '../../../../interfaces/group';

interface GroupSidebarProps {
  groups: IGroup[];
}

const sortBy = (field: string) => (prev, next) => {
  if (prev[field] < next[field]) return 1;

  if (prev[field] > next[field]) return -1;

  return 0;
};

const sortByMembers = sortBy('members');

const GroupsSidebar: React.FC<GroupSidebarProps> = props => {
  const { groups } = props;

  const popularGroups: IGroup[] = groups.sort(sortByMembers).slice(0, 5);

  const groupPositions = [
    { name: 'Front-End Developer', num: 23 },
    { name: 'Android Developer', num: 15 },
    { name: 'UI/UX Designer', num: 13 },
    { name: 'Manager', num: 9 },
    { name: 'Full-Stack Developer', num: 8 }
  ];

  const groupLocations = [
    { name: 'Madrid, Spain', num: 22 },
    { name: 'Paris, France', num: 18 },
    { name: 'Los Angeles, California', num: 17 },
    { name: 'San Francisco, California', num: 14 },
    { name: 'Austin, Texas', num: 11 }
  ];

  return (
    <Card className='mb-0'>
      <div className='menu-block'>
        <div className='title-block p-0 m-0 '>
          <h3 className='title mt-0' style={{ fontSize: 16 }}>
            Popular groups
          </h3>
        </div>

        {popularGroups && (
          <ul className='group-menu p-0 m-0 d-flex flex-column'>
            {popularGroups.map((group, i) => (
              <li key={i} className='d-flex align-items-center justify-content-start my-2'>
                <Avatar className='mr-4' src={window.location.origin + group.avatar}>
                  {group.title[0]}
                </Avatar>

                <div className='d-flex flex-column'>
                  <a href='#' style={{ color: 'rgb(75, 81, 93)' }}>
                    <span className='font-weight-bold'>{group.title}</span>
                  </a>

                  <span style={{ fontSize: 11, color: 'rgba(75, 81, 93, 0.5)' }}>
                    {group.members} members
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className='menu-block'>
        <div className='title-block p-0 m-0'>
          <h3 className='title' style={{ fontSize: 16 }}>
            Groups by position
          </h3>
        </div>

        {groupPositions && (
          <ul className='group-menu p-0 m-0 d-flex flex-column'>
            {groupPositions.map((group, i) => (
              <li key={i} className='d-flex align-items-center justify-content-between my-2 w-100'>
                <a
                  className='d-flex justify-content-between w-100'
                  style={{ color: 'rgb(75, 81, 93)' }}>
                  <span>{group.name}</span>
                  <span style={{ color: 'rgba(75, 81, 93, 0.5)' }}>{group.num}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className='menu-block'>
        <div className='title-block p-0 m-0'>
          <h3 className='title' style={{ fontSize: 16 }}>
            Groups by location
          </h3>
        </div>

        {groupLocations && (
          <ul className='group-menu p-0 m-0 d-flex flex-column'>
            {groupLocations.map((group, i) => (
              <li key={i} className='d-flex align-items-center justify-content-between my-2 w-100'>
                <a
                  className='d-flex justify-content-between w-100'
                  style={{ color: 'rgb(75, 81, 93)' }}>
                  <span>{group.name}</span>
                  <span style={{ color: 'rgba(75, 81, 93, 0.5)' }}>{group.num}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
};

export default GroupsSidebar;

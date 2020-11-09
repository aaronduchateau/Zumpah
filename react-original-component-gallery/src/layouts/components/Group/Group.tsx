import React from 'react';
import { IGroup } from '../../../interfaces/group';
import { Avatar, Button, Card } from 'antd';
import AvatarGroup from '../../../ui/components/AvatarGroup/AvatarGroup';

import './Group.scss';

export interface GroupProps {
  group: IGroup;
  className?: string;
  key?: any;
}

const Group: React.FC<GroupProps> = props => {
  const { group, className, key } = props;
  const { title, avatar, bg, bgImage, connections, joined, members } = group;

  const coverStyles = {
    backgroundImage: 'url(' + bgImage + ')'
  };

  const initials = (group: IGroup) => {
    const TITLE_ARR = group.title.split(' ');

    if (TITLE_ARR.length > 1) {
      return TITLE_ARR[0][0] + TITLE_ARR[1][0];
    }

    return TITLE_ARR[0][0];
  };

  const getConnections = () => connections.slice(0, 5);

  return (
    <Card bodyStyle={{ padding: 0 }} className={className} key={key}>
      <div className='group-bg' style={coverStyles} />

      <div className='card-body'>
        <div className='info-block'>
          <div className='avatar-block'>
            <Avatar style={{ backgroundColor: avatar ? 'transparent' : bg }} size={76} src={avatar}>
              {initials(props.group)}
            </Avatar>
          </div>

          <div className='title-block text-center display-flex flex-column align-items-center p-0'>
            <h3 className='group-title' style={{ fontSize: 18 }}>
              <a className='group-link' href='#'>
                {title}
              </a>
            </h3>

            <span className='members' style={{ color: 'rgba(75, 81, 93, 0.5)' }}>
              {members} members
            </span>
          </div>

          <div className='connections-block'>
            <AvatarGroup>
              {getConnections().map((connection, i) => (
                <Avatar key={i} size={40} src={window.location.origin + connection} />
              ))}
            </AvatarGroup>

            <span className='connections' style={{ color: 'rgba(75, 81, 93, 0.5)' }}>
              {connections.length} connections
            </span>
          </div>
        </div>

        <Button block ghost={joined}>
          {joined ? 'Leave group' : 'Join'}
        </Button>
      </div>
    </Card>
  );
};

export default Group;

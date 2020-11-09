import React, { useState } from 'react';
import { Avatar, Button, Card } from 'antd';

import { IUser } from '../../../interfaces/user';

import './User.scss';

interface UserProps {
  className?: string;
  style?: string;
  key?: any;
  user: IUser;
}

const User: React.FC<UserProps> = props => {

  const { img, name, role, bg } = props.user;

  const [followed, setFollowed] = useState(props.user.followed);

  const unfollow = () => setFollowed(false);
  const follow = () => setFollowed(true);

  const bgUrl = window.location.origin + bg;

  const initials = name.split(' ')[0].charAt(0);

  return (
    <Card
      className={`${props.className ? props.className : ''}`}
      cover={<div style={{ backgroundImage: `url(${bgUrl})` }} className='user-bg' />}>
      <div className='user-info'>
        <div className='user-img'>
          <a href='#'>
            <Avatar size={76} src={window.location.origin + img}>
              <span style={{ fontSize: 32 }}>{initials}</span>
            </Avatar>
          </a>
        </div>

        <h5 className=' user-name'>
          <a className=' user-link' href='#'>
            {name}
          </a>
        </h5>

        <span className='user-role'>{role}</span>
      </div>

      {followed ? (
        <Button onClick={unfollow} type='primary' ghost block>
          Unfollow
        </Button>
      ) : (
        <Button onClick={follow} type='primary' block>
          Follow
        </Button>
      )}
    </Card>
  );
};

export default User;

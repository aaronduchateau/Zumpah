import React from 'react';

import '../BaseError/BaseErrorPage.scss';
import { Button, Icon } from 'antd';
import {history} from '../../../redux/store';

interface BaseErrorProps {
  title: string;
  subTitle: string;
  errorMessage: string;
}

const BaseError: React.FunctionComponent<BaseErrorProps> = props => {
  const { title, subTitle, errorMessage } = props;

  const handleButtonClick = () => {
    const route = `/`;
    history.push(route);
  };

  return (
    <div className='error-page'>
      <div className='error-card'>
        <div className='icon-block'>
          <i className='icofont-bulb-alt' />
        </div>

        <div className='card-content'>
          <div className='text-block mb-5'>
            <h3 className='title'>{errorMessage}</h3>

            <h6 className='sub-title'>{title}</h6>

            <p className='error-message'>{subTitle}</p>
          </div>

          <Button onClick={handleButtonClick} type='primary' block>
            <Icon type='home' theme='filled' />
            Back to home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BaseError;

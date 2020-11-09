import React from 'react';

import '../BaseError/BaseErrorPage.scss';
import BaseError from '../BaseError/BaseError';

const errorData = {
  title: 'Oopps. The service is temporarily unavailable.',
  subTitle:
    'The server is unable to service your request due to maintenance downtime or capacity problems.',
  errorMessage: '503 Service unavailable'
};

const ServiceUnavailable: React.FunctionComponent = () => <BaseError {...errorData} />;

export default ServiceUnavailable;

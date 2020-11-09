import React from 'react';

import '../BaseError/BaseErrorPage.scss';
import BaseError from '../BaseError/BaseError';

const errorData = {
  title: "Oopps. There was an error, please try again later.",
  subTitle: 'The server encountered an internal server error and was unable to complete your request.',
  errorMessage: '500 Internal server error'
};

const InternalError: React.FunctionComponent = () => <BaseError {...errorData} />;

export default InternalError;

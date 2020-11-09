import React from 'react';

import '../BaseError/BaseErrorPage.scss';
import BaseError from '../BaseError/BaseError';

const errorData = {
  title: 'Oopps. Something is broken.',
  subTitle: "We've been automatically alerted of the issue and will work to fix it asap.",
  errorMessage: '505 Forbidden'
};

const Forbidden: React.FunctionComponent = () => <BaseError {...errorData} />;

export default Forbidden;

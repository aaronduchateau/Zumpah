import React from 'react';

import classNames from '../../../utils/classNames'
import SettingsModal from "../Settings/SettingsModal/SettingsModal";

import './Footer.scss';

interface FooterProps {
  loaded?: boolean;
  boxed?: boolean;
}

const Footer: React.FunctionComponent<FooterProps> = props => {
  let footerClasses = classNames({
    'footer': true,
    'loaded': props.loaded,
    'boxed': props.boxed
  });

  return (
    <div className={footerClasses}>
      <div className='footer-wrap'>
        <div className='row align-items-center'>
          <div className='col-12 info'>
            &#169; 2019 Ninet v1.0.0. Created by type_pixel
          </div>
        </div>

        <div className='footer-skeleton'>
          <div className='row align-items-center'>
            <div className='col-12 col-md-6 d-md-block'>
              <ul className='p-0 page-breadcrumbs'>
                <li className='item bg animated-bg' />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

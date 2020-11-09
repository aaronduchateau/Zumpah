import React from 'react';
import { NavLink } from 'react-router-dom';

import { IBreadcrumb } from '../../../interfaces/page-data';
import './Breadcrumbs.scss';

interface BreadcrumbsProps {
  breadcrumbs: IBreadcrumb[];
}

const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = props => {
  return (
    <ul className='breadcrumbs'>
      {props.breadcrumbs.map((breadcrumb, i) => (
        <li className='item' key={i}>
          {breadcrumb.route && <NavLink className='breadcrumb-link' to={breadcrumb.route}>{breadcrumb.title}</NavLink>}

          {!breadcrumb.route && <span className='breadcrumb-link last'>{breadcrumb.title}</span>}

          {i < props.breadcrumbs.length - 1 && <span className='separator'>|</span>}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;

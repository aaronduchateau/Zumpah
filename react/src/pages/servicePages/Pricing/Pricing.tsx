import React, { useEffect } from 'react';
import { Button, Card } from 'antd';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const PagePricing: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Pricing',
    loaded: true,
    breadcrumbs: [
      {
        title: 'Home',
        route: 'dashboard'
      },
      {
        title: 'Service Pages ',
        route: 'dashboard'
      },
      {
        title: 'Pricing'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <div className='row'>
      <div className='col-12 col-md-4'>
        <Card className='mb-md-0' title='Personal' style={{ textAlign: 'center' }}>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='mr-2' style={{ fontSize: 50 }}>
              39
            </div>
            <div style={{ color: '#8f8f90' }}>
              <div style={{ fontSize: 20 }}>USD</div>
              <div>month</div>
            </div>
          </div>

          <hr className='mt-4 mb-4' />

          <ul className='list-unstyled text-left'>
            <li className='d-flex align-items-center pt-2 pb-2'>
              <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
              <span className='ml-1'>5GB Disk Space</span>
            </li>
            <li className='d-flex align-items-center pt-2 pb-2'>
              <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
              <span className='ml-1'>25GB Monthly Bandwith</span>
            </li>
            <li className='d-flex align-items-center pt-2 pb-2'>
              <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
              <span className='ml-1'>5 Email Accounts</span>
            </li>
            <li className='d-flex align-items-center pt-2 pb-2'>
              <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
              <span className='ml-1'>Unlimited Subdomains</span>
            </li>
            <li className='d-flex align-items-center pt-2 pb-2'>
              <span className='icofont-close-circled' style={{ color: '#8f8f90' }} />
              <span className='ml-1'>Free support</span>
            </li>
          </ul>

          <Button className='mb-3' block>
            Purchase
          </Button>
        </Card>
      </div>

      <div className='col-12 col-md-4'>
        <Card className='mb-md-0' title='Developers' style={{ textAlign: 'center' }}>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='mr-2' style={{ fontSize: 50, color: '#6e40d8' }}>
              59
            </div>
            <div style={{ color: '#8f8f90' }}>
              <div style={{ fontSize: 20 }}>USD</div>
              <div>month</div>
            </div>
          </div>

          <hr className='mt-4 mb-4' />

          <ul className='list-unstyled text-left'>
            <li className='d-flex align-items-center pt-2 pb-2'>
              <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
              <span className='ml-1'>1GB Disk Space</span>
            </li>
            <li className='d-flex align-items-center pt-2 pb-2'>
              <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
              <span className='ml-1'>10GB Monthly Bandwith</span>
            </li>
            <li className='d-flex align-items-center pt-2 pb-2'>
              <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
              <span className='ml-1'>2 Email Accounts</span>
            </li>
            <li className='d-flex align-items-center pt-2 pb-2'>
              <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
              <span className='ml-1'>Unlimited Subdomains</span>
            </li>
            <li className='d-flex align-items-center pt-2 pb-2'>
              <span className='icofont-close-circled' style={{ color: '#8f8f90' }} />
              <span className='ml-1'>Free support</span>
            </li>
          </ul>

          <Button type='primary' className='mb-3' block>
            Purchase
          </Button>
        </Card>
      </div>

      <div className='col-12 col-md-4'>
        <Card className='mb-0' title='Premium' style={{ textAlign: 'center' }}>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='mr-2' style={{ fontSize: 50 }}>
              99
            </div>
            <div style={{ color: '#8f8f90' }}>
              <div style={{ fontSize: 20 }}>USD</div>
              <div>month</div>
            </div>
          </div>

          <hr className='mt-4 mb-4' />

          <ul className='list-unstyled text-left'>
            <li className='d-flex align-items-center pt-2 pb-2'>
              <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
              <span className='ml-1'>10GB Disk Space</span>
            </li>
            <li className='d-flex align-items-center pt-2 pb-2'>
              <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
              <span className='ml-1'>100GB Monthly Bandwith</span>
            </li>
            <li className='d-flex align-items-center pt-2 pb-2'>
              <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
              <span className='ml-1'>20 Email Accounts</span>
            </li>
            <li className='d-flex align-items-center pt-2 pb-2'>
              <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
              <span className='ml-1'>Unlimited Subdomains</span>
            </li>
            <li className='d-flex align-items-center pt-2 pb-2'>
              <span className='icofont-check-circled' style={{ color: '#8f8f90' }} />
              <span className='ml-1'>Free support</span>
            </li>
          </ul>

          <Button type='primary' className='mb-3' ghost block>
            Purchase
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default PagePricing;

import React, { useEffect, useState } from 'react';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

const iconsUrl = './data/icons-simpleline.json';

const IconWrap: React.FC = props => <div className='icon-wrap'>{props.children}</div>;

const PageIconsSLI: React.FC<IPageProps> = props => {
  const { onSetPage, getPageData } = props;

  const pageData: IPageData = {
    title: 'Icons SLI',
    breadcrumbs: [
      {
        title: 'Home',
        route: 'dashboard'
      },
      {
        title: 'UI Kit ',
        route: 'dashboard'
      },
      {
        title: 'Icons SLI'
      }
    ]
  };

  const [icons, setIcons] = useState([]);

  useEffect(() => {
    onSetPage(pageData);

    async function getData() {
      const result = await getPageData(iconsUrl);
      setIcons(result);
    }

    getData().catch(err => console.error('Error fetching data', err));
  }, []);

  return (
    <>
      <div className='elem-list'>
        {icons.map(icon => (
          <IconWrap>
            <span key={icon} className={icon} style={{ fontSize: 20 }} />
          </IconWrap>
        ))}
      </div>
    </>
  );
};

export default PageIconsSLI;

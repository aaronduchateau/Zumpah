import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../BaseLayout/BaseLayout.scss';
import './Vertical.scss';

import { connect } from 'react-redux';
import { Route } from 'react-router';

import { toggleSidebar } from '../../redux/settings/actions';

import BaseLayout from '../BaseLayout/BaseLayout';
import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';
import Menu from '../components/Menu/Menu';
import Logo from '../components/Logo/Logo';
import Footer from '../components/Footer/Foooter';
import Actions from '../components/Actions/Actions';
import NavbarSkeleton from '../components/NavbarSkeleton/NavbarSkeleton';
import Settings from '../components/Settings/Settings';

import { IPageData } from '../../interfaces/page-data';
import { IMenuItem } from '../../interfaces/menu';
import { IAppSettings } from '../../interfaces/settings';

import { AppState } from '../../redux/store';

import BasePage from '../../pages/BasePage/BasePage';

import { defaultRoutes } from '../../routes';

import { resetPageData, setPageData } from '../../redux/pages/actions';

const getGradientString = (firstColor: string, secondColor: string): string =>
  `linear-gradient(188deg, ${firstColor}, ${secondColor} 65%)`;

interface VerticalLayoutProps {
  pageData: IPageData;
  settings: IAppSettings;
  onSidebarToggle: () => void;
  onSettingsReset: () => void;
  onSettingsSet: (data: IAppSettings) => void;
  onSettingsUpdate: (data: IAppSettings) => void;
  onSetPage: (data: IPageData) => void;
  onPageReset: () => void;
}

const VerticalLayout: React.FunctionComponent<VerticalLayoutProps> = props => {
  const { pageData, settings, onSidebarToggle, onPageReset, onSetPage } = props;
  const {
    sidebarAccentColor,
    sidebarColor,
    topbarColor,
    topbarBg,
    sidebarBg2,
    sidebarBg,
    sidebarAccentContrastColor,
    sidebarOpened,
    layout,
    boxed
  } = settings;
  const [menuData, setMenuData] = useState<IMenuItem[]>([]);
  const [settingsVisibility, setSettingsVisibility] = useState(false);
  const routes = defaultRoutes;

  useEffect(() => {
    async function fetchData() {
      const result = await axios('./data/menu.json');
      setMenuData(result.data);
    }

    fetchData().catch(err => console.log('Server Error', err));
  }, []);

  const handleToggleSidebar = () => {
    onSidebarToggle();
  };

  const handleSettingsModalClose = () => {
    setSettingsVisibility(false);
  };

  const handleSettingsClick = () => setSettingsVisibility(true);

  return (
    <div className='layout vertical'>
      <div className={`app-container ${boxed && 'boxed'}`}>
        <Navbar
          style={{ backgroundImage: getGradientString(sidebarBg, sidebarBg2) }}
          orientation='vertical'
          opened={sidebarOpened}
          onCloseNavbar={handleToggleSidebar}>
          <button
            className='no-style navbar-close icofont-close-line d-lg-none'
            onClick={onSidebarToggle}
          />
          <Logo style={{ backgroundColor: topbarBg }} height={33} width={147} />
          <Menu
            color={sidebarColor}
            accentContrast={sidebarAccentContrastColor}
            accentColor={sidebarAccentColor}
            data={menuData}
            layout={'vertical'}
          />
          <NavbarSkeleton type='vertical' loaded={props.pageData.fullFilled} />
        </Navbar>

        <Navbar
          boxed={boxed}
          style={{ backgroundColor: topbarBg, color: topbarColor }}
          orientation='horizontal'
          className='horizontal-nav'
          minHeight={60}>
          <button className='navbar-toggle d-lg-none' onClick={handleToggleSidebar}>
            <span />
            <span />
            <span />
          </button>

          <Search
            style={{ color: topbarColor }}
            data={menuData}
            dataKey='title'
            className='d-none d-md-block'
          />

          <Actions />

          <NavbarSkeleton type='horizontal' loaded={props.pageData.fullFilled} />
        </Navbar>

        <BaseLayout
          pageData={pageData}
          settings={settings}
          onPageReset={onPageReset}
          onSidebarToggle={onSidebarToggle}>
          {routes.map((route, i) => {
            return (
              <Route
                exact
                key={i}
                path={`/vertical${route.path}`}
                render={() => (
                  <BasePage>
                    <route.component onSetPage={onSetPage} />
                  </BasePage>
                )}
              />
            );
          })}
        </BaseLayout>

        <Footer boxed={boxed} loaded={props.pageData.fullFilled}/>

        <button className='no-style settings-btn' onClick={handleSettingsClick}>
          <span className='pulse' />
          <span className='icofont-bucket2' />
        </button>
      </div>

      <Settings opened={settingsVisibility} onClose={handleSettingsModalClose} />
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  pageData: state.pageData,
  settings: state.settings
});

const mapDispatchToProps = dispatch => ({
  onSidebarToggle: () => dispatch(toggleSidebar()),
  onSetPage: (data: IPageData) => dispatch(setPageData(data)),
  onPageReset: () => dispatch(resetPageData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerticalLayout);

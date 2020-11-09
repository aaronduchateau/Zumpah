import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../BaseLayout/BaseLayout.scss';
import './Horizontal.scss';

import { connect } from 'react-redux';
import { Route } from 'react-router';

import {
  resetSettings,
  setSettings,
  updateSettings,
  toggleSidebar
} from '../../redux/settings/actions';

import BaseLayout from '../BaseLayout/BaseLayout';
import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';
import Menu from '../components/Menu/Menu';
import Logo from '../components/Logo/Logo';
import Footer from '../components/Footer/Foooter';
import Actions from '../components/Actions/Actions';
import NavbarSkeleton from '../components/NavbarSkeleton/NavbarSkeleton';

import { IMenuItem } from '../../interfaces/menu';
import { IAppSettings } from '../../interfaces/settings';
import { AppState } from '../../redux/store';
import { IPageData } from '../../interfaces/page-data';
import BasePage from '../../pages/BasePage/BasePage';
import { defaultRoutes } from '../../routes';
import { resetPageData, setPageData } from '../../redux/pages/actions';
import Settings from '../components/Settings/Settings';

const getGradientString = (firstColor: string, secondColor: string): string =>
  `linear-gradient(188deg, ${firstColor}, ${secondColor} 65%)`;

interface HorizontalLayoutProps {
  pageData: IPageData;
  settings: IAppSettings;
  onSidebarToggle: () => void;
  onSettingsReset: () => void;
  onSettingsSet: (data: IAppSettings) => void;
  onSettingsUpdate: (data: IAppSettings) => void;
  onSetPage: (data: IPageData) => void;
  onPageReset: () => void;
}

const HorizontalLayout: React.FunctionComponent<HorizontalLayoutProps> = props => {
  const { pageData, settings } = props;

  const {
    sidebarAccentColor,
    sidebarColor,
    topbarColor,
    topbarBg,
    sidebarBg2,
    sidebarBg,
    sidebarAccentContrastColor,
    sidebarOpened,
    sidebarContrast,
    boxed
  } = settings;

  const [menuData, setMenuData] = useState<IMenuItem[]>([]);
  const [settingsVisibility, setSettingsVisibility] = useState(false);
  const routes = defaultRoutes;

  useEffect(() => {
    async function fetchData() {
      const result = await axios('./data/menu-horizontal.json');
      setMenuData(result.data);
    }

    fetchData().catch(err => console.log('Server Error', err));
  }, []);

  const handleSettingsModalClose = () => {
    setSettingsVisibility(false);
  };

  const handleSettingsClick = () => setSettingsVisibility(true);

  const handleToggleSidebar = () => {
    props.onSidebarToggle();
  };

  return (
    <div className='layout horizontal'>
      <div className={`app-container ${boxed && 'boxed'}`}>
        <Navbar
          boxed={boxed}
          className='top-bar'
          orientation='horizontal'
          minHeight='60px'
          style={{ backgroundColor: topbarBg, color: topbarColor }}>
          <Logo className='d-lg-block d-none p-0' height={33} width={147} />
          <button className='navbar-toggle d-lg-none' onClick={handleToggleSidebar}>
            <span />
            <span />
            <span />
          </button>

          <Search
            data={menuData}
            layout='horizontal'
            dataKey='title'
            className='d-none d-md-block'
          />

          <Actions />

          <NavbarSkeleton type='horizontal' loaded={props.pageData.fullFilled} />
        </Navbar>

        <Navbar
          orientation='horizontal-vertical'
          className='menu-bar'
          boxed={boxed}
          opened={sidebarOpened}
          onCloseNavbar={handleToggleSidebar}
          style={{ backgroundImage: getGradientString(sidebarBg, sidebarBg2) }}>
          <Logo className='d-lg-none' height={33} width={147} />

          <button
            className='no-style navbar-close icofont-close-line d-lg-none'
            onClick={props.onSidebarToggle}
          />

          <Menu
            color={sidebarColor}
            accentContrast={sidebarAccentContrastColor}
            accentColor={sidebarAccentColor}
            contrast={sidebarContrast}
            data={menuData}
            layout='horizontal'
            orientation='horizontal'
          />

          <NavbarSkeleton type='horizontal' loaded={props.pageData.fullFilled} />
        </Navbar>

        <BaseLayout
          pageData={pageData}
          settings={settings}
          onPageReset={props.onPageReset}
          onSidebarToggle={props.onSidebarToggle}>
          {routes.map((route, i) => {
            return (
              <Route
                exact
                key={i}
                path={`/horizontal${route.path}`}
                render={() => (
                  <BasePage>
                    <route.component onSetPage={props.onSetPage} />
                  </BasePage>
                )}
              />
            );
          })}
        </BaseLayout>

        <Footer boxed={boxed} loaded={props.pageData.fullFilled} />

        <button className='no-style settings-btn' onClick={handleSettingsClick}>
          <span className='pulse' />
          <span className='icofont-bucket2' />
        </button>

        <Settings opened={settingsVisibility} onClose={handleSettingsModalClose} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  pageData: state.pageData,
  settings: state.settings
});

const mapDispatchToProps = dispatch => ({
  onSidebarToggle: () => dispatch(toggleSidebar()),
  onSettingsReset: () => dispatch(resetSettings()),
  onSettingsSet: (data: IAppSettings) => dispatch(setSettings(data)),
  onSettingsUpdate: (data: IAppSettings) => dispatch(updateSettings(data)),
  onSetPage: (data: IPageData) => dispatch(setPageData(data)),
  onPageReset: () => dispatch(resetPageData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HorizontalLayout);

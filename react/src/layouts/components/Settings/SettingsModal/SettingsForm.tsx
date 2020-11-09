import React, { useEffect, useState } from 'react';
import { Form, Select, Switch } from 'antd';
import { connect } from 'react-redux';

import { PickerTuple } from '../../../../ui/components/ColorPicker/ColorPicker';
import ColorPicker from '../../../../ui/components/ColorPicker/ColorPicker';
import { IAppSettings } from '../../../../interfaces/settings';
import { AppState } from '../../../../redux/store';

import { updateSettings } from '../../../../redux/settings/actions';
import {history} from '../../../../redux/store';

interface SettingsFormProps {
  settings: IAppSettings;
  onSettingsUpdate: (settings) => void;
}

const mergeSettings = (oldSettings: IAppSettings, newSettings: IAppSettings) => ({
  ...oldSettings,
  ...newSettings
});

const SettingsForm: React.FC<SettingsFormProps> = props => {
  const { settings, onSettingsUpdate } = props;

  const { topbarBg, sidebarColor, sidebarBg, sidebarBg2, sidebarAccentColor, boxed } = settings;

  const layout = history.location.pathname.split('/')[1];

  const handleFormChange = newSettings => {
    const updatedSettings = mergeSettings(settings, newSettings);
    onSettingsUpdate(updatedSettings);
  };

  const handleLayoutChange = layout => {
    const route = history.location.pathname.split('/')[2];
    const url = `/${layout}/${route}`;

    setTimeout(() => {
      history.push(url);
    });

    const layoutState: IAppSettings = { layout };
    handleFormChange(layoutState);
  };

  const handleBoxedChange = (value: boolean) => {
    const boxedState: IAppSettings = { boxed: value };
    handleFormChange(boxedState);
  };

  const handleTopbarBgChange = (value: PickerTuple) => {
    const [firstColor] = value;

    const topBarState: IAppSettings = {
      topbarBg: firstColor.color,
      topbarColor: firstColor.contrast
    };

    handleFormChange(topBarState);
  };

  const handleSidebarBgChange = (value: PickerTuple) => {
    const [firstColor, secondColor] = value;

    const sidebarState: IAppSettings = {
      sidebarBg: firstColor.color,
      sidebarBg2: secondColor.color
    };

    handleFormChange(sidebarState);
  };

  const handleSidebarColor = (value: PickerTuple) => {
    const [firstColor] = value;

    const sidebarColorState: IAppSettings = {
      sidebarColor: firstColor.color,
      sidebarContrast: firstColor.contrast
    };

    handleFormChange(sidebarColorState);
  };

  const handleSidebarAccentColor = (value: PickerTuple) => {
    const [color] = value;

    const sidebarColorAccentState: IAppSettings = {
      sidebarAccentColor: color.color,
      sidebarAccentContrastColor: color.contrast
    };

    handleFormChange(sidebarColorAccentState);
  };

  return (
    <Form layout='vertical'>
      <Form.Item label='Topbar background'>
        <ColorPicker onColorChange={handleTopbarBgChange} firstColor={topbarBg} />
      </Form.Item>

      <Form.Item label={`${layout === 'vertical' ? 'Sidebar' : 'Second navbar'} background`}>
        <ColorPicker
          onColorChange={handleSidebarBgChange}
          firstColor={sidebarBg}
          secondColor={sidebarBg2}
        />
      </Form.Item>

      <Form.Item label={`${layout === 'vertical' ? 'Sidebar' : 'Second navbar'}  color`}>
        <ColorPicker onColorChange={handleSidebarColor} firstColor={sidebarColor} />
      </Form.Item>

      <Form.Item label={`${layout === 'vertical' ? 'Sidebar' : 'Second navbar'} accent color`}>
        <ColorPicker onColorChange={handleSidebarAccentColor} firstColor={sidebarAccentColor} />
      </Form.Item>

      <Form.Item label='Layout'>
        <Select value={layout} onChange={handleLayoutChange}>
          <Select.Option value={'vertical'}>Vertical</Select.Option>

          <Select.Option value={'horizontal'}>Horizontal</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item className='mb-0' label='Full width / Boxed'>
        <Switch checked={boxed} onChange={handleBoxedChange} />
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = (state: AppState, ownProps) => {
  return {
    settings: state.settings,
    prop: ownProps.prop
  };
};

const mapDispatchToProps = dispatch => ({
  onSettingsUpdate: (data: IAppSettings) => dispatch(updateSettings(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsForm);

import React, { useState } from 'react';
import SettingsModal from './SettingsModal/SettingsModal';
import { connect } from 'react-redux';
import { AppState } from '../../../redux/store';

import { resetSettings, setSettings, updateSettings } from '../../../redux/settings/actions';

import { IAppSettings } from '../../../interfaces/settings';

interface SettingsProps {
  opened: boolean;
  settings?: IAppSettings;
  onClose: () => void;
  onSettingsReset?: () => void;
}

const Settings: React.FC<SettingsProps> = props => {
  const { onSettingsReset, onClose,  settings, opened } = props;

  return (
    <SettingsModal
      onSettingsReset={onSettingsReset}
      settings={settings}
      visible={opened}
      onClose={() => onClose()}
    />
  );
};

const mapStateToProps = (state: AppState, ownProps) => {
  return {
    opened: ownProps.opened,
    onClose: ownProps.onClose
  };
};

const mapDispatchToProps = dispatch => ({
  onSettingsReset: () => dispatch(resetSettings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

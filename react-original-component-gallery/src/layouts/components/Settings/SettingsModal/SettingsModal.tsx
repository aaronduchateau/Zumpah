import React, { useRef } from 'react';
import { Button, Form, Modal, Select, Switch } from 'antd';

import { IAppSettings } from '../../../../interfaces/settings';

import SettingsForm from './SettingsForm';

interface SettingsModalProps {
  visible: boolean;
  onClose: () => void;
  settings: IAppSettings;
  onSettingsReset?: () => void;
  onSettingsUpdate?: (settings: IAppSettings) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = props => {
  const { onClose, visible, onSettingsUpdate, onSettingsReset, settings } = props;
  const closeModal = () => onClose();

  const downloadLink = useRef<HTMLAnchorElement>(null);

  const handleSettingsReset = () => onSettingsReset();

  const handleSettingsDownload = () => {
    const settingsJSON = JSON.stringify(settings);
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(settingsJSON);

    downloadLink.current.setAttribute('href', dataStr);
    downloadLink.current.setAttribute('download', 'settings.json');
    downloadLink.current.click();
  };

  return (
    <Modal
      visible={visible}
      title={
        <h4 style={{ fontWeight: 300 }} className='m-0'>
          Application settings
        </h4>
      }
      onCancel={closeModal}
      footer={
        <div className='d-flex justify-content-between elem-list settings-actions'>
          <Button onClick={handleSettingsReset} type='danger'>
            Reset to default
          </Button>
          <Button type='primary' onClick={handleSettingsDownload}>
            Download settings
          </Button>
        </div>
      }>
      <SettingsForm settings={settings} onValueChange={onSettingsUpdate} />
      <a ref={downloadLink} style={{ display: 'none' }} />
    </Modal>
  );
};

export default SettingsModal;

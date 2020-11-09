import * as SettingsTypes from './types';
import { IAppSettings } from '../../interfaces/settings';

export const setSettings = (
  data: IAppSettings
): SettingsTypes.SetSettingsAction => ({
  type: SettingsTypes.SET_SETTINGS,
  payload: data
});

export const updateSettings = (
  data: IAppSettings
): SettingsTypes.UpdateSettingsAction => ({
  type: SettingsTypes.UPDATE_SETTINGS,
  payload: data
});

export const resetSettings = (): SettingsTypes.ResetSettingsAction => ({
  type: SettingsTypes.RESET_SETTINGS
});

export const toggleSidebar = (): SettingsTypes.ToggleSidebarAction => ({
  type: SettingsTypes.TOGGLE_SIDEBAR
});

import { IAppSettings } from '../../interfaces/settings';

export const SET_SETTINGS = '[Settings] Set Settings';
export const RESET_SETTINGS = '[Settings] Reset Settings';
export const UPDATE_SETTINGS = '[Settings] Update Settings';
export const TOGGLE_SIDEBAR = '[User] Toggle Sidebar';

export interface SetSettingsAction {
  type: typeof SET_SETTINGS;
  payload: IAppSettings;
}

export interface ResetSettingsAction {
  type: typeof RESET_SETTINGS;
}

export interface UpdateSettingsAction {
  type: typeof UPDATE_SETTINGS;
  payload: IAppSettings;
}

export interface ToggleSidebarAction {
  type: typeof TOGGLE_SIDEBAR
}

export type SettingsActionTypes = SetSettingsAction | ResetSettingsAction | UpdateSettingsAction | ToggleSidebarAction;

import { createStore, combineReducers } from 'redux';

import { createHashHistory } from 'history'
import { settingsReducer } from './settings/reducer';
import { pageDataReducer } from './pages/reducer';
import { connectRouter } from 'connected-react-router'

export const history = createHashHistory({
  hashType: 'slash'
});

const rootReducer = combineReducers({
  settings: settingsReducer,
  pageData: pageDataReducer,
  router: connectRouter(history)
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = () => {
  return createStore(rootReducer);
};

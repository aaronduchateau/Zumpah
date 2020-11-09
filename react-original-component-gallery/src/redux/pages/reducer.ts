import { PageActionsTypes, RESET_PAGE_DATA, UPDATE_PAGE_DATA, SET_PAGE_DATA } from './types';
import { IPageData } from '../../interfaces/page-data';

const initialState: IPageData = {
  title: '',
  loaded: true,
  breadcrumbs: null,
  fullFilled: false
};

export const pageDataReducer = (state: IPageData = initialState, action: PageActionsTypes) => {
  switch (action.type) {
    case SET_PAGE_DATA:
      return { ...action.payload };
    case UPDATE_PAGE_DATA:
      return { ...state, ...action.payload };
    case RESET_PAGE_DATA:
      return { ...initialState };
    default:
      return { ...state };
  }
};

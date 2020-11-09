import * as PageTypes from './types';
import {IPageData} from "../../interfaces/page-data";

export const setPageData = (data: IPageData): PageTypes.SetPageDataAction => ({
  type: PageTypes.SET_PAGE_DATA,
  payload: data
});

export const updatePageDada = (data: IPageData): PageTypes.UpdatePageDataAction => ({
  type: PageTypes.UPDATE_PAGE_DATA,
  payload: data
});

export const resetPageData = (): PageTypes.ResetPageDataAction => ({
  type: PageTypes.RESET_PAGE_DATA
});

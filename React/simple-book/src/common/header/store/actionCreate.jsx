import * as CONTANTS from './constants';
// JSON sheame 规范
export const searchFocus = (focus) => {
  return {
    type: CONTANTS.SEARCH_FOCUS,
    focus
  }
}
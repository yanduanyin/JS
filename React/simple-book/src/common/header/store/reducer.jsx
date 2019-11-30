import * as CONTANTS from './constants';
import { fromJS } from 'immutable';

// immutable 第一步定义一个默认值
const defaultState = fromJS({
  focus: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case CONTANTS.SEARCH_FOCUS:
      return state.set('focus', action.focus) // merge 也可以使用
    default: 
      return state
  }
}
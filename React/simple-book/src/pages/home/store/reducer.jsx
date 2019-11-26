import { fromJS } from 'immutable';
import * as CONSTANTS from './constant';
const defaultState = fromJS({
  topList: []
})

function homeReducer(state = defaultState, action) {
  switch (action.type) {
    case CONSTANTS.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
    default:
      return state
  }
}

export default homeReducer;

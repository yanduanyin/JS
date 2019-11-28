import { fromJS } from 'immutable';
import * as CONSTANTS from './constant';
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  articlePage: 1
})

function homeReducer(state = defaultState, action) {
  switch (action.type) {
    case CONSTANTS.CHANGE_HOME_DATA:
      return state.merge({ // 合并 相同的会覆盖，不同的会合并到一块  
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
    case CONSTANTS.ADD_ARTICLE_LIST: 
      return state.merge({ // 合并 相同的会覆盖，不同的会合并到一块
        articleList: state.get('articleList').concat(fromJS(action.list)),
        articlePage: action.nextPage
      })
    default:
      return state
  }
}

export default homeReducer;

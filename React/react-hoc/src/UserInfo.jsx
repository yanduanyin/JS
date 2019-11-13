import React, {Component} from 'react';
import WithLogin from './WithLogin'; // 处理相同的逻辑部分

class UserInfo extends Component {
  render () {
    return (
      <p>username</p>
    )
  }
}
// WithLogin返回的是组件
export default WithLogin(UserInfo);
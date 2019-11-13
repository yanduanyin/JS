import React, {Component} from 'react';
import WithLogin from './WithLogin'; // 处理相同的逻辑部分

// 修饰符@
@WithLogin
class OrderList extends Component {
  render() {
    return (
      <ul>
        <li>Ipad</li>
        <li>MAC</li>
      </ul>
    )
  }
}
// WithLogin返回的是组件
export default OrderList;
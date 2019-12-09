import React from 'react';
/**
 * { tag: 'div' }
 * 浏览器：react-dom div
 * 服务端：字符串的 html，
 * 同构：
 */
class Header extends React.Component {
  render() {
    return (
      <div>
        hello server
        <button onClick={this.buy}>buy</button>
      </div>
    )
  }
}

export default Header;
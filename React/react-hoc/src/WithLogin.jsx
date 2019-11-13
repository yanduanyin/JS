import React, {Component} from 'react'
export default function(Com) {
  // 传进来的是不同的部分
  class WithLogin extends Component {
    // 这个类里面处理相同的逻辑部分
    state = {
      isLogin: false
    }
    render() {
      const {isLogin} = this.state;
      if (isLogin) {
        return (
          <Com />
        )
      }
      return (
        <button onClick={() => {
          this.setState({
            isLogin: true
          })
        }}>login</button>
      )
    }
  }
  return WithLogin
}

function add (a, b) {
  return a + b;
}
add(2, 4);
// 函数是一等公民
function addAsync(a, b, cb) {
  setTimeout(() => {
    cb(a+ b);
  }, 3000)
}
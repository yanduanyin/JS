// 节流
// let pre = 0;
// function fetch() {
//   let now = now;
//   if (now - pre >= wait) {
//     console.log('123');
//   } 
// }
// btn.mouseMove = fetch
// btn1.mouseMove = fetch1
// // 过程 抽象
// // 高阶函数
// // _.throtle(fun, 300)
// function myThrotle(func) {
//   let pre = 0;
//   return function (...args) {
      // let now = now;
      // if (now - pre >= ) {
      //   func(...args)
      // }  
//   }
// // }
// function fetch1(a, b) => a + b;
// var aa = throttle(fetch1);
// aa(1, 2)



import React, {Component} from 'react';
import { Spin } from 'antd';
export default function(Com) {
  // state = {
  //   isLoading: false
  // }
  class withLoading extends Component {
    state = {
      isLoading: false
    }
    ref = React.createRef()
    componentDidMount() {
      this.setState({
        isLoading: true
      })
      this.ref.current.initLoading()
      .then(data => {
        this.setState({
          isLoading: false
        })
      })
    }
    render() {
      // withRouter
      const props = this.props
      return (
        <Spin spinning={this.state.isLoading}>
          <Com ref={this.ref}{...props} from="fromWithLoading"/>
        </Spin> 
      )
    }
  }
  return withLoading
}
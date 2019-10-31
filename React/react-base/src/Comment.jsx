import React, { Component } from 'react';

class Input extends Component {
  // 静态属性 数据集合
  state = {
    value: ''
  }
  // 方法统一定义为箭头函数 为了使 this 指向上一级 class 这个组件
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      value
    })
  }
  // React 都是单向数据流 State -> render -> input 受控组件 触发change事件 -> 改变State -> render
  //  input 受控组件 完全受 state.value 的控制
  handleSubmit = () => {
    const { value } = this.state;
    const { onReceive } = this.props;
    console.log(value);
    // 回调 函数
    onReceive(value);
  }
  render() {
    const { value } = this.state;
    return (
      <>
        <input type="text" value={value} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>submit</button>
      </>
    )
  }
}
class CommontList extends Component {
  render() {
    const { clist }= this.props
    return (
      <React.Fragment>
        {
          clist.map((list, index) => {
            return (
              <li key={index} >
                { list.content }
              </li>
            )
          })
        }
      </React.Fragment>
    )
  }
}
class Comment extends Component {
  state = {
    clist: [
      {content: '666'},
      {content:  '999'},
      {content: '第三条数据'}
    ] // 评论列表
  }
  handleReceiveComment = (value) => {
    console.log('子组件传下去的方法回调传到父组件的value', value);
    // 不可变数据 React   一种思维
    // this.state.clist.push({ content: value })
    let clist = this.state.clist.slice(0); // 先拷贝一下state 的clist，不可以直接改变state里的对象clist
    // 这里的clist是一个全新的对象 拷贝自state里的clist 
    clist.push({ content: value })
    this.setState({
      clist
    })
  }
  render() {
    const { clist } = this.state;
    return (
      <>
        <Input onReceive={this.handleReceiveComment}/>
        <CommontList clist={clist} />
      </>
    )
    
  }
}
export default Comment;
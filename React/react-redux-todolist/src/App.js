import React from 'react';
// hoc 高阶组件
import { connect } from 'react-redux';
import './App.css';
class App extends React.Component {
  state = {
    inputText: ''
  }
  handleChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }
  render () {
    // console.log(this.props);
    const { todolist } = this.props;
    const { inputText }= this.state
    return(
      <div>
        {/* 父节点下  唯一 */}
        {
          todolist.map((item, i) => {
            return (
              <li key={i}>
                {item.content}
              </li>
            )
          })
        }
        <div>
          <input value={inputText} onChange={this.handleChange} />
          <button onClick={() => {
            console.log(this.state.inputText);
          }}>提交</button>
        </div>
      </div>
    )
  }
}
// 映射 state
const mapStateToProps = (state) => {
  console.log(state);
  return {
    todolist: state
  }
}

export default connect(mapStateToProps, null)(App);

import React from 'react';
import logo from './logo.svg';
import './App.css';

class DynamicFidle extends React.Component {
  handleAdd = () => {
    this.props.onAdd();
  }
  handleSub = (i) => {
    this.props.onSub(i);
  }
  render() {
    const { rule } = this.props
    // React.Fragment
    return (
      <>
        <label>
          规则
        </label>
        {
         rule.map((preRule, i) => {
           return (
            <div key={i}>
              <label>
                姓名
              </label>
              <input type="text" data-key="name" data-index={i} value={preRule.name} onChange={(event) => {
                this.props.onFiledChange(event, 'name', 'abc')
              }}/>
              <label>
                年龄
              </label>
              {/* 受控组件   事件后面必须是个函数*/}
              <input type="text" data-key="age" data-index={i} value={preRule.age} onChange={ this.props.onFiledChange } />
            {/* 传参可以用data-i={i}  也可以在方法中传*/}
              <button 
              onClick={ 
                () => {
                  this.handleSub(i)
                  }
                }>-</button>
            </div>
           )
         })
        }
        <br />
        <button onClick={this.handleAdd}>+</button>
      </>
    ) 
  }
}
class App extends React.Component {
  state = {
    date: '',
    rule: [
      {name: '', age: ''}
    ]
  }
  handleAdd = () => {
    // 不可变数据思想 
    let rule = this.state.rule.slice(0); // 克隆一份数据
    rule.push({name: '', age: ''});
    this.setState({
      rule
    })
  }
  handleSub = (i) => {
    // 不可变数据思想 
    let rule = this.state.rule.slice(0); // 克隆一份数据
    console.log(i)
    rule.splice(i, 1);
    this.setState({
      rule
    })
  }
  handleChang = (event) => {
    const key = event.target.dataset.key;
    const value = event.target.value;
    const index = event.target.dataset.index;
    console.log(index);
    let rule = this.state.rule.slice(0);
    rule[parseInt(index)][key] = value;
    this.setState ({
      rule
    })
  }
  render() {
    const { rule } = this.state;
    return (
      <div>
        <label htmlFor="date">
          日期
        </label>
        <input type="date" id="date" />
        <br />
        <DynamicFidle rule={rule} onAdd={this.handleAdd} onSub={this.handleSub} onFiledChange={this.handleChang}/>
      </div>  
    )
  }
}

export default App;

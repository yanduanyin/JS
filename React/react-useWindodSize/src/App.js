import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends PureComponent {
  shouldComponentUpdate(nextProps, nextState) {
    
  }
  handleChange = () => {
    this.setState({
      val: 4
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleChange}>change</button>
      </div>
    )
  }
}

export default App;

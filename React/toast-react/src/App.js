import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toast from './Toast';
class App extends React.Component {
  state = {
    flag: false
  }
  render () {
    const {flag} = this.state;
    return (
      <div>
        <button onClick={() => {
          Toast.addNotice('info', '内容一', 2000)
        }}>open</button>
      </div>
    )
  }
}

export default App;

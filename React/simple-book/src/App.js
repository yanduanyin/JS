import React from 'react';
import './App.css';
// 1.h5:history  2.hash change
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import BaseComponent from './lib/BaseComponent.jsx';
import store from './store/index.jsx';
import Home from './pages/home/index.jsx';
import Header from './common/header/index.jsx'
import { GlobalStyle } from './statics/iconfont/iconfont.js'// 引入全局样式iconfont
import PrivateRoute from './lib/PrivateRoute';
import Login from './pages/login/index';

function Write() {
  return (
    <div>写文章页面</div>
  )
}

class App extends BaseComponent {
  render() {
    return (
      <Provider store={store}>
        {/* BrowserRouter保存了全局的路由信息 */}
        <BrowserRouter>
          <div>
            <GlobalStyle />
            <Header />
            <Route exact path="/" component={Home}/>
            <Route exact path='/login' component={Login} />
            {/* <PrivateRoute path="/write" Com={Write}/>   // 1*/} 
            <PrivateRoute path="/write">
              <Write />
            </PrivateRoute>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;

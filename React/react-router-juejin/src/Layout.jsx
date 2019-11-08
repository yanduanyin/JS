import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
let islogin = true;
function Pricom () {
  return (
    <div>私密信息</div>
  )
}
class PrivateRoute extends Component {
  render() {
  const props = this.props;
  return (
      <div>
        {
          islogin ? <Route {...props}/> : null
        }
      </div>
    )
  }
}
function Guanzhu() {
  return (
    <div>关注</div>
  )
}
function Fe() {
  return (
    <div>前端</div>
  )
}
function Rd() {
  return (
    <div>后端</div>
  )
}
function Home() {
  return (
    <div>
      <div>
        <Link to="/home" >首页</Link>
        <Link to="/home/guanzhu" >关注</Link>
        <Link to="/home/fe" >前端</Link>
        <Link to="/home/rd" >后端</Link>
        <Link to="/home/private" >私密</Link>
      </div>
      <div className="main">
        <Route path="/home/guanzhu" component={Guanzhu} />
        <Route path="/home/fe" component={Fe} />
        <Route path="/home/rd" component={Rd} />
        <PrivateRoute path="/home/private" component={Pricom} />
      </div>
    </div>
  )
}
function Me() {
  return (
    <div>Me</div>
  )
}
class Layout extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <Route path="/home" component={ Home } />
          { islogin &&
          <Route path="/me" component={ Me } /> } 
        </div>
        <div className="footer">
          <Link to="/home">home</Link>
          { islogin && <Link to="/me">me</Link> } 
          {/* 登录了才执行 */}
        </div>
      </div>
    )
  }
}
export default Layout
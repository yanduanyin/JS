import {Route, Redirect} from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
{/* <PrivateRoute path="/write" component="" /> */}
class PrivateRoute extends Component {
  state = {}
  render() {
    const { login, children, Com, ...restProps} = this.props; 
    console.log(login, 'login');
    return (
     <Route { ...restProps } render={() => {
       if (login) {
         return children; // 1 <Com />
       } else {
         return <Redirect to="/" />
       }
     }}/>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.getIn(['login', 'login'])
  }
}

export default connect(mapStateToProps, null)(PrivateRoute);
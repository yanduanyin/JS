import React, { Component } from 'react'; // imrc
import * as actionCreate from './store/actioncreate'
import {connect} from 'react-redux';
import {
  LoginWrapper,
  LoginBox, Input, Button
} from './style';
class Login extends Component {
  state = {  }
  userName = React.createRef();
  passWord = React.createRef();
  render() { 
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="账号" ref={this.userName}/>
          <Input placeholder="密码" type="password" ref={this.passWord}/>
          <Button onClick={() => {
            console.log(this.userName.current.value);
            this.props.login() 
          }}>
          </Button>
        </LoginBox>
      </LoginWrapper>
      );
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    login() {
      dispatch(actionCreate.changeLoginStatus(true));
    }
  }
}
export default connect(null, mapDispatchToProps)(Login);
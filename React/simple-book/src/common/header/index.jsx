import React, {Component} from 'react';
import {HeaderWrapper, Nav, NavItem, Addition, Logo, Button, SearchWrapper, NavSearch} from './style';
import {CSSTransition} from 'react-transition-group';
import {Link} from 'react-router-dom';
import * as actionCreators from './store/actionCreate';
import { connect } from 'react-redux';

class Header extends Component {
  state = {  }
  render() { 
    const { focus }= this.props
    return ( 
      <HeaderWrapper>
				<Link to='/'>
					<Logo/>
				</Link>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>

					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
          {/* 搜索框 */}
          <SearchWrapper>
            {/* classNames="" 类名切换 */}
            <CSSTransition timeout={200} in={focus} classNames="slide"> 
              <NavSearch
              onBlur={() => {
                this.props.handFocus(false)
              }}
              onFocus={() => {
                this.props.handFocus(true)
              }}/>
            </CSSTransition>
          </SearchWrapper>
				</Nav>
				<Addition>
					<Link to='/write'>
						<Button className='writting'>
							<i className="iconfont">&#xe615;</i>
							写文章
						</Button>
					</Link>
          <Link to='/login'><NavItem className='right'><Button>登陆</Button></NavItem></Link>
					<Button className='reg'>注册</Button>
				</Addition>
			</HeaderWrapper>

     );
  }
}
const mapStateToProps = (state) => {
  return {
    focus: state.getIn(['header', 'focus'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handFocus(focus) {
      dispatch(actionCreators.searchFocus(focus))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
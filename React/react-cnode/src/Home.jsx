import React, {Component} from 'react';
import axios from './axios';
import { Pagination } from 'antd';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import './App.css';


const perSize = 40;
const tabMap = {
  'ask': '问答',
  'job': '招聘',
  'share': '分享',
  'good': '精华',
  'all': '全部'
}
class Home extends Component {
  state = {
    current: 1,
    tab: 'all',
    limit: perSize,
    list: [],
    isLoding: false
  };
  handleRequestList = () => {
    this.setState({
      isLoding: true
    })
    const {tab , limit, current} = this.state;
    axios.get(`/topics?tab=${tab}&limit=${limit}&page=${current}`)
    .then(res => {
      console.log(res.data);
      
      this.setState({
        list: res.data,
        isLoding: false
      })
    })
  }
  componentDidMount() {
    this.handleRequestList();
  }
  // onClick
  // 高阶组件 组件之间 共同的逻辑
  handleChangetab = (key) => (e) => {
    // setState是异步的
    // 事务  全部收在事务中 
    // react setState借鉴了这个概念
    // Promise.all()
    this.setState({
      tab: key
    }, () => {
      this.handleRequestList();
    })
    // tab可能不是最新的tab
  }
  // handleChangetab = (key) => {
       // return 的才是onClick触发的方法
  //   return () => {

  //   }
  // }
  onChange = page => {
    // console.log(page);
    this.setState({
      current: page
    }, () => {
      this.handleRequestList();
    });
  };
  render() {
    const {list, tab, isLoding} = this.state;
    return (
      <div>
        Home
        <ul>
           {
           Object.keys(tabMap).map(
            (key, i) => {
              return (
                // onClick 接受的必须是一个函数
                <li onClick={this.handleChangetab(key)} style={{color: tab === key ? 'red' : ''}}>{tabMap[key]}</li>
              )
            }
           )
           }
        </ul>
        <Spin spinning={isLoding}>
           {
             list.data && list.data.map((dis, i) => {
               return (
                 <Link to={`/topic/${dis.id}`} >
                  <li key = {`dis${i}`}>
                      <img src={dis.author.avatar_url} alt=""/>
                      <span>{dis.author.loginname}</span>
                      <h2>{dis.title}</h2>
                  </li>
                 </Link>
               )
             })
           }
        </Spin>
        <Pagination current={this.state.current} onChange={this.onChange} total={50} />
      </div>
    )
  }
}

export default Home
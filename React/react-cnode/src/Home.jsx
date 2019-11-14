import React, {Component} from 'react';
import axios from './axios';
import { Pagination } from 'antd';
import { Spin } from 'antd';


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
  handleChangetab = (key) => (e) => {
    this.setState({
      tab: key
    })
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
                 <li key = {`dis${i}`}>
                    <img src={dis.author.avatar_url} alt=""/>
                    <span>{dis.author.loginname}</span>
                    <h2>{dis.title}</h2>
                 </li>
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
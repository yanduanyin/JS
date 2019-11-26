import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style.js'
// Map fromJS({})
// List fromJS([])
class Topic extends Component {
  state = { }
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper color="red">
        {
          list.map((item,i) => {
            return (
            <TopicItem key={i}>
              <img className="topic-pic" src={item.get('imgUrl')}/>
              {item.get('title')}
            </TopicItem>
            )
          })
        }
      </TopicWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'topicList'])
  }
}

export default connect(mapStateToProps)(Topic);
import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from './axios';

class Topic extends Component {
  state = {
    content: ''
  }
  componentDidMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    axios.get('/topic/' + id)
    .then( res => {
      this.setState({
        content: res.data.data.content
      })
    })
  }
  render() {
    const { content } = this.state;
    return (
      <div>
        {/* { content } */}
        <div dangerouslySetInnerHTML={{
          __html: content
        }}></div>
      </div>
    )
  }
}

export default withRouter(Topic)
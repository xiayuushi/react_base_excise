import { Component } from 'react'

class NotFound extends Component {
  render() {
    return (
      <div>
        <h2>404</h2>
        <button onClick={() => this.props.history.replace('/channel/channela')}>
          点击前往ChannelA
        </button>
      </div>
    )
  }
}

export default NotFound

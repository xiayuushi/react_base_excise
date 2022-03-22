import { useHistory } from 'react-router-dom'

const ChannelA = () => {
  const history = useHistory()
  return (
    <div>
      <h2>ChannelA</h2>
      <button onClick={() => history.push('/news/999')}>点击前往News</button>
      <button onClick={() => history.replace('/channel/channelb')}>
        点击前往ChannelB
      </button>
    </div>
  )
}

export default ChannelA

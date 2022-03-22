const News = ({ history }) => {
  return (
    <div>
      <h2>News</h2>
      <button onClick={() => history.push('/channel/channelb/233')}>
        动态路由传参
      </button>
    </div>
  )
}

export default News

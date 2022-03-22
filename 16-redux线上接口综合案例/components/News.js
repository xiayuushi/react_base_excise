import { useEffect } from 'react'
import { getNewsList } from '../store/actions/news'
import { useDispatch, useSelector } from 'react-redux'

const News = () => {
  const dispatch = useDispatch()
  const { channel, news } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getNewsList(channel.id))
  }, [dispatch, channel.id])

  return (
    <div className="list">
      {news.map((item) => (
        <div className="article_item" key={item.art_id}>
          <h3 className="van-ellipsis">{item.title}</h3>
          <div className="img_box">
            {item.cover.type === 1 && (
              <img src={item.cover.images[0]} className="w100" alt="" />
            )}
          </div>
          <div className="info_box">
            <span>{item.aut_name}</span>
            <span>{item.comm_count}条评论</span>
            <span>{item.pubdate}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default News

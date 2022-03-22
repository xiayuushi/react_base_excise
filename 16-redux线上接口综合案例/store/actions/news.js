import axios from 'axios'
import { NEWS_GETLIST } from '../contants/actionType'

export const getNewsList = (id) => {
  return async (dispatch) => {
    const res = await axios.get(
      `http://toutiao.itheima.net/v1_0/articles?channel_id=${id}&timestamp=${Date.now()}`
    )
    dispatch({
      type: NEWS_GETLIST,
      payload: res.data.data.results,
    })
  }
}

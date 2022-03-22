import axios from 'axios'
import { CHANNEL_GETLIST, CHANNEL_GETID } from '../contants/actionType'

export const getChannelList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://toutiao.itheima.net/v1_0/channels')
    dispatch({
      type: CHANNEL_GETLIST,
      payload: res.data.data.channels,
    })
  }
}

export const getCurrentChannel = (id) => {
  return {
    type: CHANNEL_GETID,
    id,
  }
}

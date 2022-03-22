import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getChannelList, getCurrentChannel } from '../store/actions/channel'

const Channel = () => {
  const dispatch = useDispatch()
  const { channel } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getChannelList())
  }, [dispatch])

  return (
    <ul className="catagtory">
      {channel.list.map((item) => (
        <li
          className={item.id === channel.id ? 'select' : ''}
          key={item.id}
          onClick={() => dispatch(getCurrentChannel(item.id))}
        >
          {item.name}
        </li>
      ))}
    </ul>
  )
}

export default Channel

// 1、只要是会在多个组件中频繁的使用到的数据，可以考虑Context跨组件通讯或者直接使用redux进行状态共享
// 例如，当前的频道列表以及频道id会在多个组件中用到，因此使用redux对它们进行数据共享

// 2、react-redux的useSelector()回调形参可以让函数组件获取redux的state
// 总之：如果多个reducer合并成rootReducer，则回调形参state就是一个综合的对象
// 例如：const state = useSelector(state => state); //将形参返回到外界使用
// 注意：该hook对应redux的store.getState()
// 注意：如果多个reducer合并成rootReducer，则回调形参state就是一个综合的对象

// 3、react-redux的useSelector()回调形参state的说明以及取值方式
// 例如：const { reducer具体的模块名 }= useSelector(state => state) //方式1（推荐使用这种方式取值）
// 此时，形参state是综合各个reducer模块state的对象，后续用到该模块某个值只需要点语法点出即可
// 例如：const xxx =useSelector(state=>state.reducer具体模块名.返回值) //方式2（不推荐，因为可能需要调用多次useSelector）
// 此时，xxx是某个具体reducer模块中，函数逻辑内返回的state状态，可以直接渲染

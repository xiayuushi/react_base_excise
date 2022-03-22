import { useParams } from 'react-router-dom'

const ChannelB = (props) => {
  const params = useParams()
  return (
    <div>
      <h3>ChannelB</h3>
      <h4>{props.match.id}</h4>
      <h4>{params.id}</h4>
    </div>
  )
}

export default ChannelB

// 1、函数组件获取动态路由传递的参数有两种方式
// A、通过props.match.params获取（类组件也是如此，但需要加this）
// B、通过react-router-dom的useParams()获取（只能在函数组件使用hook）

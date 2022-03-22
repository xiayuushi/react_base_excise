import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    // 此处类似于class组件的componentDidMount周期函数
    const getList = async () => {
      const res = await axios.get('http://geek.itheima.net/v1_0/user/channels')
      setList(res.data.data.channels)
    }
    getList()
    let timeID = setInterval(() => {
      console.log('xxx')
    }, 1000)
    return () => {
      // 此处类似于class组件的componentWillUnmount周期函数
      clearInterval(timeID)
    }
  }, [])
  return (
    <div>
      <ul>
        {list.map((v) => (
          <li key={v.id}>{v.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

// 1、useEffect(()=>{}) 不设置第二参数，只要state发生变化，都会更新组件
// 2、useEffect(()=>{},[]) 第二参数为空数组，相当于class组件的componentDidMount周期函数，只会在组件加载时执行一次
// 3、useEffect(()=>{},[xxx]) 第二参数是一个数组，且数组有元素，则当数组元素发生变化时，就会再次执行
// 4、useEffect(()=>{ return ()=>{  } }) useEffect第一参数回调内部return的那个函数，相当于class组件的componentWillUnmount周期函数
// 5、useEffect(()=>{  }) 不要在第一参数回调中直接使用async关键字，如果要使用则应该在内部定义新的函数，再这个新定义的函数中使用async，并调用该新函数

import './App.scss'
import axios from 'axios'

import XxxHeader from './components/XxxHeader'
import XxxItem from './components/XxxItem'
import XxxFooter from './components/XxxFooter'

import { useState, useEffect } from 'react'

const App = () => {
  const [list, setList] = useState(
    () => JSON.parse(localStorage.getItem('list')) || []
  )

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem('list'))
    if (arr.length) {
      return setList(arr)
    }
    const getList = async () => {
      const res = await axios.get('https://www.escook.cn/api/cart')
      setList(res.data.list)
    }
    getList()
  }, [])

  const changeChecked = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            goods_state: !item.goods_state,
          }
        } else {
          return item
        }
      })
    )
  }

  const checkAll = (boolean) => {
    setList(
      list.map((item) => {
        return {
          ...item,
          goods_state: boolean,
        }
      })
    )
  }

  const changeCount = (id, count) => {
    console.log(id, count)
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            goods_count: count,
          }
        } else {
          return item
        }
      })
    )
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <div className="app">
      <XxxHeader></XxxHeader>
      {list.map((item) => (
        <XxxItem
          key={item.id}
          {...item}
          changeChecked={changeChecked}
          changeCount={changeCount}
        ></XxxItem>
      ))}
      <XxxFooter list={list} checkAll={checkAll}></XxxFooter>
    </div>
  )
}

export default App

// 1、useEffect(()=>{}, [])第二参数为空数组时相当于类组件的componentDidMount生命周期钩子，只会在组件挂载时执行一次
// 2、useEffect()不要在第一参数回调中直接使用async，如果要使用async建议在第一参数回调内部再定义一个函数去使用async关键字（记得调用第一参数回调内部的那个函数）

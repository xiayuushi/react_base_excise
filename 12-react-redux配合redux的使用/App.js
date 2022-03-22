import React from 'react'
import { setName, setAge, sub, add, submore, addmore } from './store/action'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const {
    countReducer,
    userReducer: { age, name },
  } = useSelector((state) => state)

  const dispatch = useDispatch()

  return (
    <div>
      <h1>
        数量: <span>{countReducer}</span>
      </h1>
      <h1>
        <div>姓名：{name}</div>
        <div>年龄：{age}</div>
      </h1>
      <button onClick={() => dispatch(sub)}>-1</button>
      <button onClick={() => dispatch(add)}>+1</button>
      <button onClick={() => dispatch(submore(10))}>-10</button>
      <button onClick={() => dispatch(addmore(10))}>+10</button>
      <button onClick={() => dispatch(setName('鞠婧祎'))}>修改姓名</button>
      <button onClick={() => dispatch(setAge(18))}>修改年龄</button>
    </div>
  )
}

export default App

// react-redux提供的三个内容按顺序依次对应redux的三个内容
// react-redux：Provider组件、useSelector()与useDispatch()
// 依次对应redux：store.subscribe()、store.getState()、store.dispatch()

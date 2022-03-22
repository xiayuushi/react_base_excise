import React from 'react'
import store from './store'
import { setName, setAge, sub, add, submore, addmore } from './store/action'

const App = () => {
  const {
    countReducer,
    userReducer: { age, name },
  } = store.getState()
  return (
    <div>
      <h1>
        数量: <span>{countReducer}</span>
      </h1>
      <h1>
        <div>姓名：{name}</div>
        <div>年龄：{age}</div>
      </h1>
      <button onClick={() => store.dispatch(sub)}>-1</button>
      <button onClick={() => store.dispatch(add)}>+1</button>
      <button onClick={() => store.dispatch(submore(10))}>-10</button>
      <button onClick={() => store.dispatch(addmore(10))}>+10</button>
      <button onClick={() => store.dispatch(setName('鞠婧祎'))}>
        修改姓名
      </button>
      <button onClick={() => store.dispatch(setAge(18))}>修改年龄</button>
    </div>
  )
}

export default App

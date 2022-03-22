import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store

// 1、不使用中间件的redux默认不能处理异步操作
// 2、使用redux-thunk这个redux的中间件后
// -、在定义action时就可以return这个redux-thunk的dispatch先处理一次异步操作再交给redux自身的dispatch
// -、例如actions/todo.js中的 todos_del 这个action
// 3、同步action与异步action的区别
// A、使用action-creator函数写法定义同步action时，return的是一个对象
// B、使用action-creator函数写法定义异步action时，return的是一个以thunk中间件的dispatch为形参的函数
// 4、同步异步action只会影响action-creator的写法，不会影响redux其他地方的使用

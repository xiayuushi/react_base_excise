import App from './App'
import ReactDOM from 'react-dom'
import store from './store'

ReactDOM.render(<App />, document.querySelector('#root'))

store.subscribe(() => {
  ReactDOM.render(<App />, document.querySelector('#root'))
})

// N1、仅使用redux来实现数据状态共享，组件不会随状态变更而自动更新，必须手动调用订阅方法进行组件更新
// N2、必须在保留原有的ReactDOM.render()之上，再额外调用store.subscribe()订阅一次渲染，否则组件无法渲染也无法更新
// N3、在react项目中通常会使用react-redux（提供的Provider组件）配合redux的store对象来进行组件随状态更新，如此可以不用手动订阅组件更新

// 1、redux是状态管理工具、不单单在react中使用，还可以在原生或者其他框架中使用
// 2、redux可以实现数据共享，但不会自动更新dom或者组件，如果在react项目中还需配合使用react-redux实现组件自动更新
// 3、因此仅使用redux的情况下，当redux管理的状态发生了变化，想要实现dom或者组件更新，必须手动store.subscribe()在该方法回调中订阅更新

// 4、一个项目中通常会分模块，因此会分为多个reducer文件，但只能有一个根reducer
// 例如：src/store/reducer/user.js //用户模块 导出为 user
// 例如：src/store/reducer/cart.js //购物车模块 导出为 cart

// 5、reducer函数第一参数state必须设置初始值，且reducer函数无论是否成功处理action对应的type，都必须返回state
// 6、reducer函数处理state时，不要修改源state，如果需要基于state做修改时，应该在不更改源state的同时进行深拷贝返回新的state

// 7、redux.combineReducer()将多个reducer合并为根reducer，传递给createStore()生成store对象
// 例如：import { combineReducer, createStore } from 'redux'
// 例如：const rootReducer = combineReducer({ user, cart })
// 例如：const store = createStore(rootReducer)

// 8、store.dispath(action)用于提交action分配任务，其中action是一个对象，该对象必须要有type属性，另外也可以携带其他参数
// 9、store.getState()可以获取reducer的最新状态
// 10、store.subscribe(()=>{ 此处可以进行订阅更新，实现dom或者组件的更新... })，
// 11、const unsubscribe = store.subscribe()，调用返回值函数unsubscribe可以取消订阅

// 12、使用actionType是为了更加友好的类型提示，避免action.type写错不易查找
// 例如：src/store/contant/actionType.js;  //文件内部 export const XXX = 'xxx'
// 后续，在使用到action.type时，可以导入该文件并使用
// 例如：定义action时，{ type: XXX }；或者在处理reducer时，if(action.type===XXX)

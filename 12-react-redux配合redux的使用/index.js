import App from './App'
import ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)

// 1、react-redux是react官方指定的react与redux的绑定库，它有三个常用内容：Provider组件、useSelector、useDisPatch

// 2、react-redux的Provider组件包裹<App />后可自动更新组件，无需订阅更新
// 例如：import { Provider } from 'react-redux';
// 例如：ReactDOM.render(<Provider><App /></Provider>, qs....)
// 注意：该API等同于redux的store.subscribe(()=>{ ReactDOM.render(<App />,...) })

// 3、react-redux的useSelector()回调形参可以让函数组件获取redux的state
// 例如：const state = useSelector(state => state); //将形参返回到外界使用
// 注意：该API等同于redux的store.getState()
// 注意：如果多个reducer合并成rootReducer，则state就是一个综合了多个reducer模块的state的对象

// 4、react-redux的useDispatch()可以让函数组件提交redux的dispatch
// 例如：const dispatch= useDispatch(); dispatch({type:'xxx'})
// 注意：该API等同于redux的store.dispatch()

// 5、使用actionType是为了更加友好的类型提示，避免action.type写错不易查找
// 例如：src/store/contant/actionType.js;  //文件内部 export const XXX = 'xxx'
// 后续，在使用到action.type时，可以导入该文件并使用
// 例如：定义action时，{ type: XXX }；或者在处理reducer时，if(action.type===XXX)

// 6、一个项目中通常会分模块，因此会分为多个reducer文件，但只能有一个根reducer
// 例如：src/store/reducer/user.js //用户模块 导出为 user
// 例如：src/store/reducer/cart.js //购物车模块 导出为 cart

// 7、redux.combineReducer()将多个reducer合并为根reducer，传递给createStore()生成store对象
// 例如：import { combineReducer, createStore } from 'redux'
// 例如：const rootReducer = combineReducer({ user, cart })
// 例如：const store = createStore(rootReducer)

// N1、仅使用redux则必须手动调用store.subscribe()订阅数据变更后的组件更新
// 而react-redux配合redux可实现共享数据变更后自动更新组件

// N2、react-redux提供的三个内容按顺序依次对应redux的三个内容
// react-redux：Provider组件、useSelector()与useDispatch()
// 依次对应redux：store.subscribe()、store.getState()、store.dispatch()

// N3、react-redux依赖于redux提供的store，
// 但原先使用redux的API则可以替换为react-redux的对应的API

// N4、react-redux配合redux，可以实现共享数据变更后自动更新组件
// 例如：import { Provider } from 'react-redux';
// 例如：<Provider store={store}>App组件JSX</Provider>

// N5、reducer函数第一参数state必须设置初始值，且reducer函数无论是否成功处理action对应的type，都必须返回state
// N6、reducer函数处理state时，不要修改源state，如果需要基于state做修改时，应该在不更改源state的同时进行深拷贝返回新的state

// N7、react-redux提供的Provider组件将App根组件包裹，并将redux生成的store对象传递给store属性，就可以实现组件随状态更新而更新，再也不用手动订阅更新

// 总之，react-redux必须配合redux使用，而redux可以单独使用
// redux可以适用于任意库，但不会自动更新组件或者DOM，必须手动订阅
// react-redux是redux与react的绑定，只能在react中使用，且须配合redux使用
// react-redux配合redux生成的store可实现组件随状态更新而自动更新，无需手动订阅

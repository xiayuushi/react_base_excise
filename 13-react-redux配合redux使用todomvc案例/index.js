import './styles/common.css'
import store from './store'

import App from './App'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)

// react项目react-redux配合redux使用流程
// 1、安装react-redux与redux
// 2、新建store目录，并在该目录中新建reducers、actions、contants目录（其中contants目录放置actionType声明文件）
// st1、从redux中导出createStore创建store对象（创建该对象必须传入合并后的根reducer）
// st2、在项目入口中从react-redux中导出Provider组件包裹整个App组件，并将store对象与Provider组件的store属性进行关联
// st3、在非TS项目中，应该使用actionType文件来定义action.type，这样子可以方便书写出错后查找bug
// st4、action分模块，action是一个对象，必须有type属性，另外也可携带额外属性以方便逻辑需要
// st5、reducer分模块，reducer是一个函数，第一参数state状态必须设置初始值，第二参数action对象，reducer函数必须返回新的状态或者数据
// st6、在reducer的根文件中，从redux中导出combineReducers对各个reducer模块进行合并成根reducer
// ---、rootReducer必须导出，后续传递给createStore()中生成store对象
// st7、后续在需要读取redux存储的store的数据时，可以调用react-redux的useSelector
// st8、后续在需要修改redux存储的store的数据时，可以调用react-redux的useDispatch

// 后续流程几乎一致
// N1、定义actionType、定义action对象、dispatch(action)提交action更新状态、书写reducer函数逻辑、useSelector()获取更新后的状态
// N2、在react项目中，react-redux必须配合redux（主要是配合redux生成的对象store）使用
// N3、react-redux的三个常用内容Provider组件、useSelector、useDispatch，简化了redux的某些API的使用
// N4、react-redux的Provider组件可以自动更新react组件，无需调用redux提供的订阅方法 store.subscribe()即可自动更新组件
// N5、react-redux的useSelector((state)=>state)对应redux提供的store.getState()
// N6、react-redux的useDispatch()对应redux提供的store.dispatch()
// N7、react-redux的以上几个hook简化了redux的对应的API的使用，但是如有需要也可使用redux自身的API

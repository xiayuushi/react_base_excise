import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store

// redux开发者工具redux-devtools的使用流程
// st1、在chrome应用商店中搜索Redux DevTools并安装到chrome浏览器
// st2、在react项目中安装插件 redux-devtools-extension
// 例如：npm i redux-devtools-extension
// st3、创建store对象时，从redux中导入createStore与applyMiddleware
// st4、创建store对象时，从redux-devtools-extension中导出composeWithDevTools
// st5、使用composeWithDevTools()包裹createStore()第二参数applyMiddleware()
// 例如：const store = createStore( rootReducer, composeWithDevTools(applyM..) )
// st6、后续在使用redux时就可以在chrome中查看到redux的数据变化
// 例如：state选项卡查看redux状态、diff选项卡查看redux状态变化

// N1、使用redux开发者工具redux-devtool是为了方便直观的查看redux状态变化
// N2、使用redux开发者工具redux-devtool必须安装两个插件
// --、1 chrome浏览器扩展 redux-devtools（不重装浏览器情况下只需配置一次）
// --、2 在每一个react项目中初始化store时，安装与配置插件 redux-devtools-extension
// N3、在react项目中安装与配置redux-devtools-extension后才能使用redux-devtools
// 重点：每个react项目初始化store时都须配置redux-devtools-extension

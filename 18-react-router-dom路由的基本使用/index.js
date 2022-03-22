import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.querySelector('#root')
)

// react-router-dom V5.x 版本使用流程
// st1、安装react-router-dom@5.3.0 （指定版本5.3.0，另外不要安装成native，它是react-native的路由）
// st2、在项目入口中从react-router-dom导出Router包裹整个App组件（Router根据需要导出BrowserRouter或者HashRouter）
// st3、在根组件App嵌套的其他组件中使用Link组件来作为锚点跳转或者使用Route组件来配置路由对应关系及出口

// N1、一个项目只能有一个Router，它用于包裹整个根组件App，具体是BrowserRouter或者HashRouter需要根据自己项目需求（HashRouter的路由路径带'#'）
// N2、react-router-dom的Router分为两种，HashRouter与BrowserRouter
// --、HashRouter路径带'#'，底层是通过监听window的hashchange事件来实现的
// --、BrowserRouter路径不带'#'，底层是通过监听window的popstate事件来实现的（使用H5的history.pushState()这个API实现的）
// N3、Link与NavLink组件用于声明式导航锚点链接跳转，其中NavLink自带.active样式类，可以实现当前点击锚点高亮效果
// --、即NavLink组件配合定义.active样式类，可以实现当前点击锚点高亮显示
// N4、Link组件或NavLink组件的to属性值应该与Route组件的path属性值保持一致才能成功匹配
// N5、Route组件用于配置路径与组件对应关系，通常需要设置exact精准匹配
// N6、Route组件不设置path路径，配合Switch组件可以用于定义404页面，（404页面的Route组件必须放在最下面）
// N7、Switch组件用于包裹Route组件中，只会匹配一个路由，即无论多少路由规则被匹配成功，只会渲染第一个匹配成功的组件
// --、无Switch组件包裹的Route组件，会渲染所有匹配成功的组件
// --、有Switch组件包裹的Route组件，只会渲染第一个匹配成功的组件
// --、因此使用Switch组件包裹Route，且将最后一个Route组件不设置path，可以轻松实现404页面
// N8、Redirect组件用于设置重定向，from指向来源path，to指向目标路由
// N9、react中使用嵌套路由，子路由的path必须以父路由path为基础，即 /father/son
// Nx、Route组件的path属性值为'/'时，默认为模糊匹配，表示可以匹配任意的组件及路径，通常需要加上exact用于进行精准匹配
// --、同理Link或者NavLink的to属性值为'/'时，也应该添加exact开启精准匹配

// 1、编程式导航
// A、类组件编程式导航，可以通过this.props.history属性来实现（前提是该组件是路由组件或者被路由组件嵌套的后代组件，否则必须使用react-router-dom提供的HOC来实现）
// B、函数组件编程式导航，可以通过props.history或者react-router-dom提供的useHistory来实现（前提与类组件一致）
// -、import {useHistory} from 'react-router-dom'
// -、const history = useHistory()
// -、history.go(-1) 后退一页
// -、history.push('/xxx')将当前的路径加入历史记录进行跳转，返回时会逐一从历史记录返回
// -、history.replace('/xxx')覆盖跳转，不会将当前API所在页的路径加入历史记录，常用于做登录跳转回之前的页面

// 2、动态路由 <Route path="/xxx/:id" component={Xxx} />
// A、类组件通过 this.prop.match.params 获取动态路由参数
// B、函数组件通过 prop.match.params 或者从react-router-dom中导出useParams来获取动态路由参数

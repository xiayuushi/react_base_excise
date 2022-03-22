import Channel from './components/Channel'
import News from './components/News'
import NotFound from './components/NotFound'
import styles from './styles/app.module.scss'
import { Link, Route, NavLink, Switch, Redirect } from 'react-router-dom'

const App = () => {
  return (
    <div className={styles['app']}>
      <ul className={styles['links']}>
        <li>
          <Link to="/channel">channel</Link>
        </li>
        <li>
          <NavLink to="/news/1">news</NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Redirect exact from="/" to="/channel" />
        <Route path="/channel" component={Channel} />
        <Route path="/news/:id" component={News} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App

// 1、路由切换的底层原理就是 hashchange事件（HashRouter） 或者 popstate事件（BrowserRouter）
// 2、HashRouter通过对window.location施加hashchange事件监听url地址的hash变化来显示相应的组件
// 2、BrowserRouter通过对window.location施加popstate事件监听url地址的hash变化来显示相应的组件
// 3、路由就是url地址（hash值）与组件的对应关系
// 4、Link组件与a标签
// -、<Link to="/channel">channel</Link> + <Route path='/channel' component={Channel} />
// -、<a href="#/channel">channel</a> + {currentClickLink === '/channel' && <Channel></Channel>}

// 5、Link组件与NavLink组件
// -、<Link to="/channel">channel</Link> + <Route path='/channel' component={Channel} />
// -、<NavLink to="/channel">channel</NaLink> + <Route path='/channel' component={Channel} /> + .active{ //css高亮样式 }

// 6、NavLink组件使用注意
// -、当NavLink组件被点击后，解析成a标签时会自动添加一个active的样式类名
// -、因此如果做点击高亮时，必须设置一个.active的样式类，例如 .active{ //高亮的具体css样式 }
// -、如果使用css-moduless来写样式，则必须使用:global(.active)来定义样式，即 :global(.active){ //高亮的具体css样式 }

import Channel from './components/Channel'
import News from './components/News'
import styles from './styles/app.module.scss'
import { useState, useEffect } from 'react'

const App = () => {
  const [currentClickLink, setCurrentClickLink] = useState('/channel')

  useEffect(() => {
    const hashChangeHandler = () =>
      setCurrentClickLink(window.location.href.split('#')[1])

    window.addEventListener('hashchange', hashChangeHandler)

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler)
    }
  }, [currentClickLink])

  return (
    <div className={styles['app']}>
      <ul className={styles['links']}>
        <li>
          <a href="#/channel">channel</a>
        </li>
        <li>
          <a href="#/news">news</a>
        </li>
      </ul>
      <hr />
      {currentClickLink === '/channel' && <Channel></Channel>}
      {currentClickLink === '/news' && <News></News>}
    </div>
  )
}

export default App

// 1、路由切换的底层原理就是 hashchange 事件
// 2、通过对window.location施加hashchange事件监听url地址的hash变化来显示相应的组件
// 3、路由就是url地址（hash值）与组件的对应关系

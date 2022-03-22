import { useState, useEffect } from 'react'

// 复用鼠标位置
const useMouse = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY,
      })
    }
    document.addEventListener('mousemove', move)
    return () => {
      document.removeEventListener('mousemove', move)
    }
  }, [])

  return position
}

// 复用鼠标滚动
const useScroll = () => {
  const [scroll, setScroll] = useState({
    scrollLeft: 0,
    scrollTop: 0,
  })

  useEffect(() => {
    const scrollHandler = () => {
      setScroll({
        scrollLeft: window.pageXOffset,
        scrollTop: window.pageYOffset,
      })
    }
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return scroll
}

export { useMouse, useScroll }

// 1、自定义hook本质就是一个函数，但函数必须以 useXxx 的形式命名
// 2、自定义hook 就是函数组件实现逻辑复用的方式
// 3、hook只能在函数组件内或者在其他hook内部使用，不能嵌套到if、for、普通函数的块级中使用
// 4、如果一个函数组件的状态逻辑会在其他函数组件用到，可以将其封装为自定义hook，实现函数组件的状态复用

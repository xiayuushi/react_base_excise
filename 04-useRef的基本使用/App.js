import { useState, useRef } from 'react'
import Xxx from './components/Xxx'

const App = () => {
  const [count, setCount] = useState(123)
  const ref = useRef(null)
  const click = () => {
    console.log(ref.current.value)
  }
  console.log(ref.current)
  return (
    <div>
      <button onClick={click}>获取Xxx组件ref</button>
      {/* <Xxx ref={ref}>{count}</Xxx> */}
      <div ref={ref}>{count}</div>
    </div>
  )
}

export default App

// 1、useRef()只能在函数组件中使用，ref属性只能设置给类组件或者普通标签（不能在函数组件上设置ref属性）
// 2、无法通过设置ref属性，然后用ref.current获取到函数组件的成员（因为函数组件没有方法，函数组件内定义的方法充其量只是变量）
// 3、类组件使用createRef()取其内部渲染的DOM，函数组件只能通过useRef()取其内部渲染的DOM，所取的DOM不能是函数组件
// 4、函数组件useRef()使用流程
// st1、导入useEffect这个基础Hook-API
// 例如：import { useRef } from "react"
// st2、在函数组件中调用该方法
// 例如：const xxx = useRef(null)
// st3、在函数组件return渲染的结构中绑定给ref属性
// 例如：const xxx = ()=>(<类组件或者标签 ref={xxx} />)
// st4、在函数组件中，此时就可以通过 xxx.current.value 获取绑定ref属性的DOM
// 注意：不要给函数组件绑定ref属性，因为无通过ref属性获取函数组件内部的成员
// N1、在函数组件中使用useRef相当于类组件的createRef()
// 注意：不要给函数组件绑定ref属性，因为无通过ref属性获取函数组件内部的成员
// N2、不要给函数组件绑定ref属性，因为无通过ref属性获取函数组件内部的成员
// N3、使用ref获取的标签或者组件，就是非受控组件

import Father from './components/Father'
import { createContext, useState } from 'react'
export const { Provider, Consumer } = createContext()

const App = () => {
  const [count, setCount] = useState(123)
  return (
    <Provider value={count}>
      <div>
        <Father></Father>
      </div>
    </Provider>
  )
}

export default App

// st1、在组件外调用React.createContext()解构并导出Provider与Consumer组件
// 例如：export const { Provider, Consumer } = React.createContext( ); //src/App.js

// st2、使用Provider组件包裹App组件的JSX，并在Provider上设置value属性传递数据
// 例如：class App extends React.Component{ render(){ return ( ... ) } }
// 接上：<Provider value={ data }> <A1 /> </Provider>

// st3、在需要接收的数据的组件中，按需导入Consumer组件去接收数据
// 例如：import { Consumer } from '../src/App.js'

// st4、在需要接收数据的组件JSX中使用Consumer组件去接收数据
// 注意：Consumer采用render-props模式通过回调参数获取Provider传递过来的值
// 例如：class A1 extends React.Component{ render(){ return ( ... ) } }
// 例如：<Consumer>{ params=> 当前组件JSX }</Consumer>
// 此时，当前组件JSX就可以使用参数params，该参数就是传递的数据
// 注意：A1组件是APP组件的其中一个后代组件，可以是嵌套很深的那种

// T1、React中可以使用Context来实现组件树中类似多层嵌套的跨组件通信
// Context提供Provider组件用于传递数据（在Provider中定义value传递数据）
// Context提供Consumer组件用于接收数据（在Consumer节点的回调参数获取数据）

// N1、必须确保Context是项目惟一，否则无法正确跨级传递数据（跨组件共享数据）
// st1、可在项目入口或App.js中调用createContext()并解构导出Provider与Consumer
// st2、在App.js中使用Provider包裹整个JSX结构并设置value属性传递数据
// st3、在接收数据的地方按需导入Consumer包裹整个JSX，用render-props接收数据

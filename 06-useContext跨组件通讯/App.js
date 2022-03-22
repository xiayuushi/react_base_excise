import Father from './components/Father'
import { createContext, useState } from 'react'
export const Context = createContext()

const App = () => {
  const [count, setCount] = useState(123)
  return (
    <Context.Provider value={count}>
      <div>
        <Father></Father>
      </div>
    </Context.Provider>
  )
}

export default App

// st1、在App组件外调用React.createContext()
// 例如：export const Context = React.createContext( ); //src/App.js
// 注意：此处不解构出Provider 与 Consumer，而是直接传入整个对象
// 因为，useContext()传入的参数必须是React.createContext()返回的整个对象

// st2、使用Context.Provider组件包裹App组件的JSX，并设置value属性传递数据
// 例如：class App extends React.Component{ render(){ return ( ... ) } }
// 接上：<Context.Provider value={ data }> <A1 /> </Context.Provider>

// st3、在需要接收的数据的组件中，按需导入React.createContext()返回的整个对象
// 例如：import { Context } from '../src/App.js'
// 注意：此处不要直接从react中再次导出createContext()，再次导出的不再是之前的
// 因为，必须确保App.js中的createContext()返回的对象是惟一的

// st4、在需要接收的数据的函数组件中，从react中导出useContext
// 例如：import { useContext } from 'react'
// 注意：hook必须在函数组件中使用，如接收数据的是类组件必须用Consumer方式

// st5、在需要接收数据的函数组件内部，调用useContext并传入Context对象
// 例如：const A1 = () => { const xxx=useContext(Context); return JSX }
// 此时，当前组件JSX就可以使用参数params，该参数就是传递的数据
// 注意：此处Context是App.js中调用React.createContext()返回的整个对象

// st6、在需要接收数据的函数组件内部JSX中，可以从xxx获取传递的数据
// 例如：const A1 = () => { return <div>{xxx}</div> }
// 注意：此处xxx就是st2中Context.Provider组件的value属性中传递的数据

// N1、useContext仅适用于函数组件，且只是简化了Context跨组件传值的取值部分
// 类组件：必须通过Consumer组件的render-props取到Context.Provider传递的值
// 函数组件：调用useContext()并传入createContext()返回的整个对象来取值方便渲染

// N2、必须确保Context是项目惟一，否则无法正确跨级传递数据（跨组件共享数据）
// st1、可在项目入口或App.js中调用createContext()得到返回的整个Context对象
// st2、在App.js中使用Context.Provider包裹整个JSX结构并设置value属性传递数据
// st3、在接收数据的函数组件中导入整个Context、导入useContext
// st4、在函数组件内将Context传入useContext()中，返回值中可获取数据用于JSX渲染

// N3、函数组件useContext与类组件Consumer的区别
// S1、两者都是Context取值部分，都须先react.createContext()拿到整个Context对象
// D1、函数组件useContext的方式更加方便渲染，在JSX渲染时比较直观
// D1、类组件Consumer的方式渲染UI时必须通过render-props的方式拿到并使用数据

// N4、useContext依赖于Context对象，因此依旧需要在项目中调用一次react.createContext()生成项目惟一的Context对象

// N5、useContext是在需要取值的函数组件中调用，目的是获取Context.Provider中定义的数据，它简化了函数组件中Context取值的部分
// --、使用useContext之前，必须通过Context.Consumer以render-props的方式取值渲染
// --、使用useContext之后，可以直接将整个Context对象传入获取数据，直接取值渲染

// N6、Context.Provider只需要在项目中使用一次，在App.js中包裹整个结构并传值
// 因此，useContext方便的是函数组件的取值
// 如果，是在类组件中依旧需要使用Context.Consumer来取值

import { useContext, useState, useEffect } from 'react'
import { Context } from '../../App'
import styles from './index.module.scss'

const XxxCount = ({ count, id }) => {
  const [num, setNum] = useState(count)
  const { changeCount } = useContext(Context)

  // 因为useState的初始赋值count只会在渲染时生效一次，后续count变化必须使用useEffect去监听count的变化
  useEffect(() => {
    setNum(count)
  }, [count])

  const minus = () => {
    if (+count <= 1) return
    changeCount(id, +count - 1)
  }

  const plus = () => {
    // 因为接口没涉及库存，因此超出库存的判断在此处不做
    changeCount(id, +count + 1)
  }

  // onChange修改输入框的值时，可以随便改，但在onBlur失焦时去判断修改的值
  // 之所以设置当前组件自己的状态，并以自己的状态作为输入框的value，是为了在执行onchange时，不直接将更改的值传递给App组件
  // 而是在执行onblur失焦时再传递给父组件（即，在输入框输入数量时，下方总金额与总数量不直接变化，当输入完再去让总金额与总数量变化）
  const onChange = (e) => {
    setNum(e.target.value)
  }
  const onBlur = () => {
    changeCount(id, num < 1 ? 1 : num)
  }

  return (
    <div className={styles['xxx-counter']}>
      <button type="button" className="btn btn-light" onClick={minus}>
        -
      </button>
      <input
        type="number"
        className={['form-control', styles['inp']].join(' ')}
        value={num}
        onChange={onChange}
        onBlur={onBlur}
      />
      <button type="button" className="btn btn-light" onClick={plus}>
        +
      </button>
    </div>
  )
}

export default XxxCount

// 1、当前的组件关系： 顶级组件App --> App子级组件XxxItem  ---> XxxItem子级组件XxxCount

// 2、changeCount用于改变count，以下是函数组件使用useContext配合Context来实现跨组件通讯的流程
// st1、在App组件外调用createContext()得到返回的整个Context对象
// st2、在App组件内使用Context.Provider包裹整个JSX结构并设置value属性传递数据
// st3、在接收数据的函数组件中导入整个Context、导入useContext
// st4、在函数组件内将Context传入useContext()中，返回值中可获取数据用于JSX渲染

// 3、react无论是子传父或者是父传子，都是通过props来传递，传递的是方法时就是子传父，而方法形参就是子传递给父的数据
// 4、涉及到跨组件通讯尽量使用react提供的Context或者是redux

// Q：为什么不将App组件的useState解构的用于修改state的方法传递给后代组件？
// A：因为如果让子组件自行修改的话，当逻辑出错的情况下不便于查找bug，而将修改的逻辑在统一的父组件中处理的话可以避免这些困扰

// N1、必须确保Context是项目惟一，否则无法正确跨级传递数据（跨组件共享数据）
// N2、useContext是在取数据的函数组件中使用

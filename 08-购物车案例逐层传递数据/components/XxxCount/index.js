import styles from './index.module.scss'

const XxxCount = ({ count, changeCount }) => {
  const minus = () => {
    if (count <= 1) return
    changeCount(count - 1)
  }

  const plus = () => {
    // 因为接口没涉及库存，因此超出库存的判断在此处不做
    changeCount(count + 1)
  }

  return (
    <div className={styles['xxx-counter']}>
      <button type="button" className="btn btn-light" onClick={minus}>
        -
      </button>
      <input
        type="number"
        className={['form-control', styles['inp']].join(' ')}
        value={count}
      />
      <button type="button" className="btn btn-light" onClick={plus}>
        +
      </button>
    </div>
  )
}

export default XxxCount

// 1、当前的组件关系： 顶级组件App --> App子级组件XxxItem  ---> XxxItem子级组件XxxCount

// 2、changeCount用于改变count
// 3、而count是顶级组件的数据，在当前组件XxxCount中修改顶级组件的数据必须先经过父级组件XxxItem
// -、即 XxxCount 往上 XxxItem 往上 App组件 （因此changeCount必须是由App组件提供，然后传给XxxItem再传给当前XxxCount组件）
// -、即 如果不使用Context跨组件传递的情况下，则必须层层传递，即子组件层层调用父组件提供的方法并传递需要用于修改的数据
// -、即 反过来层层父串子如下
// -、st1、App组件中：定义方法fn给子组件修改App组件的数据，并通过定义属性xxx传递，即 <XxxItem xxx={App组件提供的方法fn}></XxxItem>
// -、st2、XxxItem组件中：通过props.xxx接收，并再次通过自己定义的属性yyy传递 <XxxCount yyy={props.xxx}></XxxCount>
// -、st3、XxxCount组件中：通过props.yyy接收，并在自己的某个方法内调用App组件定义的fn()，并将修改的数据传递进去

// 4、XxxItem组件中可以拿到id，因此可以将id与XxxCount组件用于修改App组件数据的count一并传递给App组件
// 即，XxxItem组件中：<XxxCount yyy={(count)=>props.xxx(props.id, count)}></XxxCount>
// 即，形参count就是XxxCount内布传递的用于修改顶级组件App组件数据的数据，XxxCount组件的count先交给XxxItem组件再交给App组件

// 5、react无论是子传父或者是父传子，都是通过props来传递，传递的是方法时就是子传父，而方法形参就是子传递给父的数据
// 6、避免混乱，如果非得层层传递，可以逐层子传父
// 7、涉及到跨组件通讯尽量使用react提供的Context更好或者是redux

// Q：为什么不通过props的方式将App组件的useState解构的用于修改state的方法传递给后代组件？
// A：因为如果让子组件自行修改的话，当逻辑出错的情况下不便于查找bug，而将修改的逻辑在统一的父组件中处理的话可以避免这些困扰

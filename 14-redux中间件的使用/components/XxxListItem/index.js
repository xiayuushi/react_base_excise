import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import classnames from 'classnames'
import {
  todos_del,
  todos_changeDone,
  todos_changeName,
} from '../../store/actions/todos'

const XxxListItem = ({ item }) => {
  const ref = useRef(null)
  const dispatch = useDispatch()

  const [currentClickId, setCurrentClickId] = useState('')
  const onDoubleClick = ({ id, name }) => {
    setCurrentClickId(id)
    setCurrentClickName(name)
  }
  useEffect(() => {
    ref.current.focus()
  }, [currentClickId])

  const [currentClickName, setCurrentClickName] = useState('')
  const onKeyUp = (e) => {
    if (e.code === 'Escape') {
      console.log('用户取消输入')
      ref.current.blur()
      setCurrentClickName(item.name) //设置回输入框原来的值
    }
    if (e.code === 'Enter') {
      dispatch(todos_changeName(currentClickId, currentClickName))
      ref.current.blur()
      setCurrentClickName('') //置空
    }
  }

  return (
    <li
      className={classnames({
        completed: item.done,
        editing: currentClickId === item.id,
      })}
      key={item.id}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={item.done}
          onChange={() => dispatch(todos_changeDone(item.id))}
        />
        <label onDoubleClick={() => onDoubleClick(item)}>{item.name}</label>
        <button
          className="destroy"
          onClick={() => dispatch(todos_del(item.id))}
        ></button>
      </div>
      <input
        className="edit"
        value={currentClickName}
        onChange={(e) => setCurrentClickName(e.target.value)}
        ref={ref}
        onKeyUp={onKeyUp}
        onBlur={() => setCurrentClickId('')}
      />
    </li>
  )
}

export default XxxListItem

// 1、在onDoubleClick事件中改完id后不要立即调用focus()获取焦点，因为dom更新没有那么快，因此会放到useEffect周期中获取焦点
// 2、对于classname的处理，有两种方式（A使用数组写法，B导入第三方插件classnames并调用其方法）
// A、className={[v.done ? 'completed' : '',currentClickId === v.id ? 'editing' : '',].join(' ')}
// B、className={ classnames({ 'completed': v.done, 'editing': currentClickId === v.id }) }
// 3、用于改值的input输入框的value应该使用自己的状态，而不是直接使用父组件传递过来的item.name
// -、因为后续涉及到修改，不能直接修改父组件的数据，因此value={currentClickName}
// 4、onKeyUp事件中，当用户按回车确认输入时，则此时应该修改的是redux中的数据，而不是自己状态的数据
// -、因为父组件也是使用的redux的数据，因此应该调用dispath()去修改redux的数据，而不是setCurrentClickName()修改自己状态的数据

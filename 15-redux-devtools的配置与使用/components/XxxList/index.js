import { useSelector, useDispatch } from 'react-redux'
import XxxListItem from '../XxxListItem'
import { todos_allChecked } from '../../store/actions/todos'

const XxxList = () => {
  const dispatch = useDispatch()
  const list = useSelector((state) => {
    if (state.filters === 'All') return state.todos

    if (state.filters === 'Active')
      return state.todos.filter((item) => !item.done)

    if (state.filters === 'Completed')
      return state.todos.filter((item) => item.done)
  })
  const isChecked = list.every((item) => item.done)

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={isChecked}
        onChange={() => dispatch(todos_allChecked(isChecked))}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {list.map((item) => (
          <XxxListItem item={item} key={item.id}></XxxListItem>
        ))}
      </ul>
    </section>
  )
}

export default XxxList

// 1、下方筛选条件并非更改redux的数据，因此不需要做dispatch()提交action修改
// 2、下方筛选条件点击后，需要根据筛选条件去显示redux的数据
// -、读取redux的数据，因为使用了react-redux，因此可用该库的useSelector，在该hook的回调中去做筛选判断

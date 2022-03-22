import { useSelector, useDispatch } from 'react-redux'
import { todos_clearCompleted } from '../../store/actions/todos'
import { filters_changeFilterCondition } from '../../store/actions/filters'

const XxxFooter = () => {
  const filtersList = ['All', 'Active', 'Completed']
  const dispatch = useDispatch()
  const { todos, filters } = useSelector((state) => state)
  const uncompletedCount = todos.filter((item) => !item.done).length

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{uncompletedCount}</strong> item left
      </span>
      <ul className="filters">
        {filtersList.map((item) => (
          <li key={item}>
            <a
              className={item === filters ? 'selected' : ''}
              href="#/"
              onClick={() => dispatch(filters_changeFilterCondition(item))}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="clear-completed"
        onClick={() => dispatch(todos_clearCompleted())}
      >
        Clear completed
      </button>
    </footer>
  )
}

export default XxxFooter

// 1、下方筛选条件并非更改redux的数据，因此不需要做dispatch()提交action修改
// 2、下方筛选条件点击后，需要根据筛选条件去显示redux的数据
// -、读取redux的数据，因为使用了react-redux，因此可用该库的useSelector，在该hook的回调中去做筛选判断

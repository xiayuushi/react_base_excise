import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos_add } from '../../store/actions/todos'

const XxxHeader = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const onKeyUp = (e) => {
    if (e.code === 'Enter') {
      if (!name.trim()) return
      dispatch(todos_add(name))
      setName('')
    }
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={onKeyUp}
      />
    </header>
  )
}

export default XxxHeader

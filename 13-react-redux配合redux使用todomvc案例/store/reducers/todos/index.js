import {
  TODOS_ADD,
  TODOS_DEL,
  TODOS_CHANGE_DONE,
  TODOS_ALL_CHECKED,
  TODOS_CHANGE_NAME,
  TODOS_CLEAR_COMPLETED,
} from '../../contants/actionType'

const initState = [
  { id: 1, name: '吃饭', done: false },
  { id: 2, name: '睡觉', done: false },
  { id: 3, name: '学习', done: true },
]
const todosReducer = (state = initState, action) => {
  if (action.type === TODOS_ADD) {
    const addContent = {
      id: action.id,
      name: action.name,
      done: false,
    }
    return [addContent, ...state]
  }

  if (action.type === TODOS_DEL) {
    return state.filter((item) => item.id !== action.id)
  }

  if (action.type === TODOS_CHANGE_DONE) {
    return state.map((item) => {
      if (item.id === action.id) {
        return {
          ...item,
          done: !item.done,
        }
      }
      return item
    })
  }

  if (action.type === TODOS_ALL_CHECKED) {
    return state.map((item) => {
      return {
        ...item,
        done: action.done,
      }
    })
  }

  if (action.type === TODOS_CHANGE_NAME) {
    return state.map((item) => {
      if (item.id === action.id) {
        return {
          ...item,
          name: action.name,
        }
      }
      return item
    })
  }

  if (action.type === TODOS_CLEAR_COMPLETED) {
    return state.filter((item) => !item.done)
  }

  return state
}

export default todosReducer

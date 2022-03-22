import {
  TODOS_ADD,
  TODOS_DEL,
  TODOS_CHANGE_DONE,
  TODOS_ALL_CHECKED,
  TODOS_CHANGE_NAME,
  TODOS_CLEAR_COMPLETED,
} from '../contants/actionType'

export const todos_add = (name) => ({ type: TODOS_ADD, name, id: Date.now() })
export const todos_del = (id) => ({ type: TODOS_DEL, id })
export const todos_changeDone = (id) => ({ type: TODOS_CHANGE_DONE, id })

export const todos_allChecked = (checked) => ({
  type: TODOS_ALL_CHECKED,
  done: !checked,
})

export const todos_changeName = (id, name) => ({
  type: TODOS_CHANGE_NAME,
  id,
  name,
})

export const todos_clearCompleted = () => ({
  type: TODOS_CLEAR_COMPLETED,
})

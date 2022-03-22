import { USER_NAME, USER_AGE } from '../../contant/actionType'

const userReducer = (state = { name: '匿名用户', age: 10 }, action) => {
  if (action.type === USER_NAME) {
    return {
      ...state,
      name: action.name,
    }
  }
  if (action.type === USER_AGE) {
    return {
      ...state,
      age: action.age,
    }
  }
  return state
}

export default userReducer

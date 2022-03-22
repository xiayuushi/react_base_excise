import { USER_NAME, USER_AGE } from '../../contant/actionType'

const setName = (payload) => ({ type: USER_NAME, name: payload })
const setAge = (payload) => ({ type: USER_AGE, age: payload })

export { setName, setAge }

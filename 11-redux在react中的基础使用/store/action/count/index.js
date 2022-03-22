import {
  COUNT_SUB,
  COUNT_ADD,
  COUNT_SUBMORE,
  COUNT_ADDMORE,
} from '../../contant/actionType'

const sub = { type: COUNT_SUB }
const add = { type: COUNT_ADD }
const submore = (payload) => ({ type: COUNT_SUBMORE, payload })
const addmore = (payload) => ({ type: COUNT_ADDMORE, payload })

export { sub, add, submore, addmore }

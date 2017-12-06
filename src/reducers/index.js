import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import contributors from './contributors'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  contributors
})

export default todoApp
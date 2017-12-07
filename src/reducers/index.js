import { combineReducers } from 'redux'
import user from './user'
import visibilityFilter from './visibilityFilter'
import contributors from './contributors'

const todoApp = combineReducers({
  user,
  visibilityFilter,
  contributors
})

export default todoApp
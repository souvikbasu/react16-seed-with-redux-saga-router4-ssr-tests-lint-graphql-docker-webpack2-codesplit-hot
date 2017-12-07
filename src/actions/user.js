import { SET_USER_NAME } from '../constants/actionTypes'

export const setUserName = (firstName) => {
  return {
    type: SET_USER_NAME,
    firstName
  }
}

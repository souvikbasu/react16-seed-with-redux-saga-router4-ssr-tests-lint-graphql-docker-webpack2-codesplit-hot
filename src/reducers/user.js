const user = (state = [], {type, firstName}) => {
    switch (type) {
      case 'SET_USER_NAME':
        return {
          ...state,
          firstName
        }
      default:
        return state
    }
  }
  
  export default user
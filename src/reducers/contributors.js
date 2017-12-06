const contributors = (state = [], action) => {
    switch (action.type) {
      case 'CONTRI_FETCH_SUCCEEDED':
        return [...action.contributors]
      default:
        return state
    }
  }
  
  export default contributors
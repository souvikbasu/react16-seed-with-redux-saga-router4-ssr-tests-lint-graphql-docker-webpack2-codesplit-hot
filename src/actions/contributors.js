export const fetchContributors = () => {
  return {
    type: 'FETCH_REACT_CONTRI',
    payload: {}
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

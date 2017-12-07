import { connect } from 'react-redux'

import ReactContributors from '../components/ReactContributors'
import { fetchContributors } from '../actions/contributors'

const getContributors = (contributors, filter) => {
  switch (filter) {
    case 'SHOW_TOP_CONTRIBUTORS':
      return contributors.filter(t => t.contributions > 1000)
    case 'SHOW_ALL':
    default:
      return contributors
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contributors: getContributors(state.contributors, ownProps.filter)
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchContributors: () => {
        dispatch(fetchContributors())
      }
    }
  }
  
  
const FetchedContributors = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactContributors)

export default FetchedContributors

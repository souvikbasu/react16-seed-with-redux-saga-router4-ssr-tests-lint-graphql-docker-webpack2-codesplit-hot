import { connect } from 'react-redux'
import ReactContributors from '../components/ReactContributors'

const mapStateToProps = (state, ownProps) => {
  return {
    contributors: state.contributors 
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchContributors: () => {
        dispatch({type: 'FETCH_REACT_CONTRI', payload: {}})
      }
    }
  }
  
  
const FetchedContributors = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactContributors)

export default FetchedContributors

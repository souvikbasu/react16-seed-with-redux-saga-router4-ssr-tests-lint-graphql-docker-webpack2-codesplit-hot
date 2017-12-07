import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const HeaderWithUserName = connect(
  mapStateToProps
)(Header)

export default HeaderWithUserName

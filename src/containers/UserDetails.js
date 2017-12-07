import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setUserName } from '../actions/user'

let UserDetails = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(setUserName(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Set First Name
        </button>
      </form>
    </div>
  )
}

UserDetails.propTypes = {
  dispatch: PropTypes.func.isRequired
}

UserDetails = connect()(UserDetails)

export default UserDetails
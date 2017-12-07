import React from 'react'
import { NavLink } from 'react-router-dom'

import { SHOW_ALL_CONTRIBUTORS } from '../constants/actionTypes'

const FilterLink = ({ filter, children }) => (
  <NavLink
    to={filter === SHOW_ALL_CONTRIBUTORS ? '/' : `/${ filter }`}
    activeStyle={ {
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </NavLink>
)

export default FilterLink
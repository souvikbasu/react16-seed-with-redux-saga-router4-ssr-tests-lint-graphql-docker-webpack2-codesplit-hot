import React from 'react'
import FilterLink from '../../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_TOP_CONTRIBUTORS">
      Top Contributors
    </FilterLink>
  </p>
)

export default Footer
import React from 'react'

import PropTypes from 'prop-types'

import './list-item.css'

const ListItem = (props) => {
  return (
    <div className="list-item-container">
      <h5 className="list-item-text HeadingThree">{props.title}</h5>
      <span>{props.description}</span>
    </div>
  )
}

ListItem.defaultProps = {
  description:
    'Gain access to the demographics, psychographics, and location of unique people who are interested and talk about your brand.'
}

ListItem.propTypes = {
  description: PropTypes.string
}

export default ListItem

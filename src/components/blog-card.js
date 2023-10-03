import React from 'react'

import PropTypes from 'prop-types'

import OutlineGrayButton from "./outline-gray-button"
import './blog-card.css'

const BlogCard = (props) => {
  return (
    <div className="blog-card-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-card-image"
      />
      <h5 className="blog-card-text">{props.title}</h5>
      <span>{props.description}</span>
      <OutlineGrayButton button="Read more"></OutlineGrayButton>
    </div>
  )
}

BlogCard.defaultProps = {
  image_alt: 'image',
  description:
    'Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover',
  image_src:
    'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-bags.jpg',
}

BlogCard.propTypes = {
  image_alt: PropTypes.string,
  description: PropTypes.string,
  image_src: PropTypes.string,
}

export default BlogCard

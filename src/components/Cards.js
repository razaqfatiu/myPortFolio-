import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './Cards.css'

const Cards = (props) => ( 
  <div>
  <div className="Card"> 
    <img src={props.image}  />
    <h3>{props.title}</h3>
    <p>{props.subheading}</p>
  </div>
  </div>
)

export default Cards

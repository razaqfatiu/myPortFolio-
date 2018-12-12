import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './Header.css'
import Logo from '../images/Fatiu-logo.png' 

const Header = ({ siteTitle }) => ( 
  <div className="Headers">
  <div className="HeadersGroup">
  <Link to="/">Home</Link>  
  <Link to="/">Skills</Link>
  <Link to="/">Contact</Link>
  <Link to="/">About</Link>
  </div>
  
  {siteTitle}

  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header

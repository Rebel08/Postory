import "./header.css"
import LandingImg from '../../assets/image/background.jpg'

import React from 'react'

const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">Blogging With</span>
            <span className="headerTitleLg">Postory</span>
        </div>
        <div>
            <img className="headerImg" src={LandingImg} alt="Back-Img" />
        </div>
    </div>
  )
}

export default Header

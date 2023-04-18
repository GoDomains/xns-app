import React from 'react'
import './LayoutBanner.scss'
import BannerImage from '../../assets/banner.png'

function banner(props) {
  return (
    <div className="layout-banner">
      <img src={BannerImage} alt="" />
    </div>
  )
}

export default banner

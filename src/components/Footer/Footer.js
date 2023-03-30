import React from 'react'
import './Footer.scss'
import Logo from '../../assets/new-logo.svg'
import Linkedin from '../../assets/Linkedin.svg'
import Twitter from '../../assets/Twitter.svg'
import Facebook from '../../assets/Facebook.svg'
import Instagram from '../../assets/Instagram.svg'
import FooterAnimation from './FooterAnimation'

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="f-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="about">
          <p>
            GoDomain is first and foremost a Blockchain powered Registrar to
            offer .go Domain for registration. Our core business is domain name
            registration. Our control panel is designed to be easy-to-use and to
            give you the best customer experience, whether or not you are crypto
            -savvy! Backed by a team of industry veterans and local technical
            professionals who ensure our customers always get the best
          </p>
          <ul className="social">
            <li>
              <a href="/faq">
                <h2> FAQ </h2>
              </a>
            </li>
            <li>
              <a href="/terms-of-service">
                <h2> Terms & Conditions </h2>
              </a>
            </li>
            <li>
              <a href="/about">
                <h2> About Us </h2>
              </a>
            </li>
          </ul>
        </div>
        <p className="copyright">
          Copyright © 2022 <a href="#">Godomains.com</a> | All rights reserved.
        </p>
      </div>
    </div>
  )
}

import React from 'react'
import './HeaderNew.scss'
import Logo from '../../assets/new-logo.svg'

function HeaderNew() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="nav-block">
          <ul className="h-nav">
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default HeaderNew

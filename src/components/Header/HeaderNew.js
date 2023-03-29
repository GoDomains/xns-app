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
      </div>
    </header>
  )
}

export default HeaderNew

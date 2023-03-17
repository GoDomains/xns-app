import React from 'react'
import './HeaderNew.scss'
import Logo from '../../assets/new-logo.svg'
import useHomeData from '../Banner/useHomeData'
import { ethToXDCAddress } from '../../utils/utils'
import NoAccounts from '../NoAccounts/NoAccounts'
import { connectProvider, disconnectProvider } from '../../utils/providerUtils'

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
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

export default Header

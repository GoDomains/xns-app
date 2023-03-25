import React from 'react'
import './SearchHeader.scss'
import Logo from '../../assets/new-logo.svg'
import StatisticSteps from '../StatisticSteps/StatisticSteps'
import DefaultSearchContainer, { Search } from '../SearchName/SearchDefault'

function SearchHeader() {
  return (
    <header className="search-header">
      <div className="search-container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="search-header">
          <DefaultSearchContainer>
            <>
              <Search />
            </>
          </DefaultSearchContainer>
        </div>
      </div>
    </header>
  )
}

export default SearchHeader

import React from 'react'
import './SearchHeader.scss'
import Logo from '../../assets/new-logo.svg'
import StatisticSteps from '../StatisticSteps/StatisticSteps'
import DefaultSearchContainer, { Search } from '../SearchName/SearchDefault'

function SearchHeader() {
  return (
    <header>
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
              <StatisticSteps />
            </>
          </DefaultSearchContainer>
        </div>
      </div>
    </header>
  )
}

export default SearchHeader

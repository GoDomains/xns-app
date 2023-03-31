import React from 'react'
import './SearchFooter.scss'
import SearchContainer, { Search } from '../SearchName/Search'

function SearchFooter() {
  return (
    <div className="type">
      <div className="container">
        <div className="box">
          <h4>one step away</h4>
          <h3>Just Type your Domain Name</h3>
          <div className="search-footer">
            <SearchContainer>
              <>
                <Search />
              </>
            </SearchContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchFooter

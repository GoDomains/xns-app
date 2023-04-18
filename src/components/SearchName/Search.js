import React, { useState } from 'react'
import styled from '@emotion/styled/macro'
import { useTranslation } from 'react-i18next'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client'

import { parseSearchTerm } from '../../utils/utils'
import '../../api/subDomainRegistrar'
import { withRouter } from 'react-router'
import mq from 'mediaQuery'
import Language from '../../assets/globe.svg'
import LoadingAnimation from './LoadingAnimation'

const SearchForm = styled('form')`
  display: flex;
  width: 100%;
  border-radius: 50px 0px 0px 50px;
  overflow: hidden;

  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translate(0, -50%);
    display: block;
    width: 27px;
    height: 27px;
  }

  input {
    padding-left: 20px;
    width: 100%;
    border: none;
    font-size: 18px;
    color: white;
    font-weight: 100;
    background: transparent;

    &:focus {
      outline: 0;
    }

    &::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #ccd4da;
    }
  }

  .search-icon img {
    position: unset;
    padding: 4px 0 0 5px;
    width: 40px;
  }

  button {
    ${p => (p && p.hasSearch ? 'background: #AAEA03;' : 'background: #AAEA03;')}
    width: 140px;
    color: white;
    font-weight: 600;
    font-size: 12px;
    padding: 12px 12px 12px 12px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    &:hover {
      ${p => (p && p.hasSearch ? 'cursor: pointer;' : 'cursor: default;')}
    }
  }
`

const SEARCH_QUERY = gql`
  query searchQuery {
    isENSReady @client
  }
`

function Search({ history, className, style }) {
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState(null)
  const {
    data: { isENSReady }
  } = useQuery(SEARCH_QUERY)
  let input

  const handleParse = e => {
    setInputValue(
      e.target.value
        .split('.')
        .map(term => term.trim())
        .join('.')
    )
  }
  const hasSearch = inputValue && inputValue.length > 0 && isENSReady
  return (
    <SearchForm
      className={className}
      style={style}
      action="#"
      hasSearch={hasSearch}
      onSubmit={async e => {
        e.preventDefault()
        if (!hasSearch) return
        const type = await parseSearchTerm(inputValue)
        let searchTerm
        if (input && input.value) {
          // inputValue doesn't have potential whitespace
          searchTerm = inputValue.toLowerCase()
        }
        if (!searchTerm || searchTerm.length < 1) {
          return
        }

        if (type === 'address') {
          history.push(`/address/${searchTerm}`)
          return
        }

        input.value = ''
        if (type === 'supported' || type === 'short') {
          history.push(`/name/${searchTerm}`)
          return
        } else {
          history.push(`/search/${encodeURI(searchTerm)}`)
        }
      }}
    >
      <div className="search-icon">
        <img src={Language} alt="" />
      </div>
      <input
        placeholder={t('search.placeholder')}
        ref={el => (input = el)}
        onChange={handleParse}
        autoCapitalize="off"
      />
      <button
        disabled={!hasSearch}
        type="submit"
        data-testid={'home-search-button'}
      >
        {/* {!isENSReady ? <LoadingAnimation /> : t('search.button')} */}
        {!isENSReady ? 'Loading' : t('search.button')}
      </button>
    </SearchForm>
  )
}

const SearchWithRouter = withRouter(Search)

const SearchContainer = ({ searchDomain, className, style }) => {
  return (
    <SearchWithRouter
      searchDomain={searchDomain}
      className={className}
      style={style}
    />
  )
}

export { SearchWithRouter as Search }

export default SearchContainer

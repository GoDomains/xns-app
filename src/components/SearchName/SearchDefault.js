import React, { useState } from 'react'
import styled from '@emotion/styled/macro'
import { useTranslation } from 'react-i18next'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client'

import { parseSearchTerm } from '../../utils/utils'
import '../../api/subDomainRegistrar'
import { withRouter } from 'react-router'
import mq from 'mediaQuery'
import LanguageSwitcher from '../LanguageSwitcher'

const SearchForm = styled('form')`
  display: flex;
  width: 100%;

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
    padding: 20px 0 20px 55px;
    width: 100%;
    border: none;
    font-size: 18px;
    color: white;
    font-weight: 100;
    background: rgba(255, 255, 255, 0.18);
    ${mq.medium`
      width: calc(100% - 162px);
      font-size: 28px;
    `}

    &:focus {
      outline: 0;
    }

    &::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #ccd4da;
    }
  }

  button {
    ${p => (p && p.hasSearch ? 'background: #02a5ff;' : 'background: #03c7ff;')}
    color: black;
    font-weight: 200;
    font-size: 22px;
    background-color: white;
    opacity: 0.5;

    padding: 20px 0;
    height: 90px;
    width: 162px;
    border: none;
    display: none;
    ${mq.medium`
      display: block;
    `}

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
      <input
        placeholder={t('search.placeholder')}
        ref={el => (input = el)}
        onChange={handleParse}
        autoCapitalize="off"
      />
      <LanguageSwitcher />
      <button
        disabled={!hasSearch}
        type="submit"
        data-testid={'home-search-button'}
      >
        {t('search.button')}
      </button>
    </SearchForm>
  )
}

const SearchWithRouter = withRouter(Search)

const DefaultSearchContainer = ({ searchDomain, className, style }) => {
  return (
    <SearchWithRouter
      searchDomain={searchDomain}
      className={className}
      style={style}
    />
  )
}

export { SearchWithRouter as Search }

export default DefaultSearchContainer

import React from 'react'
import styled from '@emotion/styled/macro'

const NoAccountsContainer = styled('div')`
  box-shadow: ${({ active }) =>
    active ? '0 -10px 30px 0 rgba(108, 143, 167, 0.05)' : 'none'};
  padding: 5px 10px;
  background: ${({ active }) => (active ? '#AAEA03' : '#AAEA03')};
  border-radius: 50px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: fit-content;
  transition: 0.2s;

  span {
    color: ${({ active, colour }) => (active ? '#ffffff' : '#ffffff')};
  }

  &:hover {
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'auto')};
  }
`

const SVG = styled('svg')`
  margin-right: 10px;
`

const NoAccounts = ({
  className,
  colour = '#ffffff',
  textColour,
  onClick,
  buttonText,
  active
}) => (
  <NoAccountsContainer
    colour={colour}
    className={className}
    onClick={onClick}
    active={active}
    textColour={textColour}
  >
    <span>{buttonText}</span>
  </NoAccountsContainer>
)

export default NoAccounts

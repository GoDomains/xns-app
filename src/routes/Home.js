import React from 'react'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled/macro'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import mq from 'mediaQuery'
import { ethToXDCAddress } from '../utils/utils'
import SearchDefault from '../components/SearchName/Search'
import NoAccountsDefault from '../components/NoAccounts/NoAccountsModal'
import bg from '../assets/BG.png'

import TextBubbleDefault from '../components/Icons/TextBubble'
import QuestionMarkDefault from '../components/Icons/QuestionMark'
import HowToUseDefault from '../components/HowToUse/HowToUse'
import { connectProvider, disconnectProvider } from '../utils/providerUtils'
import { gql } from '@apollo/client'

import Footer from '../components/Footer/Footer'
import StatisticSteps from '../components/StatisticSteps/StatisticSteps'
import WhyGodomains from '../components/WhyGodomains/WhyGodomains'
import Numbers from '../components/Numbers/Numbers'
import Banner from '../components/Banner'
import HeaderNew from '../components/Header/HeaderNew'

const HeroTop = styled('div')`
  display: grid;
  padding: 20px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  grid-template-columns: 1fr;
  ${mq.small`
     grid-template-columns: 1fr 1fr;
  `}
`

const NoAccounts = styled(NoAccountsDefault)``

const Network = styled('div')`
  margin-bottom: 5px;
  margin-top 10px;
`
const Name = styled('span')`
  margin-left: 5px;
  text-transform: none;
  display: block;
  width: 100px;
`
const IconLogo = styled('img')`
  height: 70px;
  margin-left: 20px;
`

const TagLine = styled('div')`
  color: #ffffff;
  display: inline-block;
  font-size: 52px;
  width: 500px;
  align-self: flex-end;
`
const NetworkLogoGrid = styled('div')`
  justify-content: space-between;
  display: flex;
  z-index: 5;
`
const MidGrid = styled('div')`
  margin-bottom: 10px;
  display: flex;
`

const NetworkStatus = styled('div')`
  z-index: 5;
  margin-right: 20px;
  margin-top: 10px;
  color: white;
  font-weight: 400;
  text-transform: capitalize;
  display: none;
  ${mq.small`
    display: block;
  `}
  ${mq.medium`
    left: 40px;
  `}

  &:before {
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translate(-5px, -50%);
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fff;
  }
`

const Nav = styled('div')`
  margin-top 10px;
  display: flex;
  justify-content: center;
  ${mq.small`
    justify-content: flex-end;
  `}
  a {
    font-weight: 300;
    color: white;
  }
`

const NavLink = styled(Link)`
  margin-left: 20px;
  &:first-child {
    margin-left: 0;
  }
`

const ExternalLink = styled('a')`
  margin-left: 20px;
  &:first-child {
    margin-left: 0;
  }
`

const Announcement = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #5284ff;
  padding: 0 10px;
  border-bottom: #5284ff solid 3px;
  h3 {
    color: white;
    font-weight: 400;
    text-align: center;
    padding: 0 20px;
    margin-bottom: 10px;
  }
  p {
    text-align: center;
    color: white;
  }
  a {
    color: white;
    text-decoration: none;
  }
`

const HowToUse = styled(HowToUseDefault)`
  padding: 70px;
`

const Hero = styled('section')`
  background: url(${bg});
  background-size: cover;
  background-position: center;
  /*   background-color: #001868; */
  padding: 60px 20px 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${mq.medium`
    padding: 0 20px 0;
  `}
`
const HeroBGC = styled('section')`
  background-size: cover;
  background-position: center;
`

const SearchContainer = styled('div')`
  margin: 0 auto 0;
  display: flex;
  flex-direction: column;
  min-width: 100%;

  ${mq.medium`
    min-width: 60%;
  `}
  > h2 {
    color: white;
    font-size: 38px;
    font-weight: 100;
    margin-bottom: 10px;
  }

  > h3 {
    color: white;
    font-weight: 100;
    font-size: 24px;
    margin-top: 0;
  }
`

const Search = styled(SearchDefault)`
  min-width: 90%;
  ${mq.medium`
    min-width: 780px;
  `}

  input {
    width: 100%;
    color:'
    ${mq.medium`
      border-radius: 6px 0 0 6px;
      font-size: 28px;
    `}
  }

  button {
    border-radius: 0 6px 6px 0;
  }
`

const Explanation = styled('div')`
  display: grid;
  width: 100%;

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  ${mq.medium`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  `}
  grid-gap: 0;
`

const H2 = styled('h2')`
  font-size: 30px;
  font-weight: 500;
`

const Section = styled('section')`
  display: flex;
  justify-content: center;
  align-items: center;
`

const WhatItIs = styled(Section)`
  padding: 40px 20px 80px;
  p {
    font-size: 18px;
  }
`

const HowItWorks = styled(Section)`
  background: #f0f6fa;
  padding: 40px 20px 80px;
`

const Inner = styled('div')`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;

  > p {
    font-weight: 300;
    font-size: 20px;
    margin-bottom: 1.5em;
  }
`
const NameAnimation = styled(Section)`
  display: block;
  height: 100%;
`

const TextBubble = styled(TextBubbleDefault)`
  margin-right: 10px;
`

const QuestionMark = styled(QuestionMarkDefault)`
  transform: scale(1.18);
  margin-right: 10px;
`

const LogoLarge = styled(motion.img)`
  width: 50%;
  margin: 0 auto 0;
  ${mq.medium`
    width: 223px;
  `}
`
const Rocket = styled(motion.img)`
  margin: 0 auto 0;
  width: 32%;
`

const PermanentRegistrarLogo = styled(motion.h1)`
  font-weight: 800;
  font-size: 18px;
  text-transform: uppercase;
  color: #4258d3;
  letter-spacing: 1.8px;
  text-align: right;
  line-height: 24px;
  margin-top: 10px;
  margin-bottom: 50px;
  text-align: center;
`

const ReadOnly = styled('span')`
  margin-left: 1em;
`

export const HOME_DATA = gql`
  query getHomeData($address: string) @client {
    network
    displayName(address: $address)
    isReadOnly
    isSafeApp
  }
`

export const GET_ACCOUNT = gql`
  query getAccounts @client {
    accounts
  }
`

const animation = {
  initial: {
    scale: 0,
    opacity: 0
  },
  animate: {
    opacity: 1,
    scale: 1
  }
}

export default ({ match }) => {
  const { url } = match
  const { t } = useTranslation()

  const {
    data: { accounts }
  } = useQuery(GET_ACCOUNT)

  const {
    data: { network, displayName, isReadOnly, isSafeApp }
  } = useQuery(HOME_DATA, {
    variables: { address: accounts?.[0] }
  })

  return (
    <HeroBGC>
      <NetworkLogoGrid>
        <HeaderNew />

        <NetworkStatus>
          <Network>
            {`${network} ${t('c.network')}`}
            {isReadOnly && <ReadOnly>({t('c.readonly')})</ReadOnly>}
            {!isReadOnly && displayName && (
              <Name data-testid="display-name">
                ({ethToXDCAddress(displayName)})
              </Name>
            )}
          </Network>
          {!isSafeApp && (
            <NoAccounts
              onClick={isReadOnly ? connectProvider : disconnectProvider}
              buttonText={isReadOnly ? t('c.connect') : t('c.disconnect')}
            />
          )}
        </NetworkStatus>
      </NetworkLogoGrid>
      <Banner />

      <WhyGodomains />
      <Numbers />
      <Footer />
    </HeroBGC>
  )
}

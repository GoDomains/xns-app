import React, { Fragment } from 'react'

import SearchHeader from '../Header/SearchHeader'
import Container from './Container'
import SideNav from '../SideNav/SideNav'
import Main from './Main'
import Banner from '../Banner'
import LayoutBanner from '../LayoutBanner/LayoutBanner'
import Modal from 'react-modal'

const DefaultLayout = ({ children }) => {
  console.log('+++++++++++++++', children)
  return (
    <Fragment>
      <SearchHeader />

      <Container>
        <SideNav />
        <Main>{children}</Main>
      </Container>
    </Fragment>
  )
}
export default DefaultLayout

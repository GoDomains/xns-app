import React, { Fragment } from 'react'

import Header from '../Header/SearchHeader'
import Container from './Container'
import SideNav from '../SideNav/SideNav'
import Main from './Main'
import Banner from '../Banner'
import LayoutBanner from '../LayoutBanner/LayoutBanner'

const DefaultLayout = ({ children }) => (
  <Fragment>
    <Header />
    <Container>
      <SideNav />
      <Main>{children}</Main>
    </Container>
  </Fragment>
)

export default DefaultLayout

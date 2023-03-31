import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled/macro'

import { H2 as DefaultH2, Title } from '../components/Typography/Basic'
import AboutUs from '../components/AboutUs/AboutUs'

const AboutContainer = styled('div')`
  margin: 1em;
  padding: 20px 40px;
  background-color: white;
`
const SubText = styled('p')``

const Text = styled('p')`
  margin: 0px;
`
const TextH = styled('h4')`
  margin: 0px;
`

function About() {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = 'GoDomains About'
  }, [])

  return (
    <>
      <AboutContainer>
        <AboutUs />
        {/*         <Title>About Page</Title> */}
        {/*         <h3>Go Globals with .GO Domains</h3> */}
        {/*         <SubText> */}
        {/*           GoDomain is first and foremost a Blockchain powered Registrar to offer */}
        {/*           .go Domain for registration. Our core business is domain name */}
        {/*           registration. Our control panel is designed to be easy-to-use and to */}
        {/*           give you the best customer experience, whether or not you are crypto */}
        {/*           -savvy! Backed by a team of industry veterans and local technical */}
        {/*           professionals who ensure our customers always get the best */}
        {/*         </SubText> */}
        {/*         <SubText> */}
        {/*           Choosing the right domain name for your business is a process that can */}
        {/*           require a lot of thought, patience and consideration. In many cases, */}
        {/*           your domain can and should simply be that of your company name, as it */}
        {/*           is a clear reflection of you and your business. However, that may not */}
        {/*           always be possible due to the availability of particular domain names */}
        {/*           which means you may need to decide on something else. */}
        {/*         </SubText> */}
        {/*         <SubText> */}
        {/*           A good domain name needs to be easy to remember, easy to spell and */}
        {/*           generally the shorter it is, the better. The following should be taken */}
        {/*           into consideration when choosing your new domain: */}
        {/*         </SubText> */}
        {/*         <TextH>Why Choose .Go Domain</TextH> */}
        {/*         <Text>Is it easy to remember?</Text> */}
        {/*         <Text>Is it easy to spell?</Text> */}
        {/*         <Text> You can get Domain relevant to your business ?</Text> */}
        {/*         <Text>With .GO Domain Your can get Your Business Global?</Text> */}
      </AboutContainer>
    </>
  )
}

export default About

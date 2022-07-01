import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled/macro'
import mq from 'mediaQuery'

import { H2 as DefaultH2, Title } from '../components/Typography/Basic'

const AboutContainer = styled('div')`
  margin: 1em;
  padding: 20px 40px;
  background-color: white;
`
const H2 = styled(DefaultH2)`
  margin-top: 20px;
  margin-left: 20px;
  ${mq.medium`
    margin-left: 0;
  `}
`
const Question = styled('h3')`
  font-size: 15px;
  margin-right: 0.5em;
  display: inline;
`
const Answer = styled('p')``

function About() {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = 'XNS About'
  }, [])

  const Section = ({ question, children }) => {
    let slug
    if (question) {
      slug = slugify(question, {
        lower: true
      })
    }
    return (
      <>
        <Question id={slug}>{question}</Question>
        <AnchorContainer href={`#${slug}`}>
          <Anchor />
        </AnchorContainer>

        <Answer>{children}</Answer>
      </>
    )
  }

  return (
    <>
      <AboutContainer>
        <Title>About Page</Title>
        <H2>
          Build a decentralized domain name system based on Xinfin blockchain to
          map human-readable names like **vitalik.xdc** to machine-readable
          addresses.
        </H2>
        <Answer>
          The decentralized DNS is a distributed, open, and extensible naming
          system based on the Xinfin blockchain.
        </Answer>
        <Answer>
          It’s job is to map human-readable names like ‘alice.xdc’ to
          machine-readable identifiers such as Xinfin Chain addresses, other
          cryptocurrency addresses, content hashes, and metadata. XNS also
          supports ‘reverse resolution’, making it possible to associate
          metadata such as canonical names or interface descriptions with
          Ethereum addresses.
        </Answer>
        <Answer>
          Decentralized DNS has similar goals to DNS, the Internet’s Domain Name
          Service, but has significantly different architecture due to the
          capabilities and constraints provided by the Xinfin blockchain. Like
          DNS, decentralized DNS operates on a system of dot-separated
          hierarchical names called domains, with the owner of a domain having
          full control over subdomains.
        </Answer>
        Top-level domains, like ‘.xdc’ and ‘.test’, are owned by smart contracts
        called registrars, which specify rules governing the allocation of their
        subdomains. Anyone may, by following the rules imposed by these
        registrar contracts, obtain ownership of a domain for their own use.
        This also supports importing in DNS names already owned by the user for
        use on XNS.
        <Answer />
      </AboutContainer>
    </>
  )
}

export default About

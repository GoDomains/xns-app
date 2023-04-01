import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled/macro'
import mq from 'mediaQuery'

import { H2 as DefaultH2, Title } from '../components/Typography/Basic'
import Anchor from '../components/Icons/Anchor'
import slugify from 'slugify'
//import ReverseRecordImageSrc from '../assets/reverseRecordImage.png'
// import {
//   NonMainPageBannerContainer,
//   DAOBannerContent
// } from '../components/Banner/DAOBanner'

// const H2 = styled(DefaultH2)`
//   margin-top: 50px;
//   margin-left: 20px;
//   ${mq.medium`
//     margin-left: 0;
//   `}
// `

const Header = styled(Title)`
  margin-bottom: 50px;
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

const AnchorContainer = styled('a')``

const ImageContainer = styled('div')`
  margin: 2em;
`

const ReverseRecordImage = styled('img')`
  width: 100%;
  ${mq.medium`
    width: 600px;
  `}
`

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

function Faq() {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = 'GoDomains Faq'
  }, [])

  return (
    <>
      {/* <NonMainPageBannerContainer>
        <DAOBannerContent />
      </NonMainPageBannerContainer> */}
      <FaqContainer>
        <Header>Frequently Ask Questions</Header>

        <Section question="How to connect my Wallet">
          <ol>
            <li>Set your wallet to XDC Mainnet.</li>
            <li>Open website, godomains.io.</li>
            <li>
              If you have the latest XDCPay installed in your browser and no
              other extension or any other wallet connected, the DApp will
              instantly detect and connect.
            </li>
            <li>
              It will show the Network name and your wallet address, once
              connected.
            </li>
            <li>
              In case, not connected, click on connect, and choose XDCPay.
            </li>
          </ol>
        </Section>
        <Section question="Why is my wallet not connecting? ">
          <ul>
            <li>
              Make sure your XDC Pay is updated to latest version, you can
              install by clicking on{' '}
              <a
                href="https://chrome.google.com/webstore/detail/xdcpay/bocpokimicclpaiekenaeelehdjllofo"
                target="_blank"
              >
                {' '}
                link
              </a>
              .
            </li>
            <li>
              Turn off all other browser extensions (Wallets) except for your
              wallet.
            </li>
            <li>
              To confirm you're using the latest version, you can remove and
              re-add the extension (be sure to save your recovery phrase
              first!).
            </li>
            <li>
              Clear your cache and restart your browser. Make sure you're
              running the latest version of your browser.
            </li>
            <li>Set your wallet to XDC Mainnet, refresh the page. </li>
          </ul>
        </Section>
        <Section question="How can I resolve my domain name/IPFS content?">
          <ol>
            <li>
              If you have XDCPay installed, your IPFS content gets resolved
              automatically.
            </li>
            <li>Using the extension GoDOMAINS Content Resolver.</li>
          </ol>
        </Section>
        <Section question="How to Use GoDOMAINS Content Resolver Extension?">
          <ol>
            <li>Install GoDOMAINS Content Resolver extension.</li>
            <li>Enable GoDOMAINS Content Resolver from your extension.</li>
            <li>
              Make sure to <b>disable your XDCPay wallet/other Wallets</b> for
              the extension to work.
            </li>
            <li>
              Search your domain name in the search bar in format{' '}
              <b> (https://domainName.go)</b>.
            </li>
            <li>It will redirect you to the IPFS link.</li>
            <li>
              In case no IPFS hash content is available it is redirected to 404,
              Not found Page.
            </li>
          </ol>
        </Section>
        <Section question="How does GoDOMAINS Content Resolver works?">
          <ol>
            <li>
              When domainName.go is entered into the search bar, we get domains,
              subdomains, TLD (removing 'http://' and trailing '/').
            </li>
            <li>
              The name is then resolved to IPFS hash from our Registry contract.
            </li>
            <li>
              Finally, it is redirected to IPFS hash content on IPFS gateway
              ("https://gateway.ipfs.io/ipfs/" + ipfsHash).
            </li>
          </ol>
        </Section>
        <Section question="What is a Domain Name?">
          Your domain name is a key part of your online address, and is what
          your visitors will use to find you easily. For example, GoDomains
          domain name is GoDomains.io Your domain name is unique to you; once
          you have registered it, nobody else can register the same domain as
          long as you continue to renew it. Everything on the internet is
          located at a unique address which can be identified by a name or a
          number. Your computer finds different pages by looking them up using
          their unique numbers, but because these numbers would be hard to
          remember, the Domain Name System or DNS assigns a unique domain name
          to these numbers which we can use instead.
        </Section>

        <Section question="What is Blockchain Domain? How are Blockchain domain different from traditional Domain Names ?">
          Blockchain Domains are new web extensions (like .com or .info)
          launched as smart contracts on blockchains.Unlike traditional Domain
          Names, Blockchain Domain name are stored in a wallet by the owner,
          much like a cryptocurrency, Blockchain domain names are also smart
          domain names which can provide forwarding to Website (IPFS), Wallet
          Address. A blockchain domain is an on the blockchain. Blockchain
          domains are designed to resolve your web address and wallet address
          using smart contracts.
        </Section>

        <Section question="How are BlockChain Domains created ?">
          Blockchain Domains are built on the Crypto Name Service (CNS) — a set
          of smart contracts that determines how blockchain domains are created
          and utilized. Every CNS domain is issued as an ERC-721 token, also
          known as a non-fungible token (NFT). NFTs are unique, indivisible
          tokens and are often used to represent one-of-a-kind digital items.
          The use of the ERC-721 standard makes it easy for developers to
          integrate Blockchain based Domains into other applications, allowing
          users to manage their crypto domain ownership from compatible
          cryptocurrency wallets, exchanges, and marketplaces.
        </Section>

        <Section question="Is GoDomain extensions supported across all browser ?">
          No, Blockchain based domains are not natively supported on all
          browsers, You require XDCPay for resolving these domains, This can be
          added as an extensions or add-ons, although this is almost certain to
          change in the near future.
        </Section>

        <Section question="How much does it cost to register domain name in GoDomains?">
          GoDomains is still in Beta phase, Hence the Welcome package is
          currently applicable to all Domains, Prices are as mentioned below
          <ul>
            <li>3 Letter Domain Names : 30 USD</li>
            <li>4 Letter Domain Names : 20 USD</li>
            <li>5+ Letter Domain Names : 10 USD</li>
          </ul>
          (This is subjected to change)
        </Section>

        <Section question="Can I host my website using GoDomains?">
          Since GoDomains are designed on smart contract, Hosting option is
          currently limited to Interplanetary File System (IPFS).
        </Section>

        <Section question="How can I register my domain?">
          From the home page enter the Domain Name you wish to Register and then
          click on search, The system will query from the list of domain names
          options available for registration, You follows the steps as mentioned
          and your domain name would be registered in simple steps
        </Section>

        <Section question="Are GoDomains only for Crypto Users?">
          At the moment, the vast majority of these domains are used for
          crypto-related things. In addition, you have to use cryptocurrency to
          buy them, so from that point of view ― yes. A small but growing number
          of websites and services unrelated to crypto are starting to take
          advantage of these domains as well.
        </Section>

        <Section question="What happen with my domain when it expires? Can I get it back?">
          Its suggested that you renew your domain name at least 15 to 30 days
          prior to domain expiry. In case the user forgets to renew the domain
          name it will be lost and available for fresh registration to any one
          on first come basis.
        </Section>

        <Section question="How many domains can I register with you?">
          We do not have such limitations. You can register as many domains as
          you want.
        </Section>

        <Section question="What Domain extensions are the options currently available on GoDomains for registration">
          Currently GoDomain has options for .go extension only, However this is
          going to change soon and we would supporting multiple domain names
        </Section>

        <Section question="How long does it take to register my domain?">
          The process of domain registration at GoDomains takes a minutes
          provided you already have all the information required, Domain
          Details, Funds and Wallet Connection.
        </Section>

        <Section question="Can I transfer my blockchain domains?">
          Yes, GoDomain reside in your wallet like crypto tokens, You can easily
          transfer it from one wallet to another.
        </Section>

        <Section question="Can I register a domain name without hosting it?">
          Yes, You can, Your domain name would reside with you till the time you
          renew it, You can decide to host contents of map URL at a later date
          using the control panel This is called domain parking.
        </Section>

        <Section question="Can I invest in GoDomain extensions ?">
          There’s no way to tell what the future value of any specific domain
          will be. In past people bought good domains and then sold them for
          millions several years later, some people are purchasing this new type
          of domain hoping that they will catch on. Since buying a domain only
          requires a small investment, this is seen as a good investment
          strategy by some.
          <br />
          Of course, to actually make a use of your domain and build a website,
          you need to choose a hosting service that will support your needs. In
          case you want to create a website, you shouldn’t leave your domain
          parked for too long.
        </Section>

        <Section question="What are some advantage of Blockchain Based Domain Name">
          <ul>
            <li>
              <strong>Highly Secure: </strong>GoDomains are minted on
              blockchain, which is well-known for being extremely secure and
              resistant to brute-force attacks.
            </li>
            <li>
              <strong>Easy to use: </strong>GoDomain provide us to use User
              Interface, It provide a single point of access to multiple
              solutions like forwarding crypto address, redirection of website
              etc
            </li>
            <li>
              <strong>Censorship Resistant: </strong>GoDomain aer Blockchain
              Native, Which makes them immune to arbitrary takedowns and
              regional blocking.
            </li>
            <li>
              <strong>Holistic Access to DApps: </strong>GoDomains provide
              native support for decentralised apps, making them more
              accessible.
            </li>
          </ul>
        </Section>

        <Section question="What are some disadvantage of Blockchain Based Domain Name">
          <ul>
            <li>
              <strong>Default Support: </strong>Blockchain based Domain are
              still in nascent stage, Hence it would take a while to penetrate
              the default market.
            </li>
            <li>
              <strong>Not supported by all browsers: </strong>As Blockchain
              based domains are still in nascent stage, Default support in all
              popular browsers such as Opera and Brave support them natively,
              Chrome, Firefox, and Edge require an add-on to access them.
            </li>
            <li>
              <strong>Specific Hosting: </strong>To host a website using an
              GoDomains, you will need to use a hosting service that uses
              InterPlanetary File System (IPFS).
            </li>
          </ul>
        </Section>
      </FaqContainer>
    </>
  )
}

const FaqContainer = styled('div')`
  margin: 1em;
  padding: 20px 40px;
  background-color: white;
`

export default Faq

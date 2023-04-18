import React, { useState } from 'react'
import './FAndQ.scss'
import Modal from 'react-modal'

const reviewData = [
  {
    id: 1,
    title: 'TOPIC',
    description: 'What is a Domain Name?',
    answer:
      'Your domain name is a key part of your online address, and is what your visitors will use to find you easily. For example, GoDomains domain name is GoDomains.io Your domain name is unique to you; once you have registered it, nobody else can register the same domain as long as you continue to renew it. Everything on the internet is located at a unique address which can be identified by a name or a number. Your computer finds different pages by looking them up using their unique numbers, but because these numbers would be hard to remember, the Domain Name System or DNS assigns a unique domain name to these numbers which we can use instead.\n'
  },
  {
    id: 2,
    title: 'TOPIC',
    description:
      'What is Blockchain Domain? How are Blockchain domain different from traditional Domain Names?',
    answer:
      'Blockchain Domains are new web extensions (like .com or .info) launched as smart contracts on blockchains.Unlike traditional Domain Names, Blockchain Domain name are stored in a wallet by the owner, much like a cryptocurrency, Blockchain domain names are also smart domain names which can provide forwarding to Website (IPFS), Wallet Address. A blockchain domain is an on the blockchain. Blockchain domains are designed to resolve your web address and wallet address using smart contracts.'
  },
  {
    id: 3,
    title: 'TOPIC',
    description: 'How are BlockChain Domains created?',
    answer:
      'Blockchain Domains are built on the Crypto Name Service (CNS) — a set of smart contracts that determines how blockchain domains are created and utilized. Every CNS domain is issued as an ERC-721 token, also known as a non-fungible token (NFT). NFTs are unique, indivisible tokens and are often used to represent one-of-a-kind digital items. The use of the ERC-721 standard makes it easy for developers to integrate Blockchain based Domains into other applications, allowing users to manage their crypto domain ownership from compatible cryptocurrency wallets, exchanges, and marketplaces.'
  },
  {
    id: 4,
    title: 'TOPIC',
    description: 'Is GoDomain extensions supported across all browser?',
    answer:
      'No, Blockchain based domains are not natively supported on all browsers, You require XDCPay for resolving these domains, This can be added as an extensions or add-ons, although this is almost certain to change in the near future. We also have domain extension support which could be added to browsers'
  },
  {
    id: 5,
    title: 'TOPIC',
    description: 'How much does it cost to register domain name in GoDomains?',
    answer:
      'GoDomains is still in Beta phase, Hence the Welcome package is currently applicable to all Domains, Prices are as mentioned below:\n' +
      '3 Letter Domain Names : 30 USD\n' +
      '4 Letter Domain Names : 20 USD\n' +
      '5+ Letter Domain Names : 10 USD\n' +
      '(This is subjected to change)'
  },
  {
    id: 6,
    title: 'TOPIC',
    description: 'Which Currency can you use for Registration of .Go Domains?',
    answer: 'Currently users are required to pay USD equivalent fees in XDC'
  },
  {
    id: 7,
    title: 'TOPIC',
    description: 'Can I host my website using GoDomains?',
    answer:
      'Since GoDomains are designed on smart contract, Hosting website option is currently limited to Interplanetary File System (IPFS).'
  },
  {
    id: 8,
    title: 'TOPIC',
    description: 'How Do I Register Domain in GoDomains?',
    answer:
      'With Go Domains you could register your domain in a few simple steps:\n' +
      '1. Install XDC Pay or XDC Pay Compatible Browser Address (Links of XDC Compatible Browser Wallets)\n' +
      '2. Load XDC Balance\n' +
      '3. Search & Register Domains\n' +
      'Kindly click here to see the vide demo'
  },
  {
    id: 9,
    title: 'TOPIC',
    description: 'Why am I not able to search Domain Name for Registration?',
    answer:
      'GoDomain requires XDC Wallet with appropriate balance to be loaded and connect to the browser before you could search for domain names, Unless your wallet is connected with approrpirate XDC Balance Domain Name cannot be searched.'
  },
  {
    id: 10,
    title: 'TOPIC',
    description: 'How can I register my domain?',
    answer:
      'From the home page enter the Domain Name you wish to Register and then click on search, The system will query from the list of domain names options available for registration, You follows the steps as mentioned and your domain name would be registered in simple steps.'
  },
  {
    id: 11,
    title: 'TOPIC',
    description: 'How to connect my XDC Compatible Wallet in Browser?',
    answer:
      '1. If you have the latest XDCPay installed in your browser and no other extension or any other wallet connected, the DApp will instantly detect and connect.\n' +
      '2. Set your wallet to XDC Mainnet.\n' +
      '3. Open website, godomains.io.\n' +
      '4. It will show the Network name and your wallet address, once connected.\n' +
      '5. In case, not connected, click on connect, and choose XDCPay.'
  },
  {
    id: 12,
    title: 'TOPIC',
    description: 'Why is my wallet not connecting?',
    answer:
      '1. Make sure your XDC Pay is updated to latest version, you can install by clicking on link.\n' +
      '2. Turn off all other browser extensions (Wallets) except for your wallet.\n' +
      "3. To confirm you're using the latest version, you can remove and re-add the extension (be sure to save your recovery phrase first!).\n" +
      "4. Clear your cache and restart your browser. Make sure you're running the latest version of your browser.\n" +
      '5. Set your wallet to XDC Mainnet, refresh the page.'
  },
  {
    id: 13,
    title: 'TOPIC',
    description: 'How can I resolve my domain name/IPFS content?',
    answer:
      'If you have XDCPay/XDCPay compatible browser wallets installed, your IPFS content gets resolved automatically.\n' +
      'Using the extension GoDOMAINS Content Resolver (Click Here to Download Browser Extension for Chrome/Edge)'
  },
  {
    id: 14,
    title: 'TOPIC',
    description: 'How can I resolve my domain name/IPFS content?',
    answer:
      '1. Install GoDomain Content Resolver extension.\n Enable GoDomain Content Resolver from your extension.\n ' +
      '2. Make sure to disable your XDCPay wallet/other Wallets for the extension to work.\n ' +
      '3. Search your domain name in the search bar in format(https://domainName.go).\n ' +
      '4. It will redirect you to the IPFS link.\n ' +
      '5. In case no IPFS hash content is available it is redirected to 404, Not found Page.'
  },
  {
    id: 15,
    title: 'TOPIC',
    description: 'How does GoDOMAINS Content Resolver works?',
    answer:
      "When domainName.go is entered into the search bar, we get domains, subdomains, TLD (removing 'http://' and trailing '/').\n" +
      'The name is then resolved to IPFS hash from our Registry contract.\n' +
      'Finally, it is redirected to IPFS hash content on IPFS gateway ("https://gateway.ipfs.io/ipfs/" + ipfsHash).'
  },
  {
    id: 16,
    title: 'TOPIC',
    description: 'Are GoDomains only for Crypto Users?',
    answer:
      'At the moment, the vast majority of these domains are used for crypto-related things. In addition, you have to use cryptocurrency to buy them, so from that point of view ― yes. A small but growing number of websites and services unrelated to crypto are starting to take advantage of these domains as well.'
  },
  {
    id: 17,
    title: 'TOPIC',
    description:
      'What happen with my domain when it expires? Can I get it back?',
    answer:
      'Its suggested that you renew your domain name at least 15 to 30 days prior to domain expiry. In case the user forgets to renew the domain name it will be lost and available for fresh registration to any one on first come basis.'
  },
  {
    id: 18,
    title: 'TOPIC',
    description: 'How many domains can I register with you?',
    answer:
      'We do not have such limitations. You can register as many domains as you want.'
  },
  {
    id: 19,
    title: 'TOPIC',
    description:
      'What Domain extensions are the options currently available on GoDomains for registration?',
    answer:
      'Currently GoDomain has options for .go extension only, However this is going to change soon and we would supporting multiple domain names.'
  },
  {
    id: 20,
    title: 'TOPIC',
    description: 'How long does it take to register my domain?',
    answer:
      'The process of domain registration at GoDomains takes minutes provided you already have all the information required, Domain Details, Funds and Wallet Connection.'
  },
  {
    id: 21,
    title: 'TOPIC',
    description: 'Can I register a domain name without hosting it?',
    answer:
      'Yes, GoDomain reside in your wallet like crypto tokens, You can easily transfer it from one wallet to another. (Click here for more details).'
  },
  {
    id: 22,
    title: 'TOPIC',
    description: 'Can I invest in GoDomain extensions?',
    answer:
      'There’s no way to tell what the future value of any specific domain will be. In past people bought good domains and then sold them for millions several years later, some people are purchasing this new type of domain hoping that they will catch on. Since buying a domain only requires a small investment, this is seen as a good investment strategy by some.\n' +
      'Of course, to actually make a use of your domain and build a website, you need to choose a hosting service that will support your needs. In case you want to create a website, you shouldn’t leave your domain parked for too long.'
  },
  {
    id: 23,
    title: 'TOPIC',
    description: 'What are some advantage of Blockchain Based Domain Name?',
    answer:
      'Highly Secure: GoDomains are minted on blockchain, which is well-known for being extremely secure and resistant to brute-force attacks.\n' +
      'Easy to use: GoDomain provide us to use User Interface, It provide a single point of access to multiple solutions like forwarding crypto address, redirection of website etc\n' +
      'Censorship Resistant: GoDomain aer Blockchain Native, Which makes them immune to arbitrary takedowns and regional blocking.\n' +
      'Holistic Access to DApps: GoDomains provide native support for decentralised apps, making them more accessible.'
  },
  {
    id: 24,
    title: 'TOPIC',
    description: 'What are some disadvantage of Blockchain Based Domain Name?',
    answer:
      'Default Support: Blockchain based Domain are still in nascent stage, Hence it would take a while to penetrate the default market.\n' +
      'Not supported by all browsers: As Blockchain based domains are still in nascent stage, Default support in all popular browsers such as Opera and Brave support them natively, Chrome, Firefox, and Edge require an add-on to access them.\n' +
      'Specific Hosting: To host a website using an GoDomains, you will need to use a hosting service that uses InterPlanetary File System (IPFS).\n'
  },
  {
    id: 25,
    title: 'TOPIC',
    description: 'Why should I invest in Premium Domain Names?',
    answer:
      'Domain refers to your identity on the internet and even carried on to your business. The right name used could establish trust and credibility. Great domain names also appreciate in value over time. Securing a quality domain names from the very beginning is an investment and can get fabulous returns.'
  }
]

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    height: 'auto',
    right: 'auto',
    width: '30%',
    justifyContent: 'center',
    textAlign: 'center',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    zIndex: 99,
    background: 'transparent',
    transparent: '50%',
    borderRadius: '50%'
  }
}

function FAndQ() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalAnswer, setmodalAnswer] = useState(null)
  const handleClick = (id, answer) => {
    console.log('handle div', id)
    setmodalAnswer(answer)
    setIsModalOpen(!isModalOpen)
  }
  const ModalComponent = ({ id, isOpen, answer, onRequestClose }) => {
    return (
      <Modal
        isOpen={isOpen}
        style={customStyles}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <div className="close" key={id} onClick={() => setIsModalOpen(false)}>
          <span>X</span>
        </div>
        <p>{answer}</p>
      </Modal>
    )
  }
  return (
    <div className="faq">
      <div className="container">
        <h3>
          <span>Common questions</span>
          Frequently Asked Questions
        </h3>
        <div className="item-row">
          {reviewData.map((data, i) => (
            <>
              <div
                className="item"
                key={i}
                onClick={() => handleClick(data.id, data.answer)}
              >
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_12_399)">
                    <path
                      d="M45.0004 78.75C63.64 78.75 78.7504 63.6396 78.7504 45C78.7504 26.3604 63.64 11.25 45.0004 11.25C26.3608 11.25 11.2504 26.3604 11.2504 45C11.2504 63.6396 26.3608 78.75 45.0004 78.75Z"
                      stroke="url(#paint0_linear_12_399)"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M45 66.7969C46.9416 66.7969 48.5156 65.2229 48.5156 63.2812C48.5156 61.3396 46.9416 59.7656 45 59.7656C43.0584 59.7656 41.4844 61.3396 41.4844 63.2812C41.4844 65.2229 43.0584 66.7969 45 66.7969Z"
                      fill="url(#paint1_linear_12_399)"
                    />
                    <path
                      d="M45.0002 50.6265V47.814C46.9471 47.814 48.8503 47.2366 50.4691 46.155C52.0879 45.0734 53.3496 43.536 54.0946 41.7373C54.8397 39.9385 55.0346 37.9593 54.6548 36.0498C54.275 34.1403 53.3374 32.3863 51.9608 31.0096C50.5841 29.633 48.8301 28.6954 46.9206 28.3156C45.0111 27.9358 43.0319 28.1307 41.2331 28.8758C39.4344 29.6208 37.897 30.8825 36.8154 32.5013C35.7338 34.1201 35.1564 36.0233 35.1564 37.9702"
                      stroke="url(#paint2_linear_12_399)"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_399"
                      x1="11.2504"
                      y1="11.25"
                      x2="92.0215"
                      y2="36.8065"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#252FF2" />
                      <stop offset="1" stop-color="#0B9CFF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_12_399"
                      x1="41.4844"
                      y1="59.7656"
                      x2="49.898"
                      y2="62.4278"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#252FF2" />
                      <stop offset="1" stop-color="#0B9CFF" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_12_399"
                      x1="35.1564"
                      y1="28.1265"
                      x2="59.2281"
                      y2="34.7908"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#252FF2" />
                      <stop offset="1" stop-color="#0B9CFF" />
                    </linearGradient>
                    <clipPath id="clip0_12_399">
                      <rect width="90" height="90" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div
                  className="details"
                  key={data.id}
                  onClick={() => handleClick(data.id, data.answer)}
                >
                  <p>{data.description}</p>
                  {/*                   <h4>{data.answer}</h4> */}
                </div>
                {isModalOpen && (
                  <ModalComponent
                    id={data.id}
                    isOpen={isModalOpen}
                    answer={modalAnswer}
                    onRequestClose={() => setIsModalOpen(false)}
                  />
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAndQ

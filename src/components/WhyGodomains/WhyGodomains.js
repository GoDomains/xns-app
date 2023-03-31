import React from 'react'
import './WhyGodomains.scss'

import CensorshipResistance from '../../assets/censorship-resistance.svg'
import PrivacyOwnership from '../../assets/privacy-ownership.svg'
import CryptocurrencyTransfers from '../../assets/cryptocurrency-transfers.svg'
import FinancialInclusion from '../../assets/financial-inclusion.svg'
const ProblemsData = [
  {
    image: CensorshipResistance,
    title: 'Censorship Resistance',
    description:
      'Break the shackles of the traditional DNS which points you towards the centralized registry. GoDomains points you towards the decentralized registry.'
  },
  {
    image: PrivacyOwnership,
    title: 'Privacy and Ownership',
    description:
      'Enhanced privacy for both owners and users of the website. P2P interactions, private keys and encryption that gives you the control over how your website.'
  },
  {
    image: CryptocurrencyTransfers,
    title: 'Cryptocurrency Transfers',
    description:
      'Never worry about using multiple wallets for different cryptocurrencies. Link all your wallets to a single domain with GoDomains.'
  },
  {
    image: FinancialInclusion,
    title: 'Financial Inclusion',
    description:
      'Do not limit yourself with cryptocurrencies but move towards the inclusiveness of the DeFi applications with the decentralized domains.'
  }
]

function WhyGodomains() {
  return (
    <div className="problems">
      <div className="container why-box">
        <h3>
          Why You Need Blockchain <br /> Domain
        </h3>
        <div className="item-row">
          {ProblemsData.map((data, i) => (
            <div className="sultion-item" key={i}>
              <img src={data.image} alt="" />
              <h4>{data.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyGodomains

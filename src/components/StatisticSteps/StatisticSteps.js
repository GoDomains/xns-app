import React from 'react'
import './StatisticStep.scss'

import Install from '../../assets/install.svg'
import Topup from '../../assets/topup.svg'
import SearchDomain from '../../assets/search-domain.svg'
import Register from '../../assets/register.svg'

const ProblemsData = [
  {
    image: Install,
    title: 'Install XDC Pay'
  },
  {
    image: Topup,
    title: 'Top Up XDC',
    current: true
  },
  {
    image: SearchDomain,
    title: 'Search Domain'
  },
  {
    image: Register,
    title: 'Register'
  }
]

function StasticsSteps() {
  return (
    <div className="stastics-steps">
      <div className="container">
        <h3>
          <span>stastics</span>
          Register Domain in 4 Quick Steps
        </h3>
        <div className="item-row">
          {ProblemsData.map((data, i) => (
            <div
              className={`stastics-item ${data.current ? 'current' : ''}`}
              key={i}
            >
              <span className="image">
                <img src={data.image} alt="" />
              </span>

              <h4>{data.title}</h4>
              <span className="count">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StasticsSteps

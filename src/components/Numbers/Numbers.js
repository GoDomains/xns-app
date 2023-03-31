import React from 'react'
import './Numbers.scss'

const ProblemsData = [
  {
    title: '9374',
    description: 'Total Domains Sold'
  },
  {
    title: '4$',
    description: 'Cost to Host a Domain'
  },
  {
    title: '5$',
    description: 'Renewal Fees'
  },
  {
    title: '24*7',
    description: 'Customer Support'
  }
]

function Numbers() {
  return (
    <div className="stastics">
      <div className="container number-box">
        <h3>
          <span>statistics</span>
          GoDomains by the Numbers
        </h3>
        <div className="item-row">
          {ProblemsData.map((data, i) => (
            <div className="stastics-item" key={i}>
              <h4>{data.title}</h4>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Numbers

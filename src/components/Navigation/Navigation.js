import React from 'react'
import './Navigation.scss'

import Install from '../../assets/install.svg'
import Faq from '../../assets/faq.svg'
import Terms from '../../assets/tnc.svg'
import About from '../../assets/about.svg'
import Support from '../../assets/support.svg'
const ProblemsData = [
  {
    image: About,
    title: 'About',
    link: '/about'
  },
  {
    image: Faq,
    title: 'FAQ',
    link: '/faq'
  },
  {
    image: Terms,
    title: 'Terms',
    current: true,
    link: '/terms-of-service'
  },
  {
    image: Support,
    title: 'Support',
    link: '/'
  }
]

function Navigation() {
  return (
    <div className="navigation">
      <div className="container action-box">
        <h3>Quick Actions</h3>
        <div className="item-row">
          {ProblemsData.map((data, i) => (
            <div
              className={`stastics-item ${data.current ? 'current' : ''}`}
              key={i}
            >
              <span className="image">
                <img src={data.image} onclick="window.open()" alt="" />
              </span>

              <a href={data.link}>
                <h4>{data.title}</h4>
              </a>
              <span className="count">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navigation

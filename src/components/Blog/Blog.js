import React from 'react'
import './Blog.scss'
import Ethereum from '../../assets/ethe.png'
import Polygon from '../../assets/poly.png'
import Solana from '../../assets/sola.png'
import Binance from '../../assets/bina.png'
import { Link } from 'react-router-dom'

const reviewData = [
  {
    image: Ethereum,
    title: 'Build using ',
    subTitle: 'Ethereum',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
  },
  {
    image: Polygon,
    title: 'Build using',
    subTitle: 'Polygon',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
  },
  {
    image: Solana,
    title: 'Build using',
    subTitle: 'Solana',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
  },
  {
    image: Binance,
    title: 'Build using',
    subTitle: 'Binance',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
  }
]

function Blog() {
  return (
    <div className="buy-domain">
      <div className="container blog-box">
        <h3>
          Buy Now. <br />
          Sell Later for a Profit.
        </h3>
        <div className="item-row">
          {reviewData.map((data, i) => (
            <>
              <div className="item" key={i}>
                <img src={data.image} alt="" />
                <div className="details">
                  <h4>{data.title}</h4>
                  <h5>{data.subTitle}</h5>
                  <p>{data.description}</p>
                  <Link to={''}>Learn more</Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog

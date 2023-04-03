import React from 'react'
import './Blog.scss'
import Article1 from '../../assets/article1.webp'
import Article2 from '../../assets/article2.webp'
import Article3 from '../../assets/article3.webp'
import Article4 from '../../assets/article4.webp'
import Ethereum from '../../assets/ethe.png'
import Polygon from '../../assets/poly.png'
import Solana from '../../assets/sola.png'
import Binance from '../../assets/bina.png'
import { Link } from 'react-router-dom'

const reviewData = [
  {
    image: Article1,
    time: '5 min read ',
    subTitle: 'Ethereum',
    link:
      'https://medium.com/@godomains/big-tech-giants-are-afraid-of-crypto-domains-877fa1d3c612',
    image: Article1,
    description: 'Big Tech Giants Are Afraid of Crypto Domains'
  },
  {
    image: Polygon,
    time: '5 min read',
    subTitle: 'Polygon',
    link:
      'https://medium.com/@godomains/domains-as-assets-the-new-way-of-investing-in-the-world-of-crypto-a91f3a21f6b5',
    image: Article2,
    description:
      'Domains-As-Assets: The New Way of Investing in the World of Crypto'
  },
  {
    image: Solana,
    time: '3 min read',
    subTitle: 'Solana',
    link:
      'https://medium.com/@godomains/blockchain-domains-demystified-traditional-domains-vs-blockchain-domains-f52070a35f5d',
    image: Article3,
    description:
      'Blockchain Domains Demystified: Traditional Domains vs. Blockchain Domains'
  },
  {
    image: Binance,
    time: '2 min read',
    subTitle: 'Binance',
    link:
      'https://medium.com/@godomains/businesses-can-now-register-their-trademark-blockchain-domains-with-godomains-e2eef5d3174c',
    image: Article4,
    description:
      'Businesses can now register their trademark blockchain domains with Godomains.'
  }
]

function Blog() {
  return (
    <div className="buy-domain">
      <div className="container blog-box">
        <h3>Buy Now. Sell Later for a Profit.</h3>
        <div className="item-row">
          {reviewData.map((data, i) => (
            <>
              <div className="item" key={i}>
                <img src={data.image} alt="" />
                <div className="details">
                  <h4>{data.time}</h4>
                  <div className="description">
                    <p>{data.description}</p>
                  </div>
                  <a href={data.link}>Read</a>
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

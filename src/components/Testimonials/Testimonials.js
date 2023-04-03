import React from 'react'
import './Testimonials.scss'

const reviewData = [
  {
    image: 'https://randomuser.me/api/portraits/men/64.jpg',
    title: 'Pierrick Pretot ',
    subTitle: 'Fondateur : Le Prospecteur',
    description:
      'GoDomains is an amazing platform, I got my domain within a few minutes.'
  },
  {
    image: 'https://randomuser.me/api/portraits/men/29.jpg',
    title: 'Orel Hacman',
    subTitle: 'Fondateur : Micromegas',
    description:
      'The GoDomains support is excellent. My problem was resolved in a day after being reported.'
  },
  {
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    title: 'Sandhya Mer',
    subTitle: 'Fondateur : VRTeam Designs',
    description:
      'I wanted a decentralized domain, the whole process of getting one was super smooth on GoDomains'
  },
  {
    image: 'https://randomuser.me/api/portraits/women/39.jpg',
    title: 'Maya Manders',
    subTitle: 'Fondateur : CreativeCo.',
    description:
      'GoDomains is truly an amazing platform. The prices are reasonable as well.'
  }
]

function Testimonials() {
  return (
    <div className="includes-users">
      <div className="container testimonial-box">
        <h3>What our users say about GoDomains!</h3>
        <div className="item-row">
          {reviewData.map((data, i) => (
            <>
              <div className="item" key={i}>
                <svg
                  width="84"
                  height="84"
                  viewBox="0 0 84 84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_5_146)">
                    <path
                      d="M36.375 46.5H17.25C16.6533 46.5 16.081 46.2629 15.659 45.841C15.2371 45.419 15 44.8467 15 44.25V26.25C15 25.6533 15.2371 25.081 15.659 24.659C16.081 24.2371 16.6533 24 17.25 24H34.125C34.7217 24 35.294 24.2371 35.716 24.659C36.1379 25.081 36.375 25.6533 36.375 26.25V51C36.375 53.9837 35.1897 56.8452 33.08 58.955C30.9702 61.0647 28.1087 62.25 25.125 62.25M69 46.5H49.875C49.2783 46.5 48.706 46.2629 48.284 45.841C47.8621 45.419 47.625 44.8467 47.625 44.25V26.25C47.625 25.6533 47.8621 25.081 48.284 24.659C48.706 24.2371 49.2783 24 49.875 24H66.75C67.3467 24 67.919 24.2371 68.341 24.659C68.7629 25.081 69 25.6533 69 26.25V51C69 53.9837 67.8147 56.8452 65.705 58.955C63.5952 61.0647 60.7337 62.25 57.75 62.25"
                      stroke="url(#paint0_linear_5_146)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_5_146"
                      x1="15"
                      y1="24"
                      x2="74.2613"
                      y2="50.4715"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#252FF2" />
                      <stop offset="1" stop-color="#0B9CFF" />
                    </linearGradient>
                    <clipPath id="clip0_5_146">
                      <rect width="84" height="84" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>{data.description}</p>
                <img src={data.image} alt="" />
                <h4>{data.title}</h4>
                <h5>{data.subTitle}</h5>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials

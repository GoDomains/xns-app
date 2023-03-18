import React from 'react'
import './FAndQ.scss'

const reviewData = [
  {
    title: 'TOPIC',
    description: 'How to connect my Wallet\n'
  },
  {
    title: 'TOPIC',
    description: 'Why is my wallet not connecting?'
  },
  {
    title: 'TOPIC',
    description: 'How can I resolve my domain name/IPFS content?'
  },
  {
    title: 'TOPIC',
    description: 'How does GoDOMAINS Content Resolver works?'
  },
  {
    title: 'TOPIC',
    description: 'What is a Domain Name?'
  },
  {
    title: 'TOPIC',
    description:
      'What is Blockchain Domain? How are Blockchain domain different from traditional Domain Names ?'
  },
  {
    title: 'TOPIC',
    description: 'How are BlockChain Domains created ?'
  },
  {
    title: 'TOPIC',
    description: 'Is GoDomain extensions supported across all browser ?'
  },
  {
    title: 'TOPIC',
    description: 'How much does it cost to register domain name in GoDomains?'
  },
  {
    title: 'TOPIC',
    description: 'Can I host my website using GoDomains?'
  },
  {
    title: 'TOPIC',
    description: 'How can I register my domain?'
  },
  {
    title: 'TOPIC',
    description: 'Are GoDomains only for Crypto Users?'
  },
  {
    title: 'TOPIC',
    description:
      'What happen with my domain when it expires? Can I get it back?'
  },
  {
    title: 'TOPIC',
    description: 'How many domains can I register with you?'
  },
  {
    title: 'TOPIC',
    description:
      'What Domain extensions are the options currently available on GoDomains for registration'
  },
  {
    title: 'TOPIC',
    description: 'How long does it take to register my domain?'
  },
  {
    title: 'TOPIC',
    description: 'Can I transfer my blockchain domains?'
  },
  {
    title: 'TOPIC',
    description: 'Can I register a domain name without hosting it?'
  },
  {
    title: 'TOPIC',
    description: 'Can I invest in GoDomain extensions ?'
  },
  {
    title: 'TOPIC',
    description: 'What are some advantage of Blockchain Based Domain Name'
  },
  {
    title: 'TOPIC',
    description: 'What are some disadvantage of Blockchain Based Domain Name'
  }
]

function FAndQ() {
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
              <div className="item" key={i}>
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
                <div className="details">
                  <p>
                    <span>{data.title}</span>
                  </p>
                  <p>{data.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAndQ

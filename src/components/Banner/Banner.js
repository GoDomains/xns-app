import React from 'react'
import './Banner.scss'
import BannerImage from '../../assets/banner.png'
import StatisticSteps from '../StatisticSteps/StatisticSteps'
import SearchContainer, { Search } from '../SearchName/Search'

function banner(props) {
  return (
    <div className="banner">
      <img src={BannerImage} alt="" />
      <div className="content">
        <div className="Iam">
          <h1>Decentralized Domains</h1>
          <div className="subtitle">
            <div class="innerIam">
              <b>for your web3 ecosystem</b>
              <br />
              <b>for blockchain</b>
              <br />
              <b>for a custom .go address</b>
              <br />
            </div>
          </div>
        </div>
        <br />
        <p>Give your crypto wallet address a human readable address!</p>
        <div className="home-search">
          <SearchContainer>
            <>
              <Search />
              <StatisticSteps />
            </>
          </SearchContainer>
        </div>
        <ul className="option-area">
          <li>
            <span className="icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.0423 2.00012C19.0669 1.98449 14.2098 3.43893 10.1449 6.16162C6.08003 8.88431 3.00897 12.7402 1.3579 17.1943C-0.293165 21.6483 -0.442371 26.4797 0.930992 31.0179C2.30435 35.556 5.13218 39.576 9.02206 42.52C9.21057 42.6706 9.42895 42.7839 9.66433 42.8532C9.89971 42.9225 10.1473 42.9463 10.3926 42.9233C10.6378 42.9003 10.8757 42.831 11.0923 42.7194C11.3089 42.6078 11.4997 42.4561 11.6535 42.2734C11.8073 42.0907 11.9211 41.8806 11.988 41.6555C12.0549 41.4304 12.0736 41.1949 12.0431 40.9629C12.0126 40.7308 11.9334 40.5069 11.8103 40.3043C11.6871 40.1017 11.5225 39.9246 11.326 39.7834C8.03401 37.2966 5.64026 33.8981 4.4776 30.0606C3.31495 26.223 3.44116 22.137 4.8387 18.3706C6.2362 14.601 8.83482 11.3372 12.2744 9.03183C15.7139 6.72643 19.824 5.49355 24.0349 5.50409C28.2463 5.50546 32.3526 6.75157 35.7835 9.0693C39.2144 11.387 41.7994 14.6613 43.1794 18.4372C44.5632 22.209 44.6743 26.2963 43.497 30.1307C42.3198 33.9652 39.9129 37.3562 36.6108 39.8324C36.4112 39.972 36.2432 40.1483 36.1169 40.3508C35.9906 40.5534 35.9086 40.778 35.8758 41.0112C35.843 41.2445 35.8601 41.4816 35.9259 41.7085C35.9918 41.9354 36.1052 42.1473 36.2593 42.3317C36.4134 42.5161 36.605 42.6691 36.8228 42.7816C37.0406 42.8942 37.28 42.964 37.5268 42.9868C37.7736 43.0096 38.0228 42.9849 38.2593 42.9144C38.4959 42.8438 38.7151 42.7287 38.9037 42.576C42.8065 39.6462 45.6514 35.636 47.0434 31.1021C48.4354 26.5681 48.3055 21.7354 46.6717 17.2747C45.0379 12.814 41.9813 8.94671 37.9262 6.20953C33.871 3.47236 29.0185 2.00115 24.0423 2.00012ZM23.9684 11.17C23.4801 11.1774 23.0147 11.3681 22.6742 11.7004C22.3337 12.0327 22.1459 12.4795 22.1518 12.943V29.9828L17.47 25.5433C17.2973 25.376 17.091 25.2434 16.8633 25.1531C16.6357 25.0628 16.3912 25.0168 16.1445 25.0177C15.7785 25.0191 15.4211 25.1238 15.1179 25.3183C14.8147 25.5129 14.5793 25.7886 14.4416 26.1105C14.3039 26.4323 14.2701 26.7857 14.3445 27.1258C14.4189 27.4659 14.5982 27.7774 14.8596 28.0206L22.5358 35.3018C22.7092 35.5159 22.9324 35.6891 23.1879 35.8078C23.4435 35.9266 23.7245 35.9877 24.009 35.9863C24.2936 35.985 24.5739 35.9212 24.8282 35.8C25.0825 35.6789 25.3038 35.5035 25.4749 35.2878L33.1364 28.0206C33.3127 27.8589 33.4533 27.6656 33.5501 27.4519C33.6469 27.2381 33.6978 27.0082 33.6999 26.7756C33.702 26.543 33.6553 26.3123 33.5625 26.097C33.4697 25.8816 33.3326 25.686 33.1593 25.5215C32.9859 25.357 32.7798 25.2269 32.5529 25.1389C32.326 25.0508 32.0829 25.0064 31.8378 25.0085C31.5927 25.0105 31.3504 25.0588 31.1252 25.1506C30.8999 25.2425 30.6962 25.3759 30.5259 25.5433L25.8441 29.9828V12.943C25.8471 12.7088 25.8006 12.4764 25.7073 12.2595C25.614 12.0427 25.4758 11.8458 25.3009 11.6805C25.1261 11.5152 24.9181 11.3848 24.6892 11.2971C24.4603 11.2095 24.2152 11.1662 23.9684 11.17ZM16.9826 39.496C16.493 39.496 16.0234 39.6806 15.6772 40.0092C15.331 40.3377 15.1365 40.7834 15.1365 41.248C15.1365 41.7127 15.331 42.1583 15.6772 42.4869C16.0234 42.8154 16.493 43 16.9826 43H31.0133C31.5029 43 31.9725 42.8154 32.3187 42.4869C32.665 42.1583 32.8595 41.7127 32.8595 41.248C32.8595 40.7834 32.665 40.3377 32.3187 40.0092C31.9725 39.6806 31.5029 39.496 31.0133 39.496H16.9826Z"
                  fill="white"
                />
              </svg>
            </span>
            <p>Install XDC Pay</p>
          </li>
          <li>
            <span className="icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34 24C34 24.6667 33.4444 25.1111 32.8889 25.1111H25.1111V32.8889C25.1111 33.5556 24.5556 34 24 34C23.4444 34 22.8889 33.5556 22.8889 32.8889V25.1111H15.1111C14.5556 25.1111 14 24.6667 14 24C14 23.3333 14.5556 22.8889 15.1111 22.8889H22.8889V15.1111C22.8889 14.4444 23.4444 14 24 14C24.5556 14 25.1111 14.4444 25.1111 15.1111V22.8889H32.8889C33.4444 22.8889 34 23.3333 34 24Z"
                  fill="white"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M24 46C11.9 46 2 36.1 2 24C2 11.9 11.9 2 24 2C28.95 2 33.57 3.65 37.53 6.62C37.97 6.95 38.08 7.72 37.75 8.16C37.42 8.6 36.65 8.71 36.21 8.38C32.69 5.63 28.4 4.2 24 4.2C13.11 4.2 4.2 13.11 4.2 24C4.2 34.89 13.11 43.8 24 43.8C34.89 43.8 43.8 34.89 43.8 24C43.8 20.48 42.81 16.96 41.05 13.88C40.72 13.33 40.94 12.67 41.38 12.34C41.93 12.01 42.59 12.23 42.92 12.67C44.9 16.19 46 20.04 46 24C46 36.1 36.1 46 24 46Z"
                  fill="white"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            </span>
            <p>Top Up XDC</p>
          </li>
          <li>
            <span className="icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.4118 43H4.58824C3.03529 43 2 41.9867 2 40.4667V7.53333C2 6.01333 3.03529 5 4.58824 5H43.4118C44.9647 5 46 6.01333 46 7.53333V40.4667C46 41.9867 44.9647 43 43.4118 43Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.6 24C14.88 24 14.4 24.48 14.4 25.2V29.52L12.72 27.84C12.24 27.36 11.52 27.36 11.04 27.84L9.6 29.52V25.2C9.6 24.48 9.12 24 8.4 24C7.68 24 7.2 24.48 7.2 25.2V32.88L7.92 33.6H8.88C9.12 33.6 9.12 33.36 9.36 33.36L12 30.48L14.88 33.36H15.12C15.12 33.36 15.36 33.36 15.36 33.6H16.32C16.32 33.6 16.56 33.6 16.56 33.36C16.56 33.36 16.8 33.36 16.8 33.12V25.2C16.8 24.48 16.32 24 15.6 24ZM27.6 24C26.88 24 26.4 24.48 26.4 25.2V29.52L24.72 27.84C24.24 27.36 23.52 27.36 23.04 27.84L21.6 29.52V25.2C21.6 24.48 21.12 24 20.4 24C19.68 24 19.2 24.48 19.2 25.2V32.88L19.92 33.6H20.88C21.12 33.6 21.12 33.36 21.36 33.36L24 30.48L26.88 33.36H27.12C27.12 33.36 27.36 33.36 27.36 33.6H28.32C28.32 33.6 28.56 33.6 28.56 33.36C28.56 33.36 28.8 33.36 28.8 33.12V25.2C28.8 24.48 28.32 24 27.6 24ZM39.6 24C38.88 24 38.4 24.48 38.4 25.2V29.52L36.72 27.84C36.24 27.36 35.52 27.36 35.04 27.84L33.6 29.52V25.2C33.6 24.48 33.12 24 32.4 24C31.68 24 31.2 24.48 31.2 25.2V32.88L31.92 33.6H32.88C33.12 33.6 33.12 33.36 33.36 33.36L36 30.48L38.88 33.36H39.12C39.12 33.36 39.36 33.36 39.36 33.6H40.32C40.32 33.6 40.56 33.6 40.56 33.36C40.56 33.36 40.8 33.36 40.8 33.12V25.2C40.8 24.48 40.32 24 39.6 24Z"
                  fill="white"
                />
                <path
                  d="M37.2 12.0001C37.8627 12.0001 38.4 11.4628 38.4 10.8001C38.4 10.1374 37.8627 9.6001 37.2 9.6001C36.5373 9.6001 36 10.1374 36 10.8001C36 11.4628 36.5373 12.0001 37.2 12.0001Z"
                  fill="white"
                />
                <path
                  d="M32.4 12.0001C33.0627 12.0001 33.6 11.4628 33.6 10.8001C33.6 10.1374 33.0627 9.6001 32.4 9.6001C31.7373 9.6001 31.2 10.1374 31.2 10.8001C31.2 11.4628 31.7373 12.0001 32.4 12.0001Z"
                  fill="white"
                />
                <path
                  d="M27.6 12.0001C28.2627 12.0001 28.8 11.4628 28.8 10.8001C28.8 10.1374 28.2627 9.6001 27.6 9.6001C26.9373 9.6001 26.4 10.1374 26.4 10.8001C26.4 11.4628 26.9373 12.0001 27.6 12.0001Z"
                  fill="white"
                />
                <path
                  d="M3 15H45"
                  stroke="white"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <p>Search Domain</p>
          </li>
          <li>
            <span className="icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.75 10.1786C43.25 10.6786 43.6786 11.3571 44.0357 12.2143C44.3928 13.0714 44.5714 13.8571 44.5714 14.5714V45.4286C44.5714 46.1429 44.3214 46.75 43.8214 47.25C43.3214 47.75 42.7143 48 42 48H5.99999C5.2857 48 4.67856 47.75 4.17856 47.25C3.67856 46.75 3.42856 46.1429 3.42856 45.4286V2.57143C3.42856 1.85714 3.67856 1.25 4.17856 0.75C4.67856 0.25 5.2857 0 5.99999 0H30C30.7143 0 31.5 0.178571 32.3571 0.535714C33.2143 0.892857 33.8928 1.32143 34.3928 1.82143L42.75 10.1786ZM30.8571 3.64286V13.7143H40.9286C40.75 13.1964 40.5536 12.8304 40.3393 12.6161L31.9553 4.23214C31.7411 4.01786 31.375 3.82143 30.8571 3.64286ZM41.1428 44.5714V17.1429H30C29.2857 17.1429 28.6786 16.8929 28.1786 16.3929C27.6786 15.8929 27.4286 15.2857 27.4286 14.5714V3.42857H6.85713V44.5714H41.1428ZM13.7143 21.4286C13.7143 21.1786 13.7946 20.9732 13.9553 20.8125C14.1161 20.6518 14.3214 20.5714 14.5714 20.5714H33.4286C33.6786 20.5714 33.8839 20.6518 34.0446 20.8125C34.2053 20.9732 34.2857 21.1786 34.2857 21.4286V23.1429C34.2857 23.3929 34.2053 23.5982 34.0446 23.7589C33.8839 23.9196 33.6786 24 33.4286 24H14.5714C14.3214 24 14.1161 23.9196 13.9553 23.7589C13.7946 23.5982 13.7143 23.3929 13.7143 23.1429V21.4286ZM33.4286 27.4286C33.6786 27.4286 33.8839 27.5089 34.0446 27.6696C34.2053 27.8304 34.2857 28.0357 34.2857 28.2857V30C34.2857 30.25 34.2053 30.4554 34.0446 30.6161C33.8839 30.7768 33.6786 30.8571 33.4286 30.8571H14.5714C14.3214 30.8571 14.1161 30.7768 13.9553 30.6161C13.7946 30.4554 13.7143 30.25 13.7143 30V28.2857C13.7143 28.0357 13.7946 27.8304 13.9553 27.6696C14.1161 27.5089 14.3214 27.4286 14.5714 27.4286H33.4286ZM33.4286 34.2857C33.6786 34.2857 33.8839 34.3661 34.0446 34.5268C34.2053 34.6875 34.2857 34.8929 34.2857 35.1429V36.8571C34.2857 37.1071 34.2053 37.3125 34.0446 37.4732C33.8839 37.6339 33.6786 37.7143 33.4286 37.7143H14.5714C14.3214 37.7143 14.1161 37.6339 13.9553 37.4732C13.7946 37.3125 13.7143 37.1071 13.7143 36.8571V35.1429C13.7143 34.8929 13.7946 34.6875 13.9553 34.5268C14.1161 34.3661 14.3214 34.2857 14.5714 34.2857H33.4286Z"
                  fill="white"
                />
              </svg>
            </span>
            <p>Register</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default banner

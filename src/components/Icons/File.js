import React from 'react'
import styled from '@emotion/styled/macro'
import Icon from './IconBase'

const SVG = styled(Icon)``

const File = ({ active, className }) => (
  <svg
    width="21px"
    height="21px"
    viewBox="0 0 0.63 0.63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.578 0.446a0.131 0.131 0 1 1 -0.263 0 0.131 0.131 0 0 1 0.263 0Zm-0.065 -0.012 -0.066 0.066a0.02 0.02 0 0 1 -0.028 0l-0.026 -0.026a0.02 0.02 0 1 1 0.028 -0.028l0.012 0.012 0.052 -0.052a0.02 0.02 0 1 1 0.028 0.028Z"
      fill="#152C70"
    />
    <path
      d="M0.263 0.052a0.131 0.131 0 1 0 0 0.263 0.131 0.131 0 0 0 0 -0.263Z"
      fill="#4296FF"
    />
    <path
      d="M0.093 0.578A0.041 0.041 0 0 1 0.052 0.537 0.169 0.169 0 0 1 0.222 0.367h0.029c0.01 0 0.019 0.001 0.029 0.002A0.183 0.183 0 0 0 0.263 0.446c0 0.051 0.021 0.098 0.055 0.131H0.093Z"
      fill="#4296FF"
    />
  </svg>
)

export default File

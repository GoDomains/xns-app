import React, { Component } from 'react'
import styled from '@emotion/styled/macro'

class Info extends Component {
  render() {
    const { className, onClick, onMouseOver, onMouseLeave } = this.props

    return (
      <svg
        width="22px"
        height="22px"
        viewBox="0 0 1.32 1.32"
        version="1"
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 48 48"
      >
        <path
          fill="#90CAF9"
          d="M1.155 1.155H0.165V0.275c0 -0.061 0.05 -0.11 0.11 -0.11h0.77c0.061 0 0.11 0.05 0.11 0.11v0.88z"
        />
        <path
          x="6"
          y="42"
          fill="#64B5F6"
          width="36"
          height="2"
          d="M0.165 1.155H1.155V1.21H0.165V1.155z"
        />
        <g fill="#1565C0">
          <path
            x="31"
            y="27"
            width="6"
            height="5"
            d="M0.853 0.743H1.018V0.88H0.853V0.743z"
          />
          <path
            x="21"
            y="27"
            width="6"
            height="5"
            d="M0.578 0.743H0.743V0.88H0.578V0.743z"
          />
          <path
            x="11"
            y="27"
            width="6"
            height="5"
            d="M0.302 0.743H0.468V0.88H0.302V0.743z"
          />
          <path
            x="31"
            y="35"
            width="6"
            height="5"
            d="M0.853 0.963H1.018V1.1H0.853V0.963z"
          />
          <path
            x="11"
            y="35"
            width="6"
            height="5"
            d="M0.302 0.963H0.468V1.1H0.302V0.963z"
          />
          <path
            x="31"
            y="19"
            width="6"
            height="5"
            d="M0.853 0.522H1.018V0.66H0.853V0.522z"
          />
          <path
            x="21"
            y="19"
            width="6"
            height="5"
            d="M0.578 0.522H0.743V0.66H0.578V0.522z"
          />
          <path
            x="11"
            y="19"
            width="6"
            height="5"
            d="M0.302 0.522H0.468V0.66H0.302V0.522z"
          />
          <path
            x="31"
            y="11"
            width="6"
            height="5"
            d="M0.853 0.302H1.018V0.44H0.853V0.302z"
          />
          <path
            x="21"
            y="11"
            width="6"
            height="5"
            d="M0.578 0.302H0.743V0.44H0.578V0.302z"
          />
          <path
            x="11"
            y="11"
            width="6"
            height="5"
            d="M0.302 0.302H0.468V0.44H0.302V0.302z"
          />
          <path
            x="21"
            y="35"
            width="6"
            height="9"
            d="M0.578 0.963H0.743V1.21H0.578V0.963z"
          />
        </g>
      </svg>
    )
  }
}

const InfoContainer = styled('svg')`
  opacity: 1 !important;
  margin-left: 0px !important;
  margin-right: 5px;
`

export default Info

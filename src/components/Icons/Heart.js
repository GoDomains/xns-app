import React from 'react'
import styled from '@emotion/styled/macro'
import Icon from './IconBase'

const SVG = styled(Icon)``

const Heart = ({ active, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="23"
    enable-background="new 0 0 64 64"
    viewBox="0 0 64 64"
    id="favorite"
  >
    <path
      fill="#EF6183"
      d="M56.049,5.593c-2.455-1.531-5.306-2.34-8.242-2.34c-5.852,0-11.382,3.197-15.57,9.001l-0.238,0.33
  	l-0.238-0.33c-4.194-5.804-9.726-9.001-15.576-9.001c-2.936,0-5.784,0.809-8.237,2.34C0.466,10.244-3.774,21.707,4.59,35.878
  	c0.845,1.363,8.784,13.64,27.057,24.767c0.105,0.067,0.227,0.102,0.351,0.102c0.124,0,0.246-0.035,0.356-0.104
  	c18.657-11.368,26.718-24.241,27.05-24.779C67.776,21.702,63.534,10.245,56.049,5.593z"
    />
  </svg>
)

export default Heart

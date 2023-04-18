import { injectGlobal } from 'emotion'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    background: #F0F6FA;
    margin: 0;
  }

  a {
    color: #0058ff;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: #2C46A6;
    }

    &:visited {
      color: #0058ff
    } 
  }
`

// External Modules
import { createGlobalStyle } from 'styled-components'

// Libraries
import { Colors } from '../libraries/Color'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${Colors.background};
    -webkit-font-smoothing: antialiased;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body,input,textarea,button {
    font-family: 'Poppins', sans-serif;
    font-weight:400;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`

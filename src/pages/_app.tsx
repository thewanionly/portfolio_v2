import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import Theme from '../styles/Theme'

const GlobalStyles = createGlobalStyle`
 *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 43.75%; //1rem = 7px 7px/16px = 43.75%
  }

  body,
  input,
  textarea {
    font-family: ${(props) => props.theme.fonts.fontFamily};
    font-size:  ${(props) => props.theme.fontSizes.fontSizeReg};
    font-weight: ${(props) => props.theme.fontWeights.fontWeightReg};
  }
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyles />
      <Component {...pageProps} />
    </Theme>
  )
}

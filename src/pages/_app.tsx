import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import Theme from '../styles/Theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyles />
      <Component {...pageProps} />
    </Theme>
  )
}

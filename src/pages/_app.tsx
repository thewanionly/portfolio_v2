import type { AppProps } from 'next/app'
import { GlobalStyles, Theme } from '../styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyles />
      <Component {...pageProps} />
    </Theme>
  )
}

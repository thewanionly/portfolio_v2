import type { AppProps } from 'next/app'

import { GlobalStyles, Theme } from 'common/styles'
import { ScrollProgress } from 'common/components/ScrollProgress'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyles />
      <ScrollProgress />
      <Component {...pageProps} />
    </Theme>
  )
}

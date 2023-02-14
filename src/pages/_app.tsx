import type { AppProps } from 'next/app'

import { ContentProvider } from '../common/context'
import { GlobalStyles, Theme } from '../common/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContentProvider>
      <Theme>
        <GlobalStyles />
        <Component {...pageProps} />
      </Theme>
    </ContentProvider>
  )
}

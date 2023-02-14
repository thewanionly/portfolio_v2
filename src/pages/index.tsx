import Head from 'next/head'
import { useEffect } from 'react'

import { Content, useContentContext } from '../common/context'
import { Footer, Header, HeaderProvider } from '../layout'
import { Home } from '../sections'

export async function getStaticProps() {
  const { attributes: homeContent } = await require('../../content/home.md')

  return {
    props: {
      content: {
        home: homeContent,
      },
    },
  }
}

interface IndexProps {
  content: Content
}

export default function Index({ content }: IndexProps) {
  const { initializeContent } = useContentContext()

  useEffect(() => {
    initializeContent(content)
  }, [content, initializeContent])

  return (
    <>
      <Head>
        <title>Elloani Ross Pitogo | Frontend Engineer</title>
        <meta
          name="description"
          content="Portfolio site showcasing Elloani's projects"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <main>
        <HeaderProvider>
          <Header />
        </HeaderProvider>
        <Home />
        <Footer />
      </main>
    </>
  )
}

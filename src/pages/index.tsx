import Head from 'next/head'
import { useEffect } from 'react'

import { Content, useContentContext } from '../common/context'
import { Footer, Header, HeaderProvider } from '../layout'
import { Hero } from '../sections'

export async function getStaticProps() {
  const { attributes: heroContent } =
    await require('../../content/sections/hero.md')
  const { attributes: logoContent } =
    await require('../../content/components/logo.md')
  const { attributes: navLinksContent } =
    await require('../../content/components/navLinks.md')
  const { attributes: socialLinksContent } =
    await require('../../content/components/socialLinks.md')
  const { attributes: footerContent } =
    await require('../../content/layout/footer.md')

  return {
    props: {
      content: {
        hero: heroContent,
        components: {
          logo: logoContent,
          ...navLinksContent,
          ...socialLinksContent,
        },
        footer: footerContent,
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
        <Hero />
        <Footer />
      </main>
    </>
  )
}

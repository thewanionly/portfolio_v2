import Head from 'next/head'
import { Footer, Header, HeaderProvider } from '../layout'
import { Home } from '../sections'

import { attributes, react as HomeContent } from '../content/home.md'

interface HomeAttributes {
  title: string
  date: Date
  cats: {
    description: string
    name: string
  }[]
}

const { title, cats } = attributes as unknown as HomeAttributes

export default function Index() {
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
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
        <Footer />
      </main>
    </>
  )
}

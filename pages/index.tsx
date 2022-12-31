import Head from 'next/head'
import styled from 'styled-components'

const S = {
  TestButton: styled.button`
    border: none;
    padding: 15px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  `,
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Elloani Ross Pitogo | Frontend Engineer</title>
        <meta
          name="description"
          content="Portfolio site showcasing Elloani's projects"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <S.TestButton>Test</S.TestButton>
      </main>
    </>
  )
}

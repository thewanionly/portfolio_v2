import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const S = {
  HeaderLogoContainer: styled.div`
    user-select: none;
    cursor: pointer;
    display: flex;
    align-items: center;

    margin: 0 auto;

    height: 2.4rem;
    position: relative;
  `,
  HeaderLogo: styled(Image)``,
}

const Header = () => {
  return (
    <header>
      <Link href="#">
        <S.HeaderLogoContainer>
          <S.HeaderLogo src="/images/logo.svg" alt="Header logo" fill />
        </S.HeaderLogoContainer>
      </Link>
    </header>
  )
}

export default Header

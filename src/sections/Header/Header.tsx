import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import { container } from '../../common/styles/utilities'

const S = {
  Header: styled.header`
    position: fixed;
    z-index: 1;
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.secondary};
    height: 8.1rem;
    display: flex;
    align-items: center;
  `,
  HeaderContainer: styled.div`
    ${container}

    display: flex;
    align-items: center;
  `,
  HeaderLogoLink: styled(Link)`
    margin: 0 auto;
  `,
  HeaderLogoContainer: styled.div`
    user-select: none;
    cursor: pointer;

    height: 2.4rem;
    width: 11.44rem;
    position: relative;
  `,
  HeaderLogo: styled(Image)``,
}

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderLogoLink href="#">
          <S.HeaderLogoContainer>
            <S.HeaderLogo src="/images/logo.svg" alt="Header logo" fill />
          </S.HeaderLogoContainer>
        </S.HeaderLogoLink>
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header

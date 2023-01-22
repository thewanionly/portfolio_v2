import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import { NavBar } from '../../common/components'
import { container } from '../../common/styles/utilities'

import { useHeaderContext } from './Header.context'
import { HeaderNavToggle } from './HeaderNavToggle'

const S = {
  Header: styled.header`
    position: fixed;
    z-index: 1;
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.secondary};
    height: 8.1rem;
    display: flex;
    align-items: center;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${({ theme: { colors } }) => colors.headerDividerBg};
      height: 0.1rem;
      width: 100%;
      max-width: 120rem;

      @media only screen and ${({ theme: { breakPoints } }) =>
          breakPoints.tabletPortrait} {
        left: calc((100% - min(120rem, 80%)) / 2);
        width: 80%;
      }

      @media only screen and ${({ theme: { breakPoints } }) =>
          breakPoints.desktop} {
        left: calc((100% - min(120rem, 75%)) / 2);
        width: 75%;
      }
    }
  `,
  HeaderContainer: styled.div`
    ${container}

    display: flex;
    align-items: center;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      justify-content: space-between;
    }
  `,
  HeaderLogoLink: styled(Link)`
    margin: 0 auto;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletPortrait} {
      margin: 0 5rem;
    }

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      margin: 0;
    }
  `,
  HeaderLogoContainer: styled.div`
    user-select: none;
    cursor: pointer;

    height: 2.4rem;
    width: 11.44rem;
    position: relative;
  `,
}

const Header = () => {
  const { isNavMenuOpen } = useHeaderContext()

  return (
    <S.Header>
      <S.HeaderContainer>
        <HeaderNavToggle />
        <S.HeaderLogoLink href="#">
          <S.HeaderLogoContainer>
            <Image src="/images/logo.svg" alt="Header logo" fill />
          </S.HeaderLogoContainer>
        </S.HeaderLogoLink>
        <NavBar isMenu={isNavMenuOpen} />
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header

import styled, { css } from 'styled-components'

import { Logo, NavBar } from '../../common/components'
import { NavLink } from '../../common/components/NavBar'
import { NAVIGATION_LINKS } from '../../common/constants'
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
  HeaderLogo: styled(Logo)`
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
  HeaderNavBar: styled(NavBar)<WithIsMenu>`
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease-out;

    ${({ isMenu }) =>
      isMenu &&
      css`
        visibility: visible;
        opacity: 1;

        position: absolute;
        top: 7.5rem;
        left: 0;
        background-color: ${({ theme: { colors } }) => colors.navMenuBg};
        padding: 8rem;
        width: 100%;
        height: calc(100vh - 7.5rem);
        z-index: 1;
        text-align: center;
      `}

    @media only screen and ${({ theme: { breakPoints } }) =>
      breakPoints.tabletLandscape} {
      visibility: visible;
      opacity: 1;

      position: initial;
      top: 0;
      left: 0;
      background-color: transparent;
      padding: 0;
      width: auto;
      height: auto;
      z-index: 0;
    }
  `,
  HeaderNavBarList: styled(NavBar.List)<WithIsMenu>`
    display: none;

    ${({ isMenu }) =>
      isMenu &&
      css`
        display: flex;
        flex-direction: column;
        gap: 2em;
      `}

    @media only screen and ${({ theme: { breakPoints } }) =>
      breakPoints.tabletLandscape} {
      display: flex;
      flex-direction: row;
      gap: 3.4rem;
    }
  `,
  HeaderNavBarListItem: styled(NavBar.ListItem)``,
}

type WithIsMenu = {
  isMenu: boolean
}

const Header = () => {
  const { isNavMenuOpen } = useHeaderContext()

  const navBarLinks: NavLink[] = Object.values(NAVIGATION_LINKS)

  return (
    <S.Header>
      <S.HeaderContainer>
        <HeaderNavToggle />
        <S.HeaderLogo altText="Header logo" />
        <S.HeaderNavBar isMenu={isNavMenuOpen}>
          <S.HeaderNavBarList isMenu={isNavMenuOpen}>
            {navBarLinks.map(({ href, label }) => (
              <S.HeaderNavBarListItem key={label} href={href} label={label} />
            ))}
          </S.HeaderNavBarList>
        </S.HeaderNavBar>
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header

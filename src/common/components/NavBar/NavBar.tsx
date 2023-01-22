import Link from 'next/link'
import styled, { css } from 'styled-components'

const S = {
  NavBar: styled.nav<WithIsMenu>`
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease-out;
    user-select: none;

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
      visibility: ${({ isMenu }) => (isMenu ? 'hidden' : 'visible')};
      opacity: ${({ isMenu }) => (isMenu ? 0 : 1)};
    }
  `,
  NavBarList: styled.ul<WithIsMenu>`
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
      gap: 3.4rem;
    }
  `,
  NavBarListItem: styled.li``,
  NavBarLink: styled(Link)`
    color: ${({ theme: { colors } }) => colors.navLink};
    transition: all 0.2s;

    &:hover {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  `,
}

const NAVIGATION_LINKS = {
  home: {
    href: '#',
    label: 'Home',
  },
  about: {
    href: '#about',
    label: 'About',
  },
  skills: {
    href: '#skills',
    label: 'Skills',
  },
  projects: {
    href: '#projects',
    label: 'Projects',
  },
  contact: {
    href: '#contact',
    label: 'Contact',
  },
}

type WithIsMenu = {
  isMenu: boolean
}

type NavBarProps = {
  className?: string
  isMenu: boolean
}

const NavBar = ({ className, isMenu = false }: NavBarProps) => {
  return (
    <S.NavBar className={className} isMenu={isMenu}>
      <S.NavBarList isMenu={isMenu}>
        {Object.values(NAVIGATION_LINKS).map(({ href, label }) => (
          <S.NavBarListItem key={label}>
            <S.NavBarLink href={href}>{label}</S.NavBarLink>
          </S.NavBarListItem>
        ))}
      </S.NavBarList>
    </S.NavBar>
  )
}

export default NavBar

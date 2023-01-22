import Link from 'next/link'
import styled from 'styled-components'

const S = {
  NavBar: styled.nav`
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease-out;
    user-select: none;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      visibility: visible;
      opacity: 1;
    }
  `,
  NavBarList: styled.ul`
    display: none;

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

const NavBar = () => {
  return (
    <S.NavBar>
      <S.NavBarList>
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

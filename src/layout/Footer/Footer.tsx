import Link from 'next/link'
import styled from 'styled-components'

import { Logo, NavBar } from '../../common/components'
import { NavLink } from '../../common/components/NavBar'
import { NAVIGATION_LINKS } from '../../common/constants'
import { container } from '../../common/styles/utilities'

const S = {
  Footer: styled.footer`
    background-color: ${({ theme: { colors } }) => colors.secondary};
    padding: 4rem 0;
    text-align: center;
  `,
  FooterContainer: styled.div`
    ${container}
  `,
  FooterLogo: styled(Logo)``,
  FooterNavBar: styled(NavBar)`
    margin-bottom: 5rem;
  `,
  FooterNavBarList: styled(NavBar.List)`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletPortrait} {
      flex-direction: row;
      gap: 3.4rem;
    }
  `,
  FooterNavBarListItem: styled(NavBar.ListItem)``,
}

const Footer = () => {
  const navBarLinks: NavLink[] = Object.values(NAVIGATION_LINKS)

  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterLogo altText="Footer logo" />
        <S.FooterNavBar>
          <S.FooterNavBarList>
            {navBarLinks.map(({ href, label }) => (
              <S.FooterNavBarListItem key={label} href={href} label={label} />
            ))}
          </S.FooterNavBarList>
        </S.FooterNavBar>
        <q data-testid="footer-quotation">{`Hard work beats talent when talent doesn't work hard.`}</q>
        <p data-testid="footer-copyright">
          {`Copyright ${new Date().getFullYear()}. All Rights Reserved.`}
        </p>
        <div>
          <Link href="mailto:pelloani@gmail.com" target="_blank" title="Gmail">
            <svg aria-label="Gmail icon">
              <use xlinkHref="/icons/gmail.svg#img"></use>
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/pitogoelloaniross/"
            target="_blank"
            title="LinkedIn"
          >
            <svg>
              <use xlinkHref="/icons/linkedin.svg#img"></use>
            </svg>
          </Link>
          <Link
            href="https://github.com/thewanionly/"
            target="_blank"
            title="GitHub"
          >
            <svg>
              <use xlinkHref="/icons/github.svg#img"></use>
            </svg>
          </Link>
        </div>
      </S.FooterContainer>
    </S.Footer>
  )
}

export default Footer

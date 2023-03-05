import styled from 'styled-components'

import { Logo, NavBar } from 'common/components'
import { SocialIcons } from 'common/components/SocialIcons'
import { useContentContext } from 'common/context'
import { container } from 'common/styles/utilities'

const S = {
  Footer: styled.footer`
    background-color: ${({ theme: { colors } }) => colors.secondary};
    padding: 4rem 0;
    text-align: center;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: calc((100% - min(120rem, 90%)) / 2);
      width: 90%;
      max-width: 120rem;
      background-color: ${({ theme: { colors } }) => colors.headerDividerBg};
      height: 0.1rem;

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

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletPortrait} {
      text-align: start;
    }
  `,
  FooterContainer: styled.div`
    ${container}

    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: -4rem;
      left: calc(50% - 5rem);
      background-color: ${({ theme: { colors } }) => colors.primary};
      height: 0.4rem;
      width: 10rem;

      @media only screen and ${({ theme: { breakPoints } }) =>
          breakPoints.tabletPortrait} {
        left: 0;
      }
    }
  `,
  FooterTopArea: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.8rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletPortrait} {
      align-items: flex-start;
    }

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      flex-direction: row;
      justify-content: space-between;
    }
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
  FooterMiddleArea: styled.div`
    font-style: italic;
    color: ${({ theme: { colors } }) => colors.bodyLighter};
    font-weight: ${({ theme: { fontWeights } }) =>
      fontWeights.fontWeightMedium};
    margin-bottom: 6rem;
  `,
  FooterBottomArea: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletPortrait} {
      flex-direction: row;
      justify-content: space-between;
    }
  `,
  FooterCopyrightText: styled.p`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > * {
      flex-shrink: 0;
      color: ${({ theme: { colors } }) => colors.bodyLighter};
      font-weight: ${({ theme: { fontWeights } }) =>
        fontWeights.fontWeightBold};
      font-size: ${({ theme: { fontSizes } }) => fontSizes.fontSizeSm};
    }

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletPortrait} {
      flex-direction: row;
      gap: 0.5rem;
    }
  `,
}

export const Footer = () => {
  const {
    footer: { footerQuote, copyrightText },
    components: { logo, navLinks, socialLinks },
  } = useContentContext()

  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterTopArea>
          <S.FooterLogo
            altText="Footer logo"
            src={logo.src}
            blurSrc={logo.blurImage}
          />
          <S.FooterNavBar>
            <S.FooterNavBarList>
              {navLinks.map(({ label, link }) => (
                <S.FooterNavBarListItem key={label} href={link} label={label} />
              ))}
            </S.FooterNavBarList>
          </S.FooterNavBar>
        </S.FooterTopArea>
        <S.FooterMiddleArea>
          <q>{footerQuote}</q>
        </S.FooterMiddleArea>
        <S.FooterBottomArea>
          <S.FooterCopyrightText>
            <span>{copyrightText.line1}</span>
            <span>{`${copyrightText.line2} ${new Date().getFullYear()}`}</span>
          </S.FooterCopyrightText>
          <SocialIcons icons={socialLinks} />
        </S.FooterBottomArea>
      </S.FooterContainer>
    </S.Footer>
  )
}

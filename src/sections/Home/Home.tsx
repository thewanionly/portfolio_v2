import Link from 'next/link'
import styled, { css } from 'styled-components'
import { container, highlightText } from '../../common/styles/utilities'

// TODO: Refactor into another component
const button = css`
  display: block;
  padding: 1.5rem 2.5rem;
  max-width: max-content;

  text-transform: uppercase;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.fontSizeSm};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.fontWeightBold};
  letter-spacing: 0.1rem;
  line-height: 1.8rem;
  text-align: center;

  transition: all 0.2s;

  // primary
  background-color: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.btn};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.primaryLight};
  }
`

const buttonPrimaryOutline = css`
  background-color: transparent;
  border: 0.1rem solid ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.primary};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.primaryLightest};
  }
`

const S = {
  Home: styled.section`
    padding: 13rem 0 16rem;
    background-color: ${({ theme: { colors } }) => colors.secondary};
    color: ${({ theme: { colors } }) => colors.headingLight};
  `,
  HomeContainer: styled.div`
    ${container}

    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 6rem;
    text-align: center;
  `,
  HomeTitle: styled.h1`
    text-transform: uppercase;
  `,
  HomeTitleSecondary: styled.span`
    display: block;
    letter-spacing: 0.5rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.fontSizeSm};
    color: ${({ theme: { colors } }) => colors.bodyLighter};
  `,
  HomeTitlePrimary: styled.span`
    display: block;
    letter-spacing: 0.3rem;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  `,
  HomeSubtitle: styled.div``,
  HomeSubtitleText: styled.p`
    color: ${({ theme: { colors } }) => colors.bodyLight};
    line-height: 2.5rem;
  `,
  HomeSubtitleTextHighlighy: styled.strong`
    ${highlightText}
  `,
  HomeCTAButtonGroup: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  `,
  HomeCTAButton: styled(Link)`
    ${button}

    flex: 1;
    flex-basis: 45%;
    max-width: 100%;
    min-width: 29rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletPortrait} {
      max-width: 35rem;
    }
  `,
  HomeCTAButtonOutline: styled(Link)`
    ${button}
    ${buttonPrimaryOutline}

    flex: 1;
    flex-basis: 45%;
    max-width: 100%;
    min-width: 29rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletPortrait} {
      max-width: 35rem;
    }
  `,
  HomeSocialGroup: styled.ul`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    color: ${({ theme: { colors } }) => colors.icon};
  `,
  HomeSocialGroupItem: styled.li``,
  HomeSocialLink: styled(Link)`
    transition: all 0.2s;

    &:hover {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  `,
  HomeSocialIcon: styled.svg`
    width: 2.4rem;
    height: 2.4rem;
  `,
}

export const Home = () => (
  <S.Home>
    <S.HomeContainer>
      <S.HomeTitle>
        <S.HomeTitleSecondary>Hi there, I am</S.HomeTitleSecondary>
        <S.HomeTitlePrimary>Elloani Ross Pitogo</S.HomeTitlePrimary>
      </S.HomeTitle>
      <S.HomeSubtitle data-testid="home-subtitle">
        <S.HomeSubtitleText>
          You can call me{' '}
          <S.HomeSubtitleTextHighlighy>Wani</S.HomeSubtitleTextHighlighy>.
        </S.HomeSubtitleText>
        <S.HomeSubtitleText>
          School-taught{' '}
          <S.HomeSubtitleTextHighlighy>
            Computer Engineer
          </S.HomeSubtitleTextHighlighy>
          ,
        </S.HomeSubtitleText>
        <S.HomeSubtitleText>
          Industry-taught{' '}
          <S.HomeSubtitleTextHighlighy>
            Front-end Web Developer
          </S.HomeSubtitleTextHighlighy>
          .
        </S.HomeSubtitleText>
      </S.HomeSubtitle>
      <S.HomeCTAButtonGroup>
        <S.HomeCTAButton href="#projects">View my work</S.HomeCTAButton>
        <S.HomeCTAButtonOutline href="#contact">
          Contact me
        </S.HomeCTAButtonOutline>
      </S.HomeCTAButtonGroup>
      <S.HomeSocialGroup>
        <S.HomeSocialGroupItem>
          <S.HomeSocialLink
            href="mailto:pelloani@gmail.com"
            target="_blank"
            title="Gmail"
          >
            <S.HomeSocialIcon aria-label="Gmail icon">
              <use xlinkHref="/icons/gmail.svg#img"></use>
            </S.HomeSocialIcon>
          </S.HomeSocialLink>
        </S.HomeSocialGroupItem>
        <S.HomeSocialGroupItem>
          <S.HomeSocialLink
            href="https://www.linkedin.com/in/pitogoelloaniross/"
            target="_blank"
            title="LinkedIn"
          >
            <S.HomeSocialIcon>
              <use xlinkHref="/icons/linkedin.svg#img"></use>
            </S.HomeSocialIcon>
          </S.HomeSocialLink>
        </S.HomeSocialGroupItem>
        <S.HomeSocialGroupItem>
          <S.HomeSocialLink
            href="https://github.com/thewanionly/"
            target="_blank"
            title="GitHub"
          >
            <S.HomeSocialIcon>
              <use xlinkHref="/icons/github.svg#img"></use>
            </S.HomeSocialIcon>
          </S.HomeSocialLink>
        </S.HomeSocialGroupItem>
      </S.HomeSocialGroup>
    </S.HomeContainer>
  </S.Home>
)
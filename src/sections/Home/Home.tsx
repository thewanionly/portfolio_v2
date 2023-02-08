import styled from 'styled-components'
import { Button, ButtonVariant } from '../../common/components'
import { SocialIcons } from '../../common/components/SocialIcons'
import { SOCIAL_LINKS } from '../../common/constants'
import { container, highlightText } from '../../common/styles/utilities'

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
  HomeCTAButton: styled(Button)`
    flex: 1;
    flex-basis: 45%;
    max-width: 100%;
    min-width: 29rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletPortrait} {
      max-width: 35rem;
    }
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
        <S.HomeCTAButton asLink href="#projects">
          View my work
        </S.HomeCTAButton>
        <S.HomeCTAButton
          asLink
          href="#contact"
          variant={ButtonVariant.OUTLINED}
        >
          Contact me
        </S.HomeCTAButton>
      </S.HomeCTAButtonGroup>
      <SocialIcons icons={Object.values(SOCIAL_LINKS)} />
    </S.HomeContainer>
  </S.Home>
)

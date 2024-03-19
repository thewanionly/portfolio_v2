import styled, { keyframes } from 'styled-components'

import { Button, ButtonVariant } from 'common/components'
import { SocialIcons } from 'common/components/SocialIcons'
import { useContentContext } from 'common/context'
import { container, highlightText } from 'common/styles/utilities'
import { renderDescription } from 'common/utilities'

// Credits to the ff for the fancy border radius animation:
// - https://9elements.github.io/fancy-border-radius/#53.24.54.80--.
// - https://9elements.com/blog/css-border-radius-can-do-that/
const morph = keyframes`
  0% {border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;}
  100% {border-radius: 40% 60%;}
`

const spin = keyframes`
 to { transform: rotate(1turn); }
`

const S = {
  Hero: styled.section`
    padding: 13rem 0 16rem;
    background-color: ${({ theme: { colors } }) => colors.secondary};
    color: ${({ theme: { colors } }) => colors.headingLight};
  `,
  HeroContainer: styled.div`
    ${container}

    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 6rem;
    text-align: center;
    align-items: center;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      display: grid;
      grid-template-columns: 1fr max-content;
      grid-template-areas:
        'left1 right'
        'left2 right'
        'left3 right'
        'left4 right';
      column-gap: 9rem;
      text-align: start;
    }
  `,
  HeroTitle: styled.h1`
    grid-area: left1;
    text-transform: uppercase;
  `,
  HeroImageSpinContainer: styled.div`
    grid-area: right;
    margin: 3rem 0 2rem;
    width: 23rem;
    aspect-ratio: 1/1;
    position: relative;
    animation: ${spin} 12s ease-in-out infinite alternate;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletPortrait} {
      width: 30rem;
      margin: 4rem 0 3rem;
    }
  `,
  HeroImageContainer: styled.div`
    width: 100%;
    height: 100%;
    transition: border-radius 1s ease-out;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    animation: ${morph} 8s ease-in-out infinite both alternate;
    position: absolute;
    overflow: hidden;
  `,
  HeroImage: styled.div`
    width: 142%;
    height: 142%;
    position: absolute;
    left: -21%;
    top: -21%;

    background-image: url('/img/me.jpg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    animation: ${spin} 12s ease-in-out infinite alternate-reverse;
  `,
  HeroTitleSecondary: styled.span`
    display: block;
    letter-spacing: 0.5rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.fontSizeSm};
    color: ${({ theme: { colors } }) => colors.bodyLighter};
  `,
  HeroTitlePrimary: styled.span`
    display: block;
    letter-spacing: 0.3rem;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  `,
  HeroSubtitle: styled.div`
    grid-area: left2;
  `,
  HeroNicknameText: styled.p`
    color: ${({ theme: { colors } }) => colors.bodyLighter};
    line-height: 2.5rem;
  `,
  HeroDescriptionText: styled.p`
    color: ${({ theme: { colors } }) => colors.bodyLighter};
    line-height: 2.5rem;
    max-width: 48rem;
    margin: 0 auto;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      margin: 0;
    }
  `,
  HeroTextHighlight: styled.strong`
    ${highlightText}
  `,
  HeroCTAButtonGroup: styled.div`
    grid-area: left3;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      justify-content: flex-start;
    }
  `,
  HeroCTAButton: styled(Button)`
    flex: 1;
    flex-basis: 45%;
    max-width: 100%;
    min-width: 25rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      max-width: 35rem;
    }
  `,
  SocialIcons: styled(SocialIcons)`
    grid-area: left4;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      justify-content: flex-start;
    }
  `,
}

export const Hero = () => {
  const {
    hero: {
      fullName,
      greeting,
      nicknameText,
      description,
      highlightedWords,
      projectsCTA,
      contactsCTA,
    },
    components: { socialLinks },
  } = useContentContext()

  return (
    <S.Hero id="home">
      <S.HeroContainer>
        <S.HeroTitle>
          <S.HeroTitleSecondary>{greeting} I am</S.HeroTitleSecondary>
          <S.HeroTitlePrimary>{fullName}</S.HeroTitlePrimary>
        </S.HeroTitle>
        <S.HeroImageSpinContainer>
          <S.HeroImageContainer>
            <S.HeroImage />
          </S.HeroImageContainer>
        </S.HeroImageSpinContainer>
        <S.HeroSubtitle>
          <S.HeroNicknameText>
            {`${nicknameText.nicknameIntro} `}
            <S.HeroTextHighlight>
              {`${nicknameText.nicknameValue}.`}
            </S.HeroTextHighlight>
          </S.HeroNicknameText>
          <S.HeroDescriptionText data-testid="description">
            {renderDescription(
              description,
              highlightedWords,
              S.HeroTextHighlight
            )}
          </S.HeroDescriptionText>
        </S.HeroSubtitle>
        <S.HeroCTAButtonGroup>
          <S.HeroCTAButton asLink href="#projects">
            {projectsCTA}
          </S.HeroCTAButton>
          <S.HeroCTAButton
            asLink
            href="#contact"
            variant={ButtonVariant.OUTLINED}
          >
            {contactsCTA}
          </S.HeroCTAButton>
        </S.HeroCTAButtonGroup>
        <S.SocialIcons icons={socialLinks} />
      </S.HeroContainer>
    </S.Hero>
  )
}

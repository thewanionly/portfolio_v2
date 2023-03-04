import styled from 'styled-components'

import { Button, ButtonVariant } from 'common/components'
import { SocialIcons } from 'common/components/SocialIcons'
import { useContentContext } from 'common/context'
import { container, highlightText } from 'common/styles/utilities'
import { renderDescription } from 'common/utilities'

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
  `,
  HeroTitle: styled.h1`
    text-transform: uppercase;
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
  HeroSubtitle: styled.div``,
  HeroNicknameText: styled.p`
    color: ${({ theme: { colors } }) => colors.bodyLighter};
    line-height: 2.5rem;
  `,
  HeroDescriptionText: styled.p`
    color: ${({ theme: { colors } }) => colors.bodyLighter};
    line-height: 2.5rem;
    max-width: 48rem;
    margin: 0 auto;
  `,
  HeroTextHighlight: styled.strong`
    ${highlightText}
  `,
  HeroCTAButtonGroup: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  `,
  HeroCTAButton: styled(Button)`
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
        <SocialIcons icons={socialLinks} />
      </S.HeroContainer>
    </S.Hero>
  )
}

import styled from 'styled-components'
import { Button, ButtonVariant } from '../../common/components'
import { SocialIcons } from '../../common/components/SocialIcons'
import { useContentContext } from '../../common/context'
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
  HomeNicknameText: styled.p`
    color: ${({ theme: { colors } }) => colors.bodyLight};
    line-height: 2.5rem;
  `,
  HomeDescriptionText: styled.p`
    color: ${({ theme: { colors } }) => colors.bodyLight};
    line-height: 2.5rem;
    max-width: 48rem;
    margin: 0 auto;
  `,
  HomeTextHighlight: styled.strong`
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

const removePunctuation = (text: string) =>
  text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s{2,}/g, ' ')

const renderDescription = (description: string, highlightedWords: string[]) => {
  let updatedDescription = description
  const highLightedWordMap: { [key: string]: string } = {}

  // Create a one-word reference to the hightLightedWord in the description text
  // This is in order for the highlighted words not to be split up into multiple words when split
  highlightedWords.forEach((word) => {
    const referenceWord: string = (Math.random() + 1).toString(36).substring(7)

    highLightedWordMap[referenceWord] = word

    updatedDescription = updatedDescription.replace(word, referenceWord)
  })

  const descriptionArray = updatedDescription.split(' ')

  return descriptionArray.map((word, idx) => {
    const addSpace = idx !== descriptionArray.length - 1
    const rawWord = removePunctuation(word)

    if (Object.keys(highLightedWordMap).includes(rawWord)) {
      const actualText = word.replace(rawWord, highLightedWordMap[rawWord])
      return (
        <S.HomeTextHighlight key={rawWord}>
          {addSpace ? `${actualText} ` : actualText}
        </S.HomeTextHighlight>
      )
    }

    return addSpace ? `${word} ` : word
  })
}

export const Home = () => {
  const {
    content: { home, components },
  } = useContentContext()

  const {
    fullName,
    greeting,
    nicknameText,
    description,
    highlightedWords,
    projectsCTA,
    contactsCTA,
  } = home

  const { socialLinks } = components

  return (
    <S.Home>
      <S.HomeContainer>
        <S.HomeTitle>
          <S.HomeTitleSecondary>{greeting} I am</S.HomeTitleSecondary>
          <S.HomeTitlePrimary>{fullName}</S.HomeTitlePrimary>
        </S.HomeTitle>
        <S.HomeSubtitle>
          <S.HomeNicknameText>
            {`${nicknameText.nicknameIntro} `}
            <S.HomeTextHighlight>
              {`${nicknameText.nicknameValue}.`}
            </S.HomeTextHighlight>
          </S.HomeNicknameText>
          <S.HomeDescriptionText data-testid="description">
            {renderDescription(description, highlightedWords)}
          </S.HomeDescriptionText>
        </S.HomeSubtitle>
        <S.HomeCTAButtonGroup>
          <S.HomeCTAButton asLink href="#projects">
            {projectsCTA}
          </S.HomeCTAButton>
          <S.HomeCTAButton
            asLink
            href="#contact"
            variant={ButtonVariant.OUTLINED}
          >
            {contactsCTA}
          </S.HomeCTAButton>
        </S.HomeCTAButtonGroup>
        <SocialIcons icons={socialLinks} />
      </S.HomeContainer>
    </S.Home>
  )
}

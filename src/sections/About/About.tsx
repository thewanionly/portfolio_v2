import styled from 'styled-components'

import { Button } from 'common/components'
import { useContentContext } from 'common/context'
import { container, sectionTitle } from 'common/styles/utilities'
import { getValidAssetPath } from 'common/utilities'

import { AboutCard } from './AboutCard'

const S = {
  About: styled.section`
    padding: 8rem 0;
  `,
  AboutContainer: styled.div`
    ${container}
  `,
  AboutTitle: styled.h4`
    ${sectionTitle}

    margin-bottom: 5rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      margin-bottom: 10rem;
    }
  `,
  AboutContent: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  `,
  AboutCard: styled(AboutCard)`
    flex: 1;
    flex-basis: 50rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletPortrait} {
      flex-basis: 32%;
      min-width: 30rem;
      max-width: 50%;
    }
  `,
  AboutCTA: styled.div`
    margin-top: 7rem;
    text-align: center;
    color: ${({ theme: { colors } }) => colors.bodyDark};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  `,
  AboutCTADescription: styled.p``,
  AboutCTAButton: styled(Button)`
    min-width: 29rem;
  `,
}

const getFileName = (fileUrl: string) =>
  fileUrl?.split('/').pop()?.split('.').shift()

export const About = () => {
  const {
    about: { sectionTitle, aboutCard, downloadCV },
  } = useContentContext()

  return (
    <S.About id="about">
      <S.AboutContainer>
        <S.AboutTitle>{sectionTitle}</S.AboutTitle>
        <S.AboutContent>
          {aboutCard.map((aboutCard) => (
            <S.AboutCard key={aboutCard.title} {...aboutCard} />
          ))}
        </S.AboutContent>
        <S.AboutCTA>
          <S.AboutCTADescription>
            {downloadCV.description}
          </S.AboutCTADescription>
          <S.AboutCTAButton
            asLink
            href={getValidAssetPath(downloadCV.cvFile)}
            openLinkInNewTab
            download={getFileName(downloadCV.cvFile)}
          >
            {downloadCV.buttonCTAText}
          </S.AboutCTAButton>
        </S.AboutCTA>
      </S.AboutContainer>
    </S.About>
  )
}

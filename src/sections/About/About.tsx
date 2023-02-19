import styled from 'styled-components'

import { useContentContext } from '../../common/context'
import { container, sectionTitle } from '../../common/styles/utilities'
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
}

export const About = () => {
  const {
    content: { about },
  } = useContentContext()

  return (
    <S.About id="about">
      <S.AboutContainer>
        <S.AboutTitle>{about.sectionTitle}</S.AboutTitle>
        <S.AboutContent>
          {about.aboutCard.map((aboutCard) => (
            <S.AboutCard key={aboutCard.title} {...aboutCard} />
          ))}
        </S.AboutContent>
      </S.AboutContainer>
    </S.About>
  )
}

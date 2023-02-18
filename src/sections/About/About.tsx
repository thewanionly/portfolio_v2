import Image from 'next/image'
import styled from 'styled-components'

import { useContentContext } from '../../common/context'
import { AboutCard } from '../../common/context/content'
import { container } from '../../common/styles/utilities'

const S = {
  About: styled.section`
    padding: 8rem 0;
  `,
  AboutContainer: styled.div`
    ${container}
  `,
  AboutTitle: styled.h4``,
  AboutCard: styled.div`
    border-radius: 0.8rem;
    text-align: center;
  `,
  AboutCardTitle: styled.h6``,
  AboutCardImageContainer: styled.div`
    user-select: none;
    margin: 0 auto 3rem;

    height: 11rem;
    position: relative;
  `,
}

const AboutCard = ({
  title,
  image,
  description,
}: // highlightedWords,
AboutCard) => {
  return (
    <S.AboutCard key={title}>
      <S.AboutCardTitle>{title}</S.AboutCardTitle>
      <S.AboutCardImageContainer>
        <Image src={image} alt={title} fill />
      </S.AboutCardImageContainer>
      <p>{description}</p>
    </S.AboutCard>
  )
}

export const About = () => {
  const {
    content: { about },
  } = useContentContext()

  return (
    <S.About>
      <S.AboutContainer>
        <S.AboutTitle>{about.sectionTitle}</S.AboutTitle>
        {about.aboutCard.map((aboutCard) => (
          <AboutCard key={aboutCard.title} {...aboutCard} />
        ))}
      </S.AboutContainer>
    </S.About>
  )
}

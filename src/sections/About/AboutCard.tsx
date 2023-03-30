import styled from 'styled-components'
import Image from 'next/image'

import { AboutCard as AboutCardType } from 'common/context/content'
import { renderDescription } from 'common/utilities'

interface AboutCardProps extends AboutCardType {
  className?: string
}

const S = {
  AboutCard: styled.div`
    min-width: 34rem;
    max-width: 50rem;
    padding: 2.5rem 2rem;
    background-color: ${({ theme: { colors } }) => colors.aboutCardBg};
    border-radius: 0.8rem;
    text-align: center;
  `,
  AboutCardTitle: styled.h3`
    letter-spacing: 0.1rem;
    margin-bottom: 3rem;
    color: ${({ theme: { colors } }) => colors.secondary};
  `,
  AboutCardImageContainer: styled.div`
    user-select: none;
    margin: 0 auto 4rem;

    height: 11rem;
    position: relative;
  `,
  AboutCardDescription: styled.p`
    color: ${({ theme: { colors } }) => colors.bodyDark};
    line-height: 2.5rem;
  `,
}

export const AboutCard = ({
  className = '',
  title,
  image,
  blurImage,
  description,
  highlightedWords,
}: AboutCardProps) => {
  return (
    <S.AboutCard className={className}>
      <S.AboutCardTitle>{title}</S.AboutCardTitle>
      <S.AboutCardImageContainer>
        <Image
          src={image}
          alt={title}
          fill
          placeholder={blurImage ? 'blur' : undefined}
          blurDataURL={blurImage}
          priority
        />
      </S.AboutCardImageContainer>
      <S.AboutCardDescription data-testid={`about-card-description-${title}`}>
        {renderDescription(description, highlightedWords)}
      </S.AboutCardDescription>
    </S.AboutCard>
  )
}

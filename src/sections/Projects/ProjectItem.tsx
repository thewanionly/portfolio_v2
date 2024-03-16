import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'

import { Button, ButtonColor, ButtonVariant } from 'common/components'
import { ProjectItem as ProjectItemType } from 'common/context'

const S = {
  ProjectItem: styled.div`
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  ProjectItemImageContainer: styled.div`
    flex: 1;
    box-shadow: ${({ theme: { colors } }) => colors.projectImageShadow} 0px 1px
      4px;
    width: 100%;
    aspect-ratio: 16 / 9;
    position: relative;
    margin-bottom: 2rem;
    overflow: hidden;

    cursor: pointer;
  `,
  ProjectItemImage: styled(Image)`
    object-fit: cover;
    transition: 0.5s ease all;

    &:hover {
      transform: scale(1.2);
    }
  `,
  ProjectItemDetails: styled.div`
    flex: 1;
    flex-basis: 50%;
    text-align: start;
    margin-bottom: 2rem;
  `,
  ProjectItemTitle: styled.h3`
    color: ${({ theme: { colors } }) => colors.headingDark};
    letter-spacing: 0.15rem;
    margin-bottom: 1rem;
  `,
  ProjectItemTechStackContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
  `,
  ProjectItemTechStackItem: styled.span`
    padding: 0.3rem 0.75rem;
    color: ${({ theme: { colors } }) => colors.tag};
    border: 0.1rem solid ${({ theme: { colors } }) => colors.tag};
    border-radius: 0.5rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.fontSizeXs};
  `,
  ProjectItemButtonContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      justify-content: flex-start;
    }
  `,
  ProjectItemCTAButton: styled(Button)`
    flex: 1;
    flex-basis: 45%;
    max-width: 100%;
    min-width: 25rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletPortrait} {
      min-width: 22rem;
      max-width: 100%;
    }

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      min-width: 20rem;
    }
  `,
}

type ProjectItemProps = {
  className?: string
  viewProjectCTA: string
  viewSourceCodeCTA: string
} & ProjectItemType

export const ProjectItem = ({
  className = '',
  title,
  image,
  blurImage,
  techStack,
  viewProjectLink,
  viewSourceCodeLink,
  viewProjectCTA,
  viewSourceCodeCTA,
}: ProjectItemProps) => (
  <S.ProjectItem className={className}>
    <div>
      <Link href={viewProjectLink}>
        <S.ProjectItemImageContainer>
          <S.ProjectItemImage
            src={image}
            alt={title}
            fill
            placeholder={blurImage ? 'blur' : undefined}
            blurDataURL={blurImage}
          />
        </S.ProjectItemImageContainer>
      </Link>
      <S.ProjectItemDetails>
        <S.ProjectItemTitle>{title}</S.ProjectItemTitle>
        <S.ProjectItemTechStackContainer
          data-testid={`project-techStack-${title}`}
        >
          {techStack
            .filter((v) => v)
            .map((tech) => (
              <S.ProjectItemTechStackItem key={tech}>
                {tech}
              </S.ProjectItemTechStackItem>
            ))}
        </S.ProjectItemTechStackContainer>
      </S.ProjectItemDetails>
    </div>
    <S.ProjectItemButtonContainer>
      <S.ProjectItemCTAButton
        asLink
        href={viewProjectLink}
        color={ButtonColor.SECONDARY}
        openLinkInNewTab
      >
        {viewProjectCTA}
      </S.ProjectItemCTAButton>
      <S.ProjectItemCTAButton
        asLink
        href={viewSourceCodeLink}
        color={ButtonColor.SECONDARY}
        variant={ButtonVariant.OUTLINED}
        openLinkInNewTab
      >
        {viewSourceCodeCTA}
      </S.ProjectItemCTAButton>
    </S.ProjectItemButtonContainer>
  </S.ProjectItem>
)

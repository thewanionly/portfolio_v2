import styled from 'styled-components'
import Image from 'next/image'

import { Button, ButtonColor, ButtonVariant } from 'common/components'
import { ProjectItem as ProjectItemType } from 'common/context'

const S = {
  ProjectItem: styled.div`
    text-align: center;
  `,
  ProjectItemImageContainer: styled.div`
    flex: 1;
    box-shadow: ${({ theme: { colors } }) => colors.projectImageShadow} 0px 1px
      4px;
    width: 100%;
    aspect-ratio: 16 / 9;
    position: relative;
    margin-bottom: 2rem;
  `,
  ProjectItemImage: styled(Image)`
    object-fit: cover;
  `,
  ProjectItemDetails: styled.div`
    flex: 1;
    flex-basis: 50%;
    text-align: start;
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
    margin-bottom: 2rem;
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
    <S.ProjectItemImageContainer>
      <S.ProjectItemImage
        src={image}
        alt={title}
        fill
        placeholder={blurImage ? 'blur' : undefined}
        blurDataURL={blurImage}
      />
    </S.ProjectItemImageContainer>
    <S.ProjectItemDetails>
      <S.ProjectItemTitle>{title}</S.ProjectItemTitle>
      <S.ProjectItemTechStackContainer
        data-testid={`project-techStack-${title}`}
      >
        {techStack.map((tech) => (
          <S.ProjectItemTechStackItem key={tech}>
            {tech}
          </S.ProjectItemTechStackItem>
        ))}
      </S.ProjectItemTechStackContainer>
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
    </S.ProjectItemDetails>
  </S.ProjectItem>
)

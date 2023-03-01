import styled from 'styled-components'
import Image from 'next/image'

import { Button, ButtonColor, ButtonVariant } from 'common/components'
import { ProjectItem as ProjectItemType } from 'common/context'

const S = {
  ProjectItem: styled.div`
    overflow: hidden;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      flex-direction: row;
      align-items: flex-start;
      gap: 6rem;
    }

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.desktop} {
      gap: 8rem;
    }
  `,
  ProjectItemImageContainer: styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;

    width: min(55rem, 80vw);
    aspect-ratio: 16 / 9;
    position: relative;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      flex-basis: 40rem;
    }
  `,
  ProjectItemImage: styled(Image)`
    object-fit: contain;
  `,
  ProjectItemDetails: styled.div`
    flex: 1;
    flex-basis: 50%;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      text-align: start;
    }
  `,
  ProjectItemTitle: styled.h6`
    color: ${({ theme: { colors } }) => colors.headingDark};
    letter-spacing: 0.15rem;
    margin-bottom: 3rem;
  `,

  ProjectItemDescription: styled.p`
    color: ${({ theme: { colors } }) => colors.bodyDark};
    line-height: 2.5rem;
    margin-bottom: 1.75rem;
  `,
  ProjectItemTechStackContainer: styled.div`
    margin-bottom: 4rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 1rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      justify-content: flex-start;
    }
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
    min-width: 29rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletPortrait} {
      min-width: 25rem;
      max-width: 30rem;
    }

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      min-width: 20rem;
    }
  `,
}

type ProjectItemProps = {
  viewProjectCTA: string
  viewSourceCodeCTA: string
} & ProjectItemType

export const ProjectItem = ({
  title,
  image,
  description,
  techStack,
  viewProjectLink,
  viewSourceCodeLink,
  viewProjectCTA,
  viewSourceCodeCTA,
}: ProjectItemProps) => (
  <S.ProjectItem>
    <S.ProjectItemImageContainer>
      <S.ProjectItemImage src={image} alt={title} fill />
    </S.ProjectItemImageContainer>
    <S.ProjectItemDetails>
      <S.ProjectItemTitle>{title}</S.ProjectItemTitle>
      <S.ProjectItemDescription data-testid={`project-description-${title}`}>
        {description}
      </S.ProjectItemDescription>
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

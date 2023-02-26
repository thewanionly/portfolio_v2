import styled from 'styled-components'

import { useContentContext } from 'common/context'
import { container, sectionTitle } from 'common/styles/utilities'

const S = {
  Projects: styled.section`
    padding: 8rem 0;
  `,
  ProjectsContainer: styled.div`
    ${container}

    position: relative;
  `,
  ProjectsTitle: styled.h4`
    ${sectionTitle}

    margin-bottom: 5rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      margin-bottom: 10rem;
    }
  `,
}

export const Projects = () => {
  const {
    content: { projects },
  } = useContentContext()

  const { sectionTitle } = projects

  return (
    <S.Projects id="projects">
      <S.ProjectsContainer>
        <S.ProjectsTitle>{sectionTitle}</S.ProjectsTitle>
      </S.ProjectsContainer>
    </S.Projects>
  )
}

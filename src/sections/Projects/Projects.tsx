import styled from 'styled-components'

import { useContentContext } from 'common/context'
import { container, sectionTitle } from 'common/styles/utilities'

import { ProjectItem } from './ProjectItem'

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
  ProjectsList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 3rem;
  `,
}

export const Projects = () => {
  const {
    content: { projects },
  } = useContentContext()

  const { sectionTitle, projectsList, viewProjectCTA, viewSourceCodeCTA } =
    projects

  return (
    <S.Projects id="projects">
      <S.ProjectsContainer>
        <S.ProjectsTitle>{sectionTitle}</S.ProjectsTitle>
        <S.ProjectsList>
          {projectsList.map((projectItem) => (
            <li key={projectItem.title}>
              <ProjectItem
                {...projectItem}
                viewProjectCTA={viewProjectCTA}
                viewSourceCodeCTA={viewSourceCodeCTA}
              />
            </li>
          ))}
        </S.ProjectsList>
      </S.ProjectsContainer>
    </S.Projects>
  )
}

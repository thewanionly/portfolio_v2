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
  ProjectsList: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletPortrait} {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(max(47%, 36.5rem), 1fr));
      gap: 3rem;
      justify-items: center;
    }
  `,
  ProjectItem: styled(ProjectItem)`
    min-width: 36.5rem;
    max-width: 58.5rem;
  `,
}

export const Projects = () => {
  const {
    projects: { sectionTitle, projectsList, viewProjectCTA, viewSourceCodeCTA },
  } = useContentContext()

  return (
    <S.Projects id="projects">
      <S.ProjectsContainer>
        <S.ProjectsTitle>{sectionTitle}</S.ProjectsTitle>
        <S.ProjectsList>
          {projectsList.map((projectItem) => (
            <S.ProjectItem
              key={projectItem.title}
              {...projectItem}
              viewProjectCTA={viewProjectCTA}
              viewSourceCodeCTA={viewSourceCodeCTA}
            />
          ))}
        </S.ProjectsList>
      </S.ProjectsContainer>
    </S.Projects>
  )
}

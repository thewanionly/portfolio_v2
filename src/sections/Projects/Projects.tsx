import Link from 'next/link'

import styled from 'styled-components'

import { useContentContext } from 'common/context'
import { container, sectionTitle } from 'common/styles/utilities'

import { ProjectItem } from './ProjectItem'

const S = {
  Projects: styled.section`
    padding: 8rem 0;
    background-color: ${({ theme: { colors } }) => colors.bodyLightBg};
  `,
  ProjectsContainer: styled.div`
    ${container}

    position: relative;
  `,
  ProjectsTitle: styled.h2`
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
    align-items: center;
    gap: 7rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletPortrait} {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(max(47%, 36.5rem), 1fr));
      row-gap: 6rem;
      column-gap: 3rem;
      justify-items: center;
    }
  `,
  ProjectsListItem: styled.li`
    height: 100%;
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
        <S.ProjectsTitle>
          <Link href="#projects">{sectionTitle}</Link>
        </S.ProjectsTitle>
        <S.ProjectsList>
          {projectsList.map((projectItem) => (
            <S.ProjectsListItem key={projectItem.title}>
              <S.ProjectItem
                {...projectItem}
                viewProjectCTA={viewProjectCTA}
                viewSourceCodeCTA={viewSourceCodeCTA}
              />
            </S.ProjectsListItem>
          ))}
        </S.ProjectsList>
      </S.ProjectsContainer>
    </S.Projects>
  )
}

import { render, screen } from 'common/tests'
import { mockedContent, projectsListWithOneItem } from 'common/tests/mocks'

import { Projects } from './Projects'

import { Content, ProjectItem } from 'common/context'
import * as commonContext from 'common/context'

/*
 * Mock setup START
 * Setup mock this way so it can be overridden per test
 * Many thanks to this blog: https://mikeborozdin.com/post/changing-jest-mocks-between-tests/
 */
const mockedCommonContext = commonContext as {
  useContentContext: () => Content
}

const defaultMock = mockedContent

jest.mock('common/context', () => ({
  __esModule: true,
  useContentContext: jest.fn(() => defaultMock),
}))

const overrideMock = (projectsListOverride: ProjectItem[]) => {
  mockedCommonContext.useContentContext = () => ({
    ...mockedContent,
    projects: {
      ...mockedContent.projects,
      projectsList: projectsListOverride,
    },
  })
}

const resetToDefaultMock = () => {
  mockedCommonContext.useContentContext = () => defaultMock
}
/* Mock setup END */

const setup = () => {
  render(<Projects />)
}

beforeEach(() => {
  // reset mock back to default
  resetToDefaultMock()
})

describe('Projects', () => {
  describe('Layout', () => {
    it('displays section title', () => {
      setup()

      const projectsSectionTitle = screen.getByRole('heading', {
        name: 'Projects',
      })

      expect(projectsSectionTitle).toBeInTheDocument()
    })

    it('displays a project with title, image, description, tech stack tags, View Project CTA button link, and View Source Code CTA button link', () => {
      // Setup mock projects content with only 1 project
      overrideMock(projectsListWithOneItem)
      setup()

      const { title, image, techStack } = mockedContent.projects.projectsList[0]

      // Check project title
      const projectTitle = screen.getByRole('heading', { name: title })
      expect(projectTitle).toBeInTheDocument()

      // Check project image
      const projectImage = screen.getByAltText(title)
      expect(projectImage).toBeInTheDocument()
      expect(projectImage).toHaveAttribute('src', image)

      // Check project tech stack
      const projectTechStackContainer = screen.getByTestId(
        `project-techStack-${title}`
      )
      techStack.forEach((tech) => {
        expect(projectTechStackContainer).toHaveTextContent(tech)
      })

      // Check view project link button
      const viewProjectLinkButton = screen.getByRole('link', {
        name: new RegExp(mockedContent.projects.viewProjectCTA),
      })
      expect(viewProjectLinkButton).toBeInTheDocument()

      // Check view source code link button
      const viewSourceCodeLinkButton = screen.getByRole('link', {
        name: new RegExp(mockedContent.projects.viewSourceCodeCTA),
      })
      expect(viewSourceCodeLinkButton).toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it(`contains appropriate link in the View Project CTA button link`, () => {
      // Setup mock projects content with only 1 project
      overrideMock(projectsListWithOneItem)
      setup()

      const viewProjectLinkButton = screen.getByRole('link', {
        name: new RegExp(mockedContent.projects.viewProjectCTA),
      })

      expect(viewProjectLinkButton).toHaveAttribute(
        'href',
        mockedContent.projects.projectsList[0].viewProjectLink
      )
    })

    it(`contains appropriate link in the View Source Code CTA button link`, () => {
      // Setup mock projects content with only 1 project
      overrideMock(projectsListWithOneItem)
      setup()

      const viewSourceCodeLinkButton = screen.getByRole('link', {
        name: new RegExp(mockedContent.projects.viewSourceCodeCTA),
      })
      expect(viewSourceCodeLinkButton).toHaveAttribute(
        'href',
        mockedContent.projects.projectsList[0].viewSourceCodeLink
      )
    })
  })
})

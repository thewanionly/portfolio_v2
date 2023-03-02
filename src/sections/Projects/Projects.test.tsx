import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from 'common/tests'
import {
  mockedContent,
  projectsListWithOneItem,
  projectsListWithTwoItems,
} from 'common/tests/mocks'

import { Projects } from './Projects'

import { Content, ProjectItem } from 'common/context'
import * as commonContext from 'common/context'

/*
 * Mock setup START
 * Setup mock this way so it can be overridden per test
 * Many thanks to this blog: https://mikeborozdin.com/post/changing-jest-mocks-between-tests/
 */
const mockedCommonContext = commonContext as {
  useContentContext: () => { content: Content }
}

const defaultMock = {
  content: mockedContent,
}

jest.mock('common/context', () => ({
  __esModule: true,
  useContentContext: jest.fn(() => defaultMock),
}))

const overrideMock = (projectsListOverride: ProjectItem[]) => {
  mockedCommonContext.useContentContext = () => ({
    content: {
      ...mockedContent,
      projects: {
        ...mockedContent.projects,
        projectsList: projectsListOverride,
      },
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

    // TODO: Plan for the future is to make the display a carousel when in mobile
    xit('does not display arrow icons if there is only one project', () => {
      // Setup mock projects content with only 1 project
      overrideMock(projectsListWithOneItem)
      setup()

      expect(
        screen.queryByRole('button', { name: 'view previous project' })
      ).not.toBeInTheDocument()
      expect(
        screen.queryByRole('button', { name: 'view next project' })
      ).not.toBeInTheDocument()
    })

    xit('displays a disabled left arrow icon and enabled right arrow icon if there are more than one project', () => {
      // Setup mock projects content with 2 projects
      overrideMock(projectsListWithTwoItems)
      setup()

      const leftArrowIcon = screen.getByRole('button', {
        name: 'view previous project',
      })
      const rightArrowIcon = screen.getByRole('button', {
        name: 'view next project',
      })

      expect(leftArrowIcon).toBeDisabled()
      expect(rightArrowIcon).toBeEnabled()
    })
  })

  describe('Interactions', () => {
    const goToSecondProject = async () => {
      // Check if first project is shown
      expect(
        screen.getByRole('heading', {
          name: mockedContent.projects.projectsList[0].title,
        })
      ).toBeInTheDocument()

      // Click right arrow icon button
      const rightArrowIconButton = screen.getByRole('button', {
        name: 'view next project',
      })
      userEvent.click(rightArrowIconButton)

      // Check if first project is not displayed
      expect(
        await waitFor(() =>
          screen.queryByRole('heading', {
            name: mockedContent.projects.projectsList[0].title,
          })
        )
      ).not.toBeInTheDocument()

      // Check if second project is displayed
      expect(
        screen.getByRole('heading', {
          name: mockedContent.projects.projectsList[1].title,
        })
      ).toBeInTheDocument()
    }

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

    xit('can go to next project when right arrow icon button is clicked', async () => {
      setup()

      await goToSecondProject()
    })

    xit('can go to previous project when left arrow icon button is clicked', async () => {
      setup()

      await goToSecondProject()

      // Click left arrow icon button
      const leftArrowIconButton = screen.getByRole('button', {
        name: 'view previous project',
      })
      userEvent.click(leftArrowIconButton)

      // Check if second project is not displayed
      expect(
        await waitFor(() =>
          screen.queryByRole('heading', {
            name: mockedContent.projects.projectsList[1].title,
          })
        )
      ).not.toBeInTheDocument()

      // Check if first project is displayed
      expect(
        screen.getByRole('heading', {
          name: mockedContent.projects.projectsList[0].title,
        })
      ).toBeInTheDocument()
    })

    xit('displays an enabled left arrow icon and disabled right arrow icon in the second project if there are only 2 projects', async () => {
      // Setup mock projects content with 2 projects
      overrideMock(projectsListWithTwoItems)
      setup()

      await goToSecondProject()

      const leftArrowIcon = screen.getByRole('button', {
        name: 'view previous project',
      })
      const rightArrowIcon = screen.getByRole('button', {
        name: 'view next project',
      })

      expect(leftArrowIcon).toBeEnabled()
      expect(rightArrowIcon).toBeDisabled()
    })

    xit('displays an enabled left arrow icon and enabled right arrow icon in the second project if there are more than 2 projects', async () => {
      // By default mocked content has 3 projects
      setup()

      await goToSecondProject()

      const leftArrowIcon = screen.getByRole('button', {
        name: 'view previous project',
      })
      const rightArrowIcon = screen.getByRole('button', {
        name: 'view next project',
      })

      expect(leftArrowIcon).toBeEnabled()
      expect(rightArrowIcon).toBeEnabled()
    })

    xit('displays an enabled left arrow icon and disabled right arrow icon in the last project', async () => {
      // By default mocked content has 3 projects
      setup()

      await goToSecondProject()

      const rightArrowIcon = screen.getByRole('button', {
        name: 'view next project',
      })

      userEvent.click(rightArrowIcon)
      userEvent.click(rightArrowIcon)

      const leftArrowIcon = screen.getByRole('button', {
        name: 'view previous project',
      })

      expect(leftArrowIcon).toBeEnabled()
      expect(rightArrowIcon).toBeDisabled()
    })
  })
})

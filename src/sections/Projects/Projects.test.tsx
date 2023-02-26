import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from 'common/tests'
import { mockedContent } from 'common/tests/mocks'

import { Projects } from './Projects'

jest.mock('common/context', () => ({
  useContentContext: () => ({
    content: mockedContent,
  }),
}))

const setup = () => {
  render(<Projects />)
}

describe('Projects', () => {
  describe('Layout', () => {
    xit('displays section title', () => {
      setup()

      const aboutSectionTitle = screen.getByRole('heading', {
        name: mockedContent.projects.sectionTitle,
      })

      expect(aboutSectionTitle).toBeInTheDocument()
    })

    xit('displays first project with title, image, description, tech stack tags, displays View Project CTA button link, and View Source Code CTA button link', () => {
      setup()

      const { title, image, description, techStack } =
        mockedContent.projects.projectsList[0]

      // Check project title
      const projectTitle = screen.getByRole('heading', { name: title })
      expect(projectTitle).toBeInTheDocument()

      // Check project image
      const projectImage = screen.getByAltText(title)
      expect(projectImage).toBeInTheDocument()
      expect(projectImage).toHaveAttribute('src', image)

      // Check project description
      const projectDescription = screen.getByTestId(
        `project-description-${title}`
      )
      expect(projectDescription).toHaveTextContent(description)

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

      // Check if second project is not displayed (checking the title would be enough)
      expect(
        screen.queryByRole('heading', {
          name: mockedContent.projects.projectsList[1].title,
        })
      ).not.toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    xit(`contains appropriate link in the View Project CTA button link`, () => {
      setup()

      const viewProjectLinkButton = screen.getByRole('link', {
        name: new RegExp(mockedContent.projects.viewProjectCTA),
      })

      expect(viewProjectLinkButton).toHaveAttribute(
        'href',
        mockedContent.projects.projectsList[0].viewProjectLink
      )
    })

    xit(`contains appropriate link in the View Source Code CTA button link`, () => {
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
    })

    xit('can go to previous project when left arrow icon button is clicked', async () => {
      setup()

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

      // Check if second project is displayed
      expect(
        await screen.findByRole('heading', {
          name: mockedContent.projects.projectsList[1].title,
        })
      ).toBeInTheDocument()

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
  })
})
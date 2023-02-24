import { render, screen } from 'common/tests'
import { mockedContent } from 'common/tests/mocks'

import { About } from './About'

jest.mock('common/context', () => ({
  useContentContext: () => ({
    content: mockedContent,
  }),
}))

const setup = () => {
  render(<About />)
}

describe('About', () => {
  describe('Layout', () => {
    it('displays section title', () => {
      setup()

      const aboutSectionTitle = screen.getByRole('heading', {
        name: mockedContent.about.sectionTitle,
      })

      expect(aboutSectionTitle).toBeInTheDocument()
    })

    it('displays about cards with card title, image, and description', () => {
      setup()

      mockedContent.about.aboutCard.forEach(({ title, image, description }) => {
        const aboutCardTitle = screen.getByRole('heading', {
          name: title,
        })
        const aboutCardImage = screen.getByAltText(title)
        const aboutCardDescription = screen.getByTestId(
          `about-card-description-${title}`
        )

        expect(aboutCardTitle).toBeInTheDocument()
        expect(aboutCardImage).toBeInTheDocument()
        expect(aboutCardImage).toHaveAttribute('src', image)
        expect(aboutCardDescription).toHaveTextContent(description)
      })
    })

    it('displays Download CV description', () => {
      setup()

      const downloadCVDescription = screen.getByText(
        mockedContent.about.downloadCV.description
      )

      expect(downloadCVDescription).toBeInTheDocument()
    })

    it('displays Download CV CTA button link', () => {
      setup()

      const downloadCVbuttonCTA = screen.getByRole('link', {
        name: mockedContent.about.downloadCV.buttonCTAText,
      })

      expect(downloadCVbuttonCTA).toBeInTheDocument()
    })

    it('contains link to download my CV in Download CV CTA button link', () => {
      setup()

      const downloadCVbuttonCTA = screen.getByRole('link', {
        name: mockedContent.about.downloadCV.buttonCTAText,
      })

      expect(downloadCVbuttonCTA).toHaveAttribute(
        'href',
        mockedContent.about.downloadCV.cvFile
      )
    })
  })
})

import { render, screen } from '../../common/tests'
import { mockedContent } from '../../common/tests/mocks'
import { About } from './About'

jest.mock('../../common/context', () => ({
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
        const aboutCardDescription = screen.getByText(description)

        expect(aboutCardTitle).toBeInTheDocument()
        expect(aboutCardImage).toBeInTheDocument()
        expect(aboutCardImage).toHaveAttribute('src', image)
        expect(aboutCardDescription).toBeInTheDocument()
      })
    })
  })
})

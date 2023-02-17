import { render, screen } from '../../tests'
import { mockedContent } from '../../tests/mocks'
import { Logo } from './Logo'

const { defaultAltText, src } = mockedContent.components.logo

const setup = () => {
  render(<Logo altText={defaultAltText} src={src} />)
}

describe('Logo', () => {
  describe('Layout', () => {
    it(`displays logo image`, () => {
      setup()

      const logo = screen.getByAltText(defaultAltText)

      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('src', src)
    })
  })

  describe('Interaction', () => {
    it(`contains link to "#" in the Logo`, () => {
      setup()

      const logo = screen.getByRole('link', { name: defaultAltText })

      expect(logo).toHaveAttribute('href', '#')
    })
  })
})

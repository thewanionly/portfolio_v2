import { render, screen } from '../../../common/tests'
import Logo from './Logo'

const setup = () => {
  render(<Logo />)
}

describe('Logo', () => {
  describe('Layout', () => {
    it(`displays logo image`, () => {
      setup()

      const logo = screen.getByAltText('Logo')

      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('src', '/images/logo.svg')
    })
  })

  describe('Interaction', () => {
    it(`navigates to "#" when Logo is clicked`, () => {
      setup()

      const logo = screen.getByRole('link', { name: 'Logo' })

      expect(logo).toHaveAttribute('href', '#')
    })
  })
})

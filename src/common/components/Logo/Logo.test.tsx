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
    xit(`goes back the top of the screen when logo is clicked`, () => {
      setup()

      // TODO
    })
  })
})

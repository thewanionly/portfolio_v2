import userEvent from '@testing-library/user-event'
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
    xit(`changes the URL to "#" when Logo is clicked`, () => {
      const redirect = jest.fn()
      setup()

      const logo = screen.getByAltText('Logo')
      userEvent.click(logo)

      expect(redirect).toHaveBeenCalledWith('#')
    })
  })
})

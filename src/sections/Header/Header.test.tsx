import { render, screen } from '../../common/tests'
import Header from './Header'

const setup = () => {
  render(<Header />)
}

describe('Header', () => {
  describe('Layout', () => {
    it(`displays logo image`, () => {
      setup()

      const logo = screen.getByAltText('Header logo')

      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('src', '/images/logo.svg')
    })

    it(`displays a hamburger menu icon when screen size is smaller than 1024px`, () => {
      // TODO: Test responsive screen sizes
      setup()

      const menuUIcon = screen.getByRole('button', { name: 'Nav menu' })

      expect(menuUIcon).toBeInTheDocument()
    })

    xit(`hides the hamburger menu icon when screen size is larger than 1024px`, () => {
      setup()

      // TODO
    })

    xit(`hides the navigation links when screen size is smaller than 1024px`, () => {
      setup()

      // TODO
    })

    xit(`displays the navigation links when screen size is larger than 1024px`, () => {
      setup()

      // TODO
    })
  })

  describe('Interaction', () => {
    xit(`goes back the top of the screen when logo is clicked`, () => {
      setup()

      // TODO
    })

    xit(`opens the nav menu when hamburger menu icon is clicked`, () => {
      setup()

      // TODO
      // displays close icon when nav menu is opened
      // displays the navigation links when nav menu is opened
    })

    xit(`closes the nav menu when close icon is clicked`, () => {
      setup()

      // TODO
    })

    xit(`closes the nav menu when any of the navigation links is clicked`, () => {
      setup()

      // TODO
    })

    xit(`closes the nav menu when logo is clicked`, () => {
      setup()

      // TODO
    })
  })
})

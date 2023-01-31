import { NavLink } from '../../common/components/NavBar'
import { NAVIGATION_LINKS } from '../../common/constants'
import { render, screen } from '../../common/tests'
import Footer from './Footer'

const setup = () => {
  render(<Footer />)
}

const navBarLinks: NavLink[] = Object.values(NAVIGATION_LINKS)

describe('Footer', () => {
  describe('Layout', () => {
    it(`displays logo image`, () => {
      setup()

      const logo = screen.getByAltText('Footer logo')

      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('src', '/images/logo.svg')
    })

    it('displays navigation links', () => {
      setup()

      navBarLinks.forEach(({ label }) => {
        expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
      })
    })

    xit('displays a quotation text', () => {
      setup()
      // TODO
    })

    xit('displays copyright text', () => {
      setup()
      // TODO
    })

    xit('displays GMail icon', () => {
      setup()
      // TODO
    })

    xit('displays LinkedIn icon', () => {
      setup()
      // TODO
    })

    xit('displays GitHub icon', () => {
      setup()
      // TODO
    })
  })

  describe('Interaction', () => {
    xit(`goes back the top of the screen when logo is clicked`, () => {
      setup()

      // TODO
    })

    xit(`opens mail application when GMail icon is clicked`, () => {
      setup()

      // TODO
    })

    xit(`opens LinkedIn website when LinkedIn icon is clicked`, () => {
      setup()

      // TODO
    })

    xit(`opens GitHub website when GitHub icon is clicked`, () => {
      setup()

      // TODO
    })
  })
})

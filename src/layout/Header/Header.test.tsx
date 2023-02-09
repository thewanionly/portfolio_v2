import userEvent from '@testing-library/user-event'

import { NavLink } from '../../common/components/NavBar'
import { NAVIGATION_LINKS } from '../../common/constants'
import { render, screen } from '../../common/tests'
import Header from './Header'
import { HeaderProvider } from './Header.context'

const setup = () => {
  render(
    <HeaderProvider>
      <Header />
    </HeaderProvider>
  )
}

const navBarLinks: NavLink[] = Object.values(NAVIGATION_LINKS)

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

      const menuUIcon = screen.getByRole('button', { name: 'open nav menu' })

      expect(menuUIcon).toBeInTheDocument()
    })

    xit(`hides the hamburger menu icon when screen size is larger than 1024px`, () => {
      setup()

      // TODO: Test responsive screen sizes
    })

    xit(`hides the navigation links when screen size is smaller than 1024px`, () => {
      setup()

      // TODO: Test responsive screen sizes
      // setup(screen.getByRole('navigation', { name: }))
      // expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    })

    xit(`displays the navigation links when screen size is larger than 1024px`, () => {
      // TODO: Test responsive screen sizes
      // navBarLinks.forEach(({ label }) => {
      //   expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
      // })
    })
  })

  describe('Interaction', () => {
    it(`navigates to "#" when Header Logo is clicked`, () => {
      setup()

      const headerLogo = screen.getByRole('link', { name: 'Header logo' })

      expect(headerLogo).toHaveAttribute('href', '#')
    })

    it(`opens the nav menu when hamburger menu icon is clicked`, async () => {
      setup()

      // Check if nav links does not exist
      navBarLinks.forEach(({ label }) => {
        expect(
          screen.queryByRole('link', { name: label })
        ).not.toBeInTheDocument()
      })

      // Click hamburger menu icon
      userEvent.click(screen.getByRole('button', { name: 'open nav menu' }))

      // Check if close menu icon is displayed
      expect(
        await screen.findByRole('button', {
          name: 'close nav menu',
        })
      ).toBeInTheDocument()

      // Check if nav links are displayed
      navBarLinks.forEach(({ label }) => {
        expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
      })
    })

    it(`closes the nav menu when close icon is clicked`, async () => {
      // TODO: Resolve act warnings
      setup()

      // Click hamburger menu icon
      userEvent.click(screen.getByRole('button', { name: 'open nav menu' }))

      // Check if close menu icon is displayed
      const closeMenu = await screen.findByRole('button', {
        name: 'close nav menu',
      })
      expect(closeMenu).toBeInTheDocument()

      // Close the nav menu
      userEvent.click(closeMenu)

      // Check if open nav menu icon is displayed
      expect(
        await screen.findByRole('button', { name: 'open nav menu' })
      ).toBeInTheDocument()
    })

    it(`closes the nav menu when any of the navigation links is clicked`, async () => {
      // TODO: Resolve act warnings
      setup()

      // Click hamburger menu icon
      userEvent.click(screen.getByRole('button', { name: 'open nav menu' }))
      expect(
        await screen.findByRole('button', {
          name: 'close nav menu',
        })
      ).toBeInTheDocument()

      // Click on Home link
      userEvent.click(await screen.findByRole('link', { name: 'Home' }))

      // Checks if open nav menu icon is displayed
      expect(
        screen.queryByRole('button', { name: 'open nav menu' })
      ).not.toBeInTheDocument()
    })

    it(`closes the nav menu when logo is clicked`, async () => {
      // TODO: Resolve act warnings
      setup()

      // Click hamburger menu icon
      userEvent.click(screen.getByRole('button', { name: 'open nav menu' }))
      expect(
        await screen.findByRole('button', {
          name: 'close nav menu',
        })
      ).toBeInTheDocument()

      // Click on Logo
      userEvent.click(await screen.findByRole('link', { name: 'Header logo' }))

      // Checks if open nav menu icon is displayed
      expect(
        screen.queryByRole('button', { name: 'open nav menu' })
      ).not.toBeInTheDocument()
    })
  })
})

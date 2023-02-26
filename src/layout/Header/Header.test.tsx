import userEvent from '@testing-library/user-event'

import { render, screen } from 'common/tests'
import { headerLogo, mockedContent } from 'common/tests/mocks'

import { Header } from './Header'
import { HeaderProvider } from './Header.context'

jest.mock('common/context', () => ({
  useContentContext: () => ({
    content: mockedContent,
  }),
}))

const setup = () => {
  render(
    <HeaderProvider>
      <Header />
    </HeaderProvider>
  )
}

describe('Header', () => {
  describe('Layout', () => {
    it(`displays logo image`, () => {
      setup()

      const logo = screen.getByAltText(headerLogo.alt)

      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('src', mockedContent.components.logo.src)
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
      // mockedContent.components.navLinks.forEach(({ label }) => {
      //   expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
      // })
    })
  })

  describe('Interaction', () => {
    const openNavMenu = async () => {
      // Check if nav links does not exist
      mockedContent.components.navLinks.forEach(({ label }) => {
        expect(
          screen.queryByRole('link', { name: label })
        ).not.toBeInTheDocument()
      })

      // Click hamburger menu icon
      userEvent.click(screen.getByRole('button', { name: 'open nav menu' }))

      // Check if close menu icon is displayed
      const closeMenu = await screen.findByRole('button', {
        name: 'close nav menu',
      })
      expect(closeMenu).toBeInTheDocument()

      // Check if nav links are displayed
      mockedContent.components.navLinks.forEach(({ label }) => {
        expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
      })

      return { closeMenu }
    }

    it(`contains link to "#" in the Header Logo`, () => {
      setup()

      const headerLogoEl = screen.getByRole('link', {
        name: headerLogo.alt,
      })

      expect(headerLogoEl).toHaveAttribute('href', '#')
    })

    it(`opens the nav menu when hamburger menu icon is clicked`, async () => {
      setup()

      await openNavMenu()
    })

    it(`closes the nav menu when close icon is clicked`, async () => {
      setup()

      const { closeMenu } = await openNavMenu()

      // Close the nav menu
      userEvent.click(closeMenu)

      // Check if open nav menu icon is displayed
      expect(
        await screen.findByRole('button', { name: 'open nav menu' })
      ).toBeInTheDocument()
    })

    it(`closes the nav menu when any of the navigation links is clicked`, async () => {
      setup()

      await openNavMenu()

      // Click on the first link
      const firstNavLink = screen.getByRole('link', {
        name: mockedContent.components.navLinks[0].label,
      })
      userEvent.click(firstNavLink)

      // Check if open nav menu icon is displayed
      expect(
        await screen.findByRole('button', { name: 'open nav menu' })
      ).toBeInTheDocument()
    })

    it(`closes the nav menu when logo is clicked`, async () => {
      setup()

      await openNavMenu()

      // Click on Logo
      userEvent.click(screen.getByRole('link', { name: headerLogo.alt }))

      // Check if open nav menu icon is displayed
      expect(
        await screen.findByRole('button', { name: 'open nav menu' })
      ).toBeInTheDocument()
    })
  })
})

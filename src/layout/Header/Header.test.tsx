import userEvent from '@testing-library/user-event'

import { render, screen } from 'common/tests'
import { headerLogo, mockedContent } from 'common/tests/mocks'
import { theme } from 'common/styles'
import * as commonHooks from 'common/hooks'

import { Header } from './Header'
import { HeaderProvider } from './Header.context'

/*
 * Mock of common/hooks setup START
 * Setup mock this way so it can be overridden per test
 * Many thanks to this blog: https://mikeborozdin.com/post/changing-jest-mocks-between-tests/
 */
const mockedCommonHooks = commonHooks as {
  useMediaQuery: (query: string) => boolean
}

const defaultIsTabletLandscapeValue = false

const mockedUseMediaQuery = (
  query: string,
  isTabletLandscape = defaultIsTabletLandscapeValue
) => {
  if (query === theme.breakPoints.tabletLandscape) {
    return isTabletLandscape
  }

  return false
}

jest.mock('common/hooks', () => ({
  __esModule: true,
  useMediaQuery: jest.fn((query: string) => mockedUseMediaQuery(query)),
}))

const overrideIsTabletLandscapeValue = (value: boolean) => {
  mockedCommonHooks.useMediaQuery = (query: string) =>
    mockedUseMediaQuery(query, value)
}

const resetToDefaultIsTabletLandscapeValue = () => {
  mockedCommonHooks.useMediaQuery = (query: string) =>
    mockedUseMediaQuery(query)
}
/** Mock of common/hooks setup END */

jest.mock('common/context', () => ({
  useContentContext: () => mockedContent,
}))

const setup = () => {
  render(
    <HeaderProvider>
      <Header />
    </HeaderProvider>
  )
}

beforeEach(() => {
  resetToDefaultIsTabletLandscapeValue()
})

describe('Header', () => {
  describe('Layout', () => {
    it(`displays logo image`, () => {
      setup()

      const logo = screen.getByAltText(headerLogo.alt)

      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('src', mockedContent.components.logo.src)
    })

    it(`displays a hamburger menu icon when screen size is smaller than 1024px`, () => {
      setup()

      const menuUIcon = screen.getByRole('button', { name: 'open nav menu' })

      expect(menuUIcon).toBeInTheDocument()
    })

    it(`hides the navigation links when screen size is smaller than 1024px`, () => {
      setup()

      mockedContent.components.navLinks.forEach(({ label }) => {
        expect(
          screen.queryByRole('link', { name: label })
        ).not.toBeInTheDocument()
      })
    })

    it(`hides the hamburger menu icon when screen size is larger than 1024px`, () => {
      overrideIsTabletLandscapeValue(true)
      setup()

      const menuUIcon = screen.queryByRole('button', { name: 'open nav menu' })

      expect(menuUIcon).not.toBeInTheDocument()
    })

    it(`displays the navigation links when screen size is larger than 1024px`, () => {
      overrideIsTabletLandscapeValue(true)
      setup()

      mockedContent.components.navLinks.forEach(({ label }) => {
        expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
      })
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

    it(`contains blank link in the Header Logo`, () => {
      setup()

      const headerLogoEl = screen.getByRole('link', {
        name: headerLogo.alt,
      })

      expect(headerLogoEl).toHaveAttribute('href', '')
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

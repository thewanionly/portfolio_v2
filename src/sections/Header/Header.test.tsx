import { render, screen } from '@testing-library/react'
import Header from './Header'

const setup = () => {
  render(<Header />)
}

describe('Header', () => {
  describe('Layout', () => {
    it(`displays logo image`, () => {
      setup()

      // TODO
    })

    it(`displays a hamburger menu icon when screen size is smaller than 1024px`, () => {
      setup()

      // TODO
    })

    it(`hides the hamburger menu icon when screen size is larger than 1024px`, () => {
      setup()

      // TODO
    })

    it(`hides the navigation links when screen size is smaller than 1024px`, () => {
      setup()

      // TODO
    })

    it(`displays the navigation links when screen size is larger than 1024px`, () => {
      setup()

      // TODO
    })
  })

  describe('Interaction', () => {
    it(`goes back the top of the screen when logo is clicked`, () => {
      setup()

      // TODO
    })

    it(`opens the nav menu when hamburger menu icon is clicked`, () => {
      setup()

      // TODO
      // displays close icon when nav menu is opened
      // displays the navigation links when nav menu is opened
    })

    it(`closes the nav menu when close icon is clicked`, () => {
      setup()

      // TODO
    })

    it(`closes the nav menu when any of the navigation links is clicked`, () => {
      setup()

      // TODO
    })

    it(`closes the nav menu when logo is clicked`, () => {
      setup()

      // TODO
    })
  })
})

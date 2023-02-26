import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from 'common/tests'
import { mockedContent } from 'common/tests/mocks'

import { NavBar } from './NavBar'

const setup = (onNavLinkClick?: () => void) => {
  render(
    <NavBar>
      <NavBar.List>
        {mockedContent.components.navLinks.map(({ label, link }) => (
          <NavBar.ListItem
            key={label}
            href={link}
            label={label}
            onClick={onNavLinkClick}
          />
        ))}
      </NavBar.List>
    </NavBar>
  )
}

describe('NavBar', () => {
  describe('Layout', () => {
    it(`displays the navigation links`, () => {
      setup()

      mockedContent.components.navLinks.forEach(({ label }) => {
        expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
      })
    })
  })

  describe('Interaction', () => {
    it('contains appropriate links in each of the navbar links', () => {
      setup()

      mockedContent.components.navLinks.forEach(({ label, link }) => {
        expect(screen.getByRole('link', { name: label })).toHaveAttribute(
          'href',
          link
        )
      })
    })

    it('calls the function passed in the `onClick` prop when a navbar link is clicked', async () => {
      const onClickHandler = jest.fn()
      setup(onClickHandler)

      // Click on the first link
      const firstNavLink = screen.getByRole('link', {
        name: mockedContent.components.navLinks[0].label,
      })
      userEvent.click(firstNavLink)

      await waitFor(() => expect(onClickHandler).toHaveBeenCalled())
    })
  })
})

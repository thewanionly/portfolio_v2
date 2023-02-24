import { render, screen } from 'common/tests'
import { mockedContent } from 'common/tests/mocks'

import { NavBar } from './NavBar'

const setup = () => {
  render(
    <NavBar>
      <NavBar.List>
        {mockedContent.components.navLinks.map(({ label, link }) => (
          <NavBar.ListItem key={label} href={link} label={label} />
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
  })
})

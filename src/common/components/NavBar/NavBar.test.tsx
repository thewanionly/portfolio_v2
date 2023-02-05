import { render, screen } from '../../../common/tests'
import { NAVIGATION_LINKS } from '../../constants'
import { NavBar, NavLink } from './NavBar'

const navBarLinks: NavLink[] = Object.values(NAVIGATION_LINKS)
const setup = () => {
  render(
    <NavBar>
      <NavBar.List>
        {navBarLinks.map(({ href, label }) => (
          <NavBar.ListItem key={label} href={href} label={label} />
        ))}
      </NavBar.List>
    </NavBar>
  )
}

describe('NavBar', () => {
  describe('Layout', () => {
    it(`displays the navigation links`, () => {
      setup()

      navBarLinks.forEach(({ label }) => {
        expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
      })
    })
  })

  describe('Interaction', () => {
    it.each`
      path           | section
      ${'#'}         | ${'Home'}
      ${'#about'}    | ${'About'}
      ${'#skills'}   | ${'Skills'}
      ${'#projects'} | ${'Projects'}
      ${'#contact'}  | ${'Contact'}
    `(
      `navigates to $path when $section nav link is clicked`,
      ({ path, section }) => {
        setup()

        expect(screen.getByRole('link', { name: section })).toHaveAttribute(
          'href',
          path
        )
      }
    )
  })
})

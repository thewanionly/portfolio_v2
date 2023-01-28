import { render, screen } from '../../../common/tests'
import { NAVIGATION_LINKS } from '../../constants'
import NavBar from './NavBar'

const setup = () => {
  render(<NavBar links={Object.values(NAVIGATION_LINKS)} isMenu />)
}

describe('NavBar', () => {
  describe('Layout', () => {
    it(`displays the navigation links`, () => {
      // WIP
      setup()

      Object.values(NAVIGATION_LINKS).forEach(({ label }) => {
        expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
      })
    })
  })

  describe('Interaction', () => {
    xit.each`
      path            | section
      ${'/#'}         | ${'Home'}
      ${'/#about'}    | ${'About'}
      ${'/#skills'}   | ${'Skills'}
      ${'/#projects'} | ${'Projects'}
      ${'/#contact'}  | ${'Contact'}
    `('displays $section when path is $path', ({ path, section }) => {
      // setup(path)
      // TODO
      // expect(screen.getByTestId(section)).toBeInTheDocument()
    })
  })
})

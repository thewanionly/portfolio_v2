import { render, screen } from '@testing-library/react'
import NavBar from './NavBar'

const setup = () => {
  render(<NavBar />)
}

describe('NavBar', () => {
  describe('Layout', () => {
    it.each`
      path            | section
      ${'/#'}         | ${'Home'}
      ${'/#about'}    | ${'About'}
      ${'/#skills'}   | ${'Skills'}
      ${'/#projects'} | ${'Projects'}
      ${'/#contact'}  | ${'Contact'}
    `('displays $section navigation link', ({ path, section }) => {
      // setup(path)
      // TODO
      // expect(screen.getByTestId(section)).toBeInTheDocument()
    })
  })

  describe('Interaction', () => {
    it.each`
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

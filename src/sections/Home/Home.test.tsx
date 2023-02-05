import { render, screen } from '../../common/tests'
import { Home } from './Home'

const setup = () => {
  render(<Home />)
}

describe('Home section', () => {
  describe('Layout', () => {
    it('displays a self-introduction text displayed as header text', () => {
      setup()

      expect(
        screen.getByRole('heading', {
          level: 1,
        })
      ).toBeInTheDocument()
    })

    it('displays more details about me displayed in short sentences', () => {
      setup()

      expect(screen.getByTestId('home-subtitle')).toBeInTheDocument()
    })

    it('displays View My Work CTA button link', () => {
      setup()

      expect(screen.getByRole('link', { name: /view my work/i }))
    })

    it('displays Contact Me CTA button link', () => {
      setup()

      expect(screen.getByRole('link', { name: /contact me/i }))
    })

    it('displays Gmail icon', () => {
      setup()

      expect(
        screen.getByRole('link', { name: 'Gmail icon' })
      ).toBeInTheDocument()
    })

    it('displays LinkedIn icon', () => {
      setup()

      expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    })

    it('displays GitHub icon', () => {
      setup()

      expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it(`contains a link to "#projects" in the View My Work CTA button link`, () => {
      setup()

      expect(
        screen.getByRole('link', { name: /view my work/i })
      ).toHaveAttribute('href', '#projects')
    })

    it(`contains a link to "#contact" in the Contact me CTA button link`, () => {
      setup()

      expect(screen.getByRole('link', { name: /contact me/i })).toHaveAttribute(
        'href',
        '#contact'
      )
    })

    it(`contains a link to "mailto:pelloani@gmail.com" in the Gmail icon`, () => {
      setup()

      expect(screen.getByRole('link', { name: 'Gmail icon' })).toHaveAttribute(
        'href',
        'mailto:pelloani@gmail.com'
      )
    })

    it(`contains a link to "https://www.linkedin.com/in/pitogoelloaniross/" in the LinkedIn icon`, () => {
      setup()

      expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/pitogoelloaniross/'
      )
    })

    it(`contains a link to "https://github.com/thewanionly/" in the GitHub icon`, () => {
      setup()

      expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
        'href',
        'https://github.com/thewanionly/'
      )
    })
  })
})

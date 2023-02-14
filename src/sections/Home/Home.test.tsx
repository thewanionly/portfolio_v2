import { mockedContent, render, screen } from '../../common/tests'
import { Home } from './Home'

jest.mock('../../common/context', () => ({
  useContentContext: () => ({
    content: mockedContent,
  }),
}))

const setup = () => {
  render(<Home />)
}

describe('Home section', () => {
  describe('Layout', () => {
    it('displays a greeting text', () => {
      setup()

      const greetingText = screen.getByText(
        new RegExp(mockedContent.home.greeting)
      )

      expect(greetingText).toBeInTheDocument()
    })

    it('displays my full name as header text', () => {
      setup()

      const fullNameText = screen.getByRole('heading', {
        name: new RegExp(mockedContent.home.fullName),
        level: 1,
      })

      expect(fullNameText).toBeInTheDocument()
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

      expect(screen.getByRole('link', { name: /gmail/i })).toBeInTheDocument()
    })

    it('displays LinkedIn icon', () => {
      setup()

      expect(
        screen.getByRole('link', { name: /linkedin/i })
      ).toBeInTheDocument()
    })

    it('displays GitHub icon', () => {
      setup()

      expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
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

      expect(screen.getByRole('link', { name: /gmail/i })).toHaveAttribute(
        'href',
        'mailto:pelloani@gmail.com'
      )
    })

    it(`contains a link to "https://www.linkedin.com/in/pitogoelloaniross/" in the LinkedIn icon`, () => {
      setup()

      expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/pitogoelloaniross/'
      )
    })

    it(`contains a link to "https://github.com/thewanionly/" in the GitHub icon`, () => {
      setup()

      expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
        'href',
        'https://github.com/thewanionly/'
      )
    })
  })
})

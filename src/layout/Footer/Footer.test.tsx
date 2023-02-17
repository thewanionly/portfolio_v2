import { mockedContent, render, screen } from '../../common/tests'
import Footer from './Footer'

jest.mock('../../common/context', () => ({
  useContentContext: () => ({
    content: mockedContent,
  }),
}))

const setup = () => {
  render(<Footer />)
}

beforeEach(() => {
  setup()
})

describe('Footer', () => {
  describe('Layout', () => {
    it(`displays logo image`, () => {
      const logo = screen.getByAltText('Footer logo')

      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('src', '/images/logo.svg')
    })

    it('displays navigation links', () => {
      mockedContent.components.navLinks.forEach(({ label }) => {
        expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
      })
    })

    it('displays a quotation text', () => {
      expect(screen.getByTestId('footer-quotation')).toBeInTheDocument()
    })

    it('displays copyright text', () => {
      expect(screen.getByTestId('footer-copyright')).toBeInTheDocument()
    })

    it('displays Gmail icon', () => {
      expect(screen.getByRole('link', { name: /gmail/i })).toBeInTheDocument()
    })

    it('displays LinkedIn icon', () => {
      expect(
        screen.getByRole('link', { name: /linkedin/i })
      ).toBeInTheDocument()
    })

    it('displays GitHub icon', () => {
      expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
    })
  })

  describe('Interaction', () => {
    it(`navigates to "#" when Footer Logo is clicked`, () => {
      expect(screen.getByRole('link', { name: 'Footer logo' })).toHaveAttribute(
        'href',
        '#'
      )
    })

    it(`navigates to "mailto:pelloani@gmail.com" when Gmail icon is clicked`, () => {
      expect(screen.getByRole('link', { name: /gmail/i })).toHaveAttribute(
        'href',
        'mailto:pelloani@gmail.com'
      )
    })

    it(`navigates to "https://www.linkedin.com/in/pitogoelloaniross/" when LinkedIn icon is clicked`, () => {
      expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/pitogoelloaniross/'
      )
    })

    it(`navigates to "https://github.com/thewanionly/" when GitHub icon is clicked`, () => {
      expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
        'href',
        'https://github.com/thewanionly/'
      )
    })
  })
})

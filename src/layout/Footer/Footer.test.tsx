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

describe('Footer', () => {
  describe('Layout', () => {
    it(`displays logo image`, () => {
      setup()

      const logo = screen.getByAltText('Footer logo')

      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('src', '/images/logo.svg')
    })

    it('displays navigation links', () => {
      setup()

      mockedContent.components.navLinks.forEach(({ label }) => {
        expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
      })
    })

    it('displays a quotation text', () => {
      setup()

      const quotationText = screen.getByText(mockedContent.footer.footerQuote)

      expect(quotationText).toBeInTheDocument()
    })

    it('displays copyright text', () => {
      setup()

      const copyRightText = screen.getByText(mockedContent.footer.copyrightText)

      expect(copyRightText).toBeInTheDocument()
    })

    it('displays social links', () => {
      setup()

      mockedContent.components.socialLinks.forEach(({ name }) => {
        expect(
          screen.getByRole('link', { name: new RegExp(name) })
        ).toBeInTheDocument()
      })
    })
  })

  describe('Interaction', () => {
    it(`navigates to "#" when Footer Logo is clicked`, () => {
      setup()

      expect(screen.getByRole('link', { name: 'Footer logo' })).toHaveAttribute(
        'href',
        '#'
      )
    })

    it('contains appropriate links in each of the social links', () => {
      setup()

      mockedContent.components.socialLinks.forEach(({ name, link }) => {
        expect(
          screen.getByRole('link', { name: new RegExp(name) })
        ).toHaveAttribute('href', link)
      })
    })
  })
})

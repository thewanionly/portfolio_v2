import { render, screen } from 'common/tests'
import { footerLogo, mockedContent } from 'common/tests/mocks'

import { Footer } from './Footer'

jest.mock('common/context', () => ({
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

      const logo = screen.getByAltText(footerLogo.alt)

      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('src', mockedContent.components.logo.src)
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

    it('displays copyright texts', () => {
      setup()

      const copyRightTextLine1 = screen.getByText(
        new RegExp(mockedContent.footer.copyrightText.line1)
      )
      const copyRightTextLine2 = screen.getByText(
        new RegExp(mockedContent.footer.copyrightText.line2)
      )

      expect(copyRightTextLine1).toBeInTheDocument()
      expect(copyRightTextLine2).toBeInTheDocument()
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
    it(`contains link to "#" in the Footer Logo`, () => {
      setup()

      expect(
        screen.getByRole('link', { name: footerLogo.alt })
      ).toHaveAttribute('href', '#')
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

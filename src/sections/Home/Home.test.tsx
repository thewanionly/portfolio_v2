import { render, screen } from '../../common/tests'
import { mockedContent } from '../../common/tests/mocks'
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

    it('displays my nickname', () => {
      setup()

      const nickNameIntro = screen.getByText(
        new RegExp(mockedContent.home.nicknameText.nicknameIntro)
      )
      const nickNameValue = screen.getByText(
        new RegExp(mockedContent.home.nicknameText.nicknameValue)
      )

      expect(nickNameIntro).toBeInTheDocument()
      expect(nickNameValue).toBeInTheDocument()
    })

    it('displays description text', () => {
      setup()

      const descriptionContainer = screen.getByTestId('description')

      expect(descriptionContainer.textContent).toBe(
        mockedContent.home.description
      )
    })

    it('displays Projects section CTA button link', () => {
      setup()

      expect(
        screen.getByRole('link', {
          name: new RegExp(mockedContent.home.projectsCTA),
        })
      )
    })

    it('displays Contacts section CTA button link', () => {
      setup()

      expect(
        screen.getByRole('link', {
          name: new RegExp(mockedContent.home.contactsCTA),
        })
      )
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

  describe('Interactions', () => {
    it(`contains appropriate link in the Projects section CTA button link`, () => {
      setup()

      expect(
        screen.getByRole('link', {
          name: new RegExp(mockedContent.home.projectsCTA),
        })
      ).toHaveAttribute('href', '#projects')
    })

    it(`contains appropriate link in the Contacts section CTA button link`, () => {
      setup()

      expect(
        screen.getByRole('link', {
          name: new RegExp(mockedContent.home.contactsCTA),
        })
      ).toHaveAttribute('href', '#contact')
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

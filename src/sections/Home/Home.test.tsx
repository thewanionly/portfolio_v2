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
    it(`contains a link to "#projects" in the Projects section CTA button link`, () => {
      setup()

      expect(
        screen.getByRole('link', {
          name: new RegExp(mockedContent.home.projectsCTA),
        })
      ).toHaveAttribute('href', '#projects')
    })

    it(`contains a link to "#contact" in the Projects section CTA button link`, () => {
      setup()

      expect(
        screen.getByRole('link', {
          name: new RegExp(mockedContent.home.contactsCTA),
        })
      ).toHaveAttribute('href', '#contact')
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

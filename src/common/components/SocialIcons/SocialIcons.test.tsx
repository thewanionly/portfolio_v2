import { mockedContent, render, screen } from '../../../common/tests'
import { SocialIcons } from './SocialIcons'

const socialIcons = mockedContent.components.socialLinks

const setup = () => {
  render(<SocialIcons icons={socialIcons} />)
}

describe('SocialIcons', () => {
  describe('Layout', () => {
    it(`displays the social icons`, () => {
      setup()

      socialIcons.forEach(({ name }) => {
        expect(
          screen.getByRole('img', { name: `${name} icon` })
        ).toBeInTheDocument()
      })
    })
  })

  describe('Interaction', () => {
    it(`contains link to their respective URL in the social icons`, () => {
      setup()

      socialIcons.forEach(({ href, name }) => {
        expect(
          screen.getByRole('link', { name: new RegExp(name, 'i') })
        ).toHaveAttribute('href', href)
      })
    })
  })
})

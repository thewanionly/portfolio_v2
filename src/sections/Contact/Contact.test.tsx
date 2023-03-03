import { render, screen } from 'common/tests'
import { mockedContent } from 'common/tests/mocks'

import { Contact } from './Contact'

jest.mock('common/context', () => ({
  useContentContext: () => ({
    content: mockedContent,
  }),
}))

const setup = () => {
  render(<Contact />)
}

describe('Contact', () => {
  describe('Layout', () => {
    it('displays section title', () => {
      setup()

      const contactSectionTitle = screen.getByRole('heading', {
        name: mockedContent.contact.sectionTitle,
      })

      expect(contactSectionTitle).toBeInTheDocument()
    })

    it('displays contact message', () => {
      setup()

      const contactMessage = screen.getByText(mockedContent.contact.message)

      expect(contactMessage).toBeInTheDocument()
    })
  })
})

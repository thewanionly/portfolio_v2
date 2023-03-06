import { render, screen } from 'common/tests'
import { mockedContent } from 'common/tests/mocks'

import { ContactForm } from './ContactForm'

jest.mock('common/context', () => ({
  useContentContext: () => mockedContent,
}))

const setup = () => {
  render(<ContactForm />)
}

describe('ContactForm', () => {
  describe('Layout', () => {
    it('displays Name field', () => {
      // Arrange
      const fieldLabel = 'Name'

      // Act
      setup()
      const fieldElement = screen.getByRole('textbox', { name: fieldLabel })

      // Assert
      expect(fieldElement).toBeInTheDocument()
    })

    it('displays Email field', () => {
      // Arrange
      const fieldLabel = 'Email'

      // Act
      setup()
      const fieldElement = screen.getByRole('textbox', { name: fieldLabel })

      // Assert
      expect(fieldElement).toBeInTheDocument()
    })

    it('displays Subject field', () => {
      // Arrange
      const fieldLabel = 'Subject'

      // Act
      setup()
      const fieldElement = screen.getByRole('textbox', { name: fieldLabel })

      // Assert
      expect(fieldElement).toBeInTheDocument()
    })

    it('displays Message field', () => {
      // Arrange
      const fieldLabel = 'Message'

      // Act
      setup()
      const fieldElement = screen.getByRole('textbox', { name: fieldLabel })

      // Assert
      expect(fieldElement).toBeInTheDocument()
    })

    it('displays Submit button', () => {
      // Arrange
      const buttonLabel = mockedContent.contact.submitBtnLabel

      // Act
      setup()
      const buttonElement = screen.getByRole('button', { name: buttonLabel })

      // Assert
      expect(buttonElement).toBeInTheDocument()
    })
  })
})

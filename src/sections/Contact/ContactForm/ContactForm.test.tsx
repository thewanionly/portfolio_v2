import userEvent from '@testing-library/user-event'

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
      setup()
      const fieldLabel = 'Name'

      // Act
      const fieldElement = screen.getByRole('textbox', {
        name: new RegExp(fieldLabel),
      })

      // Assert
      expect(fieldElement).toBeInTheDocument()
    })

    it('displays Email field', () => {
      // Arrange
      setup()
      const fieldLabel = 'Email'

      // Act
      const fieldElement = screen.getByRole('textbox', {
        name: new RegExp(fieldLabel),
      })

      // Assert
      expect(fieldElement).toBeInTheDocument()
    })

    it('displays Subject field', () => {
      // Arrange
      setup()
      const fieldLabel = 'Subject'

      // Act
      const fieldElement = screen.getByRole('textbox', {
        name: new RegExp(fieldLabel),
      })

      // Assert
      expect(fieldElement).toBeInTheDocument()
    })

    it('displays Message field', () => {
      // Arrange
      setup()
      const fieldLabel = 'Message'

      // Act
      const fieldElement = screen.getByRole('textbox', {
        name: new RegExp(fieldLabel),
      })

      // Assert
      expect(fieldElement).toBeInTheDocument()
    })

    it('displays Submit button', () => {
      // Arrange
      setup()
      const buttonLabel = mockedContent.contact.submitBtnLabel

      // Act
      const buttonElement = screen.getByRole('button', { name: buttonLabel })

      // Assert
      expect(buttonElement).toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it('displays a required error message in Name field when it was touched and then blurred leaving it with an empty value', async () => {
      // Arrange
      setup()
      const fieldLabel = 'Name'

      // Act
      const fieldElement = screen.getByRole('textbox', {
        name: new RegExp(fieldLabel),
      })
      userEvent.click(fieldElement)
      userEvent.click(document.body)

      // Assert
      expect(
        await screen.findByText('Name field is required')
      ).toBeInTheDocument()
    })
  })
})

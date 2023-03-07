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

    it('displays a required error message in Email field when it was touched and then blurred leaving it with an empty value', async () => {
      // Arrange
      setup()
      const fieldLabel = 'Email'

      // Act
      const fieldElement = screen.getByRole('textbox', {
        name: new RegExp(fieldLabel),
      })
      userEvent.click(fieldElement)
      userEvent.click(document.body)

      // Assert
      expect(
        await screen.findByText('Email field is required')
      ).toBeInTheDocument()
    })

    it('displays a required error message in Subject field when it was touched and then blurred leaving it with an empty value', async () => {
      // Arrange
      setup()
      const fieldLabel = 'Subject'

      // Act
      const fieldElement = screen.getByRole('textbox', {
        name: new RegExp(fieldLabel),
      })
      userEvent.click(fieldElement)
      userEvent.click(document.body)

      // Assert
      expect(
        await screen.findByText('Subject field is required')
      ).toBeInTheDocument()
    })

    it('displays a required error message in Message field when it was touched and then blurred leaving it with an empty value', async () => {
      // Arrange
      setup()
      const fieldLabel = 'Message'

      // Act
      const fieldElement = screen.getByRole('textbox', {
        name: new RegExp(fieldLabel),
      })
      userEvent.click(fieldElement)
      userEvent.click(document.body)

      // Assert
      expect(
        await screen.findByText('Message field is required')
      ).toBeInTheDocument()
    })

    it('displays a required error message in all fields after clicking Submit button with an empty field values', async () => {
      // Arrange
      setup()
      const buttonLabel = mockedContent.contact.submitBtnLabel

      // Act
      const buttonElement = screen.getByRole('button', { name: buttonLabel })
      userEvent.click(buttonElement)

      // Assert
      expect(
        await screen.findByText('Name field is required')
      ).toBeInTheDocument()
      expect(screen.getByText('Email field is required')).toBeInTheDocument()
      expect(screen.getByText('Subject field is required')).toBeInTheDocument()
      expect(screen.getByText('Message field is required')).toBeInTheDocument()
    })
  })
})

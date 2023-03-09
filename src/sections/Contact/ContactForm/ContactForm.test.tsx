import userEvent from '@testing-library/user-event'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from 'common/tests'
import { mockedContent } from 'common/tests/mocks'

import { ContactForm } from './ContactForm'
import { ContactFormValues } from './ContactForm.types'
import { FORMSPREE_API } from './submitForm'

jest.mock('common/context', () => ({
  useContentContext: () => mockedContent,
}))

// Setup mock server and handlers for the form API
let requestBody: ContactFormValues

const formSubmitSuccess = rest.post(FORMSPREE_API, async (req, res, ctx) => {
  requestBody = await req.json<ContactFormValues>()

  return res(ctx.status(200), ctx.json({ ok: true }))
})

const formSubmitFail = rest.post(FORMSPREE_API, async (req, res, ctx) =>
  res(ctx.status(422), ctx.json({ error: 'Validation errors' }))
)

const server = setupServer(formSubmitSuccess)

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})

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
    describe('Form input change', () => {
      it.each`
        field
        ${'Name'}
        ${'Email'}
        ${'Subject'}
        ${'Message'}
      `('displays inputted value in $field field', async ({ field }) => {
        // Arrange
        setup()
        const value = 'test'

        // Act
        const fieldElement = screen.getByRole('textbox', {
          name: new RegExp(field),
        })
        await userEvent.type(fieldElement, value)

        // Assert
        expect(fieldElement).toHaveValue(value)
      })
    })

    describe('Form validation', () => {
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

      it('displays an invalid format error message in Email field when it was touched and then blurred leaving it with a value with invalid format', async () => {
        // Arrange
        setup()
        const fieldLabel = 'Email'
        const invalidFormatValue = 't@g.c'

        // Act
        const fieldElement = screen.getByRole('textbox', {
          name: new RegExp(fieldLabel),
        })
        await userEvent.type(fieldElement, invalidFormatValue)
        userEvent.click(document.body)

        // Assert
        expect(
          await screen.findByText('Email field has invalid format')
        ).toBeInTheDocument()
      })

      it('hides the invalid format error message in Email field after changing from invalid format to valid format', async () => {
        // Arrange
        setup()
        const fieldLabel = 'Email'
        const invalidFormatValue = 't@g.c'
        const validFormatValue = 't@g.co'

        // Act
        const fieldElement = screen.getByRole('textbox', {
          name: new RegExp(fieldLabel),
        })
        await userEvent.type(fieldElement, invalidFormatValue)
        userEvent.click(document.body)
        expect(
          await screen.findByText('Email field has invalid format')
        ).toBeInTheDocument()

        await userEvent.clear(fieldElement)
        await userEvent.type(fieldElement, validFormatValue)

        // Assert
        expect(
          await waitFor(() =>
            screen.queryByText('Email field has invalid format')
          )
        ).not.toBeInTheDocument()
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
        expect(
          screen.getByText('Subject field is required')
        ).toBeInTheDocument()
        expect(
          screen.getByText('Message field is required')
        ).toBeInTheDocument()
      })
    })

    describe('Form submission - clicking Submit button with valid field values', () => {
      const submitForm = async (): Promise<ContactFormValues> => {
        const fieldValues: ContactFormValues = {
          name: 'n',
          email: 'e@m.co',
          subject: 's',
          message: 'm',
        }
        const buttonLabel = mockedContent.contact.submitBtnLabel
        const nameElement = screen.getByRole('textbox', {
          name: new RegExp('Name'),
        })
        const emailElement = screen.getByRole('textbox', {
          name: new RegExp('Email'),
        })
        const subjectElement = screen.getByRole('textbox', {
          name: new RegExp('Subject'),
        })
        const messageElement = screen.getByRole('textbox', {
          name: new RegExp('Message'),
        })

        await userEvent.type(nameElement, fieldValues.name)
        await userEvent.type(emailElement, fieldValues.email)
        await userEvent.type(subjectElement, fieldValues.subject)
        await userEvent.type(messageElement, fieldValues.message)

        const buttonElement = screen.getByRole('button', { name: buttonLabel })
        userEvent.click(buttonElement)

        return fieldValues
      }

      it('displays a loading spinner after form submission', async () => {
        // Arrange
        setup()
        expect(
          screen.queryByRole('status', { name: 'submitting form' })
        ).not.toBeInTheDocument()

        // Act
        submitForm()

        // Assert
        const spinner = await screen.findByRole('status', {
          name: 'submitting form',
        })
        expect(spinner).toBeInTheDocument()
        await waitForElementToBeRemoved(spinner)
      })

      it('disables submit button after form submission', async () => {
        // Arrange
        setup()
        const buttonLabel = mockedContent.contact.submitBtnLabel

        // Act
        submitForm()

        await screen.findByRole('status', {
          name: 'submitting form',
        })

        // Assert
        const buttonElement = screen.getByRole('button', {
          name: buttonLabel,
        })
        expect(buttonElement).toBeDisabled()
      })

      it('sends form data to the form API after form submission', async () => {
        // Arrange
        setup()

        // Act
        const formValues = await submitForm()

        const spinner = await screen.findByRole('status', {
          name: 'submitting form',
        })
        await waitForElementToBeRemoved(spinner)

        // Assert
        expect(requestBody).toEqual(formValues)
      })

      it('displays success message after successful form submission', async () => {
        // Arrange
        setup()

        // Act
        submitForm()

        const spinner = await screen.findByRole('status', {
          name: 'submitting form',
        })
        await waitForElementToBeRemoved(spinner)

        // Assert
        expect(
          await screen.findByText(mockedContent.contact.successMessage)
        ).toBeInTheDocument()
      })

      it('clears the field values after successful form submission', async () => {
        // Arrange
        setup()

        // Act
        submitForm()

        const spinner = await screen.findByRole('status', {
          name: 'submitting form',
        })
        await waitForElementToBeRemoved(spinner)

        // Assert
        expect(
          screen.getByRole('textbox', {
            name: new RegExp('Name'),
          })
        ).toHaveValue('')
        expect(
          screen.getByRole('textbox', {
            name: new RegExp('Email'),
          })
        ).toHaveValue('')
        expect(
          screen.getByRole('textbox', {
            name: new RegExp('Subject'),
          })
        ).toHaveValue('')
        expect(
          screen.getByRole('textbox', {
            name: new RegExp('Message'),
          })
        ).toHaveValue('')
      })

      it('displays error message after failed form submission', async () => {
        // Arrange
        server.use(formSubmitFail)
        setup()

        // Act
        submitForm()

        const spinner = await screen.findByRole('status', {
          name: 'submitting form',
        })
        await waitForElementToBeRemoved(spinner)

        // Assert
        expect(
          await screen.findByText(mockedContent.contact.failMessage)
        ).toBeInTheDocument()
      })
    })
  })
})

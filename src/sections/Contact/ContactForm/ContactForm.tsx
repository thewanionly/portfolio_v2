import type { ReactElement } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import toast from 'react-hot-toast'

import { useContentContext } from 'common/context'
import { Button } from 'common/components'

import { Spinner } from './Spinner'
import { Toaster } from './Toaster'
import { submitForm } from './submitForm'
import { ContactFormValues } from './ContactForm.types'

const S = {
  ContactFormContainer: styled.div`
    color: ${({ theme: { colors } }) => colors.bodyLight};
  `,
  ContactForm: styled(Form)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
  `,
  ContactFormFieldContainer: styled.div`
    flex: 1;
    flex-basis: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletPortrait} {
      &.name,
      &.email {
        flex-basis: 48%;
      }
    }
  `,
  ContactFormFieldLabel: styled.label<HasError>`
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.fontWeightBold};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.fontSizeSm};
    text-align: start;
    color: ${({ theme: { colors }, $hasError }) =>
      !$hasError ? colors.bodyLight : colors.error};
  `,
  ContactFormField: styled(Field)<HasError>`
    outline: none;
    border-radius: 0.5rem;
    background-color: ${({ theme: { colors } }) => colors.formInputBg};
    border: 1px solid
      ${({ theme: { colors }, $hasError }) =>
        !$hasError ? colors.formInputBg : colors.error};
    padding: 1.8rem 2.3rem;
    resize: none;

    &:focus,
    &:active {
      border-color: ${({ theme: { colors }, $hasError }) =>
        !$hasError ? colors.primary : colors.error};
      outline: ${({ theme: { colors }, $hasError }) =>
          !$hasError ? colors.primary : colors.error}
        solid 2px;
      outline-offset: 1px;
    }
  `,
  ContactFormFieldErrorMessage: styled(ErrorMessage)`
    color: ${({ theme: { colors } }) => colors.error};
    text-align: start;
  `,
  ContactFormSubmitButtonContainer: styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `,
  ContactFormSubmitButton: styled(Button)<ButtonWithLoading>`
    min-width: 29rem;
    opacity: ${({ $isLoading }) => (!$isLoading ? 1 : 0.5)};
    cursor: ${({ $isLoading }) => (!$isLoading ? 'cursor' : 'wait')};
  `,
  ContactFormSubmitSpinner: styled(Spinner)`
    position: absolute;
    z-index: 1;
  `,
}

type ButtonWithLoading = {
  $isLoading?: boolean
}

type HasError = {
  $hasError: boolean
}

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

type ContactFormProps = {
  className?: string
}

const EMAIL_ADDRESS_VALIDATION_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i

const handleValidate = (values: ContactFormValues) => {
  const errors: ContactFormValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  // Required field validation
  if (!values.name) {
    errors.name = 'Name field is required'
  }

  if (!values.email) {
    errors.email = 'Email field is required'
  } else if (!EMAIL_ADDRESS_VALIDATION_REGEX.test(values.email)) {
    // Email RegEx validation
    errors.email = 'Email field has invalid format'
  }

  if (!values.subject) {
    errors.subject = 'Subject field is required'
  }

  if (!values.message) {
    errors.message = 'Message field is required'
  }

  return Object.values(errors).filter((e) => e).length > 0 ? errors : {}
}

export const ContactForm = ({ className }: ContactFormProps): ReactElement => {
  const {
    contact: { submitBtnLabel, successMessage, failMessage },
  } = useContentContext()

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    try {
      const { data: responseData } = await submitForm(values)

      if (responseData.ok) {
        // Success
        toast.success(successMessage)

        // Reset form
        resetForm()
      }
    } catch (error) {
      // Don't log error in Jest environment
      if (!process.env.JEST_WORKER_ID) console.error(failMessage, error)

      // Fail
      toast.error(failMessage)
    }
  }

  useEffect(() => {
    return () => {
      // Ensure to remove toaster when component unmounts.
      // This is primarily added for the test cases - to ensure toaster is unmounted before the next test starts.
      toast.remove()
    }
  }, [])

  return (
    <S.ContactFormContainer className={className}>
      <Toaster />
      <Formik
        initialValues={initialValues}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <S.ContactForm aria-label="Contact form">
            <S.ContactFormFieldContainer className="name">
              <S.ContactFormFieldLabel
                htmlFor="name"
                $hasError={!!(errors.name && touched.name)}
              >
                Name *
              </S.ContactFormFieldLabel>
              <S.ContactFormField
                id="name"
                name="name"
                placeholder="Enter your name..."
                $hasError={!!(errors.name && touched.name)}
                aria-required
              />
              <S.ContactFormFieldErrorMessage name="name" component="p" />
            </S.ContactFormFieldContainer>
            <S.ContactFormFieldContainer className="email">
              <S.ContactFormFieldLabel
                htmlFor="email"
                $hasError={!!(errors.email && touched.email)}
              >
                Email *
              </S.ContactFormFieldLabel>
              <S.ContactFormField
                id="email"
                name="email"
                type="email"
                placeholder="Enter your e-mail address..."
                $hasError={!!(errors.email && touched.email)}
                aria-required
              />
              <S.ContactFormFieldErrorMessage name="email" component="p" />
            </S.ContactFormFieldContainer>
            <S.ContactFormFieldContainer>
              <S.ContactFormFieldLabel
                htmlFor="subject"
                $hasError={!!(errors.subject && touched.subject)}
              >
                Subject *
              </S.ContactFormFieldLabel>
              <S.ContactFormField
                id="subject"
                name="subject"
                placeholder="Enter the message subject..."
                $hasError={!!(errors.subject && touched.subject)}
                aria-required
              />
              <S.ContactFormFieldErrorMessage name="subject" component="p" />
            </S.ContactFormFieldContainer>
            <S.ContactFormFieldContainer>
              <S.ContactFormFieldLabel
                htmlFor="message"
                $hasError={!!(errors.message && touched.message)}
              >
                Message *
              </S.ContactFormFieldLabel>
              <S.ContactFormField
                id="message"
                name="message"
                component="textarea"
                rows="15"
                placeholder="Enter your message..."
                $hasError={!!(errors.message && touched.message)}
                aria-required
              />
              <S.ContactFormFieldErrorMessage name="message" component="p" />
            </S.ContactFormFieldContainer>
            <S.ContactFormSubmitButtonContainer>
              {isSubmitting && (
                <S.ContactFormSubmitSpinner label="submitting form" />
              )}
              <S.ContactFormSubmitButton
                type="submit"
                disabled={isSubmitting}
                $isLoading={isSubmitting}
              >
                {submitBtnLabel}
              </S.ContactFormSubmitButton>
            </S.ContactFormSubmitButtonContainer>
          </S.ContactForm>
        )}
      </Formik>
    </S.ContactFormContainer>
  )
}

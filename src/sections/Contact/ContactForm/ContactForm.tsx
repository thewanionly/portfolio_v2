import { ReactElement } from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from 'formik'

import { useContentContext } from 'common/context'
import { Button } from 'common/components'

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
  ContactFormSubmitButton: styled(Button)`
    margin-top: 2rem;
    min-width: 29rem;
  `,
}

type HasError = {
  $hasError: boolean
}

interface ContactFormValues {
  name: string
  email: string
  subject: string
  message: string
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

export const ContactForm = ({ className }: ContactFormProps): ReactElement => {
  const {
    contact: { submitBtnLabel },
  } = useContentContext()

  const handleValidate = (values: ContactFormValues) => {
    const errors: ContactFormValues = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }

    if (!values.name) {
      errors.name = 'Name field is required'
    }

    return Object.values(errors).filter((e) => e).length > 0 ? errors : {}
  }

  const handleSubmit = (
    values: ContactFormValues,
    { setSubmitting }: FormikHelpers<ContactFormValues>
  ) => {
    console.log(values)
    setSubmitting(false)
  }

  return (
    <S.ContactFormContainer className={className}>
      <Formik
        initialValues={initialValues}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <S.ContactForm aria-label="Contact form">
            <S.ContactFormFieldContainer className="name">
              <S.ContactFormFieldLabel htmlFor="name" $hasError={!!errors.name}>
                Name *
              </S.ContactFormFieldLabel>
              <S.ContactFormField
                id="name"
                name="name"
                placeholder="Enter your name..."
                $hasError={!!errors.name}
              />
              <S.ContactFormFieldErrorMessage name="name" component="p" />
            </S.ContactFormFieldContainer>
            <S.ContactFormFieldContainer className="email">
              <S.ContactFormFieldLabel
                htmlFor="email"
                $hasError={!!errors.email}
              >
                Email *
              </S.ContactFormFieldLabel>
              <S.ContactFormField
                id="email"
                name="email"
                type="email"
                placeholder="Enter your e-mail address..."
              />
            </S.ContactFormFieldContainer>
            <S.ContactFormFieldContainer>
              <S.ContactFormFieldLabel
                htmlFor="subject"
                $hasError={!!errors.subject}
              >
                Subject *
              </S.ContactFormFieldLabel>
              <S.ContactFormField
                id="subject"
                name="subject"
                placeholder="Enter the message subject..."
              />
            </S.ContactFormFieldContainer>
            <S.ContactFormFieldContainer>
              <S.ContactFormFieldLabel
                htmlFor="message"
                $hasError={!!errors.message}
              >
                Message *
              </S.ContactFormFieldLabel>
              <S.ContactFormField
                id="message"
                name="message"
                component="textarea"
                rows="15"
                placeholder="Enter your message..."
              />
            </S.ContactFormFieldContainer>
            <S.ContactFormSubmitButton type="submit">
              {submitBtnLabel}
            </S.ContactFormSubmitButton>
          </S.ContactForm>
        )}
      </Formik>
    </S.ContactFormContainer>
  )
}

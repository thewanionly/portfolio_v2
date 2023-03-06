import { ReactElement } from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, FormikHelpers } from 'formik'

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
  ContactFormFieldLabel: styled.label`
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.fontWeightBold};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.fontSizeSm};
    text-align: start;
  `,
  ContactFormField: styled(Field)`
    outline: none;
    border: none;
    border-radius: 0.5rem;
    background-color: ${({ theme: { colors } }) => colors.formInputBg};
    padding: 1.8rem 2.3rem;
    resize: none;

    &:focus,
    &:active {
      border-color: ${({ theme: { colors } }) => colors.primary};
      outline: ${({ theme: { colors } }) => colors.primary} solid 2px;
      outline-offset: 1px;
    }
  `,
  ContactFormSubmitButton: styled(Button)`
    margin-top: 2rem;
    min-width: 29rem;
  `,
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

  const handleSubmit = (
    values: ContactFormValues,
    { setSubmitting }: FormikHelpers<ContactFormValues>
  ) => {
    console.log(values)
    setSubmitting(false)
  }

  return (
    <S.ContactFormContainer className={className}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <S.ContactForm aria-label="Contact form">
          <S.ContactFormFieldContainer className="name">
            <S.ContactFormFieldLabel htmlFor="name">
              Name *
            </S.ContactFormFieldLabel>
            <S.ContactFormField
              id="name"
              name="name"
              placeholder="Enter your name..."
            />
          </S.ContactFormFieldContainer>
          <S.ContactFormFieldContainer className="email">
            <S.ContactFormFieldLabel htmlFor="email">
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
            <S.ContactFormFieldLabel htmlFor="subject">
              Subject *
            </S.ContactFormFieldLabel>
            <S.ContactFormField
              id="subject"
              name="subject"
              placeholder="Enter the message subject..."
            />
          </S.ContactFormFieldContainer>
          <S.ContactFormFieldContainer>
            <S.ContactFormFieldLabel htmlFor="message">
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
      </Formik>
    </S.ContactFormContainer>
  )
}

import { ReactElement } from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, FormikHelpers } from 'formik'

import { useContentContext } from 'common/context'

const S = {
  ContactForm: styled.div`
    color: ${({ theme: { colors } }) => colors.bodyLighter};
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

export const ContactForm = (): ReactElement => {
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
    <S.ContactForm>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <Field id="subject" name="subject" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <Field id="message" name="message" as="textarea" />
          </div>
          <button type="submit">{submitBtnLabel}</button>
        </Form>
      </Formik>
    </S.ContactForm>
  )
}

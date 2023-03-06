import styled from 'styled-components'

import { useContentContext } from 'common/context'
import { container, sectionTitle } from 'common/styles/utilities'
import { ContactForm } from './ContactForm'

const S = {
  Contact: styled.section`
    padding: 8rem 0;
    background-color: ${({ theme: { colors } }) => colors.secondary};
    text-align: center;
  `,
  ContactContainer: styled.div`
    ${container}

    max-width: 75rem;
  `,
  ContactTitle: styled.h4`
    ${sectionTitle}

    color:  ${({ theme: { colors } }) => colors.headingLight};
    margin-bottom: 5rem;
  `,
  ContactMessage: styled.p`
    max-width: 60rem;
    margin: auto;
    margin-bottom: 6rem;
    color: ${({ theme: { colors } }) => colors.bodyLighter};
  `,
  ContactForm: styled(ContactForm)`
    margin-top: 2.5rem;
  `,
}

export const Contact = () => {
  const {
    contact: { sectionTitle, message },
  } = useContentContext()

  return (
    <S.Contact id="contact">
      <S.ContactContainer>
        <S.ContactTitle>{sectionTitle}</S.ContactTitle>
        <S.ContactMessage>{message}</S.ContactMessage>
        <S.ContactForm />
      </S.ContactContainer>
    </S.Contact>
  )
}

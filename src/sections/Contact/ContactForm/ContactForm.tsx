import { ChangeEvent, ReactElement, useState } from 'react'

import { useContentContext } from 'common/context'

export const ContactForm = (): ReactElement => {
  const {
    contact: { submitBtnLabel },
  } = useContentContext()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={email}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          value={subject}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSubject(event.target.value)
          }
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(event.target.value)
          }
        />
      </div>
      <button type="submit">{submitBtnLabel}</button>
    </form>
  )
}

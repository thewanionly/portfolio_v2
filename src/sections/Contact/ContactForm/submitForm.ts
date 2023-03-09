import axios from 'axios'

import { ContactFormValues } from './ContactForm.types'

export const FORMSPREE_API = 'https://formspree.io/f/xpzbvlvq'

export const submitForm = (formValues: ContactFormValues) =>
  axios.post(FORMSPREE_API, formValues)

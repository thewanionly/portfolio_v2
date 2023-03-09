import axios from 'axios'

import { ContactFormValues, FormSpreeResponse } from './ContactForm.types'

export const FORMSPREE_API = 'https://formspree.io/f/xpzbvlvq'

export const submitForm = (formValues: ContactFormValues) =>
  axios.post<FormSpreeResponse>(FORMSPREE_API, formValues)

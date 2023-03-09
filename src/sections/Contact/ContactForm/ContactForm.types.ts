export interface ContactFormValues {
  name: string
  email: string
  subject: string
  message: string
}

interface FormSpreeResponseError {
  code: string
  field: string
  message: string
}

export interface FormSpreeResponse {
  next: string
  ok: boolean
  error?: string
  errors?: FormSpreeResponseError[]
}

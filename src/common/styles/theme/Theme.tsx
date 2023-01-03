import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

type ThemeProps = {
  children: React.ReactNode
}

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
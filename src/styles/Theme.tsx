import React from 'react'
import { ThemeProvider } from 'styled-components'
import { COLORS, TYPOGRAPHY, BREAKPOINTS } from './'

const theme = {
  colors: {
    primary: COLORS.blue,
  },
  fonts: {
    fontFamily: TYPOGRAPHY.manrope,
  },
  fontSizes: {
    fontSizeXs: TYPOGRAPHY.fontSizeXs,
    fontSizeSm: TYPOGRAPHY.fontSizeSm,
    fontSizeReg: TYPOGRAPHY.fontSizeReg,
  },
  fontWeights: {
    fontWeightReg: TYPOGRAPHY.fontWeightReg,
  },
  breakPoints: {
    tabletPortrait: BREAKPOINTS.bpTabletPortrait,
  },
}

type ThemeProps = {
  children: React.ReactNode
}

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme

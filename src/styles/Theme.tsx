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
    fontSizeMed1: TYPOGRAPHY.fontSizeMed1,
    fontSizeMed2: TYPOGRAPHY.fontSizeMed2,
    fontSizeLg: TYPOGRAPHY.fontSizeLg,
    fontSizeXl: TYPOGRAPHY.fontSizeXl,
    fontSizeXxl: TYPOGRAPHY.fontSizeXxl,
    fontSizeXxxl: TYPOGRAPHY.fontSizeXxxl,
  },
  fontWeights: {
    fontWeightReg: TYPOGRAPHY.fontWeightReg,
    fontWeightMedium: TYPOGRAPHY.fontWeightMedium,
    fontWeightBold: TYPOGRAPHY.fontWeightBold,
  },
  breakPoints: {
    tabletPortrait: BREAKPOINTS.bpTabletPortrait,
    tabletLandscape: BREAKPOINTS.bpTabletLandscape,
    desktop: BREAKPOINTS.bpDesktop,
  },
}

type ThemeProps = {
  children: React.ReactNode
}

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme

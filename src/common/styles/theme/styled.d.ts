import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryLight: string
      primaryLighter: string
      primaryLightest: string

      secondary: string
      secondaryLighter: string
      secondaryLightest: string
      navMenuBg: string

      formInputBorder: string
      toastBg: string

      aboutCardBg: string
      contactSectionBg: string

      bodyLightBg: string
      headerDividerBg: string
      navToggle: string
      navLink: string
      headingLight: string
      navBtn: string
      icon: string
      formInputBg: string
      toast: string
      btn: string
      btnDisabled: string
      navBtnLight: string
      bodyLight: string
      bodyLighter: string

      bodyDarkBg: string
      headingDark: string
      tag: string
      navBtnBg: string
      bodyDark: string
      toastBoxShadow: string
      projectImageShadow: string

      error: string
    }
    fonts: {
      fontFamily: string
    }
    fontSizes: {
      fontSizeXs: string
      fontSizeSm: string
      fontSizeReg: string
      fontSizeMed1: string
      fontSizeMed2: string
      fontSizeLg: string
      fontSizeXl: string
      fontSizeXxl: string
      fontSizeXxxl: string
    }
    fontWeights: {
      fontWeightReg: number
      fontWeightMedium: number
      fontWeightBold: number
    }
    breakPoints: {
      tabletPortrait: string
      tabletLandscape: string
      desktop: string
    }
  }
}

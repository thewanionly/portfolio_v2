import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
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

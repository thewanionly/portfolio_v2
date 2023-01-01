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
    }
    fontWeights: {
      fontWeightReg: number
    }
    breakPoints: {
      tabletPortrait: string
    }
  }
}

import { rgba } from 'polished'
import { BREAKPOINTS, COLORS, TYPOGRAPHY } from 'common/styles/variables'

export const theme = {
  colors: {
    primary: COLORS.blue,
    primaryLight: COLORS.blueLight,
    primaryLighter: rgba(COLORS.blueLight, 0.6),
    primaryLightest: rgba(COLORS.blueLight, 0.1),

    secondary: COLORS.dark,
    secondaryLighter: rgba(COLORS.dark, 0.8),
    secondaryLightest: rgba(COLORS.dark, 0.1),
    navMenuBg: rgba(COLORS.dark, 0.95),

    formInputBorder: COLORS.grey,
    toastBg: COLORS.grey,

    aboutCardBg: COLORS.greyLight,
    contactSectionBg: COLORS.greyLight,

    bodyLightBg: COLORS.white,
    headerDividerBg: rgba(COLORS.white, 0.1),
    navToggle: COLORS.white,
    navLink: rgba(COLORS.white, 0.5),
    headingLight: COLORS.white,
    navBtn: COLORS.white,
    icon: COLORS.white,
    formInputBg: COLORS.white,
    toast: COLORS.white,
    btn: COLORS.white,
    btnDisabled: rgba(COLORS.white, 0.8),
    navBtnLight: rgba(COLORS.white, 0.6),
    bodyLight: rgba(COLORS.white, 0.75),
    bodyLighter: rgba(COLORS.white, 0.5),

    bodyDarkBg: COLORS.black,
    headingDark: COLORS.black,
    tag: rgba(COLORS.black, 0.6),
    navBtnBg: rgba(COLORS.black, 0.6),
    bodyDark: rgba(COLORS.black, 0.5),
    toastBoxShadow: rgba(COLORS.black, 0.2),
    projectImageShadow: rgba(COLORS.black, 0.16),

    error: COLORS.red,
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
    tabletPortrait: BREAKPOINTS.tabletPortrait,
    tabletLandscape: BREAKPOINTS.tabletLandscape,
    desktop: BREAKPOINTS.desktop,
  },
}

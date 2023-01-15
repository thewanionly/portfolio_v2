const screenSizes = {
  sm: '48em', // 768px / 16 (rem can't be used in media queries)
  reg: '64em', // 1024px / 16 (rem can't be used in media queries)
  lg: '90em', // 1440px / 16 (rem can't be used in media queries)
}

export const BREAKPOINTS = {
  tabletPortrait: `(min-width: ${screenSizes.sm})`,
  tabletLandscape: `(min-width: ${screenSizes.reg})`,
  desktop: `(min-width: ${screenSizes.lg})`,
} as const

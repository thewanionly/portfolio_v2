const BREAKPOINTS = {
  bpTabletPortrait: '48em', // 768 / 16 (rem can't be used in media queries)
  bpTabletLandscape: '64em', // 1024 / 16 (rem can't be used in media queries)
  bpDesktop: '90em', // 1440 / 16 (rem can't be used in media queries)
} as const

export default BREAKPOINTS

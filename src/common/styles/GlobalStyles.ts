import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth !important;
    font-size: 50%; //1rem = 8px 8px/16px = 50%

    @media only screen and ${({ theme: { breakPoints } }) =>
      breakPoints.tabletPortrait} {
      font-size: 53.125%; //1rem = 8.5px 8.5px/16px = 53.125%
    }

    @media only screen and ${({ theme: { breakPoints } }) =>
      breakPoints.tabletLandscape} {
      font-size: 56.25%; //1rem = 9px 9px/16px = 56.25%
    }

    @media only screen and ${({ theme: { breakPoints } }) =>
      breakPoints.desktop} {
      font-size: 62.5%; //1rem = 10px 10px/16px = 62.5%
    }

    & * {
      font-family: ${({ theme: { fonts } }) => fonts.fontFamily};
      font-size:  ${({ theme: { fontSizes } }) => fontSizes.fontSizeReg};
      font-weight: ${({ theme: { fontWeights } }) => fontWeights.fontWeightReg};
    }
  }

  body {
    background-color: ${({ theme: { colors } }) => colors.secondary};

    /* Custom scrollbar width */
    &::-webkit-scrollbar {
      width: 1rem;
    }

    /* Custom scrollbar Track */
    &::-webkit-scrollbar-track {
      background-color: ${({ theme: { colors } }) => colors.secondary};
    }

    /* Custom scrollbar Handle */
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme: { colors } }) => colors.primary};
      border-radius: 1rem;

        /* Custom scrollbar Handle on hover */
      &:hover {
        background-color: ${({ theme: { colors } }) => colors.primaryLight};
      }
    }

    @media only screen and ${({ theme: { breakPoints } }) =>
      breakPoints.tabletLandscape} {
     overflow-y: unset !important;
    }
  }

  section {
    scroll-margin-top: 8rem;
    display: flex;
    align-items: center;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-transform: uppercase;
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.fontWeightBold};
  }

  h1 {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.fontSizeXxxl};
    line-height: 5.8rem;
  }

  h2 {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.fontSizeLg};
    line-height: 3.8rem;
  }

  h3 {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.fontSizeMed1};
    line-height: 2.4rem;
  }

  p {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.fontSizeReg};
    font-weight: ${({ theme: { fontWeights } }) =>
      fontWeights.fontWeightMedium};
  }

  strong {
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.fontWeightBold};
  }

  button {
    cursor: pointer;
    border: none;
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.fontSizeSm};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.fontWeightBold};
    letter-spacing: 0.2rem;
    color: unset;
  }
`

import { css } from 'styled-components'

export const container = css`
  width: 85%;
  max-width: 120rem;
  margin: 0 auto;

  @media only screen and ${({ theme: { breakPoints } }) =>
      breakPoints.tabletPortrait} {
    width: 80%;
  }

  @media only screen and ${({ theme: { breakPoints } }) =>
      breakPoints.desktop} {
    width: 75%;
  }
`

export const highlightText = css`
  color: ${({ theme: { colors } }) => colors.primary};
`

export const sectionTitle = css`
  text-align: center;
  letter-spacing: 0.15rem;

  a {
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    color: inherit;
  }
`

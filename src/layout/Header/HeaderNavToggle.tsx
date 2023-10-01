import styled, { css } from 'styled-components'

import { useHeaderContext } from './Header.context'

const StyledHeaderNavToggleIcon = styled.span<HeaderNavToggleProps>`
  position: relative;

  &,
  &::before,
  &::after {
    display: block;
    background-color: ${({ theme: { colors } }) => colors.navToggle};
    content: '';
    height: 0.2rem;
    width: 2.4rem;
    position: absolute;
    transition: all 0.2s ease-out;
  }

  &::before {
    transform: none;
    top: -0.5rem;
  }

  &::after {
    transform: none;
    top: 0.5rem;
  }

  /* Close icon styling */
  ${({ showCloseIcon }) =>
    showCloseIcon &&
    css`
      & {
        background-color: transparent;
      }

      &::before {
        transform: rotate(-45deg);
        top: 0;
      }

      &::after {
        transform: rotate(45deg);
        top: 0;
      }
    `}
`

const StyledHeaderNavToggle = styled.button<HeaderNavToggleProps>`
  position: absolute;
  background: transparent;
  color: ${({ theme: { colors } }) => colors.navToggle};
  width: 2.4rem;
  padding: 1rem 0;
  overflow: hidden;

  &:focus,
  &:hover {
    ${StyledHeaderNavToggleIcon} {
      & {
        background-color: ${({ theme: { colors }, showCloseIcon }) =>
          showCloseIcon ? 'transparent' : colors.primary};
      }

      &::before,
      &::after {
        background-color: ${({ theme: { colors } }) => colors.primary};
      }
    }
  }

  @media only screen and ${({ theme: { breakPoints } }) =>
      breakPoints.tabletLandscape} {
    display: none;
  }
`

type HeaderNavToggleProps = {
  showCloseIcon: boolean
}

export const HeaderNavToggle = () => {
  const { isNavMenuOpen, toggleNavMenu } = useHeaderContext()

  return (
    <StyledHeaderNavToggle
      aria-label={isNavMenuOpen ? 'close nav menu' : 'open nav menu'}
      showCloseIcon={isNavMenuOpen}
      onClick={toggleNavMenu}
    >
      <StyledHeaderNavToggleIcon showCloseIcon={isNavMenuOpen} />
    </StyledHeaderNavToggle>
  )
}

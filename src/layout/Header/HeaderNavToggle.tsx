import { useState } from 'react'
import styled, { css } from 'styled-components'

const StyledHeaderNavToggleIcon = styled.span<WithCloseIcon>`
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

const StyledHeaderNavToggle = styled.button<WithCloseIcon>`
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
`

type WithCloseIcon = {
  showCloseIcon: boolean
}

export const HeaderNavToggle = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen((prev) => !prev)

  return (
    <StyledHeaderNavToggle
      title="Nav menu"
      showCloseIcon={open}
      onClick={toggleOpen}
    >
      <StyledHeaderNavToggleIcon showCloseIcon={open} />
    </StyledHeaderNavToggle>
  )
}

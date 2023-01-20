import styled from 'styled-components'

const StyledHeaderNavToggleIcon = styled.span`
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
    top: -0.5rem;
  }

  &::after {
    top: 0.5rem;
  }
`

const StyledHeaderNavToggle = styled.button`
  position: absolute;
  background: transparent;
  color: ${({ theme: { colors } }) => colors.navToggle};
  width: 2.4rem;
  padding: 1rem 0;
  overflow: hidden;

  &:focus,
  &:hover {
    ${StyledHeaderNavToggleIcon} {
      &,
      &::before,
      &::after {
        background-color: ${({ theme: { colors } }) => colors.primary};
      }
    }
  }
`

export const HeaderNavToggle = () => {
  return (
    <StyledHeaderNavToggle title="Nav menu">
      <StyledHeaderNavToggleIcon />
    </StyledHeaderNavToggle>
  )
}

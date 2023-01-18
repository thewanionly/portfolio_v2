import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import { container } from '../../common/styles/utilities'

const S = {
  Header: styled.header`
    position: fixed;
    z-index: 1;
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.secondary};
    height: 8.1rem;
    display: flex;
    align-items: center;
  `,
  HeaderContainer: styled.div`
    ${container}

    display: flex;
    align-items: center;
  `,
  HeaderLogoLink: styled(Link)`
    margin: 0 auto;
  `,
  HeaderLogoContainer: styled.div`
    user-select: none;
    cursor: pointer;

    height: 2.4rem;
    width: 11.44rem;
    position: relative;
  `,
  HeaderLogo: styled(Image)``,
}

const HeaderNavToggleIcon = styled.span`
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

const HeaderNavToggle = styled.button`
  position: absolute;
  background: transparent;
  color: ${({ theme: { colors } }) => colors.navToggle};
  width: 2.4rem;
  padding: 1rem 0;
  overflow: hidden;

  &:focus,
  &:hover {
    ${HeaderNavToggleIcon} {
      &,
      &::before,
      &::after {
        background-color: ${({ theme: { colors } }) => colors.primary};
      }
    }
  }
`

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <HeaderNavToggle title="Nav menu">
          <HeaderNavToggleIcon />
        </HeaderNavToggle>
        <S.HeaderLogoLink href="#">
          <S.HeaderLogoContainer>
            <S.HeaderLogo src="/images/logo.svg" alt="Header logo" fill />
          </S.HeaderLogoContainer>
        </S.HeaderLogoLink>
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header

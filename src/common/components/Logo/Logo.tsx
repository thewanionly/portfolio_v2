import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const S = {
  LogoContainer: styled.div`
    user-select: none;
    cursor: pointer;

    height: 2.4rem;
    width: 11.44rem;
    position: relative;
  `,
}

type LogoProps = {
  altText?: string
  className?: string
}

export const Logo = ({ altText = 'Logo', className = '' }: LogoProps) => (
  <Link className={className} href="#">
    <S.LogoContainer>
      <Image src="/images/logo.svg" alt={altText} fill />
    </S.LogoContainer>
  </Link>
)

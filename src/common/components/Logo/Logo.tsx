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
  src: string
  altText?: string
  className?: string
}

export const Logo = ({ src, altText = 'Logo', className = '' }: LogoProps) => (
  <Link className={className} href="#">
    <S.LogoContainer>
      <Image src={src} alt={altText} fill />
    </S.LogoContainer>
  </Link>
)

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
  blurSrc?: string
  altText?: string
  className?: string
  onClick?: () => void
}

export const Logo = ({
  src,
  blurSrc,
  altText = 'Logo',
  className = '',
  onClick,
}: LogoProps) => (
  <Link className={className} href="" onClick={onClick}>
    <S.LogoContainer>
      <Image
        src={src}
        alt={altText}
        fill
        placeholder={blurSrc ? 'blur' : undefined}
        blurDataURL={blurSrc}
        priority
      />
    </S.LogoContainer>
  </Link>
)

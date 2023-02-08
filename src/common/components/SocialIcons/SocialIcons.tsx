import Link from 'next/link'
import styled from 'styled-components'
import { Icon, IconName } from '../Icon'

const S = {
  SocialIconsGroup: styled.ul`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    color: ${({ theme: { colors } }) => colors.icon};
  `,
  SocialIconLink: styled(Link)`
    transition: all 0.2s;

    &:hover {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  `,
  SocialIcon: styled(Icon)`
    width: 2.4rem;
    height: 2.4rem;
  `,
}

export interface SocialIconLinks {
  href: string
  name: IconName
  target?: string
  title?: string
}

type SocialIconsProps = {
  className?: string
  icons: SocialIconLinks[]
}

export const SocialIcons = ({ className = '', icons }: SocialIconsProps) => (
  <S.SocialIconsGroup className={className}>
    {Object.values(icons)?.map(({ href, name, target = '_blank', title }) => (
      <li key={name}>
        <S.SocialIconLink href={href} target={target} title={title}>
          <S.SocialIcon name={name} />
        </S.SocialIconLink>
      </li>
    ))}
  </S.SocialIconsGroup>
)

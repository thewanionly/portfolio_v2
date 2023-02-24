import Link from 'next/link'
import styled from 'styled-components'

import { SocialLink } from 'common/context'
import { Icon } from 'common/components/Icon'

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

type SocialIconsProps = {
  className?: string
  icons: SocialLink[]
}

export const SocialIcons = ({ className = '', icons }: SocialIconsProps) => (
  <S.SocialIconsGroup className={className}>
    {Object.values(icons)?.map(({ link, name, target = '_blank', title }) => (
      <li key={name}>
        <S.SocialIconLink href={link} target={target} title={title}>
          <S.SocialIcon name={name} />
        </S.SocialIconLink>
      </li>
    ))}
  </S.SocialIconsGroup>
)

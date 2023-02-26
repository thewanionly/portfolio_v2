import Link from 'next/link'
import styled from 'styled-components'

const S = {
  NavBar: styled.nav`
    user-select: none;
  `,
  NavBarList: styled.ul``,
  NavBarLink: styled(Link)`
    color: ${({ theme: { colors } }) => colors.navLink};
    transition: all 0.2s;

    &:hover {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  `,
}

type NavBarProps = {
  className?: string
  children: React.ReactNode
}

type NavBarListProps = {
  className?: string
  children: React.ReactNode
}

type NavBarListItemProps = {
  className?: string
  href: string
  label: string
  onClick?: () => void
}

export const NavBar = ({ className, children }: NavBarProps) => (
  <S.NavBar className={className}>{children}</S.NavBar>
)

const NavBarList = ({ className, children }: NavBarListProps) => (
  <S.NavBarList className={className}>{children}</S.NavBarList>
)

const NavBarListItem = ({
  className,
  href,
  label,
  onClick,
}: NavBarListItemProps) => (
  <li>
    <S.NavBarLink className={className} href={href} onClick={onClick}>
      {label}
    </S.NavBarLink>
  </li>
)

NavBar.List = NavBarList
NavBar.ListItem = NavBarListItem

import Link from 'next/link'
import styled, { css, DefaultTheme } from 'styled-components'

// Generates button styles depending on the `color` and `variant` props
const colorVariantStyles = (
  theme: DefaultTheme,
  color: ButtonColor = ButtonColor.PRIMARY,
  variant: ButtonVariant = ButtonVariant.CONTAINED
) =>
  ({
    [ButtonColor.PRIMARY]: {
      [ButtonVariant.CONTAINED]: css`
        background-color: ${theme.colors.primary};
      `,
      [ButtonVariant.OUTLINED]: css`
        border: 0.1rem solid ${theme.colors.primary};
      `,
    },
    [ButtonColor.SECONDARY]: {
      [ButtonVariant.CONTAINED]: css`
        background-color: ${theme.colors.secondary};
      `,
      [ButtonVariant.OUTLINED]: css`
        border: 0.1rem solid ${theme.colors.secondary};
      `,
    },
  }[color][variant])

const S = {
  Button: styled.button<ButtonProps>`
    ${({ theme, color, variant }) => colorVariantStyles(theme, color, variant)}
  `,
  Link: styled(Link)``, // work around because passing Link directly in "as" will throw some TypeScript warnings
}

export enum ButtonColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum ButtonVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
}

type ButtonProps = {
  label?: string
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  color?: ButtonColor
  variant?: ButtonVariant
  asLink?: boolean
  linkHref?: string
}

export const Button = ({
  label,
  children,
  onClick,
  color = ButtonColor.PRIMARY,
  variant = ButtonVariant.CONTAINED,
  asLink = false,
  linkHref = '',
}: ButtonProps) => {
  const buttonProps = {
    color,
    variant,
    ...(!asLink ? { onClick } : { as: S.Link, href: linkHref }),
  }

  return <S.Button {...buttonProps}>{label || children}</S.Button>
}

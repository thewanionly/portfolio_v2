import Link from 'next/link'
import styled, { css, DefaultTheme } from 'styled-components'

// Generates button styles depending on the `color` and `variant` props
const colorVariantStyles = (
  theme: DefaultTheme,
  color: ButtonColor = ButtonColor.PRIMARY,
  variant: ButtonVariant = ButtonVariant.CONTAINED,
  disabled = false
) =>
  ({
    [ButtonColor.PRIMARY]: {
      [ButtonVariant.CONTAINED]: css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.btn};

        &:hover {
          background-color: ${theme.colors.primaryLight};
        }

        ${disabled &&
        css`
          background-color: ${theme.colors.primaryLight};
          color: ${theme.colors.btnDisabled};
          opacity: 0.7;
          cursor: not-allowed;

          &:hover {
            background-color: ${theme.colors.primaryLight};
          }
        `}
      `,
      [ButtonVariant.OUTLINED]: css`
        background-color: transparent;
        border: 0.1rem solid ${theme.colors.primary};
        color: ${theme.colors.primary};

        &:hover {
          background-color: ${theme.colors.primaryLightest};
        }

        ${disabled &&
        css`
          background-color: ${theme.colors.primaryLighter};
          color: ${theme.colors.btnDisabled};
          border-color: ${theme.colors.primaryLighter};
          opacity: 0.7;
          cursor: not-allowed;

          &:hover {
            background-color: ${theme.colors.primaryLighter};
          }
        `}
      `,
    },
    [ButtonColor.SECONDARY]: {
      [ButtonVariant.CONTAINED]: css`
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.btn};

        &:hover {
          background-color: ${theme.colors.secondaryLighter};
        }
      `,
      [ButtonVariant.OUTLINED]: css`
        background-color: transparent;
        border: 0.1rem solid ${theme.colors.secondary};
        color: ${theme.colors.secondary};

        &:hover {
          background-color: ${theme.colors.secondaryLightest};
        }
      `,
    },
  }[color][variant])

const S = {
  Button: styled.button<ButtonProps>`
    display: block;
    padding: 1.5rem 2.5rem;
    max-width: max-content;

    text-transform: uppercase;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.fontSizeSm};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.fontWeightBold};
    letter-spacing: 0.1rem;
    line-height: 1.8rem;
    text-align: center;

    transition: all 0.2s;

    ${({ theme, color, variant, disabled }) =>
      colorVariantStyles(theme, color, variant, disabled)}
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
  asLink?: boolean
  children?: React.ReactNode
  className?: string
  color?: ButtonColor
  download?: string
  disabled?: boolean
  href?: string
  label?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  openLinkInNewTab?: boolean
  variant?: ButtonVariant
}

export const Button = ({
  asLink = false,
  children,
  className = '',
  color = ButtonColor.PRIMARY,
  download,
  disabled = false,
  href = '',
  label,
  onClick,
  openLinkInNewTab = false,
  variant = ButtonVariant.CONTAINED,
}: ButtonProps) => {
  const buttonProps = {
    className,
    color,
    variant,
    disabled,
    ...(!asLink
      ? { onClick }
      : {
          as: S.Link,
          href: !disabled ? href : '',
          role: 'link',
          target: openLinkInNewTab ? '_blank' : '',
          ['aria-disabled']: disabled,
          download,
        }),
  }

  return <S.Button {...buttonProps}>{label || children}</S.Button>
}

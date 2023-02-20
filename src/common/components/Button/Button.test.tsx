import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '../../../common/tests'
import { theme } from '../../styles'
import { Button, ButtonColor, ButtonVariant } from './Button'

describe('Button', () => {
  describe('As button element', () => {
    it('renders a button element by default', () => {
      render(<Button />)

      const button = screen.getByRole('button')

      expect(button).toBeInTheDocument()
    })

    it('displays the text passed in the `label` prop', () => {
      const buttonLabel = 'Click me'
      render(<Button label={buttonLabel} />)

      const button = screen.getByRole('button')

      expect(button).toHaveAccessibleName(buttonLabel)
    })

    it('displays the children passed to the button', () => {
      const buttonLabel = 'Click me'
      render(
        <Button>
          <span>{buttonLabel}</span>
        </Button>
      )

      const button = screen.getByRole('button')

      expect(button).toHaveAccessibleName(buttonLabel)
    })

    it.each`
      color                    | bgColor
      ${ButtonColor.PRIMARY}   | ${theme.colors.primary}
      ${ButtonColor.SECONDARY} | ${theme.colors.secondary}
    `(
      'sets background-color to $bgColor when `color` prop is $color',
      ({ color, bgColor }) => {
        render(<Button color={color} />)

        const button = screen.getByRole('button')

        expect(button).toHaveStyle(`background-color: ${bgColor}`)
      }
    )

    it.each`
      variant                    | propertyToColor
      ${ButtonVariant.CONTAINED} | ${'background-color'}
      ${ButtonVariant.OUTLINED}  | ${'border-color'}
    `(
      `sets $propertyToColor to ${theme.colors.primary} when \`variant\` prop is $variant`,
      ({ variant, propertyToColor }) => {
        render(<Button variant={variant} />)

        const button = screen.getByRole('button')

        expect(button).toHaveStyle(
          `${propertyToColor}: ${theme.colors.primary}`
        )
      }
    )

    it('calls the function passed in the `onClick` prop', async () => {
      const buttonLabel = 'Click me'
      const onClickHandler = jest.fn()
      render(<Button label={buttonLabel} onClick={onClickHandler} />)

      const button = screen.getByRole('button', { name: buttonLabel })
      userEvent.click(button)

      await waitFor(() => expect(onClickHandler).toHaveBeenCalled())
    })

    it('disables the button when `disabled` prop is set to true', () => {
      render(<Button label="Disabled button" disabled />)

      const button = screen.getByRole('button')

      expect(button).toBeDisabled()
    })
  })

  describe('As link element', () => {
    it('renders an anchor element when `asLink` prop is true', () => {
      render(<Button asLink />)

      const link = screen.getByRole('link')

      expect(link).toBeInTheDocument()
    })

    it('displays the text passed in the `label` prop', () => {
      const buttonLabel = 'Click me'
      render(<Button asLink label={buttonLabel} />)

      const link = screen.getByRole('link')

      expect(link).toHaveAccessibleName(buttonLabel)
    })

    it('displays the children passed to the button', () => {
      const buttonLabel = 'Click me'
      render(
        <Button asLink>
          <span>{buttonLabel}</span>
        </Button>
      )

      const link = screen.getByRole('link')

      expect(link).toHaveAccessibleName(buttonLabel)
    })

    it.each`
      color                    | bgColor
      ${ButtonColor.PRIMARY}   | ${theme.colors.primary}
      ${ButtonColor.SECONDARY} | ${theme.colors.secondary}
    `(
      'sets background-color to $bgColor when `color` prop is $color',
      ({ color, bgColor }) => {
        render(<Button asLink color={color} />)

        const link = screen.getByRole('link')

        expect(link).toHaveStyle(`background-color: ${bgColor}`)
      }
    )

    it.each`
      variant                    | propertyToColor
      ${ButtonVariant.CONTAINED} | ${'background-color'}
      ${ButtonVariant.OUTLINED}  | ${'border-color'}
    `(
      `sets $propertyToColor to ${theme.colors.primary} when \`variant\` prop is $variant`,
      ({ variant, propertyToColor }) => {
        render(<Button asLink variant={variant} />)

        const link = screen.getByRole('link')

        expect(link).toHaveStyle(`${propertyToColor}: ${theme.colors.primary}`)
      }
    )

    it('contains a link equivalent to the `href` prop', () => {
      const buttonLabel = 'Click me'
      const href = '#sample'
      render(<Button asLink label={buttonLabel} href={href} />)

      const link = screen.getByRole('link', { name: buttonLabel })

      expect(link).toHaveAttribute('href', href)
    })

    it('contains a string equivalent to the `download` prop', () => {
      const buttonLabel = 'Click me'
      const href = '/downloads/Sample File name.pdf'
      const download = 'Sample File name'
      render(
        <Button asLink label={buttonLabel} href={href} download={download} />
      )

      const link = screen.getByRole('link', { name: buttonLabel })

      expect(link).toHaveAttribute('download', download)
    })

    it('disables the link when `disabled` prop is set to true', () => {
      render(<Button asLink href="#test" label="Disabled button" disabled />)

      const link = screen.getByRole('link')

      expect(link).not.toHaveAttribute('href', '#test')
    })
  })
})

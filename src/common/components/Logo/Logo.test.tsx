import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from 'common/tests'
import { mockedContent } from 'common/tests/mocks'

import { Logo } from './Logo'

const { defaultAltText, src } = mockedContent.components.logo

const setup = () => {
  render(<Logo altText={defaultAltText} src={src} />)
}

describe('Logo', () => {
  describe('Layout', () => {
    it(`displays logo image`, () => {
      setup()

      const logo = screen.getByAltText(defaultAltText)

      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('src', src)
    })
  })

  describe('Interaction', () => {
    it(`contains link to "#" in the Logo`, () => {
      setup()

      const logo = screen.getByRole('link', { name: defaultAltText })

      expect(logo).toHaveAttribute('href', '#')
    })
  })

  it('calls the function passed in the `onClick` prop when button is clicked', async () => {
    const onClickHandler = jest.fn()
    render(<Logo altText={defaultAltText} src={src} onClick={onClickHandler} />)

    const logo = screen.getByRole('link', { name: defaultAltText })
    userEvent.click(logo)

    await waitFor(() => expect(onClickHandler).toHaveBeenCalled())
  })
})

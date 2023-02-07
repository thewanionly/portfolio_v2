import { render, screen } from '../../../common/tests'
import { Icon } from './Icon'

describe('Icon', () => {
  describe('Layout', () => {
    it('displays the icon as indicated in the `name` prop', () => {
      const iconName = 'gmail'
      render(<Icon name={iconName} />)

      const icon = screen.getByRole('img', { name: `${iconName} icon` })

      expect(icon).toBeInTheDocument()
    })
  })
})

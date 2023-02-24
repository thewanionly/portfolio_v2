import { render, screen } from 'common/tests'

import { Icon, IconName } from './Icon'

describe('Icon', () => {
  describe('Layout', () => {
    it('displays the icon as indicated in the `name` prop', () => {
      const iconName = IconName.GMAIL
      render(<Icon name={iconName} />)

      const icon = screen.getByRole('img', { name: `${iconName} icon` })

      expect(icon).toBeInTheDocument()
    })
  })
})

import { render, screen } from '../../common/tests'
import { Home } from './Home'

const setup = () => {
  render(<Home />)
}

beforeEach(() => {
  setup()
})

describe('Home section', () => {
  describe('Layout', () => {
    it('has header title', () => {
      expect(
        screen.getByRole('heading', {
          name: 'Elloani Ross Pitogo',
          level: 1,
        })
      ).toBeInTheDocument()
    })
  })
})

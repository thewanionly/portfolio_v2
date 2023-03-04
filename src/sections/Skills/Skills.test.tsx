import { render, screen } from 'common/tests'
import { mockedContent } from 'common/tests/mocks'

import { Skills } from './Skills'

jest.mock('common/context', () => ({
  useContentContext: () => mockedContent,
}))

const setup = () => {
  render(<Skills />)
}

describe('Skills', () => {
  describe('Layout', () => {
    it('displays section title', () => {
      setup()

      const skillsSectionTitle = screen.getByRole('heading', {
        name: mockedContent.skills.sectionTitle,
      })

      expect(skillsSectionTitle).toBeInTheDocument()
    })

    it('displays skills group with description and list of skills', () => {
      setup()

      mockedContent.skills.skillsGroup.forEach(
        ({ description, skillsList }) => {
          const skillsGroupDescription = screen.getByText(description)

          expect(skillsGroupDescription).toBeInTheDocument()

          skillsList.forEach(({ label, icon }) => {
            const skillItemLabel = screen.getByText(label)
            const skillItemIcon = screen.getByAltText(label)

            expect(skillItemLabel).toBeInTheDocument()
            expect(skillItemIcon).toBeInTheDocument()
            expect(skillItemIcon).toHaveAttribute('src', icon)
          })
        }
      )
    })
  })
})

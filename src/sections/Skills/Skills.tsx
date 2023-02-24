import styled from 'styled-components'

import { useContentContext } from 'common/context'
import { container, sectionTitle } from 'common/styles/utilities'

import { SkillsGroup } from './SkillsGroup'

const S = {
  Skills: styled.section`
    padding: 8rem 0 13rem;
    background-color: ${({ theme: { colors } }) => colors.secondary};
    text-align: center;
  `,
  SkillsContainer: styled.div`
    ${container}
  `,
  SkillsTitle: styled.h4`
    ${sectionTitle}

    color:  ${({ theme: { colors } }) => colors.headingLight};
    margin-bottom: 8rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletLandscape} {
      margin-bottom: 10rem;
    }
  `,
  SkillsContent: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12rem;
  `,
  SkillsGroup: styled(SkillsGroup)`
    flex: 1;
    min-width: 34rem;
    max-width: 50rem;

    @media only screen and ${({ theme: { breakPoints } }) =>
        breakPoints.tabletPortrait} {
      flex-basis: 30%;
      min-width: 28rem;
      max-width: 50%;
    }
  `,
}

export const Skills = () => {
  const {
    content: { skills },
  } = useContentContext()

  const { sectionTitle, skillsGroup } = skills

  return (
    <S.Skills id="skills">
      <S.SkillsContainer>
        <S.SkillsTitle>{sectionTitle}</S.SkillsTitle>
        <S.SkillsContent>
          {skillsGroup.map(({ description, skillsList }) => (
            <S.SkillsGroup
              key={description}
              description={description}
              skillsList={skillsList}
            />
          ))}
        </S.SkillsContent>
      </S.SkillsContainer>
    </S.Skills>
  )
}

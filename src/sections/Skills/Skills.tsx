import styled from 'styled-components'
import Image from 'next/image'

import { useContentContext } from '../../common/context'
import { container, sectionTitle } from '../../common/styles/utilities'

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
  SkillsGroup: styled.div`
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
  SkillsGroupDescription: styled.p`
    color: ${({ theme: { colors } }) => colors.bodyLight};
    line-height: 2.5rem;
    margin-bottom: 6rem;
  `,
  SkillsGroupSkillsList: styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 6rem;
    align-items: center;
    justify-content: center;
  `,
  SkillsGroupSkillItemContainer: styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    flex-basis: 27%;
    color: ${({ theme: { colors } }) => colors.bodyLight};
  `,
  SkillsGroupIconContainer: styled.div`
    height: 24px;
    width: 24px;
    position: relative;
  `,
  SkillsGroupIconLabel: styled.figcaption`
    font-size: ${({ theme: { fontSizes } }) => fontSizes.fontSizeXs};
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
            <S.SkillsGroup key={description}>
              <S.SkillsGroupDescription>{description}</S.SkillsGroupDescription>
              <S.SkillsGroupSkillsList>
                {skillsList.map(({ label, icon }) => (
                  <li key={label}>
                    <S.SkillsGroupSkillItemContainer>
                      <S.SkillsGroupIconContainer>
                        <Image src={icon} alt={label} fill />
                      </S.SkillsGroupIconContainer>
                      <S.SkillsGroupIconLabel>{label}</S.SkillsGroupIconLabel>
                    </S.SkillsGroupSkillItemContainer>
                  </li>
                ))}
              </S.SkillsGroupSkillsList>
            </S.SkillsGroup>
          ))}
        </S.SkillsContent>
      </S.SkillsContainer>
    </S.Skills>
  )
}

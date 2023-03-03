import styled from 'styled-components'
import Image from 'next/image'

import {
  SkillsGroup as SkillsGroupType,
  SkillItem as SkillItemType,
} from 'common/context/content'

const S = {
  SkillsGroup: styled.div``,
  SkillsGroupDescription: styled.p`
    color: ${({ theme: { colors } }) => colors.bodyLighter};
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
  SkillItemContainer: styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    flex-basis: 27%;
    color: ${({ theme: { colors } }) => colors.bodyLighter};
  `,
  SkillItemIconContainer: styled.div`
    height: 24px;
    width: 24px;
    position: relative;
  `,
  SkillItemIconLabel: styled.figcaption`
    font-size: ${({ theme: { fontSizes } }) => fontSizes.fontSizeXs};
  `,
}

interface SkillsGroupProps extends SkillsGroupType {
  className?: string
}

const SkillItem = ({ icon, label }: SkillItemType) => (
  <S.SkillItemContainer>
    <S.SkillItemIconContainer>
      <Image src={icon} alt={label} fill />
    </S.SkillItemIconContainer>
    <S.SkillItemIconLabel>{label}</S.SkillItemIconLabel>
  </S.SkillItemContainer>
)

export const SkillsGroup = ({
  className = '',
  description,
  skillsList,
}: SkillsGroupProps) => (
  <S.SkillsGroup className={className}>
    <S.SkillsGroupDescription>{description}</S.SkillsGroupDescription>
    <S.SkillsGroupSkillsList>
      {skillsList.map(({ label, icon }) => (
        <li key={label}>
          <SkillItem label={label} icon={icon} />
        </li>
      ))}
    </S.SkillsGroupSkillsList>
  </S.SkillsGroup>
)

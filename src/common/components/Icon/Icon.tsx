import styled from 'styled-components'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'

const IconMap = {
  arrowLeft: SlArrowLeft,
  arrowRight: SlArrowRight,
  github: SiGithub,
  gmail: SiGmail,
  linkedin: SiLinkedin,
} as const

export enum IconName {
  ARROW_LEFT = 'arrowLeft',
  ARROW_RIGHT = 'arrowRight',
  GITHUB = 'github',
  GMAIL = 'gmail',
  LINKEDIN = 'linkedin',
}

type IconProps = {
  className?: string
  name: IconName
}

const S = {
  Icon: styled.div``,
}

export const Icon = ({ className = '', name }: IconProps) => {
  const IconComponent = IconMap[name]

  return (
    <S.Icon
      as={IconComponent}
      className={className}
      aria-label={`${name} icon`}
    />
  )
}

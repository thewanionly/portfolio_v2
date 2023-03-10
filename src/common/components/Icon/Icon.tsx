import styled from 'styled-components'
import { BiErrorCircle } from 'react-icons/bi'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'

const IconMap = {
  arrowLeft: SlArrowLeft,
  arrowRight: SlArrowRight,
  errorCircle: BiErrorCircle,
  github: SiGithub,
  gmail: SiGmail,
  linkedin: SiLinkedin,
} as const

export enum IconName {
  ARROW_LEFT = 'arrowLeft',
  ARROW_RIGHT = 'arrowRight',
  ERROR_CIRCLE = 'errorCircle',
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

import styled from 'styled-components'
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'

const IconMap = {
  github: SiGithub,
  gmail: SiGmail,
  linkedin: SiLinkedin,
} as const

export enum IconName {
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

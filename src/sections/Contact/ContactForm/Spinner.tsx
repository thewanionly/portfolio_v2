import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const S = {
  Spinner: styled.div`
    border: 3px solid ${({ theme: { colors } }) => colors.spinnerBg};
    border-top: 3px solid ${({ theme: { colors } }) => colors.spinner};
    border-radius: 50%;
    width: 26px;
    height: 26px;
    animation: ${spin} 1s linear infinite;
  `,
}

type SpinnerProps = {
  className?: string
  label: string
}

export const Spinner = ({ className = '', label }: SpinnerProps) => (
  <S.Spinner className={className} role="status" aria-label={label} />
)

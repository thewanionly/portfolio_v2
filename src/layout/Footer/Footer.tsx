import styled from 'styled-components'

import { Logo } from '../../common/components'
import { container } from '../../common/styles/utilities'

const S = {
  Footer: styled.footer`
    background-color: ${({ theme: { colors } }) => colors.secondary};
    padding: 4rem 0;
    text-align: center;
  `,
  FooterContainer: styled.div`
    ${container}
  `,
  FooterLogo: styled(Logo)``,
}

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterLogo altText="Footer logo" />
      </S.FooterContainer>
    </S.Footer>
  )
}

export default Footer

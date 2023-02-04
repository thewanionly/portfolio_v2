import styled from 'styled-components'
import { container } from '../../common/styles/utilities'

const S = {
  Home: styled.section`
    padding: 13rem 0 16rem;
    background-color: ${({ theme: { colors } }) => colors.secondary};
    color: ${({ theme: { colors } }) => colors.headingLight};
  `,
  HomeContainer: styled.div`
    ${container}

    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 6rem;
    text-align: center;
  `,
  HomeTitle: styled.div`
    text-transform: uppercase;
  `,
  HomeTitleSecondary: styled.span`
    letter-spacing: 0.5rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.fontSizeSm};

    color: ${({ theme: { colors } }) => colors.bodyLighter};
  `,
  HomeTitlePrimary: styled.h1`
    margin-top: 1.5rem;
    letter-spacing: 0.3rem;
  `,
}

export const Home = () => (
  <S.Home>
    <S.HomeContainer>
      <S.HomeTitle>
        <S.HomeTitleSecondary>Hi there, I am</S.HomeTitleSecondary>
        <S.HomeTitlePrimary>Elloani Ross Pitogo</S.HomeTitlePrimary>
      </S.HomeTitle>
    </S.HomeContainer>
  </S.Home>
)

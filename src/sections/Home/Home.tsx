import Link from 'next/link'
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
  HomeTitle: styled.h1`
    text-transform: uppercase;
  `,
  HomeTitleSecondary: styled.span`
    letter-spacing: 0.5rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.fontSizeSm};

    color: ${({ theme: { colors } }) => colors.bodyLighter};
  `,
  HomeTitlePrimary: styled.span`
    margin-top: 1.5rem;
    letter-spacing: 0.3rem;
  `,
  HomeSubtitle: styled.div``,
  HomeSubtitleText: styled.p``,
  HomeCTAButtonGroup: styled.div``,
  HomeSocialGroup: styled.ul`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    color: ${({ theme: { colors } }) => colors.icon};
  `,
  HomeSocialGroupItem: styled.li``,
  HomeSocialLink: styled(Link)`
    &:hover {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  `,
  HomeSocialIcon: styled.svg`
    width: 2.4rem;
    height: 2.4rem;
  `,
}

export const Home = () => (
  <S.Home>
    <S.HomeContainer>
      <S.HomeTitle>
        <S.HomeTitleSecondary>Hi there, I am</S.HomeTitleSecondary>
        <S.HomeTitlePrimary>Elloani Ross Pitogo</S.HomeTitlePrimary>
      </S.HomeTitle>
      <S.HomeSubtitle data-testid="home-subtitle">
        <S.HomeSubtitleText>
          You can call me <strong>Wani</strong>.
        </S.HomeSubtitleText>
        <S.HomeSubtitleText>
          School-taught <strong>Computer Engineer</strong>,
        </S.HomeSubtitleText>
        <S.HomeSubtitleText>
          Industry-taught
          <strong>Front-end Web Developer</strong>.
        </S.HomeSubtitleText>
      </S.HomeSubtitle>
      <S.HomeCTAButtonGroup>
        <Link href="#projects">View my work</Link>
        <Link href="#projects">Contact me</Link>
      </S.HomeCTAButtonGroup>
      <S.HomeSocialGroup>
        <S.HomeSocialGroupItem>
          <S.HomeSocialLink
            href="mailto:pelloani@gmail.com"
            target="_blank"
            title="Gmail"
          >
            <S.HomeSocialIcon aria-label="Gmail icon">
              <use xlinkHref="/icons/gmail.svg#img"></use>
            </S.HomeSocialIcon>
          </S.HomeSocialLink>
        </S.HomeSocialGroupItem>
        <S.HomeSocialGroupItem>
          <S.HomeSocialLink
            href="https://www.linkedin.com/in/pitogoelloaniross/"
            target="_blank"
            title="LinkedIn"
          >
            <S.HomeSocialIcon>
              <use xlinkHref="/icons/linkedin.svg#img"></use>
            </S.HomeSocialIcon>
          </S.HomeSocialLink>
        </S.HomeSocialGroupItem>
        <S.HomeSocialGroupItem>
          <S.HomeSocialLink
            href="https://github.com/thewanionly/"
            target="_blank"
            title="GitHub"
          >
            <S.HomeSocialIcon>
              <use xlinkHref="/icons/github.svg#img"></use>
            </S.HomeSocialIcon>
          </S.HomeSocialLink>
        </S.HomeSocialGroupItem>
      </S.HomeSocialGroup>
    </S.HomeContainer>
  </S.Home>
)

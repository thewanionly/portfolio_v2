import { IconName } from '../../components'
import {
  Content,
  FooterContent,
  Logo,
  NavLink,
  SocialLink,
} from '../../context'

const logo: Logo = {
  defaultAltText: 'Logo',
  src: 'img/logo.svg',
}

export const headerLogo = {
  alt: 'Header logo',
  src: 'img/logo.svg',
}

export const footerLogo = {
  alt: 'Footer logo',
  src: 'img/logo.svg',
}

const navLinks: NavLink[] = [
  {
    label: 'Home',
    link: '#',
  },
  {
    label: 'About',
    link: '#about',
  },
  {
    label: 'Skills',
    link: '#skills',
  },
  {
    label: 'Projects',
    link: '#projects',
  },
  {
    label: 'Contact',
    link: '#contact',
  },
]

const socialLinks: SocialLink[] = [
  {
    link: 'mailto:pelloani@gmail.com',
    name: IconName.GMAIL,
    title: 'Gmail',
  },
  {
    link: 'https://www.linkedin.com/in/pitogoelloaniross/',
    name: IconName.LINKEDIN,
    title: 'LinkedIn',
  },
  {
    link: 'https://github.com/thewanionly/',
    name: IconName.GITHUB,
    title: 'GitHub',
  },
]

const footer: FooterContent = {
  footerQuote: 'Work smart',
  copyrightText: {
    line1: 'Copyright text sample line 1',
    line2: 'Copyright text sample line 2',
  },
}

export const mockedContent: Content = {
  home: {
    avatar: '',
    greeting: 'Hi there',
    fullName: 'Elloani Ross Pitogo',
    nicknameText: {
      nicknameIntro: 'You can call me',
      nicknameValue: 'Wani',
    },
    description: 'I am a Front-end Web Developer',
    highlightedWords: ['Front-end Web Developer'],
    projectsCTA: 'Projects',
    contactsCTA: 'Contacts',
  },
  about: {
    title: 'About',
  },
  components: {
    logo,
    navLinks,
    socialLinks,
  },
  footer,
}

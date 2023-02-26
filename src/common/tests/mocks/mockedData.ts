import { IconName } from 'common/components'
import {
  Content,
  FooterContent,
  Logo,
  NavLink,
  SocialLink,
} from 'common/context'

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
    link: '',
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
  hero: {
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
    sectionTitle: 'About',
    aboutCard: [
      {
        title: 'About 1',
        image: 'img/about-1.svg',
        description: 'Lorem ipsum about 1',
        highlightedWords: ['ipsum', 'about'],
      },
      {
        title: 'About 2',
        image: 'img/about-2.svg',
        description: 'Sit amet dolor about 1',
        highlightedWords: ['amet', 'dolor'],
      },
    ],
    downloadCV: {
      description: 'Click below to download my CV',
      buttonCTAText: 'Download CV',
      cvFile: 'assets/files/CV - Pitogo, Elloani Ross.pdf',
    },
  },
  skills: {
    sectionTitle: 'Skills',
    skillsGroup: [
      {
        description: 'Here are my skills',
        skillsList: [
          {
            label: 'ReactJS',
            icon: 'react.svg',
          },
        ],
      },
    ],
  },
  projects: {
    sectionTitle: 'Projects',
    projectsList: [
      {
        title: 'World Countries',
        image: 'img/apollo.svg',
        description: 'World countries project',
        highlightedWords: ['countries', 'project'],
        techStack: ['React', 'TypeScript'],
        viewProjectLink: 'https://wani-world-countries.netlify.app/',
        viewSourceCodeLink: 'https://github.com/thewanionly/rest-countries-v2',
      },
      {
        title: 'Clock App',
        image: 'img/svn.svg',
        description: 'Clock App project',
        highlightedWords: ['Clock', 'project'],
        techStack: ['TypeScript'],
        viewProjectLink: 'https://wani-clock-app.netlify.app/',
        viewSourceCodeLink: 'https://github.com/thewanionly/clock-app',
      },
      {
        title: 'Dictionary App',
        image: 'img/nextjs.svg',
        description: 'Dictionary app project',
        highlightedWords: ['Dictionary', 'project'],
        techStack: ['React'],
        viewProjectLink: 'https://wani-dictionary-app.netlify.app/',
        viewSourceCodeLink: 'https://github.com/thewanionly/dictionary-app',
      },
    ],
    viewProjectCTA: 'View Project',
    viewSourceCodeCTA: 'View Source Code',
  },
  projects: {
    sectionTitle: 'Projects',
    projectsList: [
      {
        title: 'World Countries',
        image: 'img/apollo.svg',
        description: 'Lorem ipsum project',
        highlightedWords: ['ipsum', 'project'],
        techStack: ['React', 'TypeScript'],
        viewProjectCTA: 'View Project',
        viewSourceCodeCTA: 'View Source Code',
      },
    ],
  },
  components: {
    logo,
    navLinks,
    socialLinks,
  },
  footer,
}

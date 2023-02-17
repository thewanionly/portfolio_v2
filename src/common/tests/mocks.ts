import { Content, NavLink } from '../context'

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
    navLinks,
  },
}

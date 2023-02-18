import { IconName } from '../../components'

/** Hero types */
interface NicknameText {
  nicknameIntro: string
  nicknameValue: string
}

export class HeroContent {
  constructor(
    public avatar: string = '',
    public greeting: string = '',
    public fullName: string = '',
    public nicknameText: NicknameText = {
      nicknameIntro: '',
      nicknameValue: '',
    },
    public description: string = '',
    public highlightedWords: string[] = [],
    public projectsCTA: string = '',
    public contactsCTA: string = ''
  ) {}
}

/** About types */
interface AboutCard {
  title: string
  image: string
  description: string
  highlightedWords: string[]
}

export class AboutContent {
  constructor(
    public sectionTitle: string = '',
    public aboutCards: AboutCard[] = []
  ) {}
}

/** Components types */
export interface NavLink {
  label: string
  link: string
}

export class Logo {
  constructor(public defaultAltText: string = '', public src: string = '') {}
}

export interface SocialLink {
  title: string
  name: IconName
  link: string
  target?: string
}

export class ComponentsContent {
  constructor(
    public logo: Logo = new Logo(),
    public navLinks: NavLink[] = [],
    public socialLinks: SocialLink[] = []
  ) {}
}

/** Footer types */
interface CopyrightText {
  line1: string
  line2: string
}

export class FooterContent {
  constructor(
    public footerQuote: string = '',
    public copyrightText: CopyrightText = {
      line1: '',
      line2: '',
    }
  ) {}
}

/** Content type */
export interface Content {
  hero: HeroContent
  about: AboutContent
  components: ComponentsContent
  footer: FooterContent
}

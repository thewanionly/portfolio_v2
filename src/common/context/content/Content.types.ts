import { IconName } from '../../components'

/** Home types */
interface NicknameText {
  nicknameIntro: string
  nicknameValue: string
}

export class HomeContent {
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
export class AboutContent {
  constructor(public title: string = '') {}
}

/** Components types */
export interface NavLink {
  label: string
  link: string
}

export interface SocialLink {
  title: string
  name: IconName
  link: string
  target?: string
}

export class ComponentsContent {
  constructor(
    public navLinks: NavLink[] = [],
    public socialLinks: SocialLink[] = []
  ) {}
}

/** Content type */
export interface Content {
  home: HomeContent
  about: AboutContent
  components: ComponentsContent
}

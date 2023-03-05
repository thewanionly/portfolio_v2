import { IconName } from 'common/components'

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
export interface AboutCard {
  title: string
  image: string
  description: string
  highlightedWords: string[]
}

interface DownloadCV {
  description: string
  buttonCTAText: string
  cvFile: string
}

export class AboutContent {
  constructor(
    public sectionTitle: string = '',
    public aboutCard: AboutCard[] = [],
    public downloadCV: DownloadCV = {
      description: '',
      buttonCTAText: '',
      cvFile: '',
    }
  ) {}
}

/** Skills types */
export interface SkillItem {
  label: string
  icon: string
  blurIcon?: string
}

export interface SkillsGroup {
  description: string
  skillsList: SkillItem[]
}

export class SkillsContent {
  constructor(
    public sectionTitle: string = '',
    public skillsGroup: SkillsGroup[] = []
  ) {}
}

/** Projects types */
export interface ProjectItem {
  title: string
  image: string
  blurImage?: string
  description: string
  highlightedWords: string[]
  techStack: string[]
  viewProjectLink: string
  viewSourceCodeLink: string
}

export class ProjectsContent {
  constructor(
    public sectionTitle: string = '',
    public projectsList: ProjectItem[] = [],
    public viewProjectCTA: string = '',
    public viewSourceCodeCTA: string = ''
  ) {}
}

/** Contact types */
export class ContactContent {
  constructor(
    public sectionTitle: string = '',
    public message: string = '',
    public submitBtnLabel: string = ''
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
  skills: SkillsContent
  projects: ProjectsContent
  contact: ContactContent
  components: ComponentsContent
  footer: FooterContent
}

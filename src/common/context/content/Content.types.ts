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

export class AboutContent {
  constructor(public title: string = '') {}
}

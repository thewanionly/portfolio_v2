import { createContext, useContext } from 'react'
import {
  AboutContent,
  ComponentsContent,
  ContactContent,
  Content,
  FooterContent,
  HeroContent,
  ProjectsContent,
  SkillsContent,
} from './Content.types'

const initialContent = {
  hero: new HeroContent(),
  about: new AboutContent(),
  skills: new SkillsContent(),
  projects: new ProjectsContent(),
  contact: new ContactContent(),
  components: new ComponentsContent(),
  footer: new FooterContent(),
}

export const ContentContext = createContext<Content>(initialContent)

export const useContentContext = () => useContext(ContentContext)

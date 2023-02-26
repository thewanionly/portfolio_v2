import { createContext, useCallback, useContext, useState } from 'react'
import {
  AboutContent,
  ComponentsContent,
  Content,
  FooterContent,
  HeroContent,
  ProjectsContent,
  SkillsContent,
} from './Content.types'

type ContentProviderPops = {
  children: React.ReactNode
}

type ContentContextValue = {
  content: Content
  initializeContent: ContentSetterFn
}

type ContentSetterFn = (data: Content) => void

const initialContent = {
  hero: new HeroContent(),
  about: new AboutContent(),
  skills: new SkillsContent(),
  projects: new ProjectsContent(),
  components: new ComponentsContent(),
  footer: new FooterContent(),
}

const initialContentContextValue = {
  content: initialContent,
  initializeContent: () => null,
}

export const ContentContext = createContext<ContentContextValue>(
  initialContentContextValue
)

export const useContentContext = () => useContext(ContentContext)

export const ContentProvider = ({
  children,
}: ContentProviderPops): JSX.Element => {
  const [content, setContent] = useState<Content>(initialContent)

  const initializeContent: ContentSetterFn = useCallback((data: Content) => {
    setContent(data)
  }, [])

  const value = {
    content,
    initializeContent,
  }

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  )
}

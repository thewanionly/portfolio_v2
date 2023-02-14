import { createContext, useCallback, useContext, useState } from 'react'

type ContentProviderPops = {
  children: React.ReactNode
}

type ContentContextValue = {
  content: Content
  initializeContent: ContentSetterFn
}

class HomeContent {
  constructor(public fullName: string = '', public greeting: string = '') {}
}

class AboutContent {
  constructor(public title: string = '') {}
}

export interface Content {
  home: HomeContent
  about: AboutContent
}

type ContentSetterFn = (data: Content) => void

const initialContent = {
  home: new HomeContent(),
  about: new AboutContent(),
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

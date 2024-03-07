import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

type HeaderProviderPops = {
  children: React.ReactNode
}

type HeaderContextValue = {
  isNavMenuOpen: boolean
  toggleNavMenu: () => void
  closeNavMenu: () => void
}

const initialHeaderContextValue = {
  isNavMenuOpen: false,
  toggleNavMenu: () => null,
  closeNavMenu: () => null,
}

export const HeaderContext = createContext<HeaderContextValue>(
  initialHeaderContextValue
)

export const useHeaderContext = () => useContext(HeaderContext)

export const HeaderProvider = ({
  children,
}: HeaderProviderPops): JSX.Element => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)

  const closeNavMenu = useCallback(() => {
    setIsNavMenuOpen(false)
  }, [])

  const toggleNavMenu = useCallback(() => {
    setIsNavMenuOpen((prevValue) => !prevValue)
  }, [])

  useEffect(() => {
    document.body.style.overflowY = isNavMenuOpen ? 'hidden' : 'auto'
    document.body.style.paddingRight = isNavMenuOpen ? '1rem' : '0'
  }, [isNavMenuOpen])

  const value = {
    isNavMenuOpen,
    toggleNavMenu,
    closeNavMenu,
  }

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  )
}

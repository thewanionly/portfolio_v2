import { createContext, useCallback, useContext, useState } from 'react'

type HeaderProviderPops = {
  children: React.ReactNode
}

type HeaderContextValue = {
  isNavMenuOpen: boolean
  toggleNavMenu: () => void
}

const initialHeaderContextValue = {
  isNavMenuOpen: false,
  toggleNavMenu: () => null,
}

export const HeaderContext = createContext<HeaderContextValue>(
  initialHeaderContextValue
)

export const useHeaderContext = () => useContext(HeaderContext)

export const HeaderProvider = ({
  children,
}: HeaderProviderPops): JSX.Element => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)

  const toggleNavMenu = useCallback(() => {
    setIsNavMenuOpen((prevValue) => !prevValue)
  }, [])

  const value = {
    isNavMenuOpen,
    toggleNavMenu,
  }

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  )
}

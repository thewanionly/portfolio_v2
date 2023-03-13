import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { useMediaQuery } from 'common/hooks'
import { theme } from 'common/styles'

type HeaderProviderPops = {
  children: React.ReactNode
}

type HeaderContextValue = {
  isNavMenuOpen: boolean
  showNavBar: boolean
  toggleNavMenu: () => void
  closeNavMenu: () => void
}

const initialHeaderContextValue = {
  isNavMenuOpen: false,
  showNavBar: false,
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
  const [showNavBar, setShowNavBar] = useState(false)
  const isTabletLandscape = useMediaQuery(theme.breakPoints.tabletLandscape)

  useEffect(() => {
    setShowNavBar(isTabletLandscape)
  }, [isTabletLandscape])

  const closeNavMenu = useCallback(() => {
    setIsNavMenuOpen(false)
  }, [])

  const toggleNavMenu = useCallback(() => {
    setIsNavMenuOpen((prevValue) => !prevValue)
  }, [])

  const value = {
    isNavMenuOpen,
    showNavBar,
    toggleNavMenu,
    closeNavMenu,
  }

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  )
}

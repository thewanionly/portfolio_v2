import styled from 'styled-components'
import { Toaster as ReactHotToaster } from 'react-hot-toast'

import { Icon, IconName } from 'common/components'
import { theme } from 'common/styles'

const ToasterErrorIcon = styled(Icon)`
  width: 2.4rem;
  height: 2.4rem;
`

export const Toaster = () => (
  <ReactHotToaster
    toastOptions={{
      duration: 4000,
      style: {
        color: theme.colors.toast,
      },
      success: {
        style: {
          background: theme.colors.primary,
        },
        iconTheme: {
          primary: theme.colors.primary,
          secondary: theme.colors.toast,
        },
      },
      error: {
        style: {
          background: theme.colors.error,
        },
        iconTheme: {
          primary: theme.colors.error,
          secondary: theme.colors.toast,
        },
        icon: <ToasterErrorIcon name={IconName.ERROR_CIRCLE} />,
      },
    }}
  />
)

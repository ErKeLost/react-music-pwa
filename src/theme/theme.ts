import { ThemeOptions } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'

import { Themes } from './types'

export const sharedTheme = {
  palette: {
    background: {
      default: '#fafafa',
      paper: '#fff'
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10
        },
        // TODO: open issue for missing "horizontal" CSS rule
        // in Divider API - https://mui.com/material-ui/api/divider/#css
        middle: {
          marginTop: 10,
          marginBottom: 10,
          width: '80%'
        }
      }
    }
  }
} as ThemeOptions // the reason for this casting is deepmerge return type
// TODO (Suren): replace mui-utils-deepmerge with lodash or ramda deepmerge

const themes: Record<Themes, ThemeOptions> = {
  light: deepmerge(sharedTheme, {
    palette: {
      mode: 'light',
      background: {
        default: '#fafafa',
        base: '#242424',
        paper: '#fff'
      },
      color: {
        default: '#000'
      },
      primary: {
        main: '#C20C0C',
        base: '#000'
      }
    }
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: 'dark',
      background: {
        default: '#111',
        base: '#242424',
        paper: '#171717'
      },
      color: {
        default: '#fff'
      },
      primary: {
        main: '#C20C0C',
        base: '#000'
      }
    }
  })
}

export default themes

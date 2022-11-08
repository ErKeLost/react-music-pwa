import { ThemeProvider, createTheme } from '@mui/material/styles'

// import useTheme from '@/store/theme'
import { shallowEqual } from 'react-redux'
import { useMusicStoreSelector } from '~/store'
import themes from './theme'
import type { CustomThemeProviderProps } from './types'

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  // const [theme] = useTheme()
  const { mode } = useMusicStoreSelector(
    (state) => ({
      mode: state.theme.mode
    }),
    // 数据没有发生变化 就不会自动刷新了
    shallowEqual
  )
  return (
    <ThemeProvider theme={createTheme(themes[mode])}>{children}</ThemeProvider>
  )
}

export default CustomThemeProvider

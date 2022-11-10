import { ThemeProvider, createTheme } from '@mui/material/styles'

// import useTheme from '@/store/theme'
import { useMusicSelector, shallowEqualMusic } from '~/store'
import themes from './theme'
import type { CustomThemeProviderProps } from './types'

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  // const [theme] = useTheme()
  const { mode } = useMusicSelector(
    (state) => ({
      mode: state.theme.mode
    }),
    // 数据没有发生变化 就不会自动刷新了
    shallowEqualMusic
  )
  return (
    // @ts-ignore
    <ThemeProvider theme={createTheme(themes[mode])}>{children}</ThemeProvider>
  )
}

export default CustomThemeProvider

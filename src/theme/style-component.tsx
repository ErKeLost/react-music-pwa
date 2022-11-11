import { ThemeProvider as ThemeProviderStyleComponent } from 'styled-components'
import { useMusicSelector, shallowEqualMusic } from '~/store'
import type { CustomThemeProviderProps } from './types'
import themes from '@/theme/theme'

function ThemeProviderStyle({ children }: CustomThemeProviderProps) {
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
    <ThemeProviderStyleComponent theme={themes[mode]}>{children}</ThemeProviderStyleComponent>
  )
}

export default ThemeProviderStyle

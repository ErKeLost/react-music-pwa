import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import themeReducer from './modules/theme'
const store = configureStore({
  reducer: {
    theme: themeReducer
  }
})

type GetStoreStateType = typeof store.getState
type IRootState = ReturnType<GetStoreStateType>
// 指定类型
export const useMusicStoreSelector: TypedUseSelectorHook<IRootState> =
  useSelector
export { IRootState }
export default store

import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  TypedUseSelectorHook,
  DispatchType,
  useDispatch,
  shallowEqual
} from 'react-redux'
import themeReducer from './modules/theme'
const store = configureStore({
  reducer: {
    theme: themeReducer
  }
})

type GetStoreStateType = typeof store.getState
type IRootState = ReturnType<GetStoreStateType>
type DispatchType = typeof store.dispatch
// 指定类型
export const useMusicSelector: TypedUseSelectorHook<IRootState> =
  useSelector
export const useMusicDispatch: () => DispatchType = useDispatch
export const shallowEqualMusic = shallowEqual
export { IRootState }
export default store

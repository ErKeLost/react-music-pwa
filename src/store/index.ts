import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'
import themeReducer from './modules/theme'
import recommendReducer from './modules/recommend'
import loginReducer from './modules/login'
const store = configureStore({
  reducer: {
    theme: themeReducer,
    recommend: recommendReducer,
    login: loginReducer
  }
})

type GetStoreStateType = typeof store.getState
type IRootState = ReturnType<GetStoreStateType>
type DispatchType = typeof store.dispatch
// 指定类型
export const useMusicSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useMusicDispatch: () => DispatchType = useDispatch
export const shallowEqualMusic = shallowEqual
export { IRootState }
export default store

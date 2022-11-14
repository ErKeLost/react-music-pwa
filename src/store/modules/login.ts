import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getQrCode,
  getQrBaseImg,
  getQrPoiling,
  getUserInfo,
  getUserData
} from '~/services/modules/login'
import { setCookies } from '~/utils/fetch/auth'
interface ILoginState {
  qrCode: string
  codeInfo: any
  poilingData: any
  loginSuccess: boolean
  userInfo: any
}

const initialState: ILoginState = {
  qrCode: '',
  codeInfo: {},
  poilingData: {},
  loginSuccess: false,
  userInfo: {}
}
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setQrCodeData(state, { payload }) {
      state.qrCode = payload
    },
    setQrCodeInfoData(state, { payload }) {
      state.codeInfo = payload
    },
    setQrPoilingData(state, { payload }) {
      console.log(payload)
      state.poilingData = payload
    },
    setLoginSuccess(state, { payload }) {
      console.log(payload)
      state.loginSuccess = payload
    },
    setUserInfo(state, { payload }) {
      state.userInfo = payload
    }
  }
})
export const fetchLoginDataAction = createAsyncThunk(
  'login',
  async (args, { dispatch }) => {
    const res = await getQrCode()
    dispatch(setQrCodeData(res.data.unikey))
    dispatch(fetchQrImgAction())
  }
)
export const fetchQrImgAction = createAsyncThunk(
  'img',
  async (args, { getState, dispatch }) => {
    const state = getState()
    const result = await getQrBaseImg({
      key: state.login.qrCode,
      qrimg: state.login.qrCode
    })
    console.log(result)

    dispatch(setQrCodeInfoData(result))
  }
)

export const fetchPoilingQrAction = createAsyncThunk(
  'poiling',
  async (args, { getState, dispatch }) => {
    const state = getState()
    const res = await getQrPoiling({ key: state.login.qrCode })
    console.log(res)
    if (res.code === 803) {
      dispatch(setLoginSuccess(true))
      dispatch(setQrPoilingData(res))
      setCookies(res.cookie)
      const info = await getUserInfo()
      console.log(info)
    }
  }
)

export const {
  setQrCodeData,
  setQrCodeInfoData,
  setLoginSuccess,
  setQrPoilingData
} = loginSlice.actions
export default loginSlice.reducer

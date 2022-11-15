import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getQrCode,
  getQrBaseImg,
  getQrPoiling,
  getUserInfo,
  getUserSubInfo,
  getUserLevel
} from '~/services/modules/login'
import { setCookies } from '~/utils/fetch/auth'
interface ILoginState {
  qrCode: string
  codeInfo: any
  poilingData: any
  loginSuccess: boolean
  poilingInfo: string
  userInfo: any
}

const initialState: ILoginState = {
  qrCode: '',
  codeInfo: {},
  poilingData: {},
  loginSuccess: false,
  poilingInfo: '扫码登录或扫码下载APP',
  // @ts-ignore
  userInfo: JSON.parse(localStorage.getItem('userInfo')) ?? {}
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
    setQrPoilingInfo(state, { payload }) {
      console.log(payload)
      state.poilingInfo = payload
    },
    setLoginSuccess(state, { payload }) {
      console.log(payload)
      state.loginSuccess = payload
    },
    setUserInfo(state, { payload }) {
      console.log(payload)
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
    if (res.code === 800) {
      dispatch(setQrPoilingInfo('登录取消'))
      dispatch(setLoginSuccess(true))
    }
    if (res.code === 802) {
      dispatch(setQrPoilingData(res))
      dispatch(setQrPoilingInfo('扫描成功, 请在手机上登录确认'))
    }
    if (res.code === 803) {
      dispatch(setQrPoilingInfo('登录成功'))
      dispatch(setQrPoilingData({}))
      setTimeout(() => {
        dispatch(setLoginSuccess(true))
      }, 500)
      setCookies(res.cookie)
      // const result = await userInfoPromise()
      let info = {}
      const result = await Promise.all([
        getUserInfo(),
        getUserSubInfo(),
        getUserLevel()
      ])
      result.forEach((item) => {
        Object.assign(info, item)
      })
      localStorage.setItem('userInfo', JSON.stringify(info))
      dispatch(setUserInfo(info))
    }
  }
)

export const {
  setQrCodeData,
  setQrCodeInfoData,
  setLoginSuccess,
  setQrPoilingData,
  setQrPoilingInfo,
  setUserInfo
} = loginSlice.actions
export default loginSlice.reducer

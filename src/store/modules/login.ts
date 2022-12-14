import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getQrCode,
  getQrBaseImg,
  getQrPoiling,
  getUserInfo,
  getUserSubInfo,
  getUserLevel
} from '~/services/modules/login'
import { getUserFans, getUserFollower } from '~/services/modules/user'
import { setCookies } from '~/utils/fetch/auth'
interface ILoginState {
  qrCode: string
  codeInfo: any
  poilingData: any
  loginSuccess: boolean
  poilingInfo: string
  userInfo: any
  userFans: any
  skeletonFlag: boolean
}

const initialState: ILoginState = {
  qrCode: '',
  codeInfo: {},
  poilingData: {},
  loginSuccess: false,
  poilingInfo: '扫码登录或扫码下载APP',
  // @ts-ignore
  userInfo: JSON.parse(localStorage.getItem('userInfo')) ?? {},
  // @ts-ignore
  userFans: JSON.parse(localStorage.getItem('userFans')) ?? {},
  // @ts-ignore
  skeletonFlag: !JSON.parse(localStorage.getItem('userFans')) ?? false
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
      state.poilingData = payload
    },
    setQrPoilingInfo(state, { payload }) {
      state.poilingInfo = payload
    },
    setLoginSuccess(state, { payload }) {
      state.loginSuccess = payload
    },
    setUserInfo(state, { payload }) {
      state.userInfo = payload
    },
    setUserFans(state, { payload }) {
      state.userFans = payload
    },
    setSkeletonFlag(state, { payload }) {
      state.skeletonFlag = payload
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

    dispatch(setQrCodeInfoData(result))
  }
)

export const fetchPoilingQrAction = createAsyncThunk(
  'poiling',
  async (args, { getState, dispatch }) => {
    const state = getState()
    const res = await getQrPoiling({ key: state.login.qrCode })
    if (res.code === 800) {
      dispatch(setQrPoilingInfo('登录取消'))
      dispatch(setLoginSuccess(true))
    }
    if (res.code === 802) {
      dispatch(setQrPoilingData(res))
      dispatch(setQrPoilingInfo('扫描成功, 请在手机上登录确认'))
    }
    if (res.code === 803) {
      dispatch(setSkeletonFlag(true))
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
      dispatch(setUserInfo(info))
      localStorage.setItem('userInfo', JSON.stringify(info))
      const userFan = await Promise.all([
        getUserFans(info.profile!.userId),
        getUserFollower(info.profile!.userId)
      ])
      dispatch(setSkeletonFlag(false))
      let userFans: any = {}
      userFans.follow = userFan[0]
      userFans.followed = userFan[1]
      dispatch(setUserFans(userFans))
      localStorage.setItem('userFans', JSON.stringify(userFans))
    }
  }
)

export const {
  setQrCodeData,
  setQrCodeInfoData,
  setLoginSuccess,
  setQrPoilingData,
  setQrPoilingInfo,
  setUserInfo,
  setSkeletonFlag,
  setUserFans
} = loginSlice.actions
export default loginSlice.reducer

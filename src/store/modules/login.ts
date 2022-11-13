import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getQrCode,
  getQrBaseImg,
  getQrPoiling,
  getUserInfo,
  getUserData
} from '~/services/modules/login'
interface ILoginState {
  qrCode: string
  codeInfo: any
  poilingData: any
  userInfo: any
}

const initialState: ILoginState = {
  qrCode: '',
  codeInfo: {},
  poilingData: {},
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
      state.poilingData = payload
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
    const result = await getQrBaseImg({
      key: res.data.unikey,
      qrimg: res.data.unikey
    })
    dispatch(setQrCodeInfoData(result))
    dispatch(fetchPoilingQrAction())
  }
)
export const fetchPoilingQrAction = createAsyncThunk(
  'poiling',
  async (args, { getState, dispatch }) => {
    const state = getState()
    const res = await getQrPoiling({ key: state.login.qrCode })
    const info = await getUserInfo()
    console.log(info)
    const a = await getUserData({ uid: info.account.id })
    console.log(a)
  }
)

export const { setQrCodeData, setQrCodeInfoData, setQrPoilingData } =
  loginSlice.actions
export default loginSlice.reducer

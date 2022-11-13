import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getQrCode, getQrBaseImg } from '~/services/modules/login'
interface ILoginState {
  qrCode: string
  codeInfo: any
}

const initialState: ILoginState = {
  qrCode: '',
  codeInfo: {}
}
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setQrCodeData(state, { payload }) {
      state.qrCode = payload
    },
    setQrCodeInfoData(state, { payload }) {
      console.log(payload)
      state.codeInfo = payload
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
    console.log(result)
    dispatch(setQrCodeInfoData(result))
  }
)

export const { setQrCodeData, setQrCodeInfoData } = loginSlice.actions
export default loginSlice.reducer

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners } from '~/services/modules/recommend'
interface IRecommendState {
  banners: []
}

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (args, { dispatch }) => {
    const res = await getBanners()
    dispatch(setBannerData(res.banners))
  }
)

const initialState: IRecommendState = {
  banners: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    setBannerData(state, { payload }) {
      state.banners = payload
    }
  }
})
export const { setBannerData } = recommendSlice.actions
export default recommendSlice.reducer

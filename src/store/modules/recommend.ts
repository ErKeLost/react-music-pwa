import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners, getRecommendSongs } from '~/services/modules/recommend'
interface IRecommendState {
  banners: []
  recommendSongs: any
}

const initialState: IRecommendState = {
  banners: [],
  recommendSongs: {}
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    setBannerData(state, { payload }) {
      state.banners = payload
    },
    setRecommendSongsData(state, { payload }) {
      state.recommendSongs = payload
    }
  }
})
export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (args, { dispatch }) => {
    const res = await getBanners()
    dispatch(setBannerData(res.banners))
  }
)

export const fetchRecommendSongsDataAction = createAsyncThunk(
  'recommendSongSlice',
  async (arg, { getState, dispatch }) => {
    const res = await getRecommendSongs()
    console.log(res.data);

    dispatch(setRecommendSongsData(res.data))
  }
)
export const { setBannerData, setRecommendSongsData } = recommendSlice.actions
export default recommendSlice.reducer

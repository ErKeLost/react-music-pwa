import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners, getRecommendSongs, getSongListDay } from '~/services/modules/recommend'
interface IRecommendState {
  banners: []
  recommendSongs: any
  recommendSongList: []
}

const initialState: IRecommendState = {
  banners: [],
  recommendSongs: {},
  recommendSongList: []
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
    },
    setRecommendSongListData (state, {  payload }) {
      state.recommendSongList = payload
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

export const fetchRecommendSongListDataAction = createAsyncThunk(
  'recommendSongListSlice',
  async (arg, { getState, dispatch }) => {
    const res = await getSongListDay()
    console.log(res.c);
    dispatch(setRecommendSongListData(res.recommend))
  }
)
export const { setBannerData, setRecommendSongsData, setRecommendSongListData } = recommendSlice.actions
export default recommendSlice.reducer

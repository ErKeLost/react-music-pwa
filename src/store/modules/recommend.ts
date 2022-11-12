import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners } from '~/services/modules/recommend'
interface IRecommendState {}

export const fetchBannerDataAction = createAsyncThunk('banners', async () => {
  const res = await getBanners()
  console.log(res)
  return res
})

const initialState: IRecommendState = {
  banners: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {}
})

export default recommendSlice.reducer

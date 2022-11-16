import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  searchHot,
  searchHotSimple,
  personalizedSong
} from '@/services/modules/search'
import { getNewMv } from '@/services/modules/mv'
interface IStateState {
  hotList: []
  hotListSimple: []
  personalizedSongList: []
  mvList: []
}

const initialState: IStateState = {
  hotList: [],
  hotListSimple: [],
  personalizedSongList: [],
  mvList: []
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setHotList(state, { payload }) {
      state.hotList = payload
    },
    setHotSimpleList(state, { payload }) {
      state.hotListSimple = payload
    },
    setNewMvList(state, { payload }) {
      state.mvList = payload
    },
    setPersonalizedSongList(state, { payload }) {
      state.personalizedSongList = payload
    }
  }
})

export const getHotSearchListAction = createAsyncThunk(
  'search',
  async (args, { dispatch }) => {
    searchHot().then((res) => {
      dispatch(setHotList(res.data))
      console.log('详细热搜', res.data)
    })
    searchHotSimple().then((res) => {
      dispatch(setHotSimpleList(res.result.hots))
      console.log('热搜', res.result.hots)
    })
    personalizedSong().then((res) => {
      dispatch(setPersonalizedSongList(res.result))
      console.log('最新音乐', res.result)
    })
    getNewMv().then((res) => {
      dispatch(setNewMvList(res.data))
      console.log('mv', res.data)
    })
  }
)

export const {
  setHotList,
  setHotSimpleList,
  setNewMvList,
  setPersonalizedSongList
} = searchSlice.actions
export default searchSlice.reducer

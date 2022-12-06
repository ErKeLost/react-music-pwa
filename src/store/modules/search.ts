import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  searchHot,
  searchHotSimple,
  personalizedSong,
  getSearch,
  getSearchValue,
  getDefaultSearch
} from '@/services/modules/search'
import { getNewMv } from '@/services/modules/mv'
interface IStateState {
  hotList: []
  hotListSimple: []
  personalizedSongList: []
  mvList: []
  searchWord: any
  defaultSearchWord: string
  searchValue: []
  searchLoading: boolean
}

const initialState: IStateState = {
  hotList: [],
  hotListSimple: [],
  personalizedSongList: [],
  mvList: [],
  searchWord: {},
  defaultSearchWord: '',
  searchValue: [],
  searchLoading: false
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchLoading(state, { payload }) {
      state.searchLoading = payload
    },
    setSearch(state, { payload }) {
      state.searchWord = payload
    },
    setSearchValue(state, { payload }) {
      state.searchValue = payload
    },
    setDefaultSearchWord(state, { payload }) {
      state.defaultSearchWord = payload
    },
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
export const getSearchResultAction = createAsyncThunk(
  'searchword',
  async (args, { dispatch }) => {
    console.log(args)
  }
)
export const getHotSearchListAction = createAsyncThunk(
  'search',
  async (args, { dispatch }) => {
    searchHot().then((res) => {
      dispatch(setHotList(res.data))
    })
    getDefaultSearch().then((res) => {
      dispatch(setDefaultSearchWord(res.data.showKeyword))
    })
    searchHotSimple().then((res) => {
      dispatch(setHotSimpleList(res.result.hots))
    })
    personalizedSong().then((res) => {
      dispatch(setPersonalizedSongList(res.result))
    })
    getNewMv().then((res) => {
      dispatch(setNewMvList(res.data))
    })
  }
)
export const getSearchValueAction = createAsyncThunk(
  'searchValue',
  async (args: string, { dispatch }) => {
    const data = await getSearchValue(args)
    dispatch(setSearchValue(data.result))
  }
)
export const {
  setHotList,
  setHotSimpleList,
  setNewMvList,
  setPersonalizedSongList,
  setDefaultSearchWord,
  setSearchValue,
  setSearchLoading
} = searchSlice.actions
export default searchSlice.reducer

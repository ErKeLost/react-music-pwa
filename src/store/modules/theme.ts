import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'dark'
  },
  reducers: {
    changeTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    }
  }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer

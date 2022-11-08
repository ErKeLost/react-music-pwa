import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'light'
  },
  reducers: {
    changeTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    }
  }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer

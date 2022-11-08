import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'light'
  },
  reducers: {}
})

export default themeSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import db from '../db/db.json'

export const appSlice = createSlice({
  name: 'data',
  initialState: db,
  reducers: {
      
  },
})

export const selectData = state => state.data
export const selectUsers = state => state.data.users

export default appSlice.reducer
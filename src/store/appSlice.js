import { createSlice } from '@reduxjs/toolkit'
import db from '../db/db.json'

export const appSlice = createSlice({
  name: 'data',
  initialState: db,
  reducers: {
  },
})

//export const {} = appSlice.actions

export const selectData = state => state.data
export const selectAllUsers = state => state.data.users
export const selectAllFlights = state => state.data.flights

export default appSlice.reducer
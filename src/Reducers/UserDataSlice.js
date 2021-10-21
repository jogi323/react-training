import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from "axios";
const initialState = { value: 0,  users: [], status: "", error: ""}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://randomuser.me/api/?results=100');
  return response.data.results;
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearUsers (state, action) {
      console.log("jogi")
      state.users = []
    }
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchUsers.fulfilled]: (state, action) => {
      console.log(action)
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.users = state.users.concat(action.payload);
      return state;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

export const { clearUsers, decrement, incrementByAmount } = usersSlice.actions
export default usersSlice.reducer
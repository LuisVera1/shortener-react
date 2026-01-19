import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: 'not-logged',
    id: '',
    userName: '',
    freeLinks: 0,
    language: 'en',
  },
  reducers: {
    increment: (state, action) => {
      state.counter += 1;
    },

  },
});

export const { increment } = userSlice.actions;
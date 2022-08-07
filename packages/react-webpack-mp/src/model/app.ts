import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppState {
  value: number
}

const initialState = {
  value: 0,
} as IAppState;

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = AppSlice.actions;

export default AppSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_THEME, DEFAULT_LAN } from '@/constants/config';

interface IAppState {
  userConfig: {
    language: string;
    theme: string;
  };
}

const initialState: IAppState = {
  userConfig: {
    theme: DEFAULT_THEME,
    language: DEFAULT_LAN,
  },
};

export const AppSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setUserConfig: (
      state,
      action: PayloadAction<{
        key: string;
        value: any;
      }>,
    ) => {
      const { key, value } = action.payload;

      state.userConfig[key] = value;
    },
  },
});

export const { setUserConfig } = AppSlice.actions;

export default AppSlice.reducer;

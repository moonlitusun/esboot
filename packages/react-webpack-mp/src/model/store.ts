import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

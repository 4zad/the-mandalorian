import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    prevRoute: '',
    isWebpSupported: true,
    videoId: -1
  },
  reducers: {
    setPrevRoute(state, action: PayloadAction<string>) {
      state.prevRoute = action.payload;
    },
    setIsWebpSupported(state, action: PayloadAction<boolean>) {
      state.isWebpSupported = action.payload;
    },
    // Set to -1 when there is no video to be displayed
    setVideoId(state, action: PayloadAction<number>) {
      state.videoId = action.payload;
    }
  }
});

export const { setPrevRoute, setIsWebpSupported, setVideoId } = actions;

export const store = configureStore({ reducer, devTools: process.env.NEXT_PUBLIC_ENVIRONMENT !== 'production' });

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

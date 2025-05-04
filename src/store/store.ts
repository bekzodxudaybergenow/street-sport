import { configureStore } from '@reduxjs/toolkit'
import stadiumSlice from './slices/stadiumSlice'

export const store = configureStore({
  reducer: {
    stadiumSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
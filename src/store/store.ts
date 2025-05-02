import { configureStore } from '@reduxjs/toolkit'
import BookSlice from './slices/bookingSlice'

export const store = configureStore({
  reducer: {
    BookSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
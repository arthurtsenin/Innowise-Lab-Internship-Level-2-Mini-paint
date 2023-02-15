import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/store/slice/userSlice'
import toolReducer from '@/store/slice/toolSlice'
import usersPaintingsReducer from '@/store/slice/usersPaintings'
import themeReducer from '@/store/slice/themeSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    tool: toolReducer,
    usersPaintings: usersPaintingsReducer,
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

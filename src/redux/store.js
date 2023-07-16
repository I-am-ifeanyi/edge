import { configureStore } from "@reduxjs/toolkit"
import userInfo from "./features/userData"

export const store = configureStore({
  reducer: {
    userInfo
  }
})

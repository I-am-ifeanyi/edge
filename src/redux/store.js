import { configureStore } from "@reduxjs/toolkit"
import userInfo from "./features/userData"
import adminInfo from "./features/createAdmin"

export const store = configureStore({
  reducer: {
    userInfo,
    adminInfo
  }
})

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userData: {email: "", password: ""}
}

const userData = createSlice({
  name: "User Data",
  initialState,
  reducers: {
    setUserEmail: (state, { payload }) => {
      state.userData.email = payload
    },
    setUserPassword: (state, { payload }) => {
      state.userData.password = payload
    }
  }
})

export const { setUserEmail, setUserPassword } = userData.actions
export default userData.reducer

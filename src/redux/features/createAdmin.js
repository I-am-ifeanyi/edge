import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  adminCompleteInfo: {
    getStarted: {},
    schoolProfile: {},
    adminLogo: "",
    schoolStructure: {},
    setCustomSchoolStructure: {},
    session: {},
    inviteInstructor: {},
    learnersInvite: {}
  }
}

const createAdmin = createSlice({
  name: "Admin Data",
  initialState,
  reducers: {
    setGetStarted: (state, { payload }) => {
      state.adminCompleteInfo.getStarted = payload
    },
    setSchoolProfile: (state, { payload }) => {
      state.adminCompleteInfo.schoolProfile = payload
    },
    setAdminLogo: (state, { payload }) => {
      state.adminCompleteInfo.adminLogo = payload
    },
    setSchoolStructure: (state, { payload }) => {
      state.adminCompleteInfo.schoolStructure = payload
    },
    setCustomSchoolStructure: (state, { payload }) => {
      state.adminCompleteInfo.setCustomSchoolStructure = payload
    },
    setSession: (state, { payload }) => {
      state.adminCompleteInfo.session = payload
    },
    setInviteInstructor: (state, { payload }) => {
      state.adminCompleteInfo.inviteInstructor = payload
    },
    setLearnerInvite: (state, { payload }) => {
      state.adminCompleteInfo.learnersInvite = payload
    }
  }
})

export const {
  setGetStarted,
  setSchoolProfile,
  setAdminLogo,
  setSchoolStructure,
  setCustomSchoolStructure,
  setSession,
  setInviteInstructor,
  setLearnerInvite
} = createAdmin.actions
export default createAdmin.reducer

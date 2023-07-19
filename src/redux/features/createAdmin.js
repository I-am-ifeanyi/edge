import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  adminCompleteInfo: {
    getStarted: {
      email: "",
      name: "",
      password: ""
    },
    schoolProfile: {
      schoolName: "",
      schoolMotto: "",
      schoolWebsite: ""
    },
    adminLogo: "",
    schoolStructure: {
      schoolType: "",
      groupType: "",
      customOrganizationGroups: ""
    },
    session: {
      sessionTimeFrame: "",
      sessionFrequency: ""
    }
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
    setSession: (state, { payload }) => {
      state.adminCompleteInfo.session = payload
    }
  }
})

export const {
  setGetStarted,
  setSchoolProfile,
  setAdminLogo,
  setSchoolStructure,
  setSession
} = createAdmin.actions
export default createAdmin.reducer

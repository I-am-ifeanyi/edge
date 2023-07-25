import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  adminCompleteInfo: {
    getStarted: {},
    schoolProfile: {},
    adminLogo: "",
    schoolStructure: {},
    customSchoolStructure: {
      CSVfile: "",
      branches: ""
    },
    session: {},
    inviteInstructor: {
      instructorsAlias: "",
      instructorsCSVlist: ""
    },
    learnersInvite: {
      learnersAlias: "",
      learnersCSVlist: ""
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
    setCustomCSVfile: (state, { payload }) => {
      state.adminCompleteInfo.customSchoolStructure.CSVfile = payload
    },
    setCustomBranches: (state, { payload }) => {
      state.adminCompleteInfo.customSchoolStructure.branches = payload
    },
    setSession: (state, { payload }) => {
      state.adminCompleteInfo.session = payload
    },
    setInstructorCSVlist: (state, { payload }) => {
      state.adminCompleteInfo.inviteInstructor.instructorsCSVlist = payload
    },
    setInstructorAlias: (state, { payload }) => {
      state.adminCompleteInfo.inviteInstructor.instructorsAlias = payload
    },
    setLearnersCSVlist: (state, { payload }) => {
      state.adminCompleteInfo.learnersInvite.learnersCSVlist = payload
    },
    setLearnersAlias: (state, { payload }) => {
      state.adminCompleteInfo.learnersInvite.learnersAlias = payload
    }
  }
})

export const {
  setGetStarted,
  setSchoolProfile,
  setAdminLogo,
  setSchoolStructure,
  setCustomCSVfile,
  setCustomBranches,
  setSession,
  setInstructorCSVlist,
  setInstructorAlias,
  setLearnersCSVlist,
  setLearnersAlias
} = createAdmin.actions
export default createAdmin.reducer

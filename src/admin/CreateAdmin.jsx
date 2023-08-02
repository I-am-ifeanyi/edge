import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "animate.css"

import {
  LogoHeader,
  CONSTANTS,
  backgroundStyle,
  fetchLocalUserData,
  locallyStoreUserData
} from "../components/Components"
import GetStarted from "./registrationComponents/GetStarted"
import CreateSchoolProfile from "./registrationComponents/CreateSchoolProfile"
import SchoolStructure from "./registrationComponents/SchoolStructure"
import CustomSchoolStructure from "./registrationComponents/CustomSchoolStructure"
import CreateNewSession from "./registrationComponents/CreateNewSession"
import InviteInstructors from "./registrationComponents/InviteInstructors"
import LearnersInvite from "./registrationComponents/LearnersInvite"
import LoginAdmin from "./registrationComponents/LoginAdmin"
import "animate.css"

import { useDispatch, useSelector } from "react-redux"
import {
  setGetStarted,
  setSchoolProfile,
  setSchoolStructure,
  setCustomBranches,
  setSession,
  setInstructorAlias,
  setLearnersAlias
} from "../redux/features/createAdmin"
import { useForm } from "react-hook-form"

const CreateAdmin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { adminCompleteInfo } = useSelector((store) => store.adminInfo)
  const form = useForm()
  const { register, control, handleSubmit, formState, reset, errors } = form

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isPasswordMatch, setIsPasswordMatch] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isNext, setIsNext] = useState({
    getStarted: true,
    schoolProfile: false,
    schoolStructure: false,
    customStructure: false,
    session: false,
    instructorInvite: false,
    learnerInvite: false,
    loginAdmin: false
  })
  const {
    getStarted,
    schoolProfile,
    schoolStructure,
    customStructure,
    session,
    instructorInvite,
    learnerInvite,
    loginAdmin
  } = isNext
  const [userInfo, setUserInfo] = useState("")

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  const onGetStartedSubmit = (data) => {
    dispatch(setGetStarted(data))
    locallyStoreUserData("adminUser", data)
    setIsNext({
      getStarted: false,
      schoolProfile: true,
      schoolStructure: false,
      customStructure: false,
      session: false,
      instructorInvite: false,
      learnerInvite: false
    })
    reset()
  }

  const onSchoolProfileSubmit = (data) => {
    dispatch(setSchoolProfile(data))
    setIsNext({
      getStarted: false,
      schoolProfile: false,
      schoolStructure: true,
      customStructure: false,
      session: false,
      instructorInvite: false,
      learnerInvite: false
    })
  }

  const schoolStructureSummit = (data) => {
    dispatch(setSchoolStructure(data))
    setIsNext({
      getStarted: false,
      schoolProfile: false,
      schoolStructure: false,
      customStructure: false,
      session: true,
      instructorInvite: false,
      learnerInvite: false
    })

    console.log(data)
  }

  const onCustomStructureSubmit = (data) => {
    dispatch(setCustomBranches(data))
    setIsNext({
      getStarted: false,
      schoolProfile: false,
      schoolStructure: false,
      customStructure: false,
      session: true,
      instructorInvite: false,
      learnerInvite: false
    })
  }

  const onNewSessionSubmit = (data) => {
    dispatch(setSession(data))
    setIsNext({
      getStarted: false,
      schoolProfile: false,
      schoolStructure: false,
      customStructure: false,
      session: false,
      instructorInvite: true,
      learnerInvite: false
    })
  }

  const onInstructorInviteSubmit = (data) => {
    dispatch(setInstructorAlias(data))
    setIsNext({
      getStarted: false,
      schoolProfile: false,
      schoolStructure: false,
      customStructure: false,
      session: false,
      instructorInvite: false,
      learnerInvite: true
    })
  }

  const learnersInvite = (data) => {
    dispatch(setLearnersAlias(data))

    setIsNext({
      getStarted: false,
      schoolProfile: false,
      schoolStructure: false,
      customStructure: false,
      session: false,
      instructorInvite: false,
      learnerInvite: false,
      loginAdmin: true
    })
    locallyStoreUserData("completeAdminInfo", adminCompleteInfo)
  }

  const findSchoolType1 = (e) => {
    if (e.target.value === "Custom") {
      setIsNext({
        getStarted: false,
        schoolProfile: false,
        schoolStructure: false,
        customStructure: true,
        session: false
      })
    }
  }

  const onLoginSubmit = (data) => {
    const adminUser = fetchLocalUserData("adminUser")
    const completeAdminInfo = fetchLocalUserData("completeAdminInfo")
    const { email, password } = adminUser
    if (data.email === email && data.password === password) {
      navigate("/admin/dashboard")
    } else navigate("/admin/dashboard")
  }

  const passwordChange = (e) => {
    setPassword(e.target.value)
  }

  const checkPasswordMatch = (e) => {
    const confirmPassword = e.target.value
    setConfirmPassword(confirmPassword)
    if (confirmPassword === password) {
      setIsPasswordMatch(true)
    } else return
  }
  useEffect(() => {
    const data = fetchLocalUserData("userInfo")
    setUserInfo(data)
  }, [])

  const buttonText1 = "Back"
  const buttonText2 = "Next"

  const schoolStructureReverse = () =>
    setIsNext({
      getStarted: false,
      schoolProfile: true,
      schoolStructure: false,
      customStructure: false,
      session: false,
      instructorInvite: false,
      learnerInvite: false
    })

  const learnersInviteReverse = () =>
    setIsNext({
      getStarted: false,
      schoolProfile: false,
      adminLogo: false,
      schoolStructure: false,
      customStructure: false,
      session: false,
      instructorInvite: true,
      learnerInvite: false
    })

  const inviteInstructorReverse = () =>
    setIsNext({
      getStarted: false,
      schoolProfile: false,
      adminLogo: false,
      schoolStructure: false,
      customStructure: false,
      session: true,
      instructorInvite: false,
      learnerInvite: false
    })

  return (
    <>
      <div
        className="h-screen flex flex-col-reverse md:flex-row items-center w-full justify-center relative z-50"
        style={backgroundStyle}
      >
        <div className="w-full flex flex-col md:flex-row items-center justify-center ">
          <LogoHeader
            isNext={isNext}
            setIsNext={setIsNext}
            loginAdmin={loginAdmin}
          />

          <div className="w-full md:w-auto md:h-screen relative flex items-center justify-center ">
            {getStarted && (
              <GetStarted
                onGetStartedSubmit={onGetStartedSubmit}
                form={form}
                isPasswordVisible={isPasswordVisible}
                passwordChange={passwordChange}
                togglePasswordVisibility={togglePasswordVisibility}
                checkPasswordMatch={checkPasswordMatch}
                password={password}
                isPasswordMatch={isPasswordMatch}
                confirmPassword={confirmPassword}
              />
            )}

            {schoolProfile && (
              <CreateSchoolProfile
                form={form}
                onSchoolProfileSubmit={onSchoolProfileSubmit}
                setIsNext={setIsNext}
                buttonText1={buttonText1}
                buttonText2={buttonText2}
              />
            )}

            {schoolStructure && (
              <SchoolStructure
                setIsNext={setIsNext}
                form={form}
                schoolStructureSummit={schoolStructureSummit}
                findSchoolType={findSchoolType1}
                buttonText1={buttonText1}
                buttonText2={buttonText2}
                schoolStructureReverse={schoolStructureReverse}
              />
            )}

            {customStructure && (
              <CustomSchoolStructure
                setIsNext={setIsNext}
                form={form}
                onCustomStructureSubmit={onCustomStructureSubmit}
                buttonText1={buttonText1}
                buttonText2={buttonText2}
              />
            )}

            {session && (
              <CreateNewSession
                form={form}
                onNewSessionSubmit={onNewSessionSubmit}
                setIsNext={setIsNext}
                buttonText1={buttonText1}
                buttonText2={buttonText2}
              />
            )}

            {instructorInvite && (
              <InviteInstructors
                form={form}
                onInstructorInviteSubmit={onInstructorInviteSubmit}
                setIsNext={setIsNext}
                buttonText1={buttonText1}
                buttonText2={buttonText2}
                inviteInstructorReverse={inviteInstructorReverse}
              />
            )}

            {learnerInvite && (
              <LearnersInvite
                form={form}
                learnersInvite={learnersInvite}
                setIsNext={setIsNext}
                buttonText1={buttonText1}
                buttonText2={buttonText2}
                learnersInviteReverse={learnersInviteReverse}
              />
            )}

            {loginAdmin && (
              <LoginAdmin
                form={form}
                isPasswordVisible={isPasswordVisible}
                passwordChange={passwordChange}
                togglePasswordVisibility={togglePasswordVisibility}
                onLoginSubmit={onLoginSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateAdmin

import React, { useState, useEffect } from 'react'
import { useNavigate, redirect } from 'react-router-dom';
import 'animate.css';

import { LogoHeader, CONSTANTS, backgroundStyle, fetchLocalUserData, locallyStoreUserData } from '../components/Components';
import GetStarted from './registrationComponents/GetStarted';
import CreateSchoolProfile from './registrationComponents/CreateSchoolProfile';
import SchoolStructure from './registrationComponents/SchoolStructure';
import CustomSchoolStructure from './registrationComponents/CustomSchoolStructure';
import CreateNewSession from './registrationComponents/CreateNewSession';
import InviteInstructors from './registrationComponents/InviteInstructors';
import LearnersInvite from './registrationComponents/LearnersInvite';
import LoginAdmin from './registrationComponents/LoginAdmin';
import { Caveats } from '../components/Components';
import 'animate.css';



import { useDispatch, useSelector } from 'react-redux'
import {
    setGetStarted,
    setSchoolProfile,
    setSchoolStructure,
    setCustomBranches,
    setSession,
    setInstructorAlias,
    setLearnersAlias,
} from "../redux/features/createAdmin"
import { useForm } from "react-hook-form"




const CreateAdmin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { adminCompleteInfo } = useSelector((store) => store.adminInfo)
    const form = useForm()
    const { register, control, handleSubmit, formState, reset, errors } = form


    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
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
    const { getStarted, schoolProfile, schoolStructure, customStructure, session, instructorInvite, learnerInvite, loginAdmin } = isNext
    const [userInfo, setUserInfo] = useState('')




    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prev => !prev)
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

    const onLoginSubmit = (data) => {
        const adminUser = fetchLocalUserData("adminUser")
        const completeAdminInfo = fetchLocalUserData("completeAdminInfo")
        const { email, password } = adminUser
        if (data.email === email && data.password === password) {
            navigate("adminHomepage")

        } else navigate("adminHomepage")

    }

    const passwordChange = (e) => {
        setPassword(e.target.value)

    }

    const checkPasswordMatch = (e) => {
        const confirmPassword = e.target.value;
        setConfirmPassword(confirmPassword)
        if (confirmPassword === password) {
            setIsPasswordMatch(true)
        } else return
    }
    useEffect(() => {
        const data = fetchLocalUserData("userInfo");
        setUserInfo(data);
    }, []);








    return (
        <>
            <div className='h-screen flex flex-col-reverse md:flex-row items-center w-full justify-center relative z-50' style={backgroundStyle}>
                <div className='w-full flex flex-col md:flex-row items-center justify-center ' >
                    <LogoHeader isNext={isNext} setIsNext={setIsNext} loginAdmin={loginAdmin} />


                    <div className='w-full md:w-auto md:h-screen relative flex items-center justify-center '>

                        {getStarted && <GetStarted onGetStartedSubmit={onGetStartedSubmit} form={form} isPasswordVisible={isPasswordVisible} passwordChange={passwordChange} togglePasswordVisibility={togglePasswordVisibility} checkPasswordMatch={checkPasswordMatch} password={password} isPasswordMatch={isPasswordMatch} confirmPassword={confirmPassword} />}

                        {schoolProfile && <CreateSchoolProfile form={form} onSchoolProfileSubmit={onSchoolProfileSubmit} setIsNext={setIsNext} />}

                        {schoolStructure && <SchoolStructure setIsNext={setIsNext} form={form} schoolStructureSummit={schoolStructureSummit} />}

                        {customStructure && <CustomSchoolStructure setIsNext={setIsNext} form={form} onCustomStructureSubmit={onCustomStructureSubmit} />}

                        {session && <CreateNewSession form={form} onNewSessionSubmit={onNewSessionSubmit} setIsNext={setIsNext} />}

                        {instructorInvite && <InviteInstructors form={form} onInstructorInviteSubmit={onInstructorInviteSubmit} setIsNext={setIsNext} />}

                        {learnerInvite && <LearnersInvite form={form} learnersInvite={learnersInvite} setIsNext={setIsNext} />}

                        {loginAdmin && <LoginAdmin form={form} isPasswordVisible={isPasswordVisible} passwordChange={passwordChange} togglePasswordVisibility={togglePasswordVisibility} onLoginSubmit={onLoginSubmit} />}


                    </div>

                </div>
                {schoolStructure && <Caveats bg="bg-colorYellow" textColor='text-colorGray2' title="NOTE" body="School types include:" body2="- Primary School" body3="- Secondary School" body4="- Custom" />}


                {customStructure && <Caveats bg="bg-colorYellow" textColor='text-colorGray2' title="NOTE" body="Custom structure allows for importation of custom school groups" title2="CSV STRUCTURE" bg2="bg-colorLightGreen" textColor2="text-colorGray2" bodyA="- Group Names" bodyB="- Max Users" />}


                {session && <Caveats bg="bg-colorYellow" textColor='text-colorGray2' title="NOTE" body="Sessions would be used to manage student’s classes and school fees only. 
                Course contents shouldn’t be affected by new sessions." title2="NOTE" bg2="bg-colorYellow" textColor2="text-colorGray2" bodyA="Session frequency includes:" bodyB="- Quarterly" bodyC="- Triannual" bodyD="- Biannual" />}

                {instructorInvite && <Caveats bg="bg-colorLightGreen" textColor='text-colorGray2' title="CSV STRUCTURE" body="- Full Name" body2="- Gender" body3="- Phone Number" body4="- Email" />}


                {learnerInvite && <Caveats bg="bg-colorLightGreen" textColor='text-colorGray2' title="CSV STRUCTURE" body="- Full Name" body2="- Reg Number" body3="- Gender" body4="- Phone Number" body5="- Email" body6="- Group" body7="- Branch" />}

            </div>

        </>
    )
}

export default CreateAdmin
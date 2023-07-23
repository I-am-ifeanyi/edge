import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import 'animate.css';
import { LogoHeader, CONSTANTS, backgroundStyle, fetchLocalUserData, locallyStoreUserData } from '../components/Components';
import GetStarted from './components/GetStarted';
import CreateSchoolProfile from './components/CreateSchoolProfile';
import SchoolStructure from './components/SchoolStructure';
import CustomSchoolStructure from './components/CustomSchoolStructure';
import CreateNewSession from './components/CreateNewSession';
import { Caveats } from '../components/Components';
import 'animate.css';



import { useDispatch, useSelector } from 'react-redux'
import {
    setGetStarted,
    setSchoolProfile,
    setAdminLogo,
    setSchoolStructure,
    setCustomSchoolStructure,
    setSession
} from "../redux/features/createAdmin"
import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools'




const CreateAdmin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { adminCompleteInfo } = useSelector((store) => store.adminInfo)
    const form = useForm()

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isPasswordMatch, setIsPasswordMatch] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isNext, setIsNext] = useState({
        getStarted: true,
        schoolProfile: false,
        schoolStructure: false,
        customStructure: false,
        session: false

    })
    const { getStarted, schoolProfile, schoolStructure, customStructure, session } = isNext
    const [userInfo, setUserInfo] = useState('')




    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prev => !prev)
    }

    const onGetStartedSubmit = (data) => {
        dispatch(setGetStarted(data))
        setIsNext({
            getStarted: false,
            schoolProfile: true,
            schoolStructure: false,
            customStructure: false,
            session: false
        })

    }


    const onSchoolProfileSubmit = (data) => {
        dispatch(setSchoolProfile(data))
        setIsNext({
            getStarted: false,
            schoolProfile: false,
            schoolStructure: true,
            customStructure: false,
            session: false
        })
    }

    const schoolStructureSummit = (data) => {
        dispatch(setSchoolStructure(data))
        setIsNext({
            getStarted: false,
            schoolProfile: false,
            schoolStructure: false,
            customStructure: false,
            session: true
        })
        console.log(adminCompleteInfo.schoolStructure)

    }

    const onCustomStructureSubmit = (data) => {
        dispatch(setCustomSchoolStructure(data))
        setIsNext({
            getStarted: false,
            schoolProfile: false,
            schoolStructure: false,
            customStructure: true,
            session: false
        })
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




    console.log(adminCompleteInfo)

    return (
        <div className='h-screen flex flex-col-reverse md:flex-row items-center w-full justify-center' style={backgroundStyle}>
            <div className='w-full flex flex-col md:flex-row items-center justify-center ' >
                <LogoHeader isNext={isNext} />


                <div className='w-full md:w-auto md:h-screen relative flex items-center justify-center '>

                    {/* {getStarted && <GetStarted onGetStartedSubmit={onGetStartedSubmit} form={form} isPasswordVisible={isPasswordVisible} passwordChange={passwordChange} togglePasswordVisibility={togglePasswordVisibility} checkPasswordMatch={checkPasswordMatch} password={password} isPasswordMatch={isPasswordMatch} confirmPassword={confirmPassword} />}

                    {schoolProfile && <CreateSchoolProfile form={form} onSchoolProfileSubmit={onSchoolProfileSubmit} setIsNext={setIsNext} />}
                    {schoolStructure && <SchoolStructure setIsNext={setIsNext} form={form} schoolStructureSummit={schoolStructureSummit} />}
                    {customStructure && <CustomSchoolStructure setIsNext={setIsNext} form={form} onCustomStructureSubmit={onCustomStructureSubmit} />} */}
                    <CreateNewSession form={form} />

                </div>
               
            </div>
           
        </div>
    )
}

export default CreateAdmin
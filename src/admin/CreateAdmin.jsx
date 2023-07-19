import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import 'animate.css';
import { LogoHeader, CONSTANTS, backgroundStyle, fetchLocalUserData, locallyStoreUserData } from '../components/Components';
import GetStarted from './components/GetStarted';
import CreateSchoolProfile from './components/CreateSchoolProfile';


import { useDispatch, useSelector } from 'react-redux'
import {
    setGetStarted,
    setSchoolProfile,
    setAdminLogo,
    setSchoolStructure,
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
        adminLogo: false,
        schoolStructure: false,
        session: false

    })
    const { getStarted, schoolProfile, adminLogo, schoolStructure, session } = isNext
    const [progressWidth, setProgressWidth] = useState("14.3%");
    const [userInfo, setUserInfo] = useState('')




    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prev => !prev)
    }

    const onGetStartedSubmit = (data) => {
        dispatch(setGetStarted(data))
        setIsNext({
            getStarted: false,
            schoolProfile: true,
            adminLogo: false,
            schoolStructure: false,
            session: false
        })
        console.log(adminCompleteInfo.getStarted)

    }

    
    const onSchoolProfileSubmit = (data) => {
        dispatch(setSchoolProfile(data))
        console.log(adminCompleteInfo.schoolProfile)

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

    useEffect(() => {
        if (schoolProfile) {
            setProgressWidth("28.6%");
        } else if (adminLogo) {
            setProgressWidth(prevWidth => prevWidth * 3);
        } else if (schoolStructure) {
            setProgressWidth(prevWidth => prevWidth * 4);
        } else if (session) {
            setProgressWidth(prevWidth => prevWidth * 5);
        }
    }, [getStarted, schoolProfile, adminLogo, schoolStructure, session]);


    console.log(adminCompleteInfo)


    return (
        <div className='h-screen overflow-hidden' style={backgroundStyle}>
            <div className='w-full h-screen relative flex items-center justify-center'>
                <LogoHeader />
                <div className={`absolute top-14 h-1 w-[${progressWidth}] left-0 bg-colorBlue`}></div>


                {/* {getStarted && <GetStarted onGetStartedSubmit={onGetStartedSubmit} form={form} isPasswordVisible={isPasswordVisible} passwordChange={passwordChange} togglePasswordVisibility={togglePasswordVisibility} checkPasswordMatch={checkPasswordMatch} password={password} isPasswordMatch={isPasswordMatch} confirmPassword={confirmPassword} />} */}

                <CreateSchoolProfile form={form} onSchoolProfileSubmit={onSchoolProfileSubmit} />
            </div>
        </div>
    )
}

export default CreateAdmin
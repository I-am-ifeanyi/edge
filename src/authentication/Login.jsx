import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import { LogoHeader, CONSTANTS, backgroundStyle, fetchLocalUserData, locallyStoreUserData } from '../components/Components';


import { useDispatch } from 'react-redux'
import { setUserEmail, setUserPassword } from '../redux/features/userData'
import { useSelector } from 'react-redux'
import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools'
import { Button } from '../components/Components'
import { PasswordStrengthBar } from '../components/Components'

import { AiFillCaretDown, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

import avatar from "../assets/email-avatar.png"


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userData } = useSelector((store) => store.userInfo)
    const form = useForm()
    const { register, control, handleSubmit, formState, reset } = form
    const { errors, isSubmitSuccessful, isSubmitting, isSubmitted } = formState
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isPasswordMatch, setIsPasswordMatch] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isNext, setIsNext] = useState(false)
    const [userInfo, setUserInfo] = useState('')

    const { EMAIL_PLACEHOLDER, PASSWORD_PLACEHOLDER, CONFIRM_PASSWORD_PLACEHOLDER, SIGN_IN_BUTTON_TEXT } = CONSTANTS



    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prev => !prev)
    }

    const onEmailSubmit = (data) => {
        dispatch(setUserEmail(data.email))
        setIsNext(true)

    }
    const onPasswordSubmit = (data) => {
        dispatch(setUserPassword(data.password))
        if (userData) {
            locallyStoreUserData("userInfo", userData)
            navigate('home-page')
        }

    }
    const email = userData?.email
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

    if (userInfo) {
        console.log(userInfo)

    }

    return (
        <div className='h-screen overflow-hidden' style={backgroundStyle}>
            <div className='w-full h-screen relative flex items-center justify-center'>
                <LogoHeader />

                {isNext ? <div className='w-[90%] md:w-[360px] h-[360px] flex-shrink-0 bg-white rounded-md shadow-md md:px-8 px-5 py-5 flex flex-col items-center justify-around animate__animated animate__fadeInRight' >
                    <h4 className=''>Set Password</h4>
                    <div className='flex items-center gap-2 border border-colorGray5 rounded-3xl px-4 py-2'>
                        <img src={avatar} alt="" className='w-[30px]' />
                        <p>{email}</p>
                        <AiFillCaretDown />
                    </div>
                    <form onSubmit={handleSubmit(onPasswordSubmit)} noValidate className='w-full '>
                        <div className='w-full flex flex-col gap-4'>
                            <div>
                                <fieldset className='w-full border rounded-lg border-colorWhite3 bg-colorWhite2 h-[50px] px-2 shadow flex items-center'>


                                    <input type={isPasswordVisible ? "text" : "password"} id="password" placeholder={PASSWORD_PLACEHOLDER} className="outline-none w-full bg-transparent"  {...register(`password`, {
                                        required: {
                                            value: true,
                                            message: 'Please fill in your password'
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                            message:
                                                '',
                                        },
                                    })} onChange={passwordChange}
                                    />
                                    {isPasswordVisible ? <AiOutlineEye size={20} className='text-colorGray5' onClick={togglePasswordVisibility} /> : <AiOutlineEyeInvisible size={20} className='text-colorGray5' onClick={togglePasswordVisibility} />}
                                </fieldset>
                                {<p className='text-colorRed text-[10px]'>{errors.password?.message}</p>}
                            </div>
                            <div>
                                <fieldset className='w-full border rounded-lg border-colorWhite3 bg-colorWhite2 h-[50px] px-2 shadow flex items-center'>


                                    <input type={isPasswordVisible ? "text" : "password"} id="confirmPassword" placeholder={CONFIRM_PASSWORD_PLACEHOLDER} className="outline-none w-full bg-transparent"  {...register(`confirmPassword`, {
                                        required: {
                                            value: true,
                                            message: 'Please confirm your password'
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                            message:
                                                'Password must be at least 8 characters long and contain at least one letter, one number, and one special character',
                                        },
                                    })} onChange={checkPasswordMatch} />
                                    {isPasswordVisible ? <AiOutlineEye size={20} className='text-colorGray5' onClick={togglePasswordVisibility} /> : <AiOutlineEyeInvisible size={20} className='text-colorGray5' onClick={togglePasswordVisibility} />}
                                </fieldset>
                                {<p className='text-colorRed text-[10px]'>{errors.confirmPassword?.message}</p>}

                            </div>
                            {password && <PasswordStrengthBar password={password} />}
                            {(!isPasswordMatch && confirmPassword) && <p className='text-colorRed text-[12px]'>Password not a match</p>
                            }
                        </div>

                        <div className='h-[38px] mt-10'>
                            <Button text={SIGN_IN_BUTTON_TEXT} background="bg-colorBlue" color="text-colorWhite1" />

                        </div>
                    </form>

                </div>
                    :
                    <div className='w-[80%] md:w-[360px] h-[360px] flex-shrink-0 bg-white rounded-md shadow-md md:px-8 px-5 py-5 flex flex-col items-center justify-around'>
                        <h4 className=''>Get Started</h4>
                        <p className='text-center'>Welcome to Edge LMS, please input your work email below to get started.</p>
                        <form onSubmit={handleSubmit(onEmailSubmit)} noValidate className='w-full '>
                            <div className='w-full'>
                                <fieldset className='w-full h-[50px]'>


                                    <input type="email" id="email" placeholder={EMAIL_PLACEHOLDER} className="outline-none w-full border border-colorWhite3 rounded-lg bg-colorWhite2 h-full px-2 shadow"  {...register(`email`, {
                                        required: {
                                            value: true,
                                            message: 'Please fill in your email'
                                        },
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Please enter a valid email address',
                                        },
                                    })} />
                                </fieldset>
                                {<p className='text-red-700 text-[12px]'>{errors.email?.message}</p>}
                                <p className='text-colorLightGreen py-4 text-center'>Forgot Email?</p>

                            </div>

                            <div className='h-[38px]'>
                                <Button text="Next" background="bg-colorBlue" color="text-colorWhite1" />

                            </div>
                        </form>

                    </div>}
            </div>
        </div>
    )
}

export default Login
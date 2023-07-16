import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { setUserEmail, setUserPassword } from '../redux/features/userData'
import { useSelector } from 'react-redux'
import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools'
import { Button } from '../components'
import { PasswordStrengthBar } from '../components'

import { AiFillCaretDown, AiOutlineEye } from "react-icons/ai"

import Logo from "../assets/Logo.png"
import background from "../assets/Shape.png"
import avatar from "../assets/email-avatar.png"


const Login = () => {
    const dispatch = useDispatch()
    const { userData } = useSelector((store) => store.userInfo)
    const form = useForm()
    const { register, control, handleSubmit, formState, reset } = form
    const { errors, isSubmitSuccessful, isSubmitting, isSubmitted } = formState
    const [password, setPassword] = useState('')

    const style = {
        backgroundImage: `url('${background}')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',


    }

    const onSubmit = (data) => {
        dispatch(setUserEmail(data.email))
        console.log(data)
        console.log(userData.email)

    }
    const email = userData?.email
    const passwordChange = (e) => {
        setPassword(e.target.value)

    }
    console.log(password)
    return (
        <div className='bg-[#E5E5E5] w-full h-screen overflow-hidden' style={style}>
            <div className='w-full h-screen relative flex items-center justify-center'>

                <header className='border md:px-10 px-2 py-2 shadow absolute w-full top-0'>
                    <img src={Logo} />

                </header>
                <div className='w-[80%] md:w-[360px] h-[360px] flex-shrink-0 bg-white rounded-md shadow-md md:px-8 px-5 py-5 flex flex-col items-center justify-around'>
                    <h4 className=''>Set Password</h4>
                    <div className='flex items-center gap-2'>
                        <img src={avatar} alt="" className='w-[30px]' />
                        <p>{email}</p>
                        <AiFillCaretDown />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate className='w-full '>
                        <div className='w-full'>
                            <fieldset className='w-full border rounded-lg border-[#F1F1F5] bg-[#FAFAFB] h-[40px] px-2 shadow flex items-center'>


                                <input type="password" id="password" placeholder='Create Password' className="outline-none w-full bg-transparent"  {...register(`password`, {
                                    required: {
                                        value: true,
                                        message: 'Please fill in your password'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                        message:
                                            'Password must be at least 8 characters long and contain at least one letter, one number, and one special character',
                                    },
                                })} onChange={passwordChange}
                                />
                                <AiOutlineEye size={20} className='text-[#92929D]' />
                            </fieldset>
                            {<p className='text-red-700 text-[12px]'>{errors.password?.message}</p>}
                            <fieldset className='w-full border rounded-lg border-[#F1F1F5] bg-[#FAFAFB] h-[40px] px-2 shadow flex items-center'>


                                <input type="confirmPassword" id="confirmPassword" placeholder='Confirm Password' className="outline-none w-full bg-transparent"  {...register(`confirmPassword`, {
                                    required: {
                                        value: true,
                                        message: 'Please confirm your password'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                        message:
                                            'Password must be at least 8 characters long and contain at least one letter, one number, and one special character',
                                    },
                                })} />
                                <AiOutlineEye size={20} className='text-[#92929D]' />
                            </fieldset>
                            {<p className='text-red-700 text-[12px]'>{errors.confirmPassword?.message}</p>}

                        </div>
                        {password && <PasswordStrengthBar password={password} />}


                        <div className='h-[38px]'>
                            <Button text="Sign in" background="bg-colorBlue" color="text-white" />

                        </div>
                    </form>
                    <DevTool control={control} />

                </div>
                {/* <div className='w-[80%] md:w-[360px] h-[360px] flex-shrink-0 bg-white rounded-md shadow-md md:px-8 px-5 py-5 flex flex-col items-center justify-around'>
                    <h4 className=''>Get Started</h4>
                    <p className='text-center'>Welcome to Edge LMS, please input your work email below to get started.</p>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate className='w-full '>
                        <div className='w-full'>
                            <fieldset className='w-full'>


                                <input type="email" id="email" placeholder='Email' className="outline-none w-full border rounded-lg border-[#F1F1F5] bg-[#FAFAFB] h-[40px] px-2 shadow"  {...register(`email`, {
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
                            <Button text="Next" background="bg-colorBlue" color="text-white" />

                        </div>
                    </form>
                    <DevTool control={control} />

                </div> */}
            </div>
        </div>
    )
}

export default Login
import React from 'react'
import { Link } from 'react-router-dom'

import InputElements from '../../components/InputElements'
import { Button } from '../../components/Components'
import { PasswordStrengthBar } from '../../components/Components'


const GetStarted = ({ onGetStartedSubmit, form, isPasswordVisible, passwordChange, togglePasswordVisibility, checkPasswordMatch, password, isPasswordMatch, confirmPassword }) => {
    const { register, control, handleSubmit, formState, reset } = form

    return (
        <div className='w-[90%] md:w-[360px] min-h-[360px] flex-shrink-0 bg-white rounded-md shadow-md md:px-8 px-5 py-5 flex flex-col items-center justify-around'>
            <h4 className=''>Get Started</h4>
            <form onSubmit={handleSubmit(onGetStartedSubmit)} noValidate className='w-full flex flex-col gap-4'>
                <InputElements type="email" id="email" form={form} />
                <InputElements type={isPasswordVisible ? "text" : "password"} form={form} isPasswordVisible={isPasswordVisible} passwordChange={passwordChange} togglePasswordVisibility={togglePasswordVisibility} checkPasswordMatch={checkPasswordMatch} id="password" />
                <InputElements type={isPasswordVisible ? "text" : "password"} form={form} isPasswordVisible={isPasswordVisible} passwordChange={passwordChange} togglePasswordVisibility={togglePasswordVisibility} checkPasswordMatch={checkPasswordMatch} id="confirmPassword" />

        
                {password && <PasswordStrengthBar password={password} />}
                {(!isPasswordMatch && confirmPassword) && <p className='text-colorRed text-[12px]'>Password not a match</p>
                }

                <div className='h-[38px]'>
                    <Button text="Start Account Setup" background="bg-colorBlue" color="text-colorWhite1" />

                </div>
                <Link to="#" className='text-center text-[12px] text-colorBlue'>Already have an account? Log in</Link>
            </form>

        </div>
    )
}

export default GetStarted
import React from 'react'
import { Link } from 'react-router-dom'

import InputElements from '../../components/InputElements'
import { Button } from '../../components/Components'


const AdminLogin = ({ onLoginSubmit, form, isPasswordVisible, passwordChange, togglePasswordVisibility}) => {
    const { register, control, handleSubmit, formState, reset } = form

    return (
        <div className='w-[90%] md:w-[360px] min-h-[360px] flex-shrink-0 bg-white rounded-md shadow-md md:px-8 px-5 py-5 flex flex-col items-center justify-around'>
            <h4 className=''>Login</h4>
            <form onSubmit={handleSubmit(onLoginSubmit)} noValidate className='w-full flex flex-col gap-4'>
                <InputElements type="email" id="email" form={form} />
                
                <InputElements type={isPasswordVisible ? "text" : "password"} form={form} isPasswordVisible={isPasswordVisible} passwordChange={passwordChange} togglePasswordVisibility={togglePasswordVisibility} id="password" />


               

                <div className='h-[38px]'>
                    <Button text="Login" background="bg-colorBlue" color="text-colorWhite1" />

                </div>
                <Link to="#" className='text-center text-[12px] text-colorBlue'>Don't have an account? Sign up</Link>
            </form>

        </div>
    )
}

export default AdminLogin
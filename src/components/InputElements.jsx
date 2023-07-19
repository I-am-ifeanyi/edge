import React from 'react'

import { CONSTANTS } from './Components'
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineCloudUpload } from "react-icons/ai"


const InputElements = ({ type, form, isPasswordVisible, passwordChange, togglePasswordVisibility, id, checkPasswordMatch }) => {
    const { EMAIL_PLACEHOLDER, PASSWORD_PLACEHOLDER, CONFIRM_PASSWORD_PLACEHOLDER } = CONSTANTS
    const { register, control, handleSubmit, formState, reset } = form
    const { errors, isSubmitSuccessful, isSubmitting, isSubmitted } = formState

    if (type === "email") {
        return (
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
                {<p className='text-colorRed text-[10px]'>{errors.email?.message}</p>}

            </div>
        )
    } else if (type === "password" || type === "text") {
        if (id === "password") {

            return (
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
            )
        } else if (id === "confirmPassword") {
            return (
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
            )
        }
    } else if (type === "file") {
        return (
            <fieldset className='w-full flex flex-col items-center'>
                <label htmlFor={id} className='w-[150px] h-[150px] border-2 border-dotted rounded-md flex items-center justify-center cursor-pointer'> <AiOutlineCloudUpload />Upload</label>
                <input type="file" id={id} className='hidden'  {...register(`${id}`, {
                    required: {
                        value: true,
                        message: 'Please upload school logo'
                    },
                })} />
                {<p className='text-colorRed text-[10px]'>{errors?.schoolLogo?.message}</p>}

            </fieldset>
        )
    }
    return (
        <div>InputElements</div>
    )
}

export default InputElements
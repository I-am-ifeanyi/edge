import React from 'react'

import { CONSTANTS } from './Components'
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineCloudUpload } from "react-icons/ai"


const InputElements = ({ type, form, isPasswordVisible, passwordChange, togglePasswordVisibility, id, checkPasswordMatch, onChange, schoolLogo, placeholder }) => {
    const { EMAIL_PLACEHOLDER, PASSWORD_PLACEHOLDER, CONFIRM_PASSWORD_PLACEHOLDER } = CONSTANTS
    const { register, control, handleSubmit, formState, reset } = form
    const { errors, isSubmitSuccessful, isSubmitting, isSubmitted } = formState

    if (type === "email") {
        return (
            <div className='w-full'>
                <fieldset className='w-full h-[50px]'>


                    <input type="email" id="email" placeholder={EMAIL_PLACEHOLDER} className="outline-none w-full border border-colorWhite3 rounded-lg bg-colorWhite2 h-full px-2"  {...register(`email`, {
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
    } else if (id === "password" || id === "confirmPassword") {
        if (id === "password") {

            return (
                <div>
                    <fieldset className='w-full border rounded-lg border-colorWhite3 bg-colorWhite2 h-[50px] px-2 flex items-center'>


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
                    <fieldset className='w-full border rounded-lg border-colorWhite3 bg-colorWhite2 h-[50px] px-2 flex items-center'>


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
                {schoolLogo && <figure className='w-[150px] h-[150px]'><img className="w-full h-full rounded-md" src={schoolLogo} alt="School Logo" /> </figure>}
                <label htmlFor={id} className={`flex gap-2 w-[150px] ${schoolLogo ? "h-10 mt-2 bg-colorBlue text-colorWhite3 flex flex-row" : "h-[150px] flex-col"} border-2 border-dotted rounded-md text-sm items-center justify-center cursor-pointer`}> <AiOutlineCloudUpload size={20} />{schoolLogo ? "Change Image" : "Upload"}</label>
                <input type="file" id={id} className='hidden'  {...register(`${id}`, {
                    required: {
                        value: true,
                        message: 'Please upload school logo'
                    },
                })} onChange={onChange} />
                {<p className='text-colorRed text-[10px]'>{errors?.schoolLogo?.message}</p>}

            </fieldset>
        )
    } else if (type === "text") {
        return (
            <div className='w-full'>
                <fieldset className='w-full h-[50px]'>


                    <input type="text" id={id} placeholder={placeholder} className="outline-none w-full border border-colorWhite3 rounded-lg bg-colorWhite2 h-full px-2"  {...register(`${id}`, {
                        required: {
                            value: true,
                            message: `Please fill in this field`
                        }
                    })} />
                </fieldset>
                {<p className='text-colorRed text-[10px]'>{errors?.[id]?.message}</p>}

            </div>
        )
    } else if(type === "url") {
        return (
            <div className='w-full'>
                <fieldset className='w-full h-[50px]'>


                    <input type="url" id={id} placeholder={placeholder} className="outline-none w-full border border-colorWhite3 rounded-lg bg-colorWhite2 h-full px-2"  {...register(`${id}`, {
                        required: {
                            value: true,
                            message: `Please fill in this field`
                        }
                    })} />
                </fieldset>
                {<p className='text-colorRed text-[10px]'>{errors?.[id]?.message}</p>}

            </div>
        )
    }
    return (
        <div>InputElements</div>
    )
}

export default InputElements
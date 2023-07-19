import React from 'react'
import { Link } from 'react-router-dom'

import InputElements from '../../components/InputElements'
import { Button } from '../../components/Components'


const CreateSchoolProfile = ({ onSchoolProfileSubmit, form }) => {
    const { register, control, handleSubmit, formState, reset, errors } = form

    return (
        <div className='w-[90%] md:w-[360px] min-h-[360px] flex-shrink-0 bg-white rounded-md shadow-md md:px-8 px-5 py-5 flex flex-col items-center justify-around'>
            <h4 className=''>Create School Profile</h4>
            <form onSubmit={handleSubmit(onSchoolProfileSubmit)} noValidate className='w-full flex flex-col gap-4'>
                <InputElements type="file" id="schoolLogo" form={form} />
               

                <div className='h-[38px]'>
                    <Button text="Start Account Setup" background="bg-colorBlue" color="text-colorWhite1" />

                </div>
                <Link to="#" className='text-center text-[12px] text-colorBlue'>Already have an account? Log in</Link>
            </form>

        </div>
    )
}

export default CreateSchoolProfile
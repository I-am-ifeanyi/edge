import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


import InputElements from '../../components/InputElements'
import { Button } from '../../components/Components'


const SchoolStructure = ({ form, setIsNext }) => {
    const dispatch = useDispatch()
    const { register, control, handleSubmit, formState, reset, errors } = form
    const [age, setAge] = React.useState('');
    const [isGroupSelected, setIsGroupSelected] = useState("none")



    const testSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='w-[90%] md:w-[500px] h-[400px] flex-shrink-0 bg-colorWhite1 rounded-md shadow-md md:px-8 px-5 py-5 flex flex-col items-center animate__animated animate__fadeInRight overflow-y-scroll'>
            <h4 className=''>School Structure</h4>
            <form className='w-full' onSubmit={handleSubmit(testSubmit)} noValidate>
                <InputElements type="select" id="schoolType" label="School Type" form={form} />
                <p>How many groups are in your school?</p>

                <div className={`w-full flex justify-between border border-${isGroupSelected === "js-ss" ? "colorGreen" : null} p-2 gap-1 rounded-md hover:border-colorGreen transition-all duration-500 border-2`} >
                    <div className='w-[10%]'>
                        <div className='rounded-full w-6 h-6 flex items-center justify-center border-2 border-colorGreen'>

                            <InputElements type="radio" name="schoolType" value="js1-ss3" id="js1-ss3" onClick={() => setIsGroupSelected("js-ss")} form={form} />
                        </div>
                    </div>
                    <aside className='w-[90%]'>
                        <h6>JSS1 - SS3</h6>
                        <p className='text-[12px]'>Choose this if your institution uses the default primary/secondary school naming convention for Nigerian Schools.</p>
                    </aside>
                </div>
                <div className={`w-full flex justify-between border border-${isGroupSelected === "yr1-yr12" ? "colorGreen" : null} p-2 gap-1 rounded-md hover:border-colorGreen transition-all duration-500 border-2`} >
                    <div className='w-[10%]'>
                        <div className='rounded-full w-6 h-6 flex items-center justify-center border-2 border-colorGreen'>

                            <InputElements type="radio" name="schoolType" value="yr1-yr12" id="yr1-yr12" onClick={() => setIsGroupSelected("yr1-yr12")} form={form} />
                        </div>
                    </div>
                    <aside className='w-[90%]'>
                        <h6>YEAR 1 - YEAR 12</h6>
                        <p className='text-[12px]'>Choose this if your institution uses the K12 naming conventions used in most British or American schools.</p>
                    </aside>
                </div>
                 
                <button>Submit</button>

            </form>


        </div>
    )
}

export default SchoolStructure
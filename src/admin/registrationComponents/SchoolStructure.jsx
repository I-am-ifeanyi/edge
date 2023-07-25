import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FormGroup, FormControlLabel } from "@mui/material"
import { IoIosAddCircle } from "react-icons/io"
import { MdDeleteForever } from "react-icons/md"
import { IOSSwitch } from './specialStyles'
import InputElements from '../../components/InputElements'
import { Button } from '../../components/Components'
import { Caveats } from '../../components/Components'


const SchoolStructure = ({ form, setIsNext, schoolStructureSummit }) => {
    const dispatch = useDispatch()
    const { register, control, handleSubmit, formState, reset, errors } = form
    const [isGroupSelected, setIsGroupSelected] = useState("none")
    const [isChecked, setIsChecked] = useState(true)
    const [inputs, setInputs] = useState([{ id: 1, value: '' }]);






    const handleSwitchChange = (event) => {
        setIsChecked(event.target.checked);
    };


    const back = () => setIsNext({
        getStarted: false,
        schoolProfile: true,
        schoolStructure: false,
        customStructure: false,
        session: false,
        instructorInvite: false,
        learnerInvite: false
    })


    const handleAddInput = () => {
        const newId = inputs.length + 1;
        setInputs([...inputs, { id: newId, value: '' }]);
    };

    const handleInputChange = (id, value) => {
        const updatedInputs = inputs.map((input) =>
            input.id === id ? { ...input, value: value } : input
        );
        setInputs(updatedInputs);
    };

    const findSchoolType = (e) => {
        if(e.target.value === "Custom") {
            setIsNext({
                getStarted: false,
                schoolProfile: false,
                schoolStructure: false,
                customStructure: true,
                session: false
            })
        }
    }

    // const handleRemoveInput = (id) => {
    //     const filteredInputs = inputs.filter((input) => input.id !== id);
    //     setInputs(filteredInputs);
    // };

   


    return (
        <>
        <div className='w-[90%] md:w-[600px] md:h-[450px] mt-10 flex-shrink-0 bg-colorWhite1 rounded-md shadow-md md:px-8 px-5 py-5 flex flex-col gap-4 items-center animate__animated animate__fadeInRight overflow-y-scroll'>

            <h4 className=''>School Structure</h4>

            <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit(schoolStructureSummit)} noValidate>
                <InputElements type="select" id="schoolType" label="School Type" form={form} onChange={findSchoolType} options={["Primary School", "Secondary School", "Custom"]} />
                <p>How many groups are in your school?</p>

                <div className={`w-full flex justify-between border border-${isGroupSelected === "js-ss" ? "colorLightGreen" : null} p-2 gap-1 rounded-md hover:border-colorLightGreen transition-all duration-500 border-2`} >
                    <div className='w-[10%]'>
                        <div className='rounded-full w-6 h-6 flex items-center justify-center border-2 border-colorLightGreen'>

                            <InputElements type="radio" name="schoolGroupType" value="js1-ss3" id="js1-ss3" onClick={() => setIsGroupSelected("js-ss")} form={form} />
                        </div>
                    </div>
                    <aside className='w-[90%]'>
                        <h6>JSS1 - SS3</h6>
                        <p className='text-[12px]'>Choose this if your institution uses the default primary/secondary school naming convention for Nigerian Schools.</p>
                    </aside>
                </div>
                <div className={`w-full flex justify-between border border-${isGroupSelected === "yr1-yr12" ? "colorLightGreen" : null} p-2 gap-1 rounded-md hover:border-colorLightGreen transition-all duration-500 border-2`} >
                    <div className='w-[10%]'>
                        <div className='rounded-full w-6 h-6 flex items-center justify-center border-2 border-colorLightGreen'>

                            <InputElements type="radio" name="schoolGroupType" value="yr1-yr12" id="yr1-yr12" onClick={() => setIsGroupSelected("yr1-yr12")} form={form} />
                        </div>
                    </div>
                    <aside className='w-[90%]'>
                        <h6>YEAR 1 - YEAR 12</h6>
                        <p className='text-[12px]'>Choose this if your institution uses the K12 naming conventions used in most British or American schools.</p>
                    </aside>
                </div>
                <p>How many branches do you have in each group?</p>
                <FormGroup sx={{ marginLeft: 1 }}>
                    <FormControlLabel

                        control={<IOSSwitch sx={{ marginRight: 1 }} checked={isChecked} onChange={handleSwitchChange} />}
                        label="Create Multiple Branches"

                    />
                </FormGroup>
                <div className='flex flex-col gap-4'>
                    {inputs.map((input) => (

                        <InputElements
                            key={input.id}
                            type="text"
                            id={input.id}
                            value={input.value}
                            placeholder="Gold or A"
                            form={form}
                            onChange={(e) => handleInputChange(input.id, e.target.value)}

                            className='bg-gray-500 text-white '
                        />


                    ))}

                    {isChecked && <div className='text-colorLightGreen flex items-center gap-2 text-sm'>
                        <IoIosAddCircle size={30} onClick={handleAddInput} />
                        <p>Add more branches</p>
                    </div>}
                </div>
                <div className='h-[38px] flex gap-10'>
                    <Button text="Back" background="bg-colorWhite3" color="text-colorGray3" onClick={back} />
                    <Button text="Next" background="bg-colorBlue" color="text-colorWhite1" />

                </div>


            </form>


        </div>

        </>
    )
}

export default SchoolStructure


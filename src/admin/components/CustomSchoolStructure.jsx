import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FormGroup, FormControlLabel } from "@mui/material"
import { IoIosAddCircle } from "react-icons/io"
import { BiPlus } from "react-icons/bi"

import { IOSSwitch } from './specialStyles'
import InputElements from '../../components/InputElements'
import { Button } from '../../components/Components'
import { Caveats } from '../../components/Components'


const CustomSchoolStructure = ({ form, setIsNext, onCustomStructureSubmit }) => {
    const dispatch = useDispatch()
    const { register, control, handleSubmit, formState, reset, errors } = form
    const [isGroupSelected, setIsGroupSelected] = useState("none")
    const [isChecked, setIsChecked] = useState(true)
    const [inputs, setInputs] = useState([{ id: 1, value: '' }]);
    const [csvFileName, setCsvFileName] = useState("")






    const handleSwitchChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const back = () => setIsNext({
        getStarted: false,
        schoolProfile: false,
        schoolStructure: true,
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

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file.size > 20971520) {
            alert("File size larger than 20MB")
            return null
        }
        setCsvFileName(file?.name)
        console.log(file)


    };



    return (

        <div className='w-[90%] md:w-[600px] md:h-[450px] mt-10 flex-shrink-0 bg-colorWhite1 rounded-md shadow-md md:px-8 px-5 py-5 flex flex-col gap-4 items-center animate__animated animate__fadeInRight overflow-y-scroll'>

            <h4 className=''>School Structure</h4>

            <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit(onCustomStructureSubmit)} noValidate>
                <InputElements type="text" id="custom" value="Custom" placeholder="Custom" disabled={true} form={form} />
                <p>Import your custom organization groups</p>

                <div className="h-[70px] w-full border-2 border-dotted rounded-md flex items-center justify-center" >
                    <label htmlFor='customOrg' className='text-sm flex items-center gap-4'>                    <BiPlus size={30} className='text-colorLightGreen' />{csvFileName ? csvFileName : "Upload .csv file here"}
                    </label>
                    <input
                        type="file"
                        accept=".csv"
                        id="customOrg" className='hidden'
                        {...register("customOrg")}
                        onChange={handleFileChange} />


                </div>
                <p className='text-xs text-colorGray3'>MAX FILE SIZE: 20MB</p>
                <a className='text-sm text-colorBlue underline' href="https://sample-videos.com/csv/Sample-Spreadsheet-10-rows.csv">
                    Download Sample Spreadsheet
                </a>
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
                            placeholder="Branch Name"
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


    )
}

export default CustomSchoolStructure
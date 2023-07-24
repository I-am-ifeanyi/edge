import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FormGroup, FormControlLabel } from "@mui/material"
import { IoIosAddCircle } from "react-icons/io"
import { BiPlus } from "react-icons/bi"

import { IOSSwitch } from './specialStyles'
import InputElements from '../../components/InputElements'
import { Button } from '../../components/Components'
import { Caveats } from '../../components/Components'


const LearnersInvite = ({ form, setIsNext, learnersInvite }) => {
    const dispatch = useDispatch()
    const { register, control, handleSubmit, formState, reset, errors } = form

    const [csvFileName, setCsvFileName] = useState("")







    const back = () => setIsNext({
        getStarted: false,
        schoolProfile: false,
        adminLogo: false,
        schoolStructure: false,
        customStructure: false,
        session: false,
        instructorInvite: true,
        learnerInvite: false

    })




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

            <h4 className=''>Invite Learners</h4>

            <Caveats title="CSV STRUCTURE" bg="bg-colorLightGreen" textColor="text-colorGray2" body="- Full Name" body2="- Reg Number" body3="- Gender" body4="- Phone Number" body5="- Email" body6="- Group" body7="- Branch" />


            <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit(learnersInvite)} noValidate>
                <InputElements type="text" id="learnersAlias" placeholder="Learners Alias" form={form} />
                <p>Quickly invite Learners to register</p>

                <div className="h-[70px] w-full border-2 border-dotted rounded-md flex items-center justify-center" >
                    <label htmlFor='learnersCSV' className='text-sm flex items-center gap-4'>                    <BiPlus size={30} className='text-colorLightGreen' />{csvFileName ? csvFileName : "Upload .csv file here"}
                    </label>
                    <input
                        type="file"
                        accept=".csv"
                        id="learnersCSV" className='hidden'
                        {...register("learnersCSV")}
                        onChange={handleFileChange} />


                </div>
                <p className='text-xs text-colorGray3'>MAX FILE SIZE: 20MB</p>
                <a className='text-sm text-colorBlue underline' href="https://sample-videos.com/csv/Sample-Spreadsheet-10-rows.csv">
                    Download Sample Spreadsheet
                </a>

                <div className='h-[38px] flex gap-10'>
                    <Button text="Back" background="bg-colorWhite3" color="text-colorGray3" onClick={back} />
                    <Button text="Next" background="bg-colorBlue" color="text-colorWhite1" />

                </div>


            </form>


        </div>


    )
}

export default LearnersInvite
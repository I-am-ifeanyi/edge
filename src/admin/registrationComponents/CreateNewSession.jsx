import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


import InputElements from '../../components/InputElements'
import { Button } from '../../components/Components'


const CreateNewSession = ({
  form,
  setIsNext,
  onNewSessionSubmit,
  buttonText1,
  buttonText2
}) => {
  const dispatch = useDispatch()
  const { register, control, handleSubmit, formState, reset, errors } = form

  const back = () =>
    setIsNext({
      getStarted: false,
      schoolProfile: false,
      schoolStructure: false,
      customStructure: true,
      session: false
    })

  return (
    <div className="w-[90%] md:w-[600px] mt-10 flex-shrink-0 bg-colorWhite1 rounded-md shadow-md md:px-8 px-5 py-5 flex flex-col gap-4 items-center animate__animated animate__fadeInRight">
      <h4 className="">Create New Session</h4>

      <form
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onNewSessionSubmit)}
        noValidate
      >
        <InputElements
          type="text"
          id="sessionName"
          placeholder="2020/2021 Session"
          form={form}
        />
        <InputElements
          type="select"
          options={["Quarterly", "Triannual", "Biannual"]}
          label="Session Frequency"
          id="sessionFrequency"
          placeholder="2020/2021 Session"
          form={form}
        />

        <div className="h-[38px] flex gap-10">
          <Button
            text={buttonText1}
            background="bg-colorWhite3"
            color="text-colorGray3"
            onClick={back}
          />
          <Button
            text={buttonText2}
            background="bg-colorBlue"
            color="text-colorWhite1"
          />
        </div>
      </form>
    </div>
  )
}

export default CreateNewSession
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAdminLogo } from '../../redux/features/createAdmin'

import InputElements from '../../components/InputElements'
import { Button } from '../../components/Components'


const CreateSchoolProfile = ({
  onSchoolProfileSubmit,
  form,
  reverse,
  buttonText1,
  buttonText2
}) => {
  const dispatch = useDispatch()
  const { register, control, handleSubmit, formState, reset, errors } = form
  const [schoolLogo, setSchoolLogo] = useState("")

  const handleSelectSchoolLogo = (event) => {
    const file = event.target.files[0]
    const imageUrl = URL.createObjectURL(file)
    setSchoolLogo(imageUrl)
    dispatch(setAdminLogo(imageUrl))
  }

  return (
    <div className="w-[90%] md:w-[600px] md:h-[400px] flex-shrink-0 bg-colorWhite1 rounded-md shadow-md md:px-8 px-5 py-5 flex flex-col items-center animate__animated animate__fadeInRight overflow-y-scroll mt-10">
      <h4 className="pb-4">Create School Profile</h4>
      <form
        onSubmit={handleSubmit(onSchoolProfileSubmit)}
        noValidate
        className="w-full flex flex-col gap-4"
      >
        <InputElements
          type="file"
          id="schoolLogo"
          form={form}
          onChange={handleSelectSchoolLogo}
          image={schoolLogo}
        />
        <InputElements
          type="text"
          id="schoolName"
          form={form}
          placeholder="School Name"
        />
        <InputElements
          type="text"
          id="schoolMotto"
          form={form}
          placeholder="School Motto"
        />
        <InputElements
          type="url"
          id="schoolUrl"
          form={form}
          placeholder="http://www.stregencyschools.com"
        />

        <div className="h-[38px] flex gap-10">
          <Button
            text={buttonText1}
            background="bg-colorWhite3"
            color="text-colorGray3"
            onClick={reverse}
          />
          <Button
            text={buttonText2}
            background="bg-colorBlue"
            color="text-colorWhite1"
          />
        </div>
        <Link to="#" className="text-center text-[12px] text-colorBlue">
          Already have an account? Log in
        </Link>
      </form>
    </div>
  )
}

export default CreateSchoolProfile
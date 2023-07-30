import React, { useState } from "react"
import { useForm } from "react-hook-form"

import HeaderComponent from "./homepageComponents/HeaderComponent"
import InputElements from "../components/InputElements"

import schoolLogo from "../assets/admin/schoolIcons/schoolLogo.png"
import schoolIcon from "../assets/admin/schoolIcons/schoolIcon.png"

const School = () => {
  const form = useForm()
  const { register, control, handleSubmit, formState, reset, errors } = form
  const [schoolTopDetail, setSchoolTopDetail] = useState("")
  const [activeLocation, setActiveLocation] = useState("Basic Information")

  const [subLinks, setSubLinks] = useState([
    {
      A: "Basic Information",
      isActive: true
    },
    {
      A: "School Structure",
      isActive: false
    }
  ])

  const toggleSchoolStructure = () => {
    setSubLinks([
      {
        A: "Basic Information",
        isActive: false
      },
      {
        A: "School Structure",
        isActive: true
      }
    ])
    setActiveLocation("School Structure")
  }

  const toggleBasicInfo = () => {
    setSubLinks([
      {
        A: "Basic Information",
        isActive: true
      },
      {
        A: "School Structure",
        isActive: false
      }
    ])
    setActiveLocation("Basic Information")
  }

  const locations = [
    {
      A: "School",
      isActive: false
    },
    {
      A: activeLocation,
      isActive: true
    }
  ]

  const onBasicInfoSubmit = (data) => {
    console.log(data)
  }

  const handleOnChange = (e) => {
    setSchoolTopDetail(e.target.value)
  }

  return (
    <div>
      <div className="md:w-[90%] w-full absolute h-full right-0">
        <HeaderComponent
          icon={schoolIcon}
          title="School Settings"
          subLinks={subLinks}
          locations={locations}
          buttonProps="Create new session"
          toggleItems={{
            toggleSchool: toggleSchoolStructure,
            toggleBasic: toggleBasicInfo
          }}
        />
        <div className="px-4 md:mt-64">
          <figure>
            <img src={schoolLogo} alt="" />
          </figure>
          <form onSubmit={handleSubmit(onBasicInfoSubmit)} noValidate>
            <div>
              <h6>School</h6>
              <div>
                {schoolTopDetail && <h6>{schoolTopDetail}, Location</h6>}
                <InputElements
                  type="text"
                  placeholder="ST&T Regency Schools"
                  id="School Name"
                  form={form}
                  onChange={handleOnChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default School

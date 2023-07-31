import React, { useState } from "react"
import { useForm } from "react-hook-form"

import SchoolBasicInfo from "./homepageComponents/schoolComponents/SchoolBasicInfo"
import HeaderComponent from "./homepageComponents/HeaderComponent"
import InputElements from "../components/InputElements"

import schoolLogo from "../assets/admin/schoolIcons/schoolLogo.png"
import schoolIcon from "../assets/admin/schoolIcons/schoolIcon.png"

const School = () => {
  const form = useForm()
  const { register, control, handleSubmit, formState, reset, errors } = form
  const [schoolTopDetail, setSchoolTopDetail] = useState({
    name: "",
    state: ""
  })
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
    setSchoolTopDetail({
      name: e.target.value,
      state: ""
    })
  }

  const handleOnChangeState = (e) => {
    setSchoolTopDetail({
      ...schoolTopDetail,
      state: e.target.value
    })
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
        <SchoolBasicInfo
          form={form}
          schoolLogo={schoolLogo}
          onBasicInfoSubmit={onBasicInfoSubmit}
          schoolTopDetail={schoolTopDetail}
          handleOnChange={handleOnChange}
          handleOnChangeState={handleOnChangeState}
        />
      </div>
    </div>
  )
}

export default School

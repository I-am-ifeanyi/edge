import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import {useSelector} from "react-redux"

import { setSchoolStructure } from "../redux/features/createAdmin"
import SchoolBasicInfo from "./homepageComponents/schoolComponents/SchoolBasicInfo"
import AdminSchoolStructure from "./homepageComponents/schoolComponents/AdminSchoolStructure"
import HeaderComponent from "./homepageComponents/HeaderComponent"

import schoolLogo from "../assets/admin/schoolIcons/schoolLogo.png"
import schoolIcon from "../assets/admin/schoolIcons/schoolIcon.png"

const School = () => {
  const form = useForm()
   const { adminCompleteInfo } = useSelector((store) => store.adminInfo)
  const { register, control, handleSubmit, formState, reset, errors } = form
  const [schoolTopDetail, setSchoolTopDetail] = useState({
    name: "",
    state: ""
  })
  const [activeLocation, setActiveLocation] = useState("Basic Information")
  const [isFunctionButton, setIsFunctionButton] = useState(false)
  const [editStructure, setEditStructure] = useState(false)
  const [createSchoolProfile, setCreateSchoolProfile] = useState({
    isSchoolProfile: true,
    isSchoolStructure: false,
    isCustomSchoolStructure: false
  })
  const { isSchoolProfile, isSchoolStructure, isCustomSchoolStructure } =
    createSchoolProfile

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [
    isSchoolProfile,
    isSchoolStructure,
    isCustomSchoolStructure,
    activeLocation
  ])
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
    setIsFunctionButton(true)
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
    setIsFunctionButton(false)
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

  const schoolStructureSummit = (data) => {
    dispatch(setSchoolStructure(data))
    console.log(data)
  }

  const toggleEditStructure = () => {
    setEditStructure(true)

    setCreateSchoolProfile({
      isSchoolProfile: true,
      isSchoolStructure: false,
      isCustomSchoolStructure: false
    })
  }

  const findSchoolType2 = (e) => {
    if (e.target.value === "Custom") {
      setEditStructure(true)
      setCreateSchoolProfile({
        isSchoolProfile: false,
        isSchoolStructure: false,
        isCustomSchoolStructure: true
      })
    }
  }

   console.log(adminCompleteInfo)

  return (
    <div>
      <div className="md:w-[90%] w-full absolute h-full right-0">
        <HeaderComponent
          icon={schoolIcon}
          title="School Settings"
          subLinks={subLinks}
          locations={locations}
          isFunctionButton={isFunctionButton}
          buttonProps={editStructure ? "Editing..." : "Edit Structure"}
          toggleItems={{
            toggleA: toggleSchoolStructure,
            toggleB: toggleBasicInfo
          }}
          onClick={toggleEditStructure}
          disabled={editStructure ? true : false}
          page="school"
        />
        {activeLocation === "Basic Information" && (
          <SchoolBasicInfo
            form={form}
            schoolLogo={schoolLogo}
            onBasicInfoSubmit={onBasicInfoSubmit}
            schoolTopDetail={schoolTopDetail}
            handleOnChange={handleOnChange}
            handleOnChangeState={handleOnChangeState}
          />
        )}
        {activeLocation === "School Structure" && (
          <AdminSchoolStructure
            form={form}
            schoolStructureSummit={schoolStructureSummit}
            editStructure={editStructure}
            setEditStructure={setEditStructure}
            findSchoolType={findSchoolType2}
            createSchoolProfile={createSchoolProfile}
            setCreateSchoolProfile={setCreateSchoolProfile}
          />
        )}
      </div>
    </div>
  )
}

export default School

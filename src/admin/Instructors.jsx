import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"

import OverallSummary from "./homepageComponents/OverallSummary"
import EnhancedTable from "./homepageComponents/InstructorsTableList"
import { setSchoolStructure } from "../redux/features/createAdmin"
import HeaderComponent from "./homepageComponents/HeaderComponent"
import instructorIcon from "../assets/admin/instructor-icon/instructor-icon.png"

const Instructors = () => {
  const form = useForm()
  const { adminCompleteInfo } = useSelector((store) => store.adminInfo)
  const { register, control, handleSubmit, formState, reset, errors } = form
 
  const [activeLocation, setActiveLocation] = useState("All Instructors")
  const [isFunctionButton, setIsFunctionButton] = useState(false)


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])
  const [subLinks, setSubLinks] = useState([
    {
      A: "All Instructors",
      isActive: true
    },
    {
      A: "Settings",
      isActive: false
    }
  ])

  const toggleSettings = () => {
    setSubLinks([
      {
        A: "All Instructors",
        isActive: false
      },
      {
        A: "Settings",
        isActive: true
      }
    ])
    setActiveLocation("Settings")
  }

  const toggleAllInstructors = () => {
    setSubLinks([
      {
        A: "All Instructors",
        isActive: true
      },
      {
        A: "Settings",
        isActive: false
      }
    ])
    setActiveLocation("All Instructors")
  }

  const locations = [
    {
      A: "Instructors",
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

 

  const schoolStructureSummit = (data) => {
    dispatch(setSchoolStructure(data))
    console.log(data)
  }



 

  console.log(adminCompleteInfo)

  return (
    <div>
      <div className="md:w-[90%] w-full absolute h-full right-0">
        <HeaderComponent
          icon={instructorIcon}
          title="Instructors"
          subLinks={subLinks}
          locations={locations}
          buttonProps="Add Instructor"
          toggleItems={{
            toggleA: toggleSettings,
            toggleB: toggleAllInstructors
          }}
          page="instructors"
          isFunctionButton={true}
        />
        <div className="px-4 relative top-52 w-full flex flex-col items-center md:items-start h-screen  py-5 rounded-md justify-between gap-5">
          <div className="w-full flex flex-col md:flex-row justify-between gap-10 md:gap-0 mb-20">
            <OverallSummary
              icon={instructorIcon}
              title="Total Instructors"
              figure="304"
            />
          </div>
          <EnhancedTable />
        </div>
      </div>
    </div>
  )
}

export default Instructors

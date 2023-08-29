import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { AiOutlineClose } from "react-icons/ai"
import { BiPlus } from "react-icons/bi"

import OverallSummary from "./homepageComponents/OverallSummary"
import InstructorsEnhancedTable from "./homepageComponents/EnhancedTables/InstructorsTableList"
import HeaderComponent from "./homepageComponents/HeaderComponent"
import instructorIcon from "../assets/admin/instructor-icon/instructor-icon.png"
import InputElements from "../components/InputElements"
import { Button } from "../components/Components"
import { dummyInstructors } from "../components/Components"

const Instructors = () => {
  const form = useForm()
  const { adminCompleteInfo } = useSelector((store) => store.adminInfo)
  const { register, control, handleSubmit, formState, reset, errors } = form
  const [activeLocation, setActiveLocation] = useState("All Instructors")
  const [isAddInstructor, setIsAddInstructor] = useState(false)
  const [profilePicture, setProfilePicture] = useState("")
  const [instructorCourses, setInstructorCourses] = useState([])
  const [csvFileName, setCsvFileName] = useState("")

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [activeLocation, isAddInstructor])
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

  const [locations, setLocations] = useState([
    {
      A: "Instructors",
      isActive: false
    },
    {
      A: activeLocation,
      isActive: true
    }
  ])

  const toggleSettings = () => {
    setActiveLocation("Settings")

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
    setLocations([
      {
        A: "Instructors",
        isActive: false
      },
      {
        A: "Settings",
        isActive: true
      }
    ])
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

  const addLocation = () => {
    setIsAddInstructor((prev) => !prev)
    setLocations([
      {
        A: "Instructors",
        isActive: false
      },
      {
        A: "All Instructors",
        isActive: false
      },
      {
        A: "Add Instructor",
        isActive: true
      }
    ])
    setActiveLocation("Add Instructors")
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
  }

  const reverseAddLocation = () => {
    setActiveLocation("")

    setIsAddInstructor((prev) => !prev)

    setLocations([
      {
        A: "Instructors",
        isActive: false
      },
      {
        A: "All Instructors",
        isActive: false
      }
    ])
    reset()
  }

  const onInviteInstructorSubmit = (data) => {
    console.log(data)
  }

  const onBulkInviteSubmit = (data) => {
    console.log(data)
  }

  const handleSelectSchoolLogo = (event) => {
    const file = event.target.files[0]
    const imageUrl = URL.createObjectURL(file)
    setProfilePicture(imageUrl)
  }

  const addInstructorCourses = (e) => {
    const course = e.target.value

    setInstructorCourses((prev) => [...prev, course])
  }

  const removeInstructorCourse = (id) => {
    setInstructorCourses((prevCourses) => {
      const updatedCourses = prevCourses.filter((course, index) => index !== id)
      return updatedCourses
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file.size > 20971520) {
      alert("File size larger than 20MB")
      return null
    }

    setCsvFileName(file?.name)

    // Read the content of the CSV file using FileReader
    const reader = new FileReader()
    reader.onload = (event) => {
      const csvContent = event.target.result

      // Save the CSV content to local storage
    }
    reader.readAsText(file)
  }

  const updateInstructorSettings = (data) => {
    console.log(data)
  }

  //   console.log(adminCompleteInfo)

  return (
    <div className="relative">
      <div className="md:w-[90%] w-full absolute h-full right-0">
        <HeaderComponent
          icon={instructorIcon}
          title="Instructors"
          subLinks={subLinks}
          locations={locations}
          buttonProps={isAddInstructor ? "Cancel" : "Add Instructor"}
          toggleItems={{
            toggleA: toggleSettings,
            toggleB: toggleAllInstructors
          }}
          page="instructors"
          isFunctionButton={true}
          onClick={isAddInstructor ? reverseAddLocation : addLocation}
        />
        {activeLocation !== "Settings" && (
          <div className="px-4 relative top-52 w-full flex flex-col items-center md:items-start h-screen  py-5 rounded-md justify-between gap-5">
            <div className="w-full flex flex-col md:flex-row justify-between gap-10 md:gap-0">
              <OverallSummary
                icon={instructorIcon}
                title="Total Instructors"
                figure="304"
              />
            </div>
            {!isAddInstructor && (
              <InstructorsEnhancedTable dataToDisplay={dummyInstructors} />
            )}
            {isAddInstructor && (
              <div className="w-full flex flex-col md:flex-row justify-between gap-10 md:gap-0 animate__animated animate__fadeInRight">
                <form
                  className="bg-colorWhite1 md:w-[65%] rounded-md shadow-md flex flex-col gap-10"
                  noValidate
                  onSubmit={handleSubmit(onInviteInstructorSubmit)}
                >
                  <fieldset className="flex flex-col items-center">
                    <h5 className="text-start w-full bg-colorGray6 p-2 rounded-t-md mb-2">
                      Add New Instructor
                    </h5>
                    <h6 className="mb-2">Profile Picture</h6>
                    <InputElements
                      type="file"
                      id="instructorProfilePicture"
                      form={form}
                      image={profilePicture}
                      onChange={handleSelectSchoolLogo}
                    />
                  </fieldset>
                  <fieldset className="flex flex-col md:flex-row w-full justify-between px-4">
                    <label className="md:w-[20%] text-colorGray4">
                      BIODATA
                    </label>
                    <fieldset className="md:w-[70%] grid grid-cols-2 gap-5">
                      <div className="col-span-2">
                        <InputElements
                          type="text"
                          id="instructorFullName"
                          placeholder="Full Name"
                          form={form}
                        />
                      </div>
                      <InputElements
                        type="select"
                        id="instructorGender"
                        label="Gender"
                        form={form}
                        options={["Female", "Male", "Custom"]}
                      />
                      <InputElements
                        type="select"
                        id="instructorRole"
                        label="Role"
                        form={form}
                        options={["Instructor", "Assistant Instructor"]}
                      />
                    </fieldset>
                  </fieldset>
                  <fieldset className="flex flex-col md:flex-row w-full justify-between px-4">
                    <label className="md:w-[20%] text-colorGray4">
                      CONTACT
                    </label>
                    <fieldset className="md:w-[70%] flex flex-col gap-5">
                      <div className="md:flex grid gap-2 col-span-2">
                        <div className="md:w-[40%] w-[20%]">
                          <InputElements
                            type="text"
                            id="disabled"
                            value="+234"
                            disabled={true}
                            form={form}
                          />
                        </div>
                        <InputElements
                          type="number"
                          id="instructorPhoneNumber"
                          placeholder="8065345654"
                          form={form}
                        />
                      </div>
                      <InputElements
                        type="email"
                        id="instructorEmail"
                        form={form}
                        placeholder="Email Address"
                      />
                      <InputElements
                        type="select"
                        id="instructorGroup"
                        label="Group"
                        form={form}
                        options={[
                          "JSS 1",
                          "JSS 2",
                          "JSS 3",
                          "SS 1",
                          "SS 2",
                          "SS 3",
                          "YEAR 1",
                          "YEAR 2",
                          "YEAR 3",
                          "YEAR 4",
                          "YEAR 5",
                          "YEAR 6"
                        ]}
                      />
                    </fieldset>
                  </fieldset>
                  <fieldset className="flex flex-col md:flex-row w-full justify-center items-center border-t-2 py-10 px-4 md:p-0">
                    <label className="md:w-[20%] text-colorGray4">
                      COURSES
                    </label>
                    <fieldset className="md:w-[50%] grid gap-5 w-full">
                      <div className="flex items-center text-xs gap-2 p-4 md:p-0 flex-wrap">
                        {instructorCourses?.map((courses, index) => {
                          return (
                            <div
                              className="p-2 rounded-2xl text-[10px] bg-colorBlue text-colorWhite1 flex items-center gap-2 "
                              key={index}
                            >
                              {courses}{" "}
                              <AiOutlineClose
                                onClick={() => removeInstructorCourse(index)}
                                size={16}
                              />
                            </div>
                          )
                        })}
                      </div>
                      <InputElements
                        type="select"
                        id="instructorCourses"
                        label="Courses Taught"
                        form={form}
                        options={[
                          "ENG 101",
                          "MATH 301",
                          "PHYSICS",
                          "CHEMISTRY",
                          "HISTORY",
                          "COMMERCE",
                          "STATISTICS",
                          "AGRICULTURE"
                        ]}
                        onChange={addInstructorCourses}
                      />
                    </fieldset>
                  </fieldset>
                  <div className="h-10 w-1/2 m-auto mb-20">
                    <Button
                      text="Add Instructor"
                      background="bg-colorBlue"
                      color="text-colorWhite1"
                    />
                  </div>
                </form>
                <form
                  className="md:w-[30%] h-[400px] flex flex-col gap-4 bg-colorWhite1 p-4 rounded-md shadow-md"
                  onSubmit={handleSubmit(onBulkInviteSubmit)}
                  noValidate
                >
                  <h6 className="text-center">Bulk Import Instructors</h6>
                  <a
                    className="text-sm text-colorBlue underline text-center"
                    href="https://sample-videos.com/csv/Sample-Spreadsheet-10-rows.csv"
                  >
                    Download Sample Spreadsheet
                  </a>

                  <div className="h-[70px] w-full border-2 border-dotted rounded-md flex items-center justify-center">
                    <label
                      htmlFor="bulkInstructorInvite"
                      className="text-sm flex items-center gap-4"
                    >
                      {" "}
                      <BiPlus size={30} className="text-colorLightGreen" />
                      {csvFileName ? csvFileName : "Upload .csv file here"}
                    </label>
                    <input
                      type="file"
                      accept=".csv"
                      id="bulkInstructorInvite"
                      className="hidden"
                      {...register("bulkInstructorInvite")}
                      onChange={handleFileChange}
                    />
                  </div>
                  <p className="text-xs text-colorGray3">MAX FILE SIZE: 20MB</p>
                  <InputElements
                    type="select"
                    id="instructorRole"
                    label="Role"
                    form={form}
                    options={["Instructor", "Assistant Instructor"]}
                  />

                  <div className="h-[38px] flex gap-10">
                    <Button
                      text="Import Instructors"
                      background="bg-colorBlue"
                      color="text-colorWhite1"
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
        {activeLocation === "Settings" && (
          <div className="px-4 relative top-64 w-full rounded-md bg-colorWhite1 p-10 flex items-center justify-center animate__animated animate__fadeInRight">
            <form
              className="md:w-1/2 w-full rounded-md flex flex-col gap-5 shadow-md p-4 animate__animated animate__fadeInRight"
              noValidate
              onSubmit={handleSubmit(updateInstructorSettings)}
            >
              <h5 className="bg-colorGray6 rounded-t-md p-4">
                Instructor Settings
              </h5>
              <div className="h-12">
                <InputElements
                  type="text"
                  id="instructorAlias"
                  placeholder="Instructor Alias"
                  form={form}
                />
              </div>
              <div className="h-10 mt-10">
                {" "}
                <Button
                  text="Update Settings"
                  background="bg-colorBlue"
                  color="text-colorWhite1"
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Instructors

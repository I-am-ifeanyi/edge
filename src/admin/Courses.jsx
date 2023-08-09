import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { AiOutlineClose } from "react-icons/ai"
import { BiPlus } from "react-icons/bi"

import OverallSummary from "./homepageComponents/OverallSummary"
import CoursesTableList from "./homepageComponents/EnhancedTables/CoursesTableList"
import HeaderComponent from "./homepageComponents/HeaderComponent"
import coursesIcon from "../assets/admin/coursesIcon/courses-icon.png"
import InputElements from "../components/InputElements"
import {
  Button,
  dummyCourses,
  dummyInstructors
} from "../components/Components"

const Courses = () => {
  const form = useForm()
  const { register, control, handleSubmit, formState, reset, errors } = form
  const [activeLocation, setActiveLocation] = useState("All Courses")
  const [isAddNewCourse, setIsAddNewCourse] = useState(false)
  const [coursesList, setCoursesList] = useState(dummyCourses)
  const [instructorsList, setInstructorsList] = useState(dummyInstructors)
  const [courseSuccessfullyAdded, setCourseSuccessfullyAdded] = useState("")

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [isAddNewCourse, activeLocation])
  const [subLinks, setSubLinks] = useState([
    {
      A: "All Courses",
      isActive: true
    }
  ])

  const [locations, setLocations] = useState([
    {
      A: "Courses",
      isActive: false
    },
    {
      A: activeLocation,
      isActive: true
    }
  ])

  const addLocation = () => {
    setIsAddNewCourse((prev) => !prev)
    setLocations([
      {
        A: "Courses",
        isActive: false
      },
      {
        A: "All Courses",
        isActive: false
      },
      {
        A: "Add Course",
        isActive: true
      }
    ])
    setActiveLocation("Add Course")
  }

  const reverseAddLocation = () => {
    setIsAddNewCourse((prev) => !prev)
    setLocations([
      {
        A: "Courses",
        isActive: false
      },
      {
        A: "All Courses",
        isActive: false
      }
    ])
    setActiveLocation("All Course")
  }

  const onAddCourseSubmit = (data) => {
    setCoursesList((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          courseName: data.courseTitle,
          courseAlias: data.courseAlias,
          groups: data.courseGroups,
          branches: data.courseBranches,
          instructors: data.selectInstructors,
          description: data.courseDescription
        }
      ]
    })
    setCourseSuccessfullyAdded(data)
    reset()
  }

  const groups = [
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
  ]

  const branches = ["A", "J", "B", "C", "D", "E"]

  //   console.log(adminCompleteInfo)

  return (
    <div className="relative">
      <div className="md:w-[90%] w-full absolute h-full right-0">
        <HeaderComponent
          icon={coursesIcon}
          title="Courses"
          subLinks={subLinks}
          locations={locations}
          buttonProps={isAddNewCourse ? "Cancel" : "Add New Course"}
          toggleItems={""}
          page="courses"
          isFunctionButton={true}
          onClick={isAddNewCourse ? reverseAddLocation : addLocation}
        />
        <div className="px-4 relative top-52 w-full flex flex-col items-center md:items-start h-screen  py-5 rounded-md justify-between gap-5">
          <div className="w-full flex flex-col md:flex-row justify-between gap-10 md:gap-0">
            <OverallSummary
              icon={coursesIcon}
              title="Total Courses"
              figure="152"
            />
          </div>
          {!isAddNewCourse && <CoursesTableList dataToDisplay={coursesList} />}
          {isAddNewCourse && (
            <div className="w-full flex flex-col md:flex-row justify-between gap-10 md:gap-0 animate__animated animate__fadeInRight">
              <form
                className=" w-full rounded-md shadow-md gap-10 flex flex-col"
                noValidate
                onSubmit={handleSubmit(onAddCourseSubmit)}
              >
                <div className="flex flex-col md:flex-row gap-10 md:gap-0 w-full justify-between">
                  <div className="md:w-[60%] bg-colorWhite1">
                    <h5 className="text-start w-full bg-colorGray6 p-4  rounded-t-md mb-2">
                      Add New Course
                    </h5>

                    <fieldset className="px-4 md:w-full grid grid-cols-2 gap-4">
                      <InputElements
                        type="text"
                        id="courseTitle"
                        placeholder="Course Title"
                        form={form}
                      />
                      <InputElements
                        type="text"
                        id="courseAlias"
                        placeholder="Course Alias"
                        form={form}
                      />
                      <div className="h-[120px] col-span-2">
                        <InputElements
                          type="textArea"
                          id="courseDescription"
                          placeholder="Course Description"
                          form={form}
                        />
                      </div>
                    </fieldset>
                    <fieldset className="md:w-full px-4 flex flex-col gap-4 mt-5">
                      <InputElements
                        type="autoComplete"
                        id="courseGroups"
                        label="Select Groups"
                        form={form}
                        control={control}
                        options={groups}
                      />

                      <div className="flex items-center text-xs gap-2 p-4 md:p-0 flex-wrap"></div>
                    </fieldset>
                    <fieldset className="md:w-full px-4 flex flex-col gap-4">
                      <InputElements
                        type="autoComplete"
                        id="courseBranches"
                        label="Select Branch(s)"
                        form={form}
                        control={control}
                        options={branches}
                        initialRules={{ required: "Courses are required" }}
                      />
                    </fieldset>
                  </div>

                  <div className="md:w-[35%] md:h-[400px] flex flex-col gap-4 bg-colorWhite1 p-4 rounded-md shadow-md">
                    <h6 className="text-center">Add Course Instructors</h6>

                    <InputElements
                      type="autoComplete"
                      form={form}
                      id="selectInstructors"
                      options={instructorsList.map(
                        (instructor) => instructor.name
                      )}
                      label="Search Instructors"
                      control={control}
                    />
                  </div>
                </div>
                <div className="h-10 w-1/2 md:w-[50%] px-4 md:m-auto md:mb-10 m-auto mb-20">
                  <Button
                    text="Add Learner"
                    background="bg-colorBlue"
                    color="text-colorWhite1"
                  />
                </div>
              </form>
            </div>
          )}
          {courseSuccessfullyAdded && (
            <div className="fixed z-50 w-[87%] h-[50vh] animate__animated animate__zoomIn">
              <div className="w-full h-full bg-colorBlue opacity-50 rounded-md"></div>
              <h6 className="absolute top-1/3 right-1/2 translate-x-1/2 bg-colorWhite1 md:w-2/3 w-4/5 px-4 md:px-0 py-10 rounded-md text-center">
                <span className="font-bold">
                  {courseSuccessfullyAdded.courseTitle}{" "}
                </span>
                successfully added to the courses list. The Instructors will be
                notified immediately.
              </h6>{" "}
              <AiOutlineClose
                className="absolute top-5 right-5 text-colorWhite1 cursor-pointer"
                size={30}
                onClick={() => {
                  setCourseSuccessfullyAdded("")
                  setIsAddNewCourse(false)
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Courses

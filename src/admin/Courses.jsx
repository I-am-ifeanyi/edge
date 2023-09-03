import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { AiOutlineClose } from "react-icons/ai"

import OverallSummary from "./homepageComponents/OverallSummary"
import CoursesTableList from "./homepageComponents/EnhancedTables/CoursesTableList"
import HeaderComponent from "./homepageComponents/HeaderComponent"
import coursesIcon from "../assets/admin/coursesIcon/courses-icon.png"
import Learners from "./homepageComponents/courseComponents/Learners"
import InputElements from "../components/InputElements"
import EditCourse from "./homepageComponents/courseComponents/EditCourse"
import AddNewLesson from "./homepageComponents/courseComponents/lessonComponent/AddNewLesson"
import Lessons from "./homepageComponents/courseComponents/lessonComponent/Lessons"
import Assignments from "./homepageComponents/courseComponents/assignmentComponent/Assignments"
import CreateAssignment from "./homepageComponents/courseComponents/assignmentComponent/CreateAssignment"
import Submissions from "./homepageComponents/courseComponents/assignmentComponent/Submissions"
import { assignmentSubmission } from "../components/Components"
import AssignmentDetails from "./homepageComponents/courseComponents/assignmentComponent/AssignmentDetails"

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
  const [courseToEditID, setCourseToEditID] = useState("")
  const [isAddNewLesson, setIsAddNewLesson] = useState(false)
  const [previewedCourseList, setPreviewedCourseList] = useState(null)
  const [isCreateAssignment, setIsCreateAssignment] = useState(false)
  const [isSubmissions, setIsSubmissions] = useState(false)
  const [isDetails, setIsDetails] = useState(false)
  const [activeSections, setActiveSections] = useState({
    overview: false,
    learners: false,
    isLesson: false,
    assignments: false,
    tests: false,
    liveSessions: false,
    discussions: false
  })

  const {
    overview,
    learners,
    isLesson,
    assignments,
    tests,
    liveSessions,
    discussions
  } = activeSections

  const sampleCourse = coursesList?.filter(
    (course) => course.id === courseToEditID
  )

  const toggleIsDetails = () => {
    setIsDetails((prev) => !prev)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    if (sampleCourse) {
      setPreviewedCourseList(sampleCourse)
    }
  }, [isAddNewCourse, activeLocation, courseToEditID])
  const [subLinks, setSubLinks] = useState([
    {
      A: "All Courses",
      isActive: true
    }
  ])
  const [subLinksII, setSubLinksII] = useState([
    {
      A: "Overview",
      isActive: true
    },
    {
      A: "Learners",
      isActive: false
    },
    {
      A: "Lessons",
      isActive: false
    },
    {
      A: "Assignments",
      isActive: false
    },
    {
      A: "Tests",
      isActive: false
    },
    {
      A: "Live Sessions",
      isActive: false
    },
    {
      A: "Discussions",
      isActive: false
    }
  ])

  const toggleOverview = () => {
    setSubLinksII((prev) =>
      prev.map((link) => ({
        ...link,
        isActive: link.A === "Overview" ? true : false
      }))
    )

    setLocationsII([
      {
        A: "Courses",
        isActive: false
      },
      {
        A: courseName || "",
        isActive: false
      },
      {
        A: "Overview",
        isActive: true
      }
    ])
    setActiveSections({
      overview: true,
      learners: false,
      isLesson: false,
      assignments: false,
      tests: false,
      liveSessions: false,
      discussions: false
    })
  }

  const toggleLearners = () => {
    setSubLinksII((prev) =>
      prev.map((link) => ({
        ...link,
        isActive: link.A === "Learners" ? true : false
      }))
    )

    setLocationsII([
      {
        A: "Courses",
        isActive: false
      },
      {
        A: courseName || "",
        isActive: false
      },
      {
        A: "Learners",
        isActive: true
      }
    ])
    setActiveSections({
      overview: false,
      learners: true,
      isLesson: false,
      assignments: false,
      tests: false,
      liveSessions: false,
      discussions: false
    })
  }

  const toggleLessons = () => {
    setSubLinksII((prev) =>
      prev.map((link) => ({
        ...link,
        isActive: link.A === "Lessons" ? true : false
      }))
    )
    setLocationsII([
      {
        A: "Courses",
        isActive: false
      },
      {
        A: courseName || "",
        isActive: false
      },
      {
        A: "Lessons",
        isActive: true
      }
    ])

    setActiveSections({
      overview: false,
      learners: false,
      isLesson: true,
      assignments: false,
      tests: false,
      liveSessions: false,
      discussions: false
    })
  }

  const toggleAssignments = () => {
    setSubLinksII((prev) =>
      prev.map((link) => ({
        ...link,
        isActive: link.A === "Assignments" ? true : false
      }))
    )

    setLocationsII([
      {
        A: "Courses",
        isActive: false
      },
      {
        A: courseName || "",
        isActive: false
      },
      {
        A: "Assignments",
        isActive: true
      }
    ])

    setActiveSections({
      overview: false,
      learners: false,
      isLesson: false,
      assignments: true,
      tests: false,
      liveSessions: false,
      discussions: false
    })
  }

  const toggleTests = () => {
    setSubLinksII((prev) =>
      prev.map((link) => ({
        ...link,
        isActive: link.A === "Tests" ? true : false
      }))
    )
    setLocationsII([
      {
        A: "Courses",
        isActive: false
      },
      {
        A: courseName || "",
        isActive: false
      },
      {
        A: "Tests",
        isActive: true
      }
    ])
    setActiveSections({
      overview: false,
      learners: false,
      isLesson: false,
      assignments: false,
      tests: true,
      liveSessions: false,
      discussions: false
    })
  }

  const toggleLiveSessions = () => {
    setSubLinksII((prev) =>
      prev.map((link) => ({
        ...link,
        isActive: link.A === "Live Sessions" ? true : false
      }))
    )
    setLocationsII([
      {
        A: "Courses",
        isActive: false
      },
      {
        A: courseName || "",
        isActive: false
      },
      {
        A: "Live Sessions",
        isActive: true
      }
    ])
    setActiveSections({
      overview: false,
      learners: false,
      isLesson: false,
      assignments: false,
      tests: false,
      liveSessions: true,
      discussions: false
    })
  }

  const toggleDiscussions = () => {
    setSubLinksII((prev) =>
      prev.map((link) => ({
        ...link,
        isActive: link.A === "Discussions" ? true : false
      }))
    )
    setLocationsII([
      {
        A: "Courses",
        isActive: false
      },
      {
        A: courseName || "",
        isActive: false
      },
      {
        A: "Discussions",
        isActive: true
      }
    ])
    setActiveSections({
      overview: false,
      learners: false,
      isLesson: false,
      assignments: false,
      tests: false,
      liveSessions: false,
      discussions: true
    })
  }

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

  let courseName
  let courseAlias

  if (courseToEditID) {
    previewedCourseList.map((course) => {
      courseName = course.courseName
      courseAlias = course.courseAlias
    })
  }
  const [locationsII, setLocationsII] = useState([
    {
      A: "Courses",
      isActive: false
    },
    {
      A: courseName,
      isActive: false
    },
    {
      A: "Overview",
      isActive: true
    }
  ])
  useEffect(() => {
    locationsII.map((location, index) => {
      if (location.A === "Lessons") {
        setActiveSections({
          overview: false,
          learners: false,
          isLesson: true,
          assignments: false,
          tests: false,
          liveSessions: false,
          discussions: false
        })
        setIsAddNewCourse(false)
      }
    })
  }, [locationsII])

  useEffect(() => {
    setLocationsII([
      {
        A: "Courses",
        isActive: false
      },
      {
        A: courseName || "",
        isActive: false
      },
      {
        A: "Overview",
        isActive: true
      }
    ])
  }, [courseName])

  const addLocation = () => {
    setIsAddNewCourse(true)
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
  }

  const reverseAddLocation = () => {
    setIsAddNewCourse(false)
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
    setActiveLocation("All Courses")
    setActiveSections({
      overview: false,
      learners: false,
      isLesson: false,
      assignments: false,
      tests: false,
      liveSessions: false,
      discussions: false
    })
    setCourseToEditID("")
    setActiveLocation("Add Course")
    setSubLinksII((prev) =>
      prev.map((link) => ({
        ...link,
        isActive: link.A === "Overview" ? true : false
      }))
    )
  }

  const onAddCourseSubmit = (data) => {
    setCoursesList((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          courseName: data.courseName,
          courseAlias: data.courseAlias,
          groups: data.groups,
          branches: data.branches,
          instructors: data.instructors,
          description: data.description
        }
      ]
    })
    setCourseSuccessfullyAdded(data)
    reset()
  }
  const onEditCourseSubmit = (data) => {
    if (!data.branches || !data.instructors || !data.groups) {
      alert(
        "Make sure all the fields are filled correctly. No field must be left empty"
      )
      return null
    }
    setCoursesList((prev) =>
      prev.map((item) => {
        if (item.id === courseToEditID) {
          return {
            id: courseToEditID,
            courseName: data.courseName,
            description: data.description,
            branches: data.branches,
            courseAlias: data.courseAlias,
            groups: data.groups,
            instructors: data.instructors
          }
        }
        return item
      })
    )
    setCourseToEditID("")
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

  const reverseEdit = () => {
    setSubLinksII([
      {
        A: "Overview",
        isActive: true
      },
      {
        A: "Learners",
        isActive: false
      },
      {
        A: "Lessons",
        isActive: false
      },
      {
        A: "Assignments",
        isActive: false
      },
      {
        A: "Tests",
        isActive: false
      },
      {
        A: "Live Sessions",
        isActive: false
      },
      {
        A: "Discussions",
        isActive: false
      }
    ])
    setCourseToEditID("")
    setActiveSections({
      overview: true,
      learners: false,
      isLesson: false,
      assignments: false,
      tests: false,
      liveSessions: false,
      discussions: false
    })
    setIsAddNewLesson(true)

    reset()
  }

  const addNewLesson = () => {
    setIsAddNewLesson(true)
  }

  const addNewAssignment = () => {
    setIsCreateAssignment((prev) => !prev)
    setIsSubmissions(false)
  }

  console.log(isDetails)

  return (
    <div className="relative">
      <div className="md:w-[90%] w-full absolute h-full right-0 top-4">
        <HeaderComponent
          icon={coursesIcon}
          title={!courseToEditID ? "Courses" : `${courseName}`}
          subTitle={courseToEditID ? `(${courseAlias})` : null}
          subLinks={courseToEditID ? subLinksII : subLinks}
          locations={!courseToEditID ? locations : locationsII}
          buttonProps={
            courseToEditID
              ? learners || overview
                ? "Cancel"
                : isLesson
                ? "Add Lesson"
                : assignments
                ? isCreateAssignment
                  ? "Cancel"
                  : "Create Assignment"
                : tests
                ? "Create Test"
                : liveSessions
                ? "Schedule Session"
                : "Add New Course"
              : isAddNewCourse
              ? "Cancel"
              : "Add New Course"
          }
          disabled={isAddNewLesson ? true : false}
          toggleItems={{
            toggleOverview: toggleOverview,
            toggleLearners: toggleLearners,
            toggleLessons: toggleLessons,
            toggleAssignments: toggleAssignments,
            toggleTests: toggleTests,
            toggleLiveSessions: toggleLiveSessions,
            toggleDiscussions: toggleDiscussions
          }}
          page="courses"
          isFunctionButton={true}
          onClick={
            courseToEditID
              ? learners || overview
                ? reverseAddLocation
                : isLesson
                ? addNewLesson
                : assignments
                ? addNewAssignment
                : tests
                ? ""
                : liveSessions
                ? ""
                : ""
              : isAddNewCourse
              ? reverseAddLocation
              : addLocation
          }
        />
        {courseToEditID &&
          locationsII.map((location, index) => {
            if (location.A === "Overview") {
              return (
                <div className="relative md:top-0 top-10 pb-10" key={index}>
                  <EditCourse
                    form={form}
                    onEditCourseSubmit={onEditCourseSubmit}
                    courseDefaultValue={previewedCourseList[0]?.courseName}
                    courseAliasDefaultValue={
                      previewedCourseList[0]?.courseAlias
                    }
                    courseDescriptionDefaultValue={
                      previewedCourseList[0]?.description
                    }
                    groups={groups}
                    branches={branches}
                    previewedCourseList={previewedCourseList}
                    setActiveSections={setActiveSections}
                    activeSections={activeSections}
                    courseToEditID={courseToEditID}
                  />
                </div>
              )
            } else if (location.A === "Learners") {
              return (
                <div className="relative md:top-56 top-64 px-4" key={index}>
                  <Learners />
                </div>
              )
            } else if (location.A === "Lessons") {
              return (
                <div className="relative md:top-56 top-60 md:px-4" key={index}>
                  {!isAddNewLesson && (
                    <Lessons
                      courseToEditID={courseToEditID}
                      coursesList={coursesList}
                      setCoursesList={setCoursesList}
                      previewedCourseList={previewedCourseList}
                    />
                  )}
                  {isAddNewLesson && (
                    <AddNewLesson
                      form={form}
                      setIsAddNewLesson={setIsAddNewLesson}
                      courseToEditID={courseToEditID}
                      coursesList={coursesList}
                      setCoursesList={setCoursesList}
                      previewedCourseList={previewedCourseList}
                      setPreviewedCourseList={setPreviewedCourseList}
                    />
                  )}
                </div>
              )
            } else if (location.A === "Assignments") {
              return (
                <div
                  className={`relative md:top-52 top-64 py-4  ${
                    isCreateAssignment || isSubmissions
                      ? "bg-transparent px-2"
                      : "bg-colorWhite1 shadow md:py-10 md:px-4 px-2  md:mx-4"
                  } rounded-md`}
                  key={index}
                >
                  {!isCreateAssignment && !isSubmissions && (
                    <Assignments
                      previewedCourseList={previewedCourseList}
                      setIsSubmissions={setIsSubmissions}
                    />
                  )}{" "}
                  {isCreateAssignment && !isSubmissions && (
                    <CreateAssignment form={form} />
                  )}
                  {isSubmissions && !isDetails && !isCreateAssignment && (
                    <Submissions
                      dataToDisplay={assignmentSubmission}
                      toggleDetailsState={toggleIsDetails}
                    />
                  )}
                  {isDetails && isSubmissions && !isCreateAssignment && (
                    <AssignmentDetails toggleDetailsState={toggleIsDetails} />
                  )}
                </div>
              )
            } else if (location.A === "Tests") {
              return (
                <div className="relative top-72" key={index}>
                  This is Test's fort
                </div>
              )
            } else if (location.A === "Live Sessions") {
              return (
                <div className="relative top-72" key={index}>
                  This is Live Session's fort
                </div>
              )
            } else if (location.A === "Discussions") {
              return (
                <div className="relative top-72" key={index}>
                  This is Discussion's fort
                </div>
              )
            }
          })}
        {!courseToEditID && (
          <div className="px-4 relative top-48 md:top-52 w-full flex flex-col items-center md:items-start h-screen  py-5 rounded-md md:justify-between gap-5">
            <div className="w-full flex flex-col md:flex-row justify-between gap-10 md:gap-0">
              <OverallSummary
                icon={coursesIcon}
                title="Total Courses"
                figure="152"
              />
            </div>
            {!isAddNewCourse && (
              <CoursesTableList
                setCourseToEditID={setCourseToEditID}
                setActiveSections={setActiveSections}
                setLocations={setLocations}
                dataToDisplay={coursesList}
              />
            )}
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
                        <div className="h-12">
                          <InputElements
                            type="text"
                            id="courseName"
                            placeholder="Course Title"
                            form={form}
                          />
                        </div>
                        <div className="h-12">
                          <InputElements
                            type="text"
                            id="courseAlias"
                            placeholder="Course Alias"
                            form={form}
                          />
                        </div>
                        <div className="h-[120px] col-span-2">
                          <InputElements
                            type="textArea"
                            id="description"
                            placeholder="Course Description"
                            form={form}
                          />
                        </div>
                      </fieldset>
                      <fieldset className="md:w-full px-4 flex flex-col gap-4 mt-5">
                        <InputElements
                          type="autoComplete"
                          id="groups"
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
                          id="branches"
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
                        id="instructors"
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
                  successfully added to the courses list. The Instructors will
                  be notified immediately.
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
        )}
      </div>
    </div>
  )
}

export default Courses

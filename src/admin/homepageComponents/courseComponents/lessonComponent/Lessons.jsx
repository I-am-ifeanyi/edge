import React, { useState, useEffect } from "react"
import { GoVideo } from "react-icons/go"
import { BsCloudDownload } from "react-icons/bs"
import { RiDeleteBin6Line } from "react-icons/ri"
import { PiSpeakerHighLight } from "react-icons/pi"
import { CgFileDocument } from "react-icons/cg"

import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"

import { Button, DeleteConfirmation } from "../../../../components/Components"

function Lessons({ previewedCourseList }) {
  const [lessonCourses, setLessonCourses] = useState("")
  const [isDeleteLesson, setIsDeleteLesson] = useState(false)
  const [lessonToDeleteId, setLessonToDeleteId] = useState("")
  const [isDeleteVideo, setIsDeleteVideo] = useState("")
  const [isDeleteAudio, setIsDeleteAudio] = useState("")
  const [isDeleteDocument, setIsDeleteDocument] = useState("")

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })

    if (previewedCourseList) {
      setLessonCourses(previewedCourseList)
    }
  }, [])

  const deleteLesson = (id) => {
    const updatedLesson = lessonCourses[0]?.lessons?.filter(
      (lesson) => lesson.id !== id
    )

    setLessonCourses((prev) => [{ ...prev[0], lessons: updatedLesson }])
  }

  const deleteLessonMaterial = (lessonId, type, title) => {
    const updatedCourses = lessonCourses.map((course) => {
      const updatedLessons = course.lessons.map((lesson) => {
        if (lesson.id === lessonId) {
          const updatedType = lesson[type].filter(
            (item) => item.title !== title
          )
          return { ...lesson, [type]: updatedType }
        }
        return lesson
      })
      return { ...course, lessons: updatedLessons }
    })

    setLessonCourses(updatedCourses)
  }

  if (lessonCourses[0]?.lessons?.length < 1) {
    return <h3>There is currently no lessons for this course</h3>
  }

  const showDeleteWarning = (fileIndex, type) => {
    if (type === "videos") {
      setIsDeleteVideo(fileIndex)
    } else if (type === "audios") {
      setIsDeleteAudio(fileIndex)
    } else setIsDeleteDocument(fileIndex)
  }

  return (
    <div className="relative w-full">
      {isDeleteLesson && (
        <div className="fixed w-[86vw] rounded-md h-[50vh] z-40 flex items-center justify-center bg-colorWhite1 animate__animated animate__zoomIn">
          <DeleteConfirmation
            questionPrompt="Are you sure you want to delete this lesson? this action is irreversible!"
            onClick2={() => {
              deleteLesson(lessonToDeleteId)
              setIsDeleteLesson(false)
            }}
            onClick1={() => setIsDeleteLesson(false)}
          />
        </div>
      )}

      <h6 className="pb-4">{`${lessonCourses[0]?.lessons?.length} Lessons in ${lessonCourses[0]?.courseName}`}</h6>
      <div className="flex flex-col gap-4 md:p-10 bg-colorWhite1 rounded-md shadow-md relative">
        {lessonCourses[0]?.lessons?.map((lesson) => {
          return (
            <div
              key={lesson.id}
              className={`${
                lesson.videos.length > 0 ||
                lesson.audios.length > 0 ||
                lesson.documents.length > 0
                  ? "block"
                  : "hidden"
              }`}
            >
              <Accordion sx={{ marginY: "" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ backgroundColor: "#D5D5DC" }}
                >
                  <h6 className="tracking-wider w-full">{lesson.lessonName}</h6>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-col gap-4 relative z-0 py-5 border-b-2">
                    <div className="flex flex-col gap-2">
                      {lesson?.videos?.map((video, index) => {
                        return (
                          <div className="flex relative" key={index}>
                            <div
                              className={`relative ${
                                isDeleteVideo === index
                                  ? "hidden md:flex"
                                  : "flex"
                              } items-center w-[80px] h-[80px] justify-center`}
                            >
                              <figure className="w-full h-full rounded-l-md bg-[#FFC542] opacity-[0.2] absolute z-10 "></figure>
                              <GoVideo
                                className="absolute z-20 text-[#FFC542]"
                                size={30}
                              />
                            </div>
                            <div
                              className={`relative ${
                                isDeleteVideo === index
                                  ? "md:w-1/2 hidden"
                                  : "w-full"
                              } h-[80px] flex flex-col justify-center`}
                            >
                              <div className="w-full h-full absolute bg-[#FEF2D5] z-10 opacity-[0.3] rounded-r-md"></div>
                              <div className="flex justify-between items-center relative z-20">
                                <div className="relative px-2 w-full h-full flex flex-col justify-center gap-2">
                                  <p className="text-sm font-bold underline">
                                    {lesson.lessonName} {video.title}
                                  </p>
                                  <div className="flex gap-2 md:gap-4 text-xs text-colorGray4">
                                    <p>{video.instructor}</p>
                                    <p>{video.date}</p>
                                  </div>
                                </div>
                                {isDeleteVideo !== index && (
                                  <div className="flex flex-col md:flex-row px-4 gap-2 md:gap-4">
                                    <figure className="rounded-md p-1 cursor-pointer">
                                      <BsCloudDownload size={20} />
                                    </figure>
                                    <figure className="rounded-md p-1 border cursor-pointer">
                                      <RiDeleteBin6Line
                                        size={20}
                                        onClick={() => {
                                          showDeleteWarning(index, "videos")
                                        }}
                                      />
                                    </figure>
                                  </div>
                                )}
                              </div>
                            </div>

                            {isDeleteVideo === index && (
                              <div className="w-full md:h-20 h-28 animate__animated animate__fadeInRight">
                                <Alert
                                  severity="warning"
                                  sx={{ height: "100%" }}
                                >
                                  <AlertTitle>Warning</AlertTitle>
                                  Are you sure you want to delete this video?
                                  <button
                                    className="md:mx-5 md:ml-4 cursor-pointer bg-colorRed px-5 py-1 rounded-md text-colorWhite1"
                                    onClick={() => {
                                      deleteLessonMaterial(
                                        lesson.id,
                                        "videos",
                                        video.title
                                      )
                                      setIsDeleteVideo("")
                                    }}
                                  >
                                    Yes
                                  </button>{" "}
                                  <button
                                    className="mx-5 cursor-pointer px-6 py-1 rounded-md border-2"
                                    onClick={() => setIsDeleteVideo("")}
                                  >
                                    No
                                  </button>
                                </Alert>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                    <div className="flex flex-col gap-2">
                      {lesson.audios.map((audio, index) => {
                        return (
                          <div className="flex relative w-full" key={index}>
                            <div
                              className={`relative ${
                                isDeleteAudio === index
                                  ? "hidden md:flex"
                                  : "flex"
                              } items-center w-[80px] h-[80px] justify-center`}
                            >
                              <figure className="w-full h-full rounded-l-md bg-[#82C43C] opacity-[0.2] absolute z-10 "></figure>
                              <PiSpeakerHighLight
                                className="absolute z-20 text-[#82C43C]"
                                size={30}
                              />
                            </div>
                            <div
                              className={`relative ${
                                isDeleteAudio === index
                                  ? "md:w-1/2 hidden"
                                  : "w-full"
                              } h-[80px] flex flex-col justify-center`}
                            >
                              <div className="w-full h-full absolute bg-[#E2F1D2] z-10 opacity-[0.3] rounded-r-md"></div>
                              <div className="flex justify-between items-center relative z-20">
                                <div className="relative px-2 w-full h-full flex flex-col justify-center gap-2">
                                  <p className="text-sm font-bold underline">
                                    {lesson.lessonName} {audio.title}
                                  </p>
                                  <div className="flex gap-2 md:gap-4 text-xs text-colorGray4">
                                    <p>{audio.instructor}</p>
                                    <p>{audio.date}</p>
                                  </div>
                                </div>
                                {isDeleteAudio !== index && (
                                  <div className="flex flex-col md:flex-row px-4 gap-2 md:gap-4">
                                    <figure className="rounded-md p-1 cursor-pointer">
                                      <BsCloudDownload size={20} />
                                    </figure>
                                    <figure className="rounded-md p-1 border cursor-pointer">
                                      <RiDeleteBin6Line
                                        size={20}
                                        onClick={() => {
                                          showDeleteWarning(index, "audios")
                                        }}
                                      />
                                    </figure>
                                  </div>
                                )}
                              </div>
                            </div>
                            {isDeleteAudio === index && (
                              <div className="w-full md:h-20 h-28 animate__animated animate__fadeInRight">
                                <Alert
                                  severity="warning"
                                  sx={{ height: "100%" }}
                                >
                                  <AlertTitle>Warning</AlertTitle>
                                  Are you sure you want to delete this audio?
                                  <button
                                    className="md:mx-5 md:ml-4 cursor-pointer bg-colorRed px-5 py-1 rounded-md text-colorWhite1"
                                    onClick={() => {
                                      deleteLessonMaterial(
                                        lesson.id,
                                        "audios",
                                        audio.title
                                      )
                                      setIsDeleteAudio(false)
                                    }}
                                  >
                                    Yes
                                  </button>{" "}
                                  <button
                                    className="mx-5 cursor-pointer px-6 py-1 rounded-md border-2"
                                    onClick={() => setIsDeleteAudio(false)}
                                  >
                                    No
                                  </button>
                                </Alert>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                    <div className="flex flex-col gap-2">
                      {lesson.documents.map((document, index) => {
                        return (
                          <div className="flex relative w-full" key={index}>
                            <div
                              className={`relative ${
                                isDeleteDocument === index
                                  ? "hidden md:flex"
                                  : "flex"
                              } items-center w-[80px] h-[80px] justify-center`}
                            >
                              <figure className="w-full h-full rounded-l-md bg-[#50B5FF] opacity-[0.1] absolute z-10 "></figure>
                              <CgFileDocument
                                className="absolute z-20 text-[#50B5FF]"
                                size={30}
                              />
                            </div>
                            <div
                              className={`relative ${
                                isDeleteDocument === index
                                  ? "md:w-1/2 hidden"
                                  : "w-full"
                              } h-[80px] flex flex-col justify-center`}
                            >
                              <div className="w-full h-full absolute bg-[#C4DBFF] z-10 opacity-[0.15] rounded-r-md"></div>
                              <div className="flex justify-between items-center relative z-20">
                                <div className="relative px-2 w-full h-full flex flex-col justify-center gap-2">
                                  <p className="text-sm font-bold underline">
                                    {lesson.lessonName} {document.title}
                                  </p>
                                  <div className="flex gap-2 md:gap-4 text-xs text-colorGray4">
                                    <p>{document.instructor}</p>
                                    <p>{document.date}</p>
                                  </div>
                                </div>
                                {isDeleteDocument !== index && (
                                  <div className="flex flex-col md:flex-row px-4 gap-2 md:gap-4">
                                    <figure className="rounded-md p-1 cursor-pointer">
                                      <BsCloudDownload size={20} />
                                    </figure>
                                    <figure className="rounded-md p-1 border cursor-pointer">
                                      <RiDeleteBin6Line
                                        size={20}
                                        onClick={() => {
                                          showDeleteWarning(index, "documents")
                                        }}
                                      />
                                    </figure>
                                  </div>
                                )}
                              </div>
                            </div>
                            {isDeleteDocument === index && (
                              <div className="w-full md:h-20 h-28 animate__animated animate__fadeInRight">
                                <Alert
                                  severity="warning"
                                  sx={{ height: "100%" }}
                                >
                                  <AlertTitle>Warning</AlertTitle>
                                  Are you sure you want to delete this audio?
                                  <button
                                    className="md:mx-5 md:ml-4 cursor-pointer bg-colorRed px-5 py-1 rounded-md text-colorWhite1"
                                    onClick={() => {
                                      deleteLessonMaterial(
                                        lesson.id,
                                        "documents",
                                        document.title
                                      )
                                      setIsDeleteDocument(false)
                                    }}
                                  >
                                    Yes
                                  </button>{" "}
                                  <button
                                    className="mx-5 cursor-pointer px-6 py-1 rounded-md border-2"
                                    onClick={() => setIsDeleteDocument(false)}
                                  >
                                    No
                                  </button>
                                </Alert>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <div className="h-8  px-1 border rounded-md">
                      <Button text="Add File" />
                    </div>
                    <div
                      className="h-8  px-2 border border-colorRed rounded-md"
                      onClick={() => {
                        setLessonToDeleteId(lesson.id)
                        setIsDeleteLesson(true)
                      }}
                    >
                      <Button text="Delete Lesson" color="text-colorRed" />
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Lessons

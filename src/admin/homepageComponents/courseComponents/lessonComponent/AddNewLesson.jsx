import React, { useState, useEffect } from "react"
import { GoVideo } from "react-icons/go"
import { BsCloudDownload } from "react-icons/bs"
import { RiDeleteBin6Line } from "react-icons/ri"
import { PiSpeakerHighLight } from "react-icons/pi"
import { CgFileDocument } from "react-icons/cg"
import { AiOutlineClose } from "react-icons/ai"
import { BiMessageSquareAdd } from "react-icons/bi"

import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip"

import { Button, DeleteConfirmation } from "../../../../components/Components"
import InputElements from "../../../../components/InputElements"

const AddNewLesson = ({
  form,
  setIsAddNewLesson,
  courseToEditID,
  coursesList,
  setPreviewedCourseList,
  previewedCourseList
}) => {
  const { register, control, handleSubmit, formState, reset, errors } = form
  const [lessonCourses, setLessonCourses] = useState("")
  const [selectedTopic, setSelectedTopic] = useState("")
  const [selectedVideos, setSelectedVideos] = useState([])
  const [selectedAudios, setSelectedAudios] = useState([])
  const [selectedDocuments, setSelectedDocuments] = useState([])
  const [newLessonId, setNewLessonId] = useState("")
  const [newLesson, setNewLesson] = useState({
    id: "",
    lessonName: "",
    videos: [],
    audios: [],
    documents: []
  })

  const lessonOptions = lessonCourses[0]?.topics?.map((item) => item)

  useEffect(() => {
    if (previewedCourseList) {
      setLessonCourses(previewedCourseList)
    }
    setNewLesson((prev) => {
      return {
        ...prev,
        id: newLessonId,
        lessonName: selectedTopic,
        videos: selectedVideos,
        audios: selectedAudios,
        documents: selectedDocuments
      }
    })
  }, [
    newLessonId,
    selectedVideos,
    selectedAudios,
    selectedDocuments,
    selectedTopic
  ])

  const lessonLength = lessonCourses[0]?.lessons?.length

  const onAddLessonSubmit = () => {
    setLessonCourses((prev) => {
      return prev.map((items) => {
        return [...items.lessons, newLesson]
      })
    })
   setPreviewedCourseList((prev) => {
     return prev.map((item) => {
       return { ...item, lessons: lessonCourses }
     })
   })

  }
  const handleChangeSelectTopic = (e) => {
    const lessonName = e.target.value
    setSelectedTopic(lessonName)
  }

  const currentDate = new Date()
  const options = { year: "numeric", month: "2-digit", day: "2-digit" }
  const formattedDate = currentDate.toLocaleDateString(undefined, options)

  const handleChangeSelectVideo = (event) => {
    const selectedFiles = event.target.files
    const title = selectedFiles[0]?.name

    if (selectedFiles[0].size > 20971520) {
      alert("File is too large")
      return null
    } else if (selectedFiles.length > 0) {
      const file = selectedFiles[0]
      const objectUrl = URL.createObjectURL(file)

      setSelectedVideos((prev) => [
        ...prev,
        {
          instructor: "",
          url: objectUrl,
          date: formattedDate,
          title: title
        }
      ])
    }

    setNewLessonId(lessonLength + 1)
  }

  const handleChangeSelectAudio = (event) => {
    const audioFile = event.target.files[0]
    const title = audioFile.name

    if (audioFile.size < 20971520) {
      alert("File is too large")
      return
    }

    if (audioFile) {
      const objectUrl = URL.createObjectURL(audioFile)

      setSelectedAudios((prev) => [
        ...prev,
        {
          instructor: "",
          url: objectUrl,
          date: formattedDate,
          title: title
        }
      ])
    }
  }

  const handleChangeSelectDocument = (event) => {
    const file = event.target.files[0]
    const title = file.name

    if (file.size > 20971520) {
      alert("File is too large")
      return
    }

    if (file) {
      const objectUrl = URL.createObjectURL(file)

      setSelectedDocuments((prev) => [
        ...prev,
        {
          instructor: "",
          url: objectUrl,
          date: formattedDate,
          title: title
        }
      ])
    }
  }

  const handleAddVideoInstructor = (event, title) => {
    const instructor = event.target.value

    setSelectedVideos((prev) => {
      return prev.map((video) => {
        if (video?.title === title) {
          return {
            ...video,
            instructor: instructor
          }
        }
        return video
      })
    })
  }

  const handleAddAudioInstructor = (event, title) => {
    const instructor = event.target.value

    setSelectedAudios((prev) => {
      return prev.map((audio) => {
        if (audio?.title === title) {
          return {
            ...audio,
            instructor: instructor
          }
        }
        return audio
      })
    })
  }

  const handleAddDocumentInstructor = (event, title) => {
    const instructor = event.target.value

    setSelectedDocuments((prev) => {
      return prev.map((document) => {
        if (document?.title === title) {
          return {
            ...document,
            instructor: instructor
          }
        }
        return document
      })
    })
    setNewLessonId(lessonLength + 1)
  }

  const removeDocument = (title) => {
    setSelectedDocuments((prev) => {
      return prev.filter((document) => document.title !== title)
    })
    return prev
  }

  const CloseTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black
    }
  }))

  return (
    <div className="relative top-10 md:top-0">
      <CloseTooltip title="Close Add Lesson">
        <figure
          className="w-[40px] h-[40px] border flex items-center justify-center rounded-full bg-colorGray6 float-right"
          onClick={() => setIsAddNewLesson(false)}
        >
          <AiOutlineClose className="float-right text-colorRed" size={30} />
        </figure>
      </CloseTooltip>

      <form
        className="px-4 relative w-full flex flex-col items-center md:items-start h-screen  py-5 rounded-md justify-between gap-5 overflow-scroll"
        noValidate
        onSubmit={handleSubmit(onAddLessonSubmit)}
      >
        {" "}
        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-10 md:gap-0 w-full justify-between">
            <div className="md:w-[60%] bg-colorWhite1 pb-5">
              <h5 className="text-start w-full bg-colorGray6 p-4  rounded-t-md mb-2">
                Add New Lesson
              </h5>

              <fieldset className="px-4 w-full flex flex-col gap-4">
                <div className="h-12 rounded-md border">
                  <InputElements
                    type="text"
                    id="lessonTitle"
                    placeholder="Lesson Title"
                    form={form}
                    value={selectedTopic}
                    onChange={handleChangeSelectTopic}
                  />
                </div>
                <fieldset className="">
                  <div className="w-full flex items-center justify-center border-2 border-dotted rounded-md">
                    <label
                      htmlFor="addLessonVideo"
                      className="  text-sm flex gap-2 items-center justify-center cursor-pointer h-10"
                    >
                      <BiMessageSquareAdd
                        size={20}
                        className="text-colorBlue"
                      />{" "}
                      Upload a Video
                    </label>
                    <input
                      type="file"
                      accept=".mp4, .avi, .mov, .mkv"
                      id="addLessonVideo"
                      multiple
                      className="hidden"
                      {...register("addLessonVideo")}
                      onChange={handleChangeSelectVideo}
                    />
                  </div>
                  <p className="text-[10px] text-colorGray3">
                    MAX FILE SIZE: 20MB
                  </p>
                  <div className="w-full">
                    {selectedVideos && (
                      <div className="grid grid-cols-3 my-2 gap-2">
                        {selectedVideos?.map((video, index) => {
                          return (
                            <div className="flex flex-col gap-2" key={index}>
                              <video controls className="rounded-md">
                                <source src={video?.url} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                              <div className="h-8 border rounded-md">
                                <InputElements
                                  form={form}
                                  placeholder="Video Instructor"
                                  id={`${video?.title}Instructor`}
                                  type="text"
                                  onChange={(event) =>
                                    handleAddVideoInstructor(
                                      event,
                                      video?.title
                                    )
                                  }
                                />
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </fieldset>
                <fieldset>
                  <div className="w-full flex items-center justify-center border-2 border-dotted rounded-md">
                    <label
                      htmlFor="addLessonAudio"
                      className="  text-sm flex gap-2 items-center justify-center cursor-pointer h-10"
                    >
                      <BiMessageSquareAdd
                        size={20}
                        className="text-colorBlue"
                      />{" "}
                      Upload an Audio{" "}
                    </label>
                    <input
                      type="file"
                      accept="audio/*, .mp3., .M3U"
                      id="addLessonAudio"
                      multiple
                      className="hidden"
                      {...register("addLessonAudio")}
                      onChange={handleChangeSelectAudio}
                    />
                  </div>
                  <p className="text-[10px] text-colorGray3">
                    MAX FILE SIZE: 20MB
                  </p>
                  <div>
                    {selectedAudios && (
                      <div className="flex flex-col gap-4 mt-2">
                        {selectedAudios?.map((audio, index) => {
                          return (
                            <div className="flex flex-col gap-2" key={index}>
                              <audio controls>
                                <source src={audio?.url} />
                                Your browser does not support the audio element.
                              </audio>
                              <div className="md:w-1/2 h-8 border rounded-md ">
                                <InputElements
                                  form={form}
                                  placeholder="Audio Instructor"
                                  id={`${audio?.title}Instructor`}
                                  type="text"
                                  onChange={(event) =>
                                    handleAddAudioInstructor(
                                      event,
                                      audio?.title
                                    )
                                  }
                                />
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </fieldset>
                <fieldset>
                  <div className="w-full flex items-center justify-center border-2 border-dotted rounded-md">
                    <label
                      htmlFor="addLessonDocument"
                      className="  text-sm flex gap-2 items-center justify-center cursor-pointer h-10"
                    >
                      <BiMessageSquareAdd
                        size={20}
                        className="text-colorBlue"
                      />{" "}
                      Upload a Document{" "}
                    </label>
                    <input
                      type="file"
                      accept=".pdf, .doc, .docx"
                      id="addLessonDocument"
                      multiple
                      className="hidden"
                      {...register("addLessonDocument")}
                      onChange={handleChangeSelectDocument}
                    />
                  </div>
                  <p className="text-[10px] text-colorGray3">
                    MAX FILE SIZE: 20MB
                  </p>
                  <div>
                    {selectedDocuments && (
                      <div className="grid md:grid-cols-3 gap-4 mt-2">
                        {selectedDocuments?.map((document, index) => {
                          return (
                            <div
                              className="flex flex-col items-center gap-2 relative"
                              key={index}
                            >
                              <div className="w-[100px] h-[120px] rounded-md">
                                {" "}
                                <iframe
                                  src={document.url}
                                  title="Document Viewer"
                                  className="rounded-md w-full h-full"
                                >
                                  <p>Your browser does not support iframes.</p>
                                </iframe>
                              </div>
                              <div className="md:w-full h-8 border rounded-md ">
                                <InputElements
                                  form={form}
                                  placeholder="Instructor"
                                  id={`${document?.title}Instructor`}
                                  type="text"
                                  onChange={(event) =>
                                    handleAddDocumentInstructor(
                                      event,
                                      document?.title
                                    )
                                  }
                                />
                              </div>
                              <div className="w-[25px] h-[25px] border flex items-center justify-center rounded-full bg-colorGray6 absolute top-0 right-0 -m-2 hover:translate-y-1 duration-500 transition-all">
                                <AiOutlineClose
                                  size={20}
                                  className="text-colorRed cursor-pointer "
                                  onClick={() => removeDocument(document.title)}
                                />
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </fieldset>
              </fieldset>
            </div>
            <div className="md:w-[35%] md:h-[300px] flex flex-col gap-4 bg-colorWhite1 p-4 rounded-md shadow-md">
              <h6 className="text-center">View a List of Available Lessons</h6>
              <InputElements
                type="select"
                id="availableLessons"
                label="Lessons"
                form={form}
                options={lessonOptions}
                onChange={handleChangeSelectTopic}
              />
            </div>
          </div>
        </div>
        <div className="h-10 w-1/2 md:w-[50%] px-4 md:m-auto md:mb-10 m-auto mb-20">
          <Button
            text="Edit Course"
            background="bg-colorBlue"
            color="text-colorWhite1"
          />
        </div>
      </form>
    </div>
  )
}

export default AddNewLesson

import React from "react"
import { GoVideo } from "react-icons/go"

import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import { dummyCourses } from "../../../components/Components"

export default function Lessons({ courseToEditID }) {
  const sampleCourse = dummyCourses?.filter(
    (course) => course.id === courseToEditID
  )

  return (
    <div className="flex flex-col gap-4 p-5 bg-colorWhite1 rounded-md shadow-md">
      {sampleCourse[0].lessons.map((lesson) => {
        return (
          <div>
            <Accordion key={lesson.id} sx={{ marginY: "" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#D5D5DC" }}
              >
                <Typography>
                  <h6 className="tracking-wider  w-full">
                    {lesson.lessonName}
                  </h6>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  {lesson.videos.map((video) => {
                    return (
                      <div className="flex gap-4">
                        <GoVideo />
                        <div>
                          <p>
                            {sampleCourse[0].courseName} {video.title}
                          </p>
                          <div>
                            <p>{video.instructor}</p>
                            <p>{video.date}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div>
                  {lesson.audios.map((audio) => {
                    return (
                      <div className="flex gap-4">
                        <GoVideo />
                        <div>
                          <p>
                            {sampleCourse[0].courseName} {audio.title}
                          </p>
                          <div>
                            <p>{audio.instructor}</p>
                            <p>{audio.date}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div>
                  {lesson.documents.map((document) => {
                    return (
                      <div className="flex relative w-full">
                        <div className="relative flex items-center w-[80px] h-[80px] justify-center">
                          <figure className="w-full h-full rounded-l-md bg-[#50B5FF] opacity-[0.1] absolute z-10 "></figure>
                          <GoVideo className="absolute z-20 " size={30} />
                        </div>
                        <div className="relative w-full h-[80px]">
                          <div className="w-full h-full absolute bg-[#C4DBFF] z-10 opacity-[0.15] rounded-r-md"></div>
                          <div className="relative px-2 w-full h-full">
                            <p className="text-sm font-bold underline">
                              {sampleCourse[0].courseName} {document.title}
                            </p>
                            <div>
                              <p>{document.instructor}</p>
                              <p>{document.date}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        )
      })}
    </div>
  )
}

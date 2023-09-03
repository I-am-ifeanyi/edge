import React, { useEffect } from "react"
import { TbFileDownload } from "react-icons/tb"
import { BsArrowLeft } from "react-icons/bs"
import { useForm } from "react-hook-form"

import { GoVideo } from "react-icons/go"
import { PiSpeakerHighLight } from "react-icons/pi"
import { CgFileDocument } from "react-icons/cg"

import OverallSummary from "../../OverallSummary"
import courseIcon from "../../../../assets/admin/coursesIcon/courses-icon.png"
import { Button } from "../../../../components/Components"
import InputElements from "../../../../components/InputElements"

const AssignmentDetails = ({ toggleDetailsState }) => {
  const form = useForm()
  const { register, control, handleSubmit, formState, reset, errors } = form

  const onFeedbackSubmit = (data) => {
    setIsDetails(false)
    console.log(data)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, right: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="px-2 ">
      <BsArrowLeft
        size={30}
        className="mb-4 cursor-pointer hover:translate-x-1 transition-all duration-500"
        onClick={toggleDetailsState}
      />

      <div className="w-full flex flex-col gap-10">
        <div className="flex gap-4 justify-between md:justify-start">
          <OverallSummary icon={courseIcon} title="Score" figure="7/10" />{" "}
          <OverallSummary
            icon={courseIcon}
            title="Submitted"
            figure="23/06/203"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="bg-colorWhite1 rounded-md flex flex-col gap-5 pb-10 md:w-3/5">
            <div className="flex flex-col gap-4">
              <p className="p-4 font-[500] bg-colorWhite3 rounded-t-md">
                Tayo Adekunle
              </p>
              <div className="p-4">
                <p className="font-[500] text-sm mb-2">TITLE</p>
                <p className="text-sm">
                  Find the values of x in the equation below
                </p>
              </div>
              <div className="p-4 text-sm">
                <h6 className="mb-2">DESCRIPTION</h6>
                <p className="md:w-[90%]">
                  Solve the 8 equations attached in the document and submit your
                  answers before Friday. Endeavour to show all workings when
                  solving. Solve the 8 equations attached in the document and
                  submit your answers before Friday. Endeavour to show all
                  workings when solving. Solve the 8 equations attached in the
                  document and submit your answers before Friday. Endeavour to
                  show all workings when solving. Solve the 8 equations attached
                  in the document and submit your answers before Friday.
                  Endeavour to show all workings when solving.
                </p>
              </div>
              <div className="h-10  md:w-[250px] px-4 md:p-0 md:mx-4">
                <Button
                  icon={<TbFileDownload size={20} />}
                  background={"bg-colorGray6"}
                  text={"Download Attachment"}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <p className="font-[500] text-sm mb-4">STUDENT SUBMISSION</p>
              <div className="w-full relative flex flex-col gap-4">
                <div className="flex w-full h-[80px] relative rounded-md">
                  <div className="absolute bg-[#E2F1D2] w-full h-full opacity-[0.4] rounded-r-md"></div>

                  <div className="relative w-[80px] h-full">
                    <div className="absolute bg-[#82C43C] w-full h-full opacity-[0.2] rounded-md"></div>
                    <figure className="h-full w-[80px] flex items-center justify-center absolute z-1">
                      <GoVideo size={32} color="#82C43C" />
                    </figure>
                  </div>
                  <div className="relative w-full flex items-center">
                    <div className="pl-5">
                      <p className="font-[500] text-[14px]">Video Attachment</p>
                      <p className="text-colorGray4 text-[12px]">50.3MB</p>
                    </div>
                  </div>
                  <TbFileDownload
                    size={25}
                    className="ml-auto absolute right-10 top-1/2 "
                  />
                </div>
                <div className="flex w-full h-[80px] relative rounded-md">
                  <div className="absolute bg-[#C4DBFF;] w-full h-full opacity-[0.2] rounded-r-md"></div>

                  <div className="relative w-[80px] h-full">
                    <div className="absolute bg-[#50B5FF] w-full h-full opacity-[0.2] rounded-md"></div>
                    <figure className="h-full w-[80px] flex items-center justify-center absolute z-1">
                      <PiSpeakerHighLight size={32} color="#50B5FF" />
                    </figure>
                  </div>
                  <div className="relative w-full flex items-center">
                    <div className="pl-5">
                      <p className="font-[500] text-[14px]">Voice Attachment</p>
                      <p className="text-colorGray4 text-[12px]">125.5KB</p>
                    </div>
                  </div>
                  <TbFileDownload
                    size={25}
                    className="ml-auto absolute right-10 top-1/2 "
                  />
                </div>
                <div className="flex w-full h-[80px] relative rounded-md">
                  <div className="absolute bg-[#FEF2D5] w-full h-full opacity-[0.2] rounded-r-md"></div>

                  <div className="relative w-[80px] h-full">
                    <div className="absolute bg-[#FFC542] w-full h-full opacity-[0.2] rounded-md"></div>
                    <figure className="h-full w-[80px] flex items-center justify-center absolute z-1">
                      <CgFileDocument size={32} color="#FFC542" />
                    </figure>
                  </div>
                  <div className="relative w-full flex items-center">
                    <div className="pl-5">
                      <p className="font-[500] text-[14px]">Voice Attachment</p>
                      <p className="text-colorGray4 text-[12px]">125.5KB</p>
                    </div>
                  </div>
                  <TbFileDownload
                    size={25}
                    className="ml-auto absolute right-10 top-1/2 "
                  />
                </div>
              </div>
            </div>
          </div>
          <form
            noValidate
            onSubmit={handleSubmit(onFeedbackSubmit)}
            className="md:w-2/6 h-[350px] bg-colorWhite1 rounded-md"
          >
            <p className="p-4 font-[500] bg-colorWhite3 rounded-t-md">
              Send Feedback to Student
            </p>
            <div className="p-5 flex flex-col gap-5">
              <div className="h-10 border rounded-md">
                <InputElements
                  type="text"
                  form={form}
                  placeholder={"Student Score"}
                  id="studentAssignmentScore"
                />
              </div>
              <div className="w-full h-[150px]">
                <InputElements
                  type="textArea"
                  form={form}
                  placeholder={"Remark"}
                  id="studentAssignmentRemark"
                />
              </div>
              <div className="h-10 mt-5">
                <Button
                  text="Send Feedback"
                  background="bg-colorBlue"
                  color="text-colorWhite1"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AssignmentDetails

import React, { useEffect } from "react"
import { BiPlus } from "react-icons/bi"

import InputElements from "../../../../components/InputElements"
import { Button } from "../../../../components/Components"

const CreateAssignment = ({ form }) => {
  const { register, control, handleSubmit, formState, reset, errors } = form

  useEffect(() => {
    window.scrollTo({ top: 0, right: 0, behavior: "smooth" })
    reset()
  }, [])

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <div className="px-2 flex flex-col md:flex-row md:justify-between gap-10">
      <form
        className="md:w-3/5 border h-[26rem] rounded-md bg-colorWhite1"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        {" "}
        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-10 md:gap-0 w-full">
            <div className=" bg-colorWhite1 pb-5 w-full">
              <h5 className="text-start w-full bg-colorGray6 p-4  rounded-t-md mb-2">
                Create Assignment{" "}
              </h5>
              <fieldset className="px-4 md:w-[80%] flex flex-col gap-4">
                <div className="h-12">
                  <InputElements
                    type="text"
                    id="assignmentTitle"
                    placeholder="Assignment Title"
                    form={form}
                  />
                </div>
                <div className="h-[120px] col-span-2">
                  <InputElements
                    type="textArea"
                    id="assignmentDescription"
                    placeholder="Description"
                    form={form}
                  />
                </div>
                <div className="h-12 flex items-center justify-between md:justify-start gap-5">
                  <div className="">
                    <InputElements type="date" form={form} id="dueDate" />
                  </div>
                  <div className="">
                    <InputElements
                      type="number"
                      id="overallScore"
                      placeholder="Overall Score"
                      form={form}
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="h-10 mx-4 md:w-[50%] mt-4">
          <Button
            text="Edit Course"
            background="bg-colorBlue"
            color="text-colorWhite1"
          />
        </div>
      </form>
      <form
        className="md:w-[30%] h-[400px] flex flex-col gap-4 bg-colorWhite1 p-4 rounded-md shadow-md"
        noValidate
      >
        <h6 className="text-center">Upload Attachments</h6>
        <a
          className="text-sm text-colorBlue underline text-center"
          href="https://sample-videos.com/csv/Sample-Spreadsheet-10-rows.csv"
        >
          Download Sample files
        </a>

        <div className="h-[70px] w-full border-2 border-dotted rounded-md flex items-center justify-center">
          <label
            htmlFor="bulkInstructorInvite"
            className="text-sm flex items-center gap-4"
          >
            {" "}
            <BiPlus size={30} className="text-colorLightGreen" />
            Upload file here
          </label>
          <input
            type="file"
            accept=".csv"
            id="bulkLearnerInvite"
            className="hidden"
            {...register("bulkLearnerInvite")}
            // onChange={handleFileChange}
          />
        </div>
        <p className="text-xs text-colorGray3">MAX FILE SIZE: 20MB</p>

        <div className="h-[38px] flex gap-10">
          <Button
            text="Upload"
            background="bg-colorBlue"
            color="text-colorWhite1"
          />
        </div>
      </form>
    </div>
  )
}

export default CreateAssignment

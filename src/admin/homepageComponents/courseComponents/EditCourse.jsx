import React, { useState, useEffect } from "react"

import InputElements from "../../../components/InputElements"
import { dummyInstructors } from "../../../components/Components"
import { Button } from "../../../components/Components"

const EditCourse = ({
  onEditCourseSubmit,
  form,
  courseDefaultValue,
  courseAliasDefaultValue,
  courseDescriptionDefaultValue,
  groups,
  branches,
  extractCourseToEdit,
}) => {
  const { register, control, handleSubmit, formState, reset, errors } = form
  const [instructorsList, setInstructorsList] = useState(dummyInstructors)



  return (
    <form
      className="px-4 relative top-52 w-full flex flex-col items-center md:items-start h-screen  py-5 rounded-md justify-between gap-5"
      noValidate
      onSubmit={handleSubmit(onEditCourseSubmit)}
    >
      {" "}
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 w-full justify-between">
          <div className="md:w-[60%] bg-colorWhite1 pb-5">
            <h5 className="text-start w-full bg-colorGray6 p-4  rounded-t-md mb-2">
              Course Overview
            </h5>

            <fieldset className="px-4 md:w-full grid grid-cols-2 gap-4">
              <div className="h-10">
                <InputElements
                  type="text"
                  id="courseName"
                  placeholder="Course Title"
                  form={form}
                  defaultValue={courseDefaultValue}
                />
              </div>
              <div className="h-10">
                <InputElements
                  type="text"
                  id="courseAlias"
                  placeholder="Course Alias"
                  form={form}
                  defaultValue={courseAliasDefaultValue}
                />
              </div>
              <div className="h-[120px] col-span-2">
                <InputElements
                  type="textArea"
                  id="description"
                  placeholder="Course Description"
                  form={form}
                  defaultValue={courseDescriptionDefaultValue}
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
              />
            </fieldset>
          </div>
          <div className="md:w-[35%] md:h-[300px] flex flex-col gap-4 bg-colorWhite1 p-4 rounded-md shadow-md">
            <h6 className="text-center">Edit Course Instructors</h6>
            <div>
              <InputElements
                type="autoComplete"
                form={form}
                id="instructors"
                options={instructorsList.map((instructor) => instructor.name)}
                label="Search Instructors"
                control={control}
              />
            </div>
            <div className="flex flex-col gap-4">
              {Array.isArray(extractCourseToEdit[0]?.instructors) ? (
                extractCourseToEdit[0]?.instructors?.map((item) => (
                  <span
                    key={item}
                    className="bg-colorBlue text-colorWhite1 p-2 text-[12px] rounded-md"
                  >
                    {item}
                  </span>
                ))
              ) : (
                <span className="bg-colorBlue text-colorWhite1 p-2 rounded-md">
                  {extractCourseToEdit[0]?.instructors}
                </span>
              )}
            </div>
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
  )
}

export default EditCourse

import React, { useState } from "react"
import { BiPlus } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {
  setGetStarted,
  setSchoolProfile,
  setSchoolStructure,
  setCustomBranches,
  setSession,
  setInstructorAlias,
  setLearnersAlias
} from "../../../redux/features/createAdmin"

import OverallSummary from "../OverallSummary"
import { StickyHeadTable } from "../../../components/Components"
import { Button } from "../../../components/Components"
import SchoolStructure from "../../registrationComponents/SchoolStructure"
import CreateSchoolProfile from "../../registrationComponents/CreateSchoolProfile"
import CustomSchoolStructure from "../../registrationComponents/CustomSchoolStructure"
import summaryIcon from "../../../assets/admin/schoolIcons/schoolIcon.png"

const AdminSchoolStructure = ({
  form,
  editStructure,
  setEditStructure,
  findSchoolType,
  createSchoolProfile,
  setCreateSchoolProfile
}) => {
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const [csvFileName, setCsvFileName] = useState("")
  const {
    register,
    control,
    handleSubmit,
    formState,
    reset,
    errors,
    onChange
  } = form

  const { isSchoolProfile, isSchoolStructure, isCustomSchoolStructure } =
    createSchoolProfile

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
      dispatch(setCustomBranches(csvContent))
    }
    reader.readAsText(file)
  }

  const importGroupSubmit = (data) => {
    console.log(data)
    console.log(csvFileName)
  }

  // console.log(adminCompleteInfo)

  const onSchoolProfileSubmit = (data) => {
    dispatch(setSchoolProfile(data))
    setEditStructure(true)
    setCreateSchoolProfile({
      isSchoolProfile: false,
      isSchoolStructure: true,
      isCustomSchoolStructure: false
    })
    reset()
  }

  const schoolStructureSummit = (data) => {
    dispatch(setSchoolStructure(data))
    setEditStructure(true)
    setCreateSchoolProfile({
      isSchoolProfile: false,
      isSchoolStructure: false,
      isCustomSchoolStructure: true
    })
    reset()
  }

  const onCustomStructureSubmit = (data) => {
    dispatch(setCustomBranches(data))
    setEditStructure(false)
    setCreateSchoolProfile({
      isSchoolProfile: false,
      isSchoolStructure: false,
      isCustomSchoolStructure: false
    })
    reset()
  }

  const reverse = () => {
    setEditStructure(false)
    setCreateSchoolProfile({
      isSchoolProfile: false,
      isSchoolStructure: false,
      isCustomSchoolStructure: false
    })
    reset()
  }

  const buttonText1 = "Cancel"
  const buttonText2 = "Save Structure"

  return (
    <div className="px-4 relative top-52 w-full flex flex-col items-center md:items-start h-screen  py-5 rounded-md justify-between gap-5">
      <div className="flex gap-5 w-full justify-center md:justify-start">
        <OverallSummary icon={summaryIcon} title="Total Groups" figure="101" />
        <OverallSummary icon={summaryIcon} title="Total Branches" figure="6" />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between gap-10 md:gap-0 mb-20">
        <div className="md:w-[65%] w-full">
          {" "}
          {!editStructure && <StickyHeadTable />}
          <div className="md:-mt-10 w-full flex flex-col items-center md:items-start">
            {isSchoolProfile && editStructure && (
              <CreateSchoolProfile
                form={form}
                onSchoolProfileSubmit={onSchoolProfileSubmit}
                buttonText1={buttonText1}
                buttonText2={buttonText2}
                reverse={reverse}
                width="w-full"
                loginOption={false}
              />
            )}
            {isSchoolStructure && editStructure && (
              <SchoolStructure
                form={form}
                schoolStructureSummit={schoolStructureSummit}
                findSchoolType={findSchoolType}
                buttonText1={buttonText1}
                buttonText2={buttonText2}
                reverse={reverse}
              />
            )}
            {isCustomSchoolStructure && editStructure && (
              <CustomSchoolStructure
                form={form}
                onCustomStructureSubmit={onCustomStructureSubmit}
                buttonText1={buttonText1}
                buttonText2={buttonText2}
                reverse={reverse}
              />
            )}
          </div>
        </div>
        <form
          className="md:w-[30%] h-[300px] p-4 shadow-md rounded-md flex flex-col items-center gap-5 bg-colorWhite1"
          onSubmit={handleSubmit(importGroupSubmit)}
          noValidate
        >
          <h6>Bulk Import Groups</h6>
          <a
            className="text-sm text-colorBlue underline"
            href="https://sample-videos.com/csv/Sample-Spreadsheet-10-rows.csv"
          >
            Download Sample Spreadsheet
          </a>
          <div className="h-[70px] w-full border-2 border-dotted rounded-md flex items-center justify-center">
            <label
              htmlFor="bulkGroupImport"
              className="text-sm flex items-center gap-4"
            >
              {" "}
              <BiPlus size={30} className="text-colorLightGreen" />
              {csvFileName ? csvFileName : "Upload .csv file here"}
            </label>
            <input
              type="file"
              accept=".csv"
              id="bulkGroupImport"
              className="hidden"
              {...register("bulkGroupImport")}
              onChange={handleFileChange}
            />
          </div>
          <div className="h-10 w-full">
            <Button
              text="Import Groups"
              background="bg-colorBlue"
              color="text-colorWhite1"
            />
          </div>{" "}
        </form>
      </div>
    </div>
  )
}

export default AdminSchoolStructure

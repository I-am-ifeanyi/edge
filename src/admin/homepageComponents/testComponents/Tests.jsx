import React, { useState } from "react"
import { BsCalendar2Week } from "react-icons/bs"

import { Button } from "../../../components/Components"
const Tests = ({ previewedCourseList, setIsTestSubmission }) => {
  const calculateRemainingDays = (assignment) => {
    const dueDate = new Date(assignment.dueDate)
    const setDate = new Date(assignment.setDate)
    const currentTime = new Date()

    const timeDifference = dueDate - setDate
    const remainingTime = dueDate - currentTime

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24))

    return remainingDays
  }

  const assignmentName = previewedCourseList[0].assignments[0].title

  const daysRemaining = previewedCourseList[0]?.assignments?.map((lists) => {
    return calculateRemainingDays(lists)
  })
  if (daysRemaining < 1) {
    return (
      <div>
        <h4>Sorry, this test is long overdue</h4>
        <div className="h-10 mt-2 w-[150px]">
          <Button
            text="View Details"
            background="bg-colorBlue"
            color="text-colorWhite1"
            onClick={() => setIsTestSubmission(true)}
          />
        </div>
      </div>
    )
  }
  return (
    <div className="bg-colorWhite2 p-5 rounded-md flex flex-col">
      <h6>{assignmentName}</h6>
      {previewedCourseList[0]?.assignments?.map((lists, index) => {
        return (
          <div className="flex flex-col gap-2" key={index}>
            <p className="text-sm p-2 rounded-md">
              Set: <span className="underline">{lists.setDate}</span>
            </p>
            <ul className="list-decimal list-inside pl-2 flex flex-col gap-2 mb-4">
              <li>{lists.question1}</li>
              <li>{lists.question2}</li>
            </ul>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
              <div className="flex items-center gap-5 md:gap-2 text-sm ">
                <div className="flex items-center gap-2 p-2 rounded-md bg-colorGray6 h-8">
                  <BsCalendar2Week />
                  <p>Due: {lists.dueDate}</p>
                </div>
                <div className="h-8">
                  <Button
                    text="View Details"
                    background="bg-colorBlue"
                    color="text-colorWhite1"
                    onClick={() => setIsTestSubmission(true)}
                  />
                </div>
              </div>
              <div className="text-sm flex items-center gap-5 md:gap-2">
                <p className="underline">32 Students Submitted</p>
                <span
                  className={`${
                    calculateRemainingDays(lists) < 10
                      ? "text-colorRed"
                      : "text-green-800"
                  } tracking-widest`}
                >
                  {calculateRemainingDays(lists)} Day(s) Left
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Tests

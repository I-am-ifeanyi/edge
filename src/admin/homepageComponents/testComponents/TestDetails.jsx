import React from "react"

import OverallSummary from "../OverallSummary"

import courseIcon from "../../../assets/admin/coursesIcon/courses-icon.png"

const TestDetails = () => {
  return (
    <div>
      <div className="flex gap-4">
        <OverallSummary icon={courseIcon} title="Score" figure="7/10" />
        <OverallSummary icon={courseIcon} title="Time Spent" figure="30 mins" />
      </div>
    </div>
  )
}

export default TestDetails

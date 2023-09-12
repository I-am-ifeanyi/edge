import React, { useEffect } from "react"

import OverallSummary from "../../OverallSummary"
import courseIcon from "../../../../assets/admin/coursesIcon/courses-icon.png"
import AssignmentSubmissionTableList from "../../EnhancedTables/AssignmentSubmissionTableList"
import { assignmentSubmission } from "../../../../components/Components"

const TestSubmissions = ({ toggleDetailsState, setTestTaker }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, right: 0, behavior: "smooth" })
  }, [])
  return (
    <div className="px-2 w-full flex flex-col gap-5">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex md:w-1/2 justify-around md:gap-0 gap-4">
          {" "}
          <OverallSummary
            icon={courseIcon}
            title="Compliance"
            figure="90%"
          />{" "}
          <OverallSummary
            icon={courseIcon}
            title="Average Score"
            figure="7/10"
          />
        </div>
        <div className="flex justify-center md:w-1/2 md:justify-around md:gap-0 gap-4">
          {" "}
          <OverallSummary
            icon={courseIcon}
            title="Highest Score"
            figure="10/10"
          />{" "}
          <OverallSummary
            icon={courseIcon}
            title="Lowest Score"
            figure="4/10"
          />
        </div>
      </div>
      <div>
        <AssignmentSubmissionTableList
          dataToDisplay={assignmentSubmission}
          listName="Test Submissions"
          toggleIsDetails={toggleDetailsState}
          setTestTaker={setTestTaker}
        />
      </div>
    </div>
  )
}

export default TestSubmissions

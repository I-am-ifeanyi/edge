import React from "react"

import OverallSummary from "../../OverallSummary"
import courseIcon from "../../../../assets/admin/coursesIcon/courses-icon.png"
import AssignmentSubmission from "../../EnhancedTables/AssignmentSubmission"

const Submissions = ({ assignmentSubmission }) => {
  return (
    <div className="px-2 w-full">
      <div className="flex flex-col md:flex-row gap-4 ">
        <div className="flex justify-around gap-4">
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
        <div className="flex justify-center gap-4">
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
        <AssignmentSubmission
          dataToDisplay={assignmentSubmission}
          listName="Assignment Submissions"
        />
      </div>
    </div>
  )
}

export default Submissions

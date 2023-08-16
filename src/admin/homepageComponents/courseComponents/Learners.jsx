import React from "react"
import { dummyLearners } from "../../../components/Components"
import LearnersTableList from "../EnhancedTables/LearnersTableList"

import OverallSummary from "../OverallSummary"
import learnersIcon from "../../../assets/admin/learnersIcon/learnerIcon.png"

const Learners = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <OverallSummary
        icon={learnersIcon}
        title="Total Learners"
        figure="1523"
      />
      <LearnersTableList dataToDisplay={dummyLearners} listName="Learners List"/>
    </div>
  )
}

export default Learners



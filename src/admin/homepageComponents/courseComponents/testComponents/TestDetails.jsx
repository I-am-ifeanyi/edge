import React, { useEffect, useState } from "react"

import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { pink } from "@mui/material/colors"
import Radio from "@mui/material/Radio"
import Checkbox from "@mui/material/Checkbox"

import OverallSummary from "../../OverallSummary"
import { dummyQuestions } from "../../../../components/Components"
import InputElements from "../../../../components/InputElements"
import { Button } from "../../../../components/Components"

import courseIcon from "../../../../assets/admin/coursesIcon/courses-icon.png"

const TestDetails = ({ testTaker, form }) => {
  const { register, control, handleSubmit, formState, reset, errors } = form
  const [isRemarkSubmitted, setIsRemarkSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, right: 0, behavior: "smooth" })
  }, [isRemarkSubmitted])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 justify-between md:justify-start">
        <OverallSummary icon={courseIcon} title="Score" figure="7/10" />
        <OverallSummary icon={courseIcon} title="Time Spent" figure="30 mins" />
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-2/3">
          <p className="bg-colorWhite3 p-2 rounded-t-md">
            <span className="font-bold">{testTaker}</span>'s Test Details
          </p>
          <div className="bg-colorWhite1 p-2 md:p-5 rounded-md">
            {dummyQuestions.map((questions, index) => {
              return (
                <Accordion sx={{ marginY: "10px" }} key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ backgroundColor: "#F1F1F5" }}
                  >
                    <h6 className="tracking-wider w-full font-[500]">
                      <span className="font-bold">Question {index + 1}: </span>{" "}
                      {questions.question}
                    </h6>
                  </AccordionSummary>
                  <AccordionDetails>
                    {questions.options.map((answer, index) => {
                      return (
                        <div
                          className={`flex items-center justify-between border my-2 rounded-md ${
                            answer === questions.correct
                              ? "border-colorGreen"
                              : index === 0
                              ? "border-colorRed"
                              : "border-colorGray6"
                          }`}
                          key={index}
                        >
                          <div className="flex items-center">
                            <Radio
                              checked={
                                index === 0 || answer === questions.correct
                                  ? true
                                  : false
                              }
                              sx={{
                                color:
                                  answer === questions.correct
                                    ? "green"
                                    : pink[100],
                                "&.Mui-checked": {
                                  color:
                                    answer === questions.correct
                                      ? "green"
                                      : pink[600]
                                }
                              }}
                            />
                            <p>{answer}</p>
                          </div>
                          {answer === questions.correct && (
                            <Checkbox checked={true} color="success" />
                          )}
                        </div>
                      )
                    })}
                  </AccordionDetails>
                </Accordion>
              )
            })}
          </div>
        </div>
        {!isRemarkSubmitted && (
          <form
            className="flex flex-col items-center justify-center md:justify-start bg-colorWhite1 md:w-1/3 h-[350px] rounded-md"
            noValidate
            onSubmit={handleSubmit((data) => {
              setIsRemarkSubmitted(true)
              reset()
            })}
          >
            <p className="bg-colorWhite3 p-2 rounded-t-md w-full">
              Send Feedback to Student
            </p>
            <div className="w-full h-[200px] p-4">
              <InputElements
                type="textArea"
                form={form}
                placeholder="Remarks"
                id="testFeedback"
              />
            </div>
            <div className="h-10 w-full mt-5 px-4">
              <Button
                text="Send Feedback"
                background="bg-colorBlue"
                color="text-colorWhite1"
              />
            </div>
          </form>
        )}
        {isRemarkSubmitted && (
          <div className="p-4 bg-colorWhite1 rounded-md md:w-1/3 h-[150px] flex flex-col items-center justify-center gap-4">
            <p>
              Remark to <span className="font-[600]">{testTaker} </span>
              submitted!
            </p>
            <div className="h-10">
              <Button
                text="Send another remark?"
                background="bg-colorBlue"
                color="text-colorWhite1"
                onClick={() => setIsRemarkSubmitted(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TestDetails

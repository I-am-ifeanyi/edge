import React, { useState, useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import ApexCharts from "apexcharts"
import { AiOutlineClose } from "react-icons/ai"

import HeaderComponent from "./homepageComponents/HeaderComponent"
import OverallSummary from "./homepageComponents/OverallSummary"
import InputElements from "../components/InputElements"
import analyticsIcon from "../assets/admin/generalAnalytics-icons/analytics.png"
import instructorsIcon from "../assets/admin/dashboard-icons/instructors-icon.png"
import learnersIcon from "../assets/admin/dashboard-icons/learners-icon.png"
import coursesIcon from "../assets/admin/dashboard-icons/courses-icon.png"



import { Button } from "../components/Components"


const GeneralAnalytics = () => {
  const testRef = useRef(null)
  const bestCourseRef = useRef(null)
  const assignmentRef = useRef(null)
  const attendanceRef = useRef(null)

  const form = useForm()
  const { register, control, handleSubmit, formState, reset, errors } = form

  const [activeLinks, setActiveLinks] = useState({
    analytics: true,
    play: false,
    great: false
  })
  const [createNewSession, setCreateNewSession] = useState(false)

  const { analytics, play, great } = activeLinks

  const subLinks = [
    {
      A: "Analytics",
      isActive: analytics
    }
  ]

  const locations = [
    {
      A: "Dashboard",
      isActive: false
    },
    {
      A: "General Analytics",
      isActive: true
    }
  ]

  useEffect(() => {
    const options = {
      series: [
        {
          name: "Performance",
          data: [40, 28, 60, 90, 50, 10, 30, 55, 40, 28, 60, 90]
        }
      ],
      chart: {
        height: 300,
        width: "100%",
        type: "line",
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false,
          exportMenu: {
            show: false
          }
        },
        background: "#FFFFFF"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        colors: ["#041644"],
        width: 2
      },
      title: {
        text: "Overall Test Performance",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      }
    }

    if (testRef && testRef.current) {
      const chart = new ApexCharts(testRef.current, options)
      testRef.current.style.margin = "35px auto"
      chart.render()
      return () => {
        chart.destroy()
      }
    }
  }, [])

  useEffect(() => {
    const assignmentOptions = {
      series: [
        {
          name: "Performance",
          data: [100, 28, 30, 20, 50, 10, 80, 45, 40, 28, 70, 90]
        }
      ],
      chart: {
        height: 300,
        width: "100%",
        type: "line",
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false,
          exportMenu: {
            show: false
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        colors: ["#041644"],
        width: 2
      },
      title: {
        text: "Overall Assignment Performance",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      }
    }

    if (assignmentRef && assignmentRef.current) {
      const chart = new ApexCharts(assignmentRef.current, assignmentOptions)
      assignmentRef.current.style.margin = "35px auto"
      chart.render()
      return () => {
        chart.destroy()
      }
    }
  }, [])

  useEffect(() => {
    const options = {
      series: [44, 85, 50, 70],
      chart: {
        type: "donut",
        height: 250,
        foreColor: "#333", // Font color of the chart
        toolbar: {
          show: false // Hide the download and other toolbar options
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: "80%"
          }
        }
      },
      labels: ["Physics", "Biology", "Mathematics", "Chemistry"], // Custom labels for the data points
      colors: ["#041644", "#FF974A", "#3DD598", "#FFC542"], // Custom colors for the chart slices
      legend: {
        position: "bottom", // Set the position of the legend
        fontSize: "14px", // Custom font size for the legend
        markers: {
          width: 12,
          height: 12,
          radius: 2 // Adjust the size of the legend marker
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
              height: 300
            }
          }
        }
      ]
    }
    // pieChartRef
    if (bestCourseRef && bestCourseRef.current) {
      const chart = new ApexCharts(bestCourseRef.current, options)
      bestCourseRef.current.style.margin = "35px auto"
      chart.render()
      return () => {
        chart.destroy()
      }
    }
  }, [])

  useEffect(() => {
    const options = {
      series: [60, 40],
      chart: {
        type: "donut",
        height: 250,
        foreColor: "#333", // Font color of the chart
        toolbar: {
          show: false // Hide the download and other toolbar options
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: "80%"
          }
        }
      },
      labels: ["Present in Live Sessions", "Absent in Live Sessions"], // Custom labels for the data points
      colors: ["#041644", "#3DD598"], // Custom colors for the chart slices
      legend: {
        position: "bottom", // Set the position of the legend
        fontSize: "14px", // Custom font size for the legend
        markers: {
          width: 12,
          height: 12,
          radius: 2 // Adjust the size of the legend marker
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
              height: 300
            }
          }
        }
      ]
    }
    // pieChartRef
    if (attendanceRef && attendanceRef.current) {
      const chart = new ApexCharts(attendanceRef.current, options)
      attendanceRef.current.style.margin = "35px auto"
      chart.render()
      return () => {
        chart.destroy()
      }
    }
  }, [])

  const toggleCreateNewSession = () => {
    setCreateNewSession((prev) => !prev)
  }

  const onNewSessionSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <div className="md:w-[90%] w-full absolute h-full right-0">
        <HeaderComponent
          icon={analyticsIcon}
          title="General Analytics"
          subLinks={subLinks}
          locations={locations}
          buttonProps="Create new session"
          onClick={toggleCreateNewSession}
          createSession={true}
          toggleItems={""}
        />
        <div className="relative top-48 px-4">
          <div className="md:w-[170px] my-3 md:float-right">
            <InputElements
              type="select"
              id="schoolType"
              label="1st Term, 2023"
              form={form}
              options={["1st Term, 2023", "2nd Semester, 2023", "Private"]}
              required={false}
            />
          </div>
          <div className="md:w-full flex flex-col gap-5">
            <div className="flex md:w-[70%] justify-between md:-mt-5">
              <OverallSummary
                icon={instructorsIcon}
                title="Total Instructors"
                figure="231"
              />
              <OverallSummary
                icon={learnersIcon}
                title="Total Learners"
                figure="101"
              />
              <OverallSummary
                icon={coursesIcon}
                title="Total Courses"
                figure="72"
              />
            </div>
            <div className="flex flex-col gap-10 mb-20">
              <div className="w-full flex flex-col md:flex-row gap-20 md:gap-0 justify-between">
                <div className="md:w-[70%] h-[350px] shadow rounded-md bg-colorWhite1">
                  <div ref={testRef} />
                </div>
                <div className="md:w-[25%] shadow rounded-md flex flex-col items-center justify-center h-[350px] bg-colorWhite1">
                  <h6 className="mt-5">Best Courses</h6>
                  <div ref={bestCourseRef} />
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-20 md:gap-0 justify-between">
                <div className="md:w-[70%] h-[350px] shadow rounded-md bg-colorWhite1">
                  <div ref={assignmentRef} />
                </div>
                <div className="md:w-[25%] shadow rounded-md flex flex-col items-center justify-center h-[350px] bg-colorWhite1">
                  <h6 className="mt-5">Attendance Rate</h6>
                  <div ref={attendanceRef} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {createNewSession && (
        <div className="w-full h-screen fixed z-20 flex items-center justify-center">
          <div className="absolute bg-colorBlue w-full h-screen opacity-50"></div>{" "}
          <div className="w-[90%] md:w-[600px] mt-10 flex-shrink-0 bg-colorWhite1 rounded-md shadow-md md:px-8 px-5 py-5 flex flex-col gap-4 items-center animate__animated animate__zoomIn">
            <div className="w-full relative flex items-center mb-5">
              <h4 className="mr-auto text-center">Create New Session</h4>
              <AiOutlineClose
                size={30}
                onClick={toggleCreateNewSession}
                className="text-colorBlue border rounded"
              />
            </div>

            <form
              className="w-full flex flex-col gap-4"
              onSubmit={handleSubmit(onNewSessionSubmit)}
              noValidate
            >
              <InputElements
                type="text"
                id="newSession"
                placeholder="First Term 2020/2021"
                form={form}
              />
              <InputElements
                type="select"
                options={["Quarterly", "Triannual", "Biannual"]}
                label="Session Frequency"
                id="newSessionPeriod"
                placeholder="2020/2021 Session"
                form={form}
                required={true}
              />

              <div className="h-[38px] flex gap-10">
                <Button
                  text="Create Session"
                  background="bg-colorBlue"
                  color="text-colorWhite1"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default GeneralAnalytics

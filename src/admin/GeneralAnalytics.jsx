import React, { useState, useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import ApexCharts from "apexcharts"

import HeaderComponent from "./homepageComponents/HeaderComponent"
import OverallSummary from "./homepageComponents/OverallSummary"
import InputElements from "../components/InputElements"
import analyticsIcon from "./Assets/generalAnalytics-icons/analytics.png"
import instructorsIcon from "./Assets/dashboard-icons/instructors-icon.png"
import learnersIcon from "./Assets/dashboard-icons/learners-icon.png"
import coursesIcon from "./Assets/dashboard-icons/courses-icon.png"

const GeneralAnalytics = () => {
  const form = useForm()
  const [activeLinks, setActiveLinks] = useState({
    analytics: true,
    play: false,
    great: false
  })

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

  const chartRef = useRef(null)

 useEffect(() => {
   // Your ApexCharts options
   const options = {
     series: [
       {
         name: "Performance",
         data: [40, 28, 60, 90, 50, 10, 30, 55, 40, 28, 60, 90]
       }
     ],
     chart: {
       height: 350,
       width: "100%",
       type: "line",
       zoom: {
         enabled: false
       },
       toolbar: {
         show: false, // Hide the hamburger menu
         exportMenu: {
           show: false // Hide the export menu (download options)
         }
       }
     },
     dataLabels: {
       enabled: false
     },
     stroke: {
       curve: "smooth"
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
       ],
       labels: {
         rotate: -45 // Rotate the labels 45 degrees counter-clockwise
       }
     }
   }

   if (chartRef && chartRef.current) {
     const chart = new ApexCharts(chartRef.current, options)
     chartRef.current.style.margin = "35px auto"
     chart.render();
       return () => {
         chart.destroy()
       }
   }
   
 }, [])


  return (
    <div className="md:w-[90%] absolute h-full right-0">
      <HeaderComponent
        icon={analyticsIcon}
        title="General Analytics"
        subLinks={subLinks}
        locations={locations}
        buttonProps="Create new session"
      />
      <div className="relative top-48 px-4">
        <div className="md:w-[170px] float-right">
          <InputElements
            type="select"
            id="schoolType"
            label="1st Term, 2023"
            form={form}
            options={["1st Term, 2023", "2nd Semester, 2023", "Private"]}
          />
        </div>
        <div className="md:w-full flex flex-col gap-5">
          <div className="flex md:w-[70%] justify-between -mt-12">
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
          <div className="w-full flex justify-between">
            <div className="md:w-[70%] shadow rounded-md">
              <div ref={chartRef} />
            </div>
            <div className="md:w-[25%] bg-green-500">Secondary</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralAnalytics

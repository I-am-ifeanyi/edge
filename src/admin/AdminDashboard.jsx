import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"

import dashboardIcon from "./assets/dashboard-icons/dashboard-icon.png"
import schoolIcon from "./Assets/dashboard-icons/school-icon.png"
import instructorsIcon from "./Assets/dashboard-icons/instructors-icon.png"
import learnersIcon from "./Assets/dashboard-icons/learners-icon.png"
import courseIcon from "./assets/dashboard-icons/courses-icon.png"
import broadcastIcon from "./Assets/dashboard-icons/broadcast-icon.png"
import financeIcon from "./assets/dashboard-icons/finance-icon.png"
import settingsIcon from "./assets/dashboard-icons/settings-icon.png"
import { fetchLocalUserData } from "../components/Components"

const AdminDashboard = () => {
  const { adminCompleteInfo } = useSelector((store) => store.adminInfo)

  const dashboardLinks = [
    {
      icon: dashboardIcon,
      name: "Dashboard",
      link: "/dashboard"
    },
    {
      icon: schoolIcon,
      name: "School",
      link: "/school"
    },
    {
      icon: instructorsIcon,
      name: "Instructors",
      link: "/instructors"
    },
    {
      icon: learnersIcon,
      name: "Learners",
      link: "/learners"
    },
    {
      icon: courseIcon,
      name: "Courses",
      link: "/courses"
    },
    {
      icon: broadcastIcon,
      name: "Broadcast",
      link: "/broadcast"
    },
    {
      icon: financeIcon,
      name: "Finance",
      link: "/finance"
    },
    {
      icon: settingsIcon,
      name: "Settings",
      link: "/settings"
    }
  ]

 

  return (
    <div className="w-full fixed h-full shrink-0 flex justify-between bg-colorWhite1 ">
      <ul className="relative text-colorWhite1 text-[12px] h-full flex flex-col items-center py-5 gap-6 md:min-w-[10%] bg-colorBlue overflow-y-scroll ">
        {dashboardLinks.map((links, index) => {
          return (
            <NavLink
              to={links.link}
              className={({ isActive }) =>
                isActive
                  ? "bg-colorWhitishBlue flex flex-col items-center w-[70%] py-1 rounded-md"
                  : "flex flex-col items-center hover:bg-colorWhitishBlue transition-all duration-500 rounded-md py-1 w-[70%]"
              }
              //   className="flex flex-col items-center"
              key={index}
            >
              <img src={links.icon} alt="" className="w-[24px]" />
              <p>{links.name}</p>
            </NavLink>
          )
        })}
      </ul>
     
     
    </div>
  )
}

export default AdminDashboard

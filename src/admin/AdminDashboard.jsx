import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"

import analyticsIcon from "../assets/admin/generalAnalytics-icons/analytics.png"
import instructorsIcon from "../assets/admin/dashboard-icons/instructors-icon.png"
import learnersIcon from "../assets/admin/dashboard-icons/learners-icon.png"
import courseIcon from "../assets/admin/dashboard-icons/courses-icon.png"
import dashboardIcon from "../assets/admin/dashboard-icons/dashboard-icon.png"
import broadcastIcon from "../assets/admin/dashboard-icons/broadcast-icon.png"
import financeIcon from "../assets/admin/dashboard-icons/finance-icon.png"
import schoolIcon from "../assets/admin/dashboard-icons/school-icon.png"
import settingsIcon from "../assets/admin/dashboard-icons/settings-icon.png"



import edgeLogo from "../assets/Logo.png"

const AdminDashboard = () => {
  const [showNavLinks, setShowNavLinks] = useState(false)

  const toggleNavLinks = () => {
    setShowNavLinks(prev => !prev)
  }

  const closeNavLinks = () => {
    setShowNavLinks(false)
  }
  const dashboardLinks = [
    {
      icon: dashboardIcon,
      name: "Dashboard",
      link: "/admin/dashboard"
    },
    {
      icon: schoolIcon,
      name: "School",
      link: "/admin/school"
    },
    {
      icon: instructorsIcon,
      name: "Instructors",
      link: "/admin/instructors"
    },
    {
      icon: learnersIcon,
      name: "Learners",
      link: "/admin/learners"
    },
    {
      icon: courseIcon,
      name: "Courses",
      link: "/admin/courses"
    },
    {
      icon: broadcastIcon,
      name: "Broadcast",
      link: "/admin/broadcast"
    },
    {
      icon: financeIcon,
      name: "Finance",
      link: "/admin/finance"
    },
    {
      icon: settingsIcon,
      name: "Settings",
      link: "/admin/settings"
    }
  ]

  return (
    <div className="flex justify-between fixed w-full z-20">
      <div
        className={`w-full z-20 md:z-0 md fixed h-full shrink-0  justify-between bg-colorBlue md:bg-transparent animate__animated  md:animate-none ${
          showNavLinks ? "flex" : "hidden"
        }  md:flex ${
          showNavLinks ? "animate__fadeInRight" : "animate__fadeOutRight"
        } `}
      >
        <ul className="relative w-full text-colorWhite1 md:text-[12px] h-full flex flex-col md:items-center py-2 md:py-5 gap-3 md:gap-6 md:w-[10%] bg-colorBlue overflow-y-scroll ">
          {dashboardLinks.map((links, index) => {
            return (
              <NavLink
                to={links.link}
                className={({ isActive }) =>
                  isActive
                    ? "md:bg-colorWhitishBlue flex flex-col items-center md:w-[70%] w-[60%] md:py-1 p-2 md:rounded-md border-b"
                    : "flex flex-col items-center md:hover:bg-colorWhitishBlue transition-all duration-500 md:rounded-md py-1 w-[60%] md:w-[70%] border-b"
                }
                //   className="flex flex-col items-center"
                key={index}
                onClick={closeNavLinks}
              >
                <img src={links.icon} alt="" className="md:w-[24px] w-[40px]" />
                <p>{links.name}</p>
              </NavLink>
            )
          })}
        </ul>
        <AiOutlineClose
          size={50}
          className="text-colorWhite1 md:hidden  m-5 "
          onClick={toggleNavLinks}
        />
      </div>
      <div className="md:hidden flex items-start justify-between w-full py-2 px-4 bg-colorWhite1">
        <figure>
          <img src={edgeLogo} alt="" />
          <figcaption className="text-[10px] text-right -mt-1 italic text-colorBlue">
            Education at its best
          </figcaption>
        </figure>
        <GiHamburgerMenu
          size={40}
          className="text-colorBlue md:hidden"
          onClick={toggleNavLinks}
        />
      </div>
    </div>
  )
}

export default AdminDashboard

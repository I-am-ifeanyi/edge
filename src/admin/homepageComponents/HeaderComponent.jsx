import React, { useEffect, useState } from "react"
import { AiFillCaretRight } from "react-icons/ai"
import { BsFillCaretDownFill } from "react-icons/bs"
import { fetchLocalUserData } from "../../components/Components"
import { CgProfile } from "react-icons/cg"
import edgeLogo from "../../assets/Logo.png"

import { Button } from "../../components/Components"

const HeaderComponent = ({
  icon,
  title,
  subLinks,
  locations,
  buttonProps,
  onClick,
  isFunctionButton,
  toggleItems,
  disabled,
  page,
  subTitle
}) => {
  const {
    toggleA,
    toggleB,
    toggleOverview,
    toggleLearners,
    toggleLessons,
    toggleAssignments,
    toggleTests,
    toggleLiveSessions,
    toggleDiscussions
  } = toggleItems

  const handleAlternateLinksSchool = (linkName) => {
    if (linkName !== "Basic Information") {
      toggleA()
    } else if (linkName !== "School Structure") {
      toggleB()
    }
  }

  const handleAlternateLinksInstructors = (linkName) => {
    if (linkName !== "All Instructors") {
      toggleA()
    } else if (linkName !== "Settings") {
      toggleB()
    }
  }

  const handleAlternateLinksLearners = (linkName) => {
    if (linkName !== "All Learners") {
      toggleA()
    } else if (linkName !== "Settings") {
      toggleB()
    }
  }

  const handleAlternateLinksCourses = (linkName) => {
    if (linkName === "Overview") {
      toggleOverview()
    } else if (linkName === "Learners") {
      toggleLearners()
    } else if (linkName === "Lessons") {
      toggleLessons()
    } else if (linkName === "Assignments") {
      toggleAssignments()
    } else if (linkName === "Tests") {
      toggleTests()
    } else if (linkName === "Live Sessions") {
      toggleLiveSessions()
    } else if (linkName === "Discussions") {
      toggleDiscussions()
    }
  }

  let alternateLinks

  if (page === "school") {
    alternateLinks = handleAlternateLinksSchool
  } else if (page === "instructors") {
    alternateLinks = handleAlternateLinksInstructors
  } else if (page === "learners") {
    alternateLinks = handleAlternateLinksLearners
  } else if (page === "courses") {
    alternateLinks = handleAlternateLinksCourses
  }

  const [adminInfo, setAdminInfo] = useState("")
  useEffect(() => {
    setAdminInfo(fetchLocalUserData("completeAdminInfo"))
  }, [])

  return (
    <div className="w-full md:w-[90%] md:h-[140px] flex flex-col  fixed right-0 gap-1 bg-colorWhite1 z-10 md:top-0 top-12">
      <div className="flex items-center px-4">
        <img src={edgeLogo} alt="Edge Logo"  className="hidden md:block"/>
        <div className="md:w-full md:h-[70px] md:flex items-center justify-end gap-4 pb-2 hidden">
          {!adminInfo?.adminLogo ? (
            <img
              src={adminInfo?.adminLogo}
              alt="Administrator"
              className="w-[38px]"
            />
          ) : (
            <CgProfile size={30} className="text-colorGray4" />
          )}
          <div>
            <h6 className="text-[14px] font-bold">
              {adminInfo?.getStarted?.email}
            </h6>
            <p className="text-[12px] text-colorGray4 text-center">
              Administrator
            </p>
          </div>
          <BsFillCaretDownFill className="text-colorGray4" />
        </div>
      </div>
      <ul className="flex items-center gap-1 text-[10px] px-4 mt-2 md:mt-0">
        {locations.map((item, index) => {
          return (
            <li className="flex items-center gap-2" key={index}>
              <span
                className={`${
                  item.isActive ? "text-colorBlue underline" : null
                }`}
              >
                {item.A}
              </span>
              <AiFillCaretRight />
            </li>
          )
        })}
      </ul>
      <div className="flex flex-col justify-between h-full mt-4 w-full bg-colorWhite1">
        <div className="flex justify-between px-4 bg-colorWhite1">
          <div className="flex flex-col gap-2 items-start">
            <img src={icon} alt="" />
            <h4>
              {title}{" "}
              {subTitle && (
                <span className="text-sm text-colorGray3">{subTitle}</span>
              )}
            </h4>
          </div>
          {isFunctionButton && (
            <div className="h-10">
              <Button
                color="text-colorWhite1"
                background="bg-colorBlue"
                text={buttonProps}
                font="md:text-[12px] text-[10px]"
                onClick={onClick}
                disabled={disabled}
              />
            </div>
          )}
        </div>
        <ul className="flex flex-wrap gap-5 mt-2 border-b px-4 bg-colorWhite1 cursor-pointer">
          {subLinks.map((item, index) => {
            return (
              <li
                onClick={() => {
                  alternateLinks(item.A)
                }}
                key={index}
                className={`${
                  item.isActive
                    ? "border-colorBlue text-sm border-b-2 font-bold tracking-widest"
                    : "tracking-widest hover:border-colorBlue text-sm hover:border-b-2 transition-all duration-500"
                } `}
              >
                {item.A}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default HeaderComponent

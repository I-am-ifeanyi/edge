import React, { useEffect, useState } from "react"
import { AiFillCaretRight } from "react-icons/ai"
import { BsFillCaretDownFill } from "react-icons/bs"
import { fetchLocalUserData } from "../../components/Components"
import { CgProfile } from "react-icons/cg"

import { Button } from "../../components/Components"

const HeaderComponent = ({
  icon,
  title,
  subLinks,
  locations,
  buttonProps,
  onClick
}) => {
  const [adminInfo, setAdminInfo] = useState("")

  useEffect(() => {
    setAdminInfo(fetchLocalUserData("completeAdminInfo"))
  }, [])

  return (
    <div className="md:w-[90%] md:h-[140px] flex flex-col fixed right-0 gap-1 bg-colorWhite1 z-10">
      <div className="md:w-full md:h-[70px] flex items-center justify-end gap-4 px-4 ">
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
      <ul className="flex items-center gap-1 text-[10px] px-4 ">
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
            <h4>{title}</h4>
          </div>
          <div className="h-10">
            <Button
              color="text-colorWhite1"
              background="bg-colorBlue"
              text={buttonProps}
              font="text-[12px]"
              onClick={onClick}
            />
          </div>
        </div>
        <ul className="flex justify-between gap-4 mt-2 border-b px-4 bg-colorWhite1">
          {subLinks.map((item, index) => {
            return (
              <li
                key={index}
                className={`${
                  item.isActive ? "border-colorBlue border-b-2 " : ""
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

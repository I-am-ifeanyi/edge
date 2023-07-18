import React from 'react'

import dashboardIcon from "./assets/dashboard-icons/dashboard-icon.png"
import courseIcon from "./assets/dashboard-icons/courses-icon.png"
import financeIcon from "./assets/dashboard-icons/finance-icon.png"
import settingsIcon from "./assets/dashboard-icons/settings-icon.png"

const MainDashboard = () => {
  return (
    <div className='fixed w-[10%] bg-colorBlue h-full shrink-0'>
      <ul className='relative text-colorWhite1 text-[12px] h-full w-full flex flex-col items-center gap-10 mt-10'>
        <li className='flex flex-col items-center'><img src={dashboardIcon} alt="" /><p>Dashboard</p></li>
        <li className='flex flex-col items-center'><img src={courseIcon} alt="" /><p>Courses</p></li>
        <li className='flex flex-col items-center'><img src={financeIcon} alt="" /><p>Finance</p></li>
        <li className='flex flex-col items-center'><img src={settingsIcon} alt="" /><p>Settings</p></li>

      </ul>
    </div>
  )
}

export default MainDashboard
import React from 'react'
import { Outlet } from 'react-router-dom'

import MainDashboard from '../../MainDashboard'

const PageLayout = () => {
  return (
    <div className='relative'>
        <MainDashboard />
        <Outlet />
    </div>
  )
}

export default PageLayout
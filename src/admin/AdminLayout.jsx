import React from 'react'
import { Outlet } from 'react-router-dom'

import AdminDashboard from './AdminDashboard'
import HeaderComponent from './homepageComponents/HeaderComponent'

const AdminLayout = () => {
  return (
    <div>
      <AdminDashboard />
      <Outlet />
    </div>
  )
}

export default AdminLayout
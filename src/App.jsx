import React from "react"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"
import Login from "./authentication/Login"
import MainDashboard from "./MainDashboard"
import PageLayout from "./users/students/PageLayout"
import StudentDashboard from "./users/students/StudentDashboard"
import CreateAdmin from "./admin/CreateAdmin"
import GeneralAnalytics from "./admin/GeneralAnalytics"
import AdminLayout from "./admin/AdminLayout"




export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<CreateAdmin />} />
        <Route path="dashboard" element={<AdminLayout />}>
          <Route index element={<GeneralAnalytics />} />
        </Route>

        <Route path="home-page" element={<PageLayout />}>
          <Route index element={<StudentDashboard />} />
        </Route>
      </Route>
    )
  )


  return (
    <RouterProvider router={router} />
  )
}
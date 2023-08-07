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
import School from "./admin/School"
import Instructors from "./admin/Instructors"
import Learners from "./admin/Learners"
import Courses from "./admin/Courses"

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<CreateAdmin />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<GeneralAnalytics />} />
          <Route path="school" element={<School />} />
          <Route path="instructors" element={<Instructors />} />
          <Route path="learners" element={<Learners />} />
          <Route path="courses" element={<Courses />} />
        </Route>

        <Route path="home-page" element={<PageLayout />}>
          <Route index element={<StudentDashboard />} />
        </Route>
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

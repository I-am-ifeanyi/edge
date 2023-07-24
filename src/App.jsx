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
import AdminHomepage from "./admin/AdminHomepage"




export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route >
      <Route path="/" element={<CreateAdmin />} />
      <Route path="adminHomepage" element={<AdminHomepage />} />
      <Route path="home-page" element={<PageLayout />}>
        <Route index element={<StudentDashboard />} />
      </Route>



    </Route>
  ))


  return (
    <RouterProvider router={router} />
  )
}
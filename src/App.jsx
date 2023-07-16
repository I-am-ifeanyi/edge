import React from "react"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"
import Login from "./authentication/Login"




export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route >
      <Route path="/" element={<Login />} />



    </Route>
  ))


  return (
    <RouterProvider router={router} />
  )
}
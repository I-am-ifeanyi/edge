import React, { useEffect, useState } from "react"
import { AiFillCaretRight } from "react-icons/ai"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import { CiEdit } from "react-icons/ci"
import { RiDeleteBin6Line } from "react-icons/ri"

import Logo from "../assets/Logo.png"
import background from "../assets/Shape.png"

export const Button = ({
  icon,
  color,
  background,
  text,
  onClick,
  font,
  disabled
}) => {
  return (
    <button
      className={`w-full h-full px-5 ${background} flex items-center justify-center gap-3 hover:translate-x-1 transition-all duration-500 ${font}  rounded-md ${color}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon} {text}
    </button>
  )
}

export const LogoHeader = ({ isNext, setIsNext, loginAdmin }) => {
  const [progressWidth, setProgressWidth] = useState("16.7%")
  const {
    getStarted,
    schoolProfile,
    adminLogo,
    schoolStructure,
    customStructure,
    session,
    instructorInvite,
    learnerInvite
  } = isNext

  useEffect(() => {
    if (schoolProfile) {
      setProgressWidth("33.4%")
    } else if (schoolStructure || customStructure) {
      setProgressWidth("50.1%")
    } else if (session) {
      setProgressWidth("66.7%")
    } else if (instructorInvite) {
      setProgressWidth("83.5%")
    } else if (learnerInvite || loginAdmin) {
      setProgressWidth("100%")
    }
  }, [
    getStarted,
    schoolProfile,
    adminLogo,
    schoolStructure,
    customStructure,
    session,
    instructorInvite,
    learnerInvite
  ])

  const skipAll = () =>
    setIsNext({
      getStarted: false,
      schoolProfile: false,
      schoolStructure: false,
      customStructure: false,
      session: false,
      instructorInvite: false,
      learnerInvite: false,
      loginAdmin: true
    })

  return (
    <header className="border h-14 shadow fixed bg-colorWhite1 w-full top-0 z-10">
      <div className="border md:px-10 px-2 h-14 flex items-center justify-between shadow fixed bg-colorWhite1 w-full top-0 z-10">
        <img src={Logo} />
        {!getStarted && (
          <button
            className="flex items-center gap-2 hover:translate-x-1 transition-all duration-500 bg-colorWhite3 px-4 py-2"
            onClick={skipAll}
          >
            Skip to login <AiFillCaretRight />
          </button>
        )}
      </div>
      <label
        className={`absolute top-14 left-0 h-1 bg-colorBlue`}
        style={{ width: progressWidth }}
      ></label>
    </header>
  )
}

export const backgroundStyle = {
  backgroundImage: `url('${background}')`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#E5E5E5",
  shrink: 0
}

export const CONSTANTS = {
  EMAIL_PLACEHOLDER: "Email",
  PASSWORD_PLACEHOLDER: "Password",
  CONFIRM_PASSWORD_PLACEHOLDER: "Confirm Password",
  SIGN_IN_BUTTON_TEXT: "Sign in"
}

export const fetchLocalUserData = (dataType) => {
  const json = localStorage.getItem(dataType)
  const localData = JSON.parse(json)
  return localData
}

export const locallyStoreUserData = (dataType, dataToStore) => {
  if (typeof dataType !== "string" || !dataToStore) {
    throw new Error("Invalid input parameters")
  }
  const json = JSON.stringify(dataToStore)
  localStorage.setItem(dataType, json)
}

export const PasswordStrengthBar = ({ password }) => {
  const calculateStrength = (password) => {
    const hasLowerCase = /[a-z]/.test(password)
    const hasUpperCase = /[A-Z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*]/.test(password)

    let strength = 0
    if (hasLowerCase) strength++
    if (hasUpperCase) strength++
    if (hasNumber) strength++
    if (hasSpecialChar) strength++

    return strength
  }

  const strength = calculateStrength(password)
  const strengthPercent = (strength / 4) * 100

  return (
    <div className="flex items-center gap-5">
      <div className="w-full h-2 bg-gray-300">
        <div
          className={`h-full ${
            strengthPercent > 70
              ? "bg-green-500"
              : strengthPercent > 30
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
          style={{ width: `${strengthPercent}%` }}
        />
      </div>
      <span className="text-[14px] text-[#92929D]">
        {strengthPercent > 70
          ? "Strong"
          : strengthPercent > 30
          ? "Fair"
          : "Weak"}
      </span>
    </div>
  )
}

export const DeleteConfirmation = ({ onClick1, onClick2, questionPrompt }) => {
  return (
    <div className="absolute z-10">
      <h5 className="">{questionPrompt}</h5>
      <div className="flex gap-5 mt-5">
        <Button
          text="Cancel"
          background="bg-colorBlue"
          color="text-colorWhite1"
          onClick={onClick1}
        />
        <Button
          text="Delete"
          background="bg-colorRed"
          color="text-colorWhite1"
          onClick={onClick2}
        />
      </div>
    </div>
  )
}

export const StickyHeadTable = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [selectedRow, setSelectedRow] = useState(null)
  const [rows, setRows] = useState([
    createData("SS 1", "6", 231),
    createData("SS 2", "6", 231),
    createData("SS 3", "6", 231),
    createData("JSS 1", "6", 231),
    createData("JSS 2", "6", 231),
    createData("JSS 3", "6", 231),
    createData("Primary 1", "6", 231),
    createData("Primary 2", "6", 231),
    createData("Primary 3", "6", 231),
    createData("Primary 4", "6", 231),
    createData("Primary 5", "6", 231),
    createData("Primary 6", "6", 231),
    createData("Nursery 1", "6", 231),
    createData("Nursery 2", "6", 231),
    createData("Nursery 3", "6", 231)
  ])

  const [isConfirmDelete, setIsConfirmDelete] = useState(false)

  const columns = [
    { id: "name", label: "Name", minWidth: 80 },
    { id: "branches", label: "Branches", minWidth: 80 },
    {
      id: "learners",
      label: "Learners",
      minWidth: 80,
      align: ""
    },
    {
      id: "actions",
      label: "Actions",
      minWidth: 80,
      align: ""
    }
  ]

  function createData(name, branches, learners) {
    return { name, branches, learners }
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleEdit = (row) => {
    // Implement the logic for edit action here
    console.log("Edit action for row:", row)
  }

  const handleDelete = () => {
    // Find the index of the selected row to be deleted
    const rowIndex = rows.findIndex((row) => row === selectedRow)

    if (rowIndex !== -1) {
      // Create a copy of the rows array to modify
      const updatedRows = [...rows]
      // Remove the selected row at the specified index
      updatedRows.splice(rowIndex, 1)
      // Update the state with the new rows array, effectively removing the selected row from the table
      setRows(updatedRows)
    }
    // Close the confirmation dialog after deletion
    setIsConfirmDelete(false)
  }

  const icons = (row) => {
    return (
      <div className="flex gap-4">
        <CiEdit
          size={20}
          className="border-2 rounded  "
          onClick={() => handleEdit(row)}
        />
        <RiDeleteBin6Line
          size={20}
          className="border-2 rounded text-colorRed"
          onClick={() => {
            setSelectedRow(row) // Set the selected row for deletion
            setIsConfirmDelete(true) // Show the confirmation dialog
          }}
        />
      </div>
    )
  }

  return (
    <div className="w-full relative flex flex-col items-center">
      {isConfirmDelete && (
        <div className="w-1/2 h-[30vh] m-auto fixed flex flex-col items-center justify-center z-30 rounded-md shadow-md border -mt-20 ">
          <div className="absolute w-full h-full bg-colorWhite1 z-0"></div>
          <DeleteConfirmation
            questionPrompt="Are you sure you want to delete this branch?"
            onClick1={() => setIsConfirmDelete(false)}
            onClick2={handleDelete}
          />
        </div>
      )}
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "actions"
                              ? icons(row)
                              : column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}



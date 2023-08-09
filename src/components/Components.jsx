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

import profileImage from "../assets/admin/instructor-icon/profile.jpg"
import image1 from "../assets/admin/instructor-icon/image1.jpg"
import image2 from "../assets/admin/instructor-icon/image2.jpg"
import image3 from "../assets/admin/instructor-icon/image3.jpg"
import image4 from "../assets/admin/instructor-icon/image4.jpg"
import image5 from "../assets/admin/instructor-icon/image5.jpg"
import image6 from "../assets/admin/instructor-icon/image6.jpg"
import image7 from "../assets/admin/instructor-icon/image7.jpg"
import image8 from "../assets/admin/instructor-icon/image8.jpg"
import image9 from "../assets/admin/instructor-icon/image9.jpg"
import image10 from "../assets/admin/instructor-icon/image10.jpg"
import image11 from "../assets/admin/instructor-icon/image11.jpg"
import image12 from "../assets/admin/instructor-icon/image12.jpg"
import image13 from "../assets/admin/instructor-icon/image13.jpg"
import image14 from "../assets/admin/instructor-icon/image14.jpg"
import image15 from "../assets/admin/instructor-icon/image15.jpg"
import image16 from "../assets/admin/instructor-icon/image16.jpg"

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

export const dummyInstructors = [
  {
    id: 1,
    image: profileImage,
    name: "Mr. Ifeanyi Onyeka",
    phone: "(305) 555-0239",
    email: "theonyekagroup@gmail.com",
    group: "JSS 1",
    gender: "Male"
  },
  {
    id: 2,
    image: image16,
    name: "Ms. Chinyere Okonkwo",
    phone: "(306) 555-0240",
    email: "chinyere.okonkwo@example.com",
    group: "JSS 2",
    gender: "Female"
  },
  {
    id: 3,
    image: image5,
    name: "Mr. Emeka Obi",
    phone: "(307) 555-0241",
    email: "emeka.obi@example.com",
    group: "JSS 3",
    gender: "Male"
  },
  {
    id: 4,
    image: image10,
    name: "Miss Fatima Ahmed",
    phone: "(308) 555-0242",
    email: "fatima.ahmed@example.com",
    group: "SS 1",
    gender: "Female"
  },
  {
    id: 5,
    image: image12,
    name: "Mr. Olumide Adebayo",
    phone: "(309) 555-0243",
    email: "olumide.adebayo@example.com",
    group: "SS 2",
    gender: "Male"
  },
  {
    id: 6,
    image: image3,
    name: "Ms. Ngozi Eze",
    phone: "(310) 555-0244",
    email: "ngozi.eze@example.com",
    group: "SS 3",
    gender: "Female"
  },
  {
    id: 7,
    image: image2,
    name: "Mr. Chinedu Okoro",
    phone: "(311) 555-0245",
    email: "chinedu.okoro@example.com",
    group: "Year 1",
    gender: "Male"
  },
  {
    id: 8,
    image: image5,
    name: "Miss Ifeoma Igwe",
    phone: "(312) 555-0246",
    email: "ifeoma.igwe@example.com",
    group: "Year 2",
    gender: "Female"
  },
  {
    id: 9,
    image: image9,
    name: "Mr. Hassan Ali",
    phone: "(313) 555-0247",
    email: "hassan.ali@example.com",
    group: "Year 3",
    gender: "Male"
  },
  {
    id: 10,
    image: image4,
    name: "Miss Aisha Ibrahim",
    phone: "(314) 555-0248",
    email: "aisha.ibrahim@example.com",
    group: "Year 4",
    gender: "Female"
  },
  {
    id: 11,
    image: image6,
    name: "Mr. Chukwuemeka Nwosu",
    phone: "(315) 555-0249",
    email: "chukwuemeka.nwosu@example.com",
    group: "Year 5",
    gender: "Male"
  },
  {
    id: 12,
    image: image11,
    name: "Miss Blessing Ogundipe",
    phone: "(316) 555-0250",
    email: "blessing.ogundipe@example.com",
    group: "Year 6",
    gender: "Female"
  },
  {
    id: 13,
    image: image7,
    name: "Mr. Usman Suleiman",
    phone: "(317) 555-0251",
    email: "usman.suleiman@example.com",
    group: "JSS 1",
    gender: "Male"
  },
  {
    id: 14,
    image: image1,
    name: "Miss Hadiza Mohammed",
    phone: "(318) 555-0252",
    email: "hadiza.mohammed@example.com",
    group: "JSS 2",
    gender: "Female"
  },
  {
    id: 15,
    image: image8,
    name: "Mr. Adewale Adeniyi",
    phone: "(319) 555-0253",
    email: "adewale.adeniyi@example.com",
    group: "JSS 3",
    gender: "Male"
  },
  {
    id: 16,
    image: image13,
    name: "Miss Funmilayo Bakare",
    phone: "(320) 555-0254",
    email: "funmilayo.bakare@example.com",
    group: "SS 1",
    gender: "Female"
  },
  {
    id: 17,
    image: image14,
    name: "Miss Funmilayo Bakare",
    phone: "(320) 555-0254",
    email: "funmilayo.bakare@example.com",
    group: "SS 1",
    gender: "Female"
  },
  {
    id: 18,
    image: image15,
    name: "Miss Funmilayo Bakare",
    phone: "(320) 555-0254",
    email: "funmilayo.bakare@example.com",
    group: "SS 1",
    gender: "Female"
  }
]

export const dummyLearners = [
  {
    id: 1,
    image: profileImage,
    name: "John Doe",
    regNumber: "STT/10/10892",
    email: "john.doe@example.com",
    group: "JSS 3",
    gender: "Male"
  },
  {
    id: 2,
    image: image1,
    name: "Jane Smith",
    regNumber: "STT/10/10893",
    email: "jane.smith@example.com",
    group: "YEAR 1",
    gender: "Female"
  },
  {
    id: 3,
    image: image2,
    name: "Michael Johnson",
    regNumber: "STT/10/10894",
    email: "michael.johnson@example.com",
    group: "JSS 1",
    gender: "Male"
  },
  {
    id: 4,
    image: image3,
    name: "Emily Williams",
    regNumber: "STT/10/10895",
    email: "emily.williams@example.com",
    group: "SS 1",
    gender: "Female"
  },
  {
    id: 5,
    image: image4,
    name: "William Davis",
    regNumber: "STT/10/10896",
    email: "william.davis@example.com",
    group: "JSS 2",
    gender: "Male"
  },
  {
    id: 6,
    image: image5,
    name: "Olivia Martinez",
    regNumber: "STT/10/10897",
    email: "olivia.martinez@example.com",
    group: "SS 3",
    gender: "Female"
  },
  {
    id: 7,
    image: image6,
    name: "James Lee",
    regNumber: "STT/10/10898",
    email: "james.lee@example.com",
    group: "JSS 3",
    gender: "Male"
  },
  {
    id: 8,
    image: image7,
    name: "Sophia Wilson",
    regNumber: "STT/10/10899",
    email: "sophia.wilson@example.com",
    group: "JSS 1",
    gender: "Female"
  },
  {
    id: 9,
    image: image8,
    name: "Daniel Taylor",
    regNumber: "STT/10/10900",
    email: "daniel.taylor@example.com",
    group: "SS 2",
    gender: "Male"
  },
  {
    id: 10,
    image: image9,
    name: "Isabella Anderson",
    regNumber: "STT/10/10901",
    email: "isabella.anderson@example.com",
    group: "JSS 1",
    gender: "Female"
  },
  {
    id: 11,
    image: image10,
    name: "David Hernandez",
    regNumber: "STT/10/10902",
    email: "david.hernandez@example.com",
    group: "SS 1",
    gender: "Male"
  },
  {
    id: 12,
    image: image11,
    name: "Mia Walker",
    regNumber: "STT/10/10903",
    email: "mia.walker@example.com",
    group: "SS 3",
    gender: "Female"
  },
  {
    id: 13,
    image: image12,
    name: "Joseph Perez",
    regNumber: "STT/10/10904",
    email: "joseph.perez@example.com",
    group: "JSS 2",
    gender: "Male"
  },
  {
    id: 14,
    image: image13,
    name: "Evelyn Evans",
    regNumber: "STT/10/10905",
    email: "evelyn.evans@example.com",
    group: "JSS 1",
    gender: "Female"
  },
  {
    id: 15,
    image: image14,
    name: "Alexander Rivera",
    regNumber: "STT/10/10906",
    email: "alexander.rivera@example.com",
    group: "JSS 3",
    gender: "Male"
  },
  {
    id: 16,
    image: image15,
    name: "Sofia Collins",
    regNumber: "STT/10/10907",
    email: "sofia.collins@example.com",
    group: "SS 1",
    gender: "Female"
  },
  {
    id: 17,
    image: image3,
    name: "Andrew Campbell",
    regNumber: "STT/10/10908",
    email: "andrew.campbell@example.com",
    group: "SS 3",
    gender: "Male"
  },
  {
    id: 18,
    image: image4,
    name: "Scarlett Mitchell",
    regNumber: "STT/10/10909",
    email: "scarlett.mitchell@example.com",
    group: "SS 2",
    gender: "Female"
  },
  {
    id: 19,
    image: image8,
    name: "Josephine Martinez",
    regNumber: "STT/10/10910",
    email: "josephine.martinez@example.com",
    group: "JSS 3",
    gender: "Female"
  },
  {
    id: 20,
    image: image10,
    name: "Michael Thompson",
    regNumber: "STT/10/10911",
    email: "michael.thompson@example.com",
    group: "SS 3",
    gender: "Male"
  }
]

export const dummyCourses = [
  {
    id: 1,
    courseName: "Biology",
    courseAlias: "Bio 101",
    groups: "JSS 2",
    branches: "A, C, E",
    instructors: "Mr. Kayode Olu"
  },
  {
    id: 2,
    courseName: "Mathematics",
    courseAlias: "Math 101",
    groups: "SS 1",
    branches: "B, D",
    instructors: "Mrs. Oge Okafor Victoria"
  },
  {
    id: 3,
    courseName: "Physics",
    courseAlias: "Phy 102",
    groups: "YEAR 2",
    branches: "C, E",
    instructors: "Mr. John Smith"
  },
  {
    id: 4,
    courseName: "Chemistry",
    courseAlias: "Chem 201",
    groups: "SS 3",
    branches: "A, B",
    instructors: "Dr. Sarah Johnson"
  },
  {
    id: 5,
    courseName: "English Literature",
    courseAlias: "Lit 301",
    groups: "JSS 1",
    branches: "B, C",
    instructors: "Ms. Emily Brown"
  },
  {
    id: 6,
    courseName: "History",
    courseAlias: "Hist 202",
    groups: "YEAR 1",
    branches: "C, D",
    instructors: "Mr. Michael Thompson"
  },
  {
    id: 7,
    courseName: "Computer Science",
    courseAlias: "CS 101",
    groups: "SS 2",
    branches: "A, E",
    instructors: "Prof. Daniel Taylor"
  },
  {
    id: 8,
    courseName: "Geography",
    courseAlias: "Geo 102",
    groups: "JSS 3",
    branches: "B, D",
    instructors: "Dr. Sophia Wilson"
  },
  {
    id: 9,
    courseName: "Economics",
    courseAlias: "Econ 201",
    groups: "YEAR 3",
    branches: "C, E",
    instructors: "Mr. James Lee"
  },
  {
    id: 10,
    courseName: "Physical Education",
    courseAlias: "PE 301",
    groups: "SS 1",
    branches: "A, B",
    instructors: "Mrs. Isabella Anderson"
  },
  {
    id: 11,
    courseName: "Art History",
    courseAlias: "ArtH 202",
    groups: "YEAR 2",
    branches: "B, D",
    instructors: "Ms. Mia Walker"
  },
  {
    id: 12,
    courseName: "Music",
    courseAlias: "Mus 101",
    groups: "JSS 2",
    branches: "C, E",
    instructors: "Mr. Joseph Perez"
  },
  {
    id: 13,
    courseName: "Foreign Languages",
    courseAlias: "Lang 201",
    groups: "SS 3",
    branches: "A, B",
    instructors: "Dr. Evelyn Evans"
  },
  {
    id: 14,
    courseName: "Environmental Science",
    courseAlias: "EnvSci 301",
    groups: "YEAR 1",
    branches: "B, C",
    instructors: "Prof. Alexander Rivera"
  },
  {
    id: 15,
    courseName: "Political Science",
    courseAlias: "PolSci 202",
    groups: "SS 2",
    branches: "C, D",
    instructors: "Ms. Sofia Collins"
  },
  {
    id: 16,
    courseName: "Business Studies",
    courseAlias: "Bus 101",
    groups: "JSS 3",
    branches: "A, E",
    instructors: "Mr. Andrew Campbell"
  },
  {
    id: 17,
    courseName: "Psychology",
    courseAlias: "Psych 102",
    groups: "YEAR 3",
    branches: "B, C",
    instructors: "Dr. Scarlett Mitchell"
  },
  {
    id: 18,
    courseName: "Sociology",
    courseAlias: "Soc 201",
    groups: "SS 1",
    branches: "C, D",
    instructors: "Mrs. Josephine Martinez"
  },
  {
    id: 19,
    courseName: "Philosophy",
    courseAlias: "Phil 301",
    groups: "YEAR 2",
    branches: "A, B",
    instructors: "Mr. Michael Johnson"
  },
  {
    id: 20,
    courseName: "Anthropology",
    courseAlias: "Anthro 202",
    groups: "JSS 2",
    branches: "B, E",
    instructors: "Ms. Emily Williams"
  }
]

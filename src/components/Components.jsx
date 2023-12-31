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
      <div className="flex gap-5 mt-5 items-center justify-center">
        <div className="h-10 w-full">
          <Button
            text="Cancel"
            background="bg-colorBlue"
            color="text-colorWhite1"
            onClick={onClick1}
          />
        </div>
        <div className="h-10 w-full">
          <Button
            text="Delete"
            background="bg-colorRed"
            color="text-colorWhite1"
            onClick={onClick2}
          />
        </div>
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

export const assignmentSubmission = [
  {
    id: 1,
    candidateName: "John Doe",
    regNumber: "202301",
    score: "7/10",
    remarks: "Good",
    details: "View"
  },
  {
    id: 2,
    candidateName: "Jane Smith",
    regNumber: "202302",
    score: "5/10",
    remarks: "Average",
    details: "View"
  },
  {
    id: 3,
    candidateName: "Michael Johnson",
    regNumber: "202303",
    score: "10/10",
    remarks: "Excellent",
    details: "View"
  },
  {
    id: 4,
    candidateName: "Emily Davis",
    regNumber: "202304",
    score: "7/10",
    remarks: "Good",
    details: "View"
  },
  {
    id: 5,
    candidateName: "Daniel Brown",
    regNumber: "202305",
    score: "5/10",
    remarks: "Average",
    details: "View"
  },
  {
    id: 6,
    candidateName: "Sophia Johnson",
    regNumber: "202306",
    score: "10/10",
    remarks: "Excellent",
    details: "View"
  },
  {
    id: 7,
    candidateName: "William Anderson",
    regNumber: "202307",
    score: "7/10",
    remarks: "Good",
    details: "View"
  },
  {
    id: 8,
    candidateName: "Olivia White",
    regNumber: "202308",
    score: "5/10",
    remarks: "Average",
    details: "View"
  },
  {
    id: 9,
    candidateName: "James Martinez",
    regNumber: "202309",
    score: "10/10",
    remarks: "Excellent",
    details: "View"
  },
  {
    id: 10,
    candidateName: "Ava Robinson",
    regNumber: "202310",
    score: "7/10",
    remarks: "Good",
    details: "View"
  },
  {
    id: 11,
    candidateName: "Liam Thompson",
    regNumber: "202311",
    score: "5/10",
    remarks: "Average",
    details: "View"
  },
  {
    id: 12,
    candidateName: "Emma Harris",
    regNumber: "202312",
    score: "10/10",
    remarks: "Excellent",
    details: "View"
  },
  {
    id: 13,
    candidateName: "Noah Walker",
    regNumber: "202313",
    score: "7/10",
    remarks: "Good",
    details: "View"
  },
  {
    id: 14,
    candidateName: "Isabella Turner",
    regNumber: "202314",
    score: "5/10",
    remarks: "Average",
    details: "View"
  },
  {
    id: 15,
    candidateName: "Mason Hall",
    regNumber: "202315",
    score: "10/10",
    remarks: "Excellent",
    details: "View"
  },
  {
    id: 16,
    candidateName: "Mia Adams",
    regNumber: "202316",
    score: "7/10",
    remarks: "Good",
    details: "View"
  },
  {
    id: 17,
    candidateName: "Ethan Collins",
    regNumber: "202317",
    score: "5/10",
    remarks: "Average",
    details: "View"
  },
  {
    id: 18,
    candidateName: "Avery Stewart",
    regNumber: "202318",
    score: "10/10",
    remarks: "Excellent",
    details: "View"
  },
  {
    id: 19,
    candidateName: "Harper Price",
    regNumber: "202319",
    score: "7/10",
    remarks: "Good",
    details: "View"
  },
  {
    id: 20,
    candidateName: "Logan Turner",
    regNumber: "202320",
    score: "5/10",
    remarks: "Average",
    details: "View"
  }
]

export const dummyQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Madrid", "Paris"],
    correct: "Paris",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correct: "Mars",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correct: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "N2"],
    correct: "H2O",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct: "Carbon Dioxide",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Giraffe", "Elephant", "Blue Whale", "Hippopotamus"],
    correct: "Blue Whale",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Rembrandt"],
    correct: "Leonardo da Vinci",
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic Reticulum"],
    correct: "Mitochondria",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correct: "Japan",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Cu"],
    correct: "Au",
  },
];



export const dummyCourses = [
  {
    id: 1,
    courseName: "Biology",
    courseAlias: "Bio 101",
    groups: "JSS 2",
    branches: ["A", "C", "E"],
    instructors: ["Mr. Kayode Olu", "Mrs. Oge Okafor Victoria"],
    topics: [
      "Cell Structure and Function",
      "Genetics and Heredity",
      "Ecology and Ecosystems",
      "Evolutionary Biology",
      "Human Anatomy and Physiology",
      "Microbiology",
      "Plant Biology",
      "Neuroscience",
      "Biotechnology",
      "Environmental Conservation"
    ],
    assignments: [
      {
        title: "Biology Assignment 1",
        question1: "Describe the process of photosynthesis.",
        question2: "Explain the functions of DNA in living organisms.",
        dueDate: "2023-08-31",
        setDate: "2023-08-15",
        overallScore: 100,
        videoAttachment: "link_to_video1",
        audioAttachment: "link_to_audio1",
        documentAttachment: "link_to_document1"
      }
    ],
    description:
      "Explore the fascinating world of living organisms and their interactions in this introductory biology course.",
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Biology",
        videos: [
          {
            title: "Video 1",
            url: "video_url_1",
            instructor: "Mr. Kayode Olu",
            date: "2023-08-15"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_1",
            instructor: "Mrs. Oge Okafor Victoria",
            date: "2023-08-16"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_1",
            instructor: "Mr. Kayode Olu",
            date: "2023-08-17"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Cell Structure and Function",
        videos: [
          {
            title: "Video 1",
            url: "video_url_2",
            instructor: "Mrs. Oge Okafor Victoria",
            date: "2023-08-18"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_2",
            instructor: "Mr. Kayode Olu",
            date: "2023-08-19"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_2",
            instructor: "Mrs. Oge Okafor Victoria",
            date: "2023-08-20"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Genetics and Heredity",
        videos: [
          {
            title: "Video 1",
            url: "video_url_3",
            instructor: "Mr. Kayode Olu",
            date: "2023-08-21"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_3",
            instructor: "Mrs. Oge Okafor Victoria",
            date: "2023-08-22"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_3",
            instructor: "Mr. Kayode Olu",
            date: "2023-08-23"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    courseName: "Mathematics",
    courseAlias: "Math 101",
    groups: "SS 1",
    branches: ["B", "D"],
    instructors: "Mrs. Oge Okafor Victoria",
    topics: [
      "Algebra",
      "Geometry",
      "Calculus",
      "Probability and Statistics",
      "Linear Algebra",
      "Number Theory",
      "Differential Equations",
      "Discrete Mathematics",
      "Mathematical Logic",
      "Cryptology"
    ],
    assignments: [
      {
        title: "Mathematics Assignment 1",
        question1: "Solve the following quadratic equation: x^2 - 4x + 4 = 0",
        question2: "Calculate the derivative of y = 3x^2 + 2x + 1.",
        dueDate: "2023-09-05",
        setDate: "2023-08-18",
        overallScore: 100,
        videoAttachment: "link_to_video2",
        audioAttachment: "link_to_audio2",
        documentAttachment: "link_to_document2"
      }
    ],

    description:
      "Dive into the realm of numbers, shapes, and patterns, and unravel the mysteries of mathematics.",
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Calculus",
        videos: [
          {
            title: "Video 1",
            url: "video_url_4",
            instructor: "Mrs. Oge Okafor Victoria",
            date: "2023-08-24"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_4",
            instructor: "Mr. Kayode Olu",
            date: "2023-08-25"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_4",
            instructor: "Mrs. Oge Okafor Victoria",
            date: "2023-08-26"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Quadratic Functions",
        videos: [
          {
            title: "Video 1",
            url: "video_url_5",
            instructor: "Mr. Kayode Olu",
            date: "2023-08-27"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_5",
            instructor: "Mrs. Oge Okafor Victoria",
            date: "2023-08-28"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_5",
            instructor: "Mr. Kayode Olu",
            date: "2023-08-29"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Algebraic Equations",
        videos: [
          {
            title: "Video 1",
            url: "video_url_6",
            instructor: "Mrs. Oge Okafor Victoria",
            date: "2023-08-30"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_6",
            instructor: "Mr. Kayode Olu",
            date: "2023-08-31"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_6",
            instructor: "Mrs. Oge Okafor Victoria",
            date: "2023-09-01"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    courseName: "Physics",
    courseAlias: "Phy 102",
    groups: "YEAR 2",
    branches: ["C", "E"],
    instructors: "Mr. John Smith",
    topics: [
      "Classical Mechanics",
      "Electromagnetism",
      "Quantum Mechanics",
      "Thermodynamics",
      "Relativity",
      "Astrophysics",
      "Particle Physics",
      "Nuclear Physics",
      "Optics",
      "Fluid Dynamics"
    ],
    assignments: [
      {
        title: "Physics Assignment 1",
        question1: "Explain Newton's laws of motion.",
        question2:
          "Calculate the velocity of an object falling freely from a certain height.",
        dueDate: "2023-09-10",
        setDate: "2023-08-20",
        overallScore: 100,
        videoAttachment: "link_to_video3",
        audioAttachment: "link_to_audio3",
        documentAttachment: "link_to_document3"
      }
    ],
    description:
      "Explore the fundamental laws of the physical universe and the forces that govern its behavior.",
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Physics",
        videos: [
          {
            title: "Video 1",
            url: "video_url_7",
            instructor: "Mr. John Smith",
            date: "2023-09-02"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_7",
            instructor: "Mr. John Smith",
            date: "2023-09-03"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_7",
            instructor: "Mr. John Smith",
            date: "2023-09-04"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Newtonian Mechanics",
        videos: [
          {
            title: "Video 1",
            url: "video_url_8",
            instructor: "Mr. John Smith",
            date: "2023-09-05"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_8",
            instructor: "Mr. John Smith",
            date: "2023-09-06"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_8",
            instructor: "Mr. John Smith",
            date: "2023-09-07"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Electromagnetism",
        videos: [
          {
            title: "Video 1",
            url: "video_url_9",
            instructor: "Mr. John Smith",
            date: "2023-09-08"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_9",
            instructor: "Mr. John Smith",
            date: "2023-09-09"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_9",
            instructor: "Mr. John Smith",
            date: "2023-09-10"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    courseName: "Chemistry",
    courseAlias: "Chem 201",
    groups: "SS 3",
    branches: ["A", "B"],
    instructors: "Dr. Sarah Johnson",
    topics: [
      "Atomic Structure",
      "Chemical Bonding",
      "Stoichiometry",
      "Thermodynamics",
      "Organic Chemistry",
      "Inorganic Chemistry",
      "Physical Chemistry",
      "Analytical Chemistry",
      "Biochemistry",
      "Nanotechnology"
    ],
    assignments: [
      {
        title: "Chemistry Assignment 1",
        question1: "Discuss the properties of acids and bases.",
        question2: "Balance the chemical equation: H2 + O2 → H2O.",
        dueDate: "2023-09-15",
        setDate: "2023-08-22",
        overallScore: 100,
        videoAttachment: "link_to_video4",
        audioAttachment: "link_to_audio4",
        documentAttachment: "link_to_document4"
      }
    ],
    description:
      "Delve into the composition, properties, and transformations of matter in this engaging chemistry course.",
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Chemistry",
        videos: [
          {
            title: "Video 1",
            url: "video_url_10",
            instructor: "Dr. Sarah Johnson",
            date: "2023-09-11"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_10",
            instructor: "Dr. Sarah Johnson",
            date: "2023-09-12"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_10",
            instructor: "Dr. Sarah Johnson",
            date: "2023-09-13"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Chemical Reactions",
        videos: [
          {
            title: "Video 1",
            url: "video_url_11",
            instructor: "Dr. Sarah Johnson",
            date: "2023-09-14"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_11",
            instructor: "Dr. Sarah Johnson",
            date: "2023-09-15"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_11",
            instructor: "Dr. Sarah Johnson",
            date: "2023-09-16"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Periodic Table",
        videos: [
          {
            title: "Video 1",
            url: "video_url_12",
            instructor: "Dr. Sarah Johnson",
            date: "2023-09-17"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_12",
            instructor: "Dr. Sarah Johnson",
            date: "2023-09-18"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_12",
            instructor: "Dr. Sarah Johnson",
            date: "2023-09-19"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    courseName: "English Literature",
    courseAlias: "Lit 301",
    groups: "JSS 1",
    branches: ["B", "C"],
    instructors: "Ms. Emily Brown",
    topics: [
      "Shakespearean Drama",
      "Victorian Literature",
      "Modernist Literature",
      "Postcolonial Literature",
      "Feminist Literature",
      "American Literature",
      "World Literature",
      "Literary Theory",
      "Poetry Analysis",
      "Narrative Techniques"
    ],
    description:
      "Journey through the world of literary masterpieces, analyzing and appreciating the art of written expression.",
    assignments: [
      {
        title: "English Literature Assignment 1",
        question1: "Analyze the themes in the novel '1984' by George Orwell.",
        question2:
          "Discuss the use of symbolism in the play 'Hamlet' by William Shakespeare.",
        dueDate: "2023-09-20",
        setDate: "2023-08-25",
        overallScore: 100,
        videoAttachment: "link_to_video5",
        audioAttachment: "link_to_audio5",
        documentAttachment: "link_to_document5"
      }
    ],
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Literature",
        videos: [
          {
            title: "Video 1",
            url: "video_url_13",
            instructor: "Ms. Emily Brown",
            date: "2023-09-20"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_13",
            instructor: "Ms. Emily Brown",
            date: "2023-09-21"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_13",
            instructor: "Ms. Emily Brown",
            date: "2023-09-22"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Poetry Analysis",
        videos: [
          {
            title: "Video 1",
            url: "video_url_14",
            instructor: "Ms. Emily Brown",
            date: "2023-09-23"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_14",
            instructor: "Ms. Emily Brown",
            date: "2023-09-24"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_14",
            instructor: "Ms. Emily Brown",
            date: "2023-09-25"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Shakespearean Literature",
        videos: [
          {
            title: "Video 1",
            url: "video_url_15",
            instructor: "Ms. Emily Brown",
            date: "2023-09-26"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_15",
            instructor: "Ms. Emily Brown",
            date: "2023-09-27"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_15",
            instructor: "Ms. Emily Brown",
            date: "2023-09-28"
          }
        ]
      }
    ]
  },
  {
    id: 6,
    courseName: "History",
    courseAlias: "Hist 202",
    groups: "YEAR 1",
    branches: ["C", "D"],
    instructors: "Mr. Michael Thompson",
    topics: [
      "Ancient Civilizations",
      "Medieval History",
      "Renaissance and Enlightenment",
      "World Wars",
      "Cold War Era",
      "Colonialism and Imperialism",
      "Revolutionary Movements",
      "Globalization",
      "Historical Methodology",
      "Cultural History"
    ],
    description:
      "Uncover the events, cultures, and people that have shaped the course of human history over the ages.",
    assignments: [
      {
        title: "History Assignment 1",
        question1: "Explain the causes and consequences of World War I.",
        question2: "Discuss the impact of the Renaissance on European society.",
        dueDate: "2023-09-25",
        setDate: "2023-08-28",
        overallScore: 100,
        videoAttachment: "link_to_video6",
        audioAttachment: "link_to_audio6",
        documentAttachment: "link_to_document6"
      }
    ],
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to History",
        videos: [
          {
            title: "Video 1",
            url: "video_url_16",
            instructor: "Mr. Michael Thompson",
            date: "2023-09-29"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_16",
            instructor: "Mr. Michael Thompson",
            date: "2023-09-30"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_16",
            instructor: "Mr. Michael Thompson",
            date: "2023-10-01"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Ancient Civilizations",
        videos: [
          {
            title: "Video 1",
            url: "video_url_17",
            instructor: "Mr. Michael Thompson",
            date: "2023-10-02"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_17",
            instructor: "Mr. Michael Thompson",
            date: "2023-10-03"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_17",
            instructor: "Mr. Michael Thompson",
            date: "2023-10-04"
          }
        ]
      },
      {
        id: 3,
        lessonName: "World Wars and Global Conflict",
        videos: [
          {
            title: "Video 1",
            url: "video_url_18",
            instructor: "Mr. Michael Thompson",
            date: "2023-10-05"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_18",
            instructor: "Mr. Michael Thompson",
            date: "2023-10-06"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_18",
            instructor: "Mr. Michael Thompson",
            date: "2023-10-07"
          }
        ]
      }
    ]
  },
  {
    id: 7,
    courseName: "Computer Science",
    courseAlias: "CS 101",
    groups: "SS 2",
    branches: ["A", "E"],
    instructors: "Prof. Daniel Taylor",
    topics: [
      "Programming Languages",
      "Data Structures",
      "Algorithms",
      "Software Engineering",
      "Databases",
      "Artificial Intelligence",
      "Cybersecurity",
      "Computer Networks",
      "Human-Computer Interaction",
      "Web Development"
    ],
    assignments: [
      {
        title: "Computer Science Assignment 1",
        question1:
          "Write a program to find the factorial of a number using recursion.",
        question2: "Explain the concept of object-oriented programming.",
        dueDate: "2023-09-30",
        setDate: "2023-09-01",
        overallScore: 100,
        videoAttachment: "link_to_video7",
        audioAttachment: "link_to_audio7",
        documentAttachment: "link_to_document7"
      }
    ],
    description:
      "Dive into the world of algorithms, programming, and technology, and learn the art of problem-solving in computing.",
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Computer Science",
        videos: [
          {
            title: "Video 1",
            url: "video_url_19",
            instructor: "Prof. Daniel Taylor",
            date: "2023-10-08"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_19",
            instructor: "Prof. Daniel Taylor",
            date: "2023-10-09"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_19",
            instructor: "Prof. Daniel Taylor",
            date: "2023-10-10"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Programming Fundamentals",
        videos: [
          {
            title: "Video 1",
            url: "video_url_20",
            instructor: "Prof. Daniel Taylor",
            date: "2023-10-11"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_20",
            instructor: "Prof. Daniel Taylor",
            date: "2023-10-12"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_20",
            instructor: "Prof. Daniel Taylor",
            date: "2023-10-13"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Data Structures and Algorithms",
        videos: [
          {
            title: "Video 1",
            url: "video_url_21",
            instructor: "Prof. Daniel Taylor",
            date: "2023-10-14"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_21",
            instructor: "Prof. Daniel Taylor",
            date: "2023-10-15"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_21",
            instructor: "Prof. Daniel Taylor",
            date: "2023-10-16"
          }
        ]
      }
    ]
  },
  {
    id: 8,
    courseName: "Geography",
    courseAlias: "Geo 102",
    groups: "JSS 3",
    branches: ["B", "D"],
    instructors: "Dr. Sophia Wilson",
    topics: [
      "Physical Geography",
      "Human Geography",
      "Cartography",
      "Geographical Information Systems (GIS)",
      "Urban Studies",
      "Environmental Geography",
      "Cultural Geography",
      "Geopolitics",
      "Climate Change",
      "Migration Patterns"
    ],
    description:
      "Explore the Earth's landscapes, environments, and the intricate relationships between human societies and the planet.",
    assignments: [
      {
        title: "Geography Assignment 1",
        question1: "Describe the formation of volcanoes and earthquakes.",
        question2: "Explain the concept of population distribution.",
        dueDate: "2023-10-05",
        setDate: "2023-09-05",
        overallScore: 100,
        videoAttachment: "link_to_video8",
        audioAttachment: "link_to_audio8",
        documentAttachment: "link_to_document8"
      }
    ],
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Geography",
        videos: [
          {
            title: "Video 1",
            url: "video_url_22",
            instructor: "Dr. Sophia Wilson",
            date: "2023-10-17"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_22",
            instructor: "Dr. Sophia Wilson",
            date: "2023-10-18"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_22",
            instructor: "Dr. Sophia Wilson",
            date: "2023-10-19"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Physical Geography",
        videos: [
          {
            title: "Video 1",
            url: "video_url_23",
            instructor: "Dr. Sophia Wilson",
            date: "2023-10-20"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_23",
            instructor: "Dr. Sophia Wilson",
            date: "2023-10-21"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_23",
            instructor: "Dr. Sophia Wilson",
            date: "2023-10-22"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Human Geography",
        videos: [
          {
            title: "Video 1",
            url: "video_url_24",
            instructor: "Dr. Sophia Wilson",
            date: "2023-10-23"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_24",
            instructor: "Dr. Sophia Wilson",
            date: "2023-10-24"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_24",
            instructor: "Dr. Sophia Wilson",
            date: "2023-10-25"
          }
        ]
      }
    ]
  },
  {
    id: 9,
    courseName: "Economics",
    courseAlias: "Econ 201",
    groups: "YEAR 3",
    branches: ["C", "E"],
    instructors: "Mr. James Lee",
    topics: [
      "Microeconomics",
      "Macroeconomics",
      "International Trade",
      "Development Economics",
      "Behavioral Economics",
      "Game Theory",
      "Labor Economics",
      "Environmental Economics",
      "Econometrics",
      "Health Economics"
    ],
    description:
      "Examine the principles of production, distribution, and consumption of goods and services in this economics course.",
    assignments: [
      {
        title: "Economics Assignment 1",
        question1:
          "Discuss the principles of supply and demand in a market economy.",
        question2:
          "Explain the concept of inflation and its effects on an economy.",
        dueDate: "2023-10-10",
        setDate: "2023-09-08",
        overallScore: 100,
        videoAttachment: "link_to_video9",
        audioAttachment: "link_to_audio9",
        documentAttachment: "link_to_document9"
      }
    ],
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Economics",
        videos: [
          {
            title: "Video 1",
            url: "video_url_25",
            instructor: "Mr. James Lee",
            date: "2023-10-26"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_25",
            instructor: "Mr. James Lee",
            date: "2023-10-27"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_25",
            instructor: "Mr. James Lee",
            date: "2023-10-28"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Microeconomics",
        videos: [
          {
            title: "Video 1",
            url: "video_url_26",
            instructor: "Mr. James Lee",
            date: "2023-10-29"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_26",
            instructor: "Mr. James Lee",
            date: "2023-10-30"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_26",
            instructor: "Mr. James Lee",
            date: "2023-10-31"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Macroeconomics",
        videos: [
          {
            title: "Video 1",
            url: "video_url_27",
            instructor: "Mr. James Lee",
            date: "2023-11-01"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_27",
            instructor: "Mr. James Lee",
            date: "2023-11-02"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_27",
            instructor: "Mr. James Lee",
            date: "2023-11-03"
          }
        ]
      }
    ]
  },
  {
    id: 10,
    courseName: "Physical Education",
    courseAlias: "PE 301",
    groups: "SS 1",
    branches: ["A", "B"],
    instructors: "Mrs. Isabella Anderson",
    topics: [
      "Sports Physiology",
      "Exercise Science",
      "Biomechanics",
      "Nutrition and Fitness",
      "Physical Training",
      "Sports Psychology",
      "Motor Learning",
      "Injury Prevention",
      "Adapted Physical Education",
      "Physical Activity and Health"
    ],
    description:
      "Get active and learn the importance of physical fitness, sportsmanship, and healthy lifestyle choices.",
    assignments: [
      {
        title: "Physical Education Assignment 1",
        question1:
          "Design a workout routine targeting different muscle groups.",
        question2:
          "Discuss the importance of cardiovascular fitness for overall health.",
        dueDate: "2023-10-15",
        setDate: "2023-09-10",
        overallScore: 100,
        videoAttachment: "link_to_video10",
        audioAttachment: "link_to_audio10",
        documentAttachment: "link_to_document10"
      }
    ],
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Physical Education",
        videos: [
          {
            title: "Video 1",
            url: "video_url_28",
            instructor: "Mrs. Isabella Anderson",
            date: "2023-11-04"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_28",
            instructor: "Mrs. Isabella Anderson",
            date: "2023-11-05"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_28",
            instructor: "Mrs. Isabella Anderson",
            date: "2023-11-06"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Sports and Games",
        videos: [
          {
            title: "Video 1",
            url: "video_url_29",
            instructor: "Mrs. Isabella Anderson",
            date: "2023-11-07"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_29",
            instructor: "Mrs. Isabella Anderson",
            date: "2023-11-08"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_29",
            instructor: "Mrs. Isabella Anderson",
            date: "2023-11-09"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Health and Wellness",
        videos: [
          {
            title: "Video 1",
            url: "video_url_30",
            instructor: "Mrs. Isabella Anderson",
            date: "2023-11-10"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_30",
            instructor: "Mrs. Isabella Anderson",
            date: "2023-11-11"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_30",
            instructor: "Mrs. Isabella Anderson",
            date: "2023-11-12"
          }
        ]
      }
    ]
  },
  {
    id: 11,
    courseName: "Art History",
    courseAlias: "ArtH 202",
    groups: "YEAR 2",
    branches: ["B", "D"],
    instructors: "Ms. Mia Walker",
    topics: [
      "Ancient Art",
      "Renaissance Art",
      "Baroque Art",
      "Impressionism",
      "Modern Art",
      "Contemporary Art",
      "Art Criticism",
      "Feminist Art History",
      "Museum Studies",
      "Art Conservation"
    ],
    description:
      "Journey through the evolution of visual arts, exploring iconic artworks and the stories behind them.",
    assignments: [
      {
        title: "Art History Assignment 1",
        question1:
          "Analyze the style and techniques used in a famous painting of your choice.",
        question2:
          "Discuss the impact of the Renaissance on art and architecture.",
        dueDate: "2023-10-20",
        setDate: "2023-09-15",
        overallScore: 100,
        videoAttachment: "link_to_video11",
        audioAttachment: "link_to_audio11",
        documentAttachment: "link_to_document11"
      }
    ],
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Art History",
        videos: [
          {
            title: "Video 1",
            url: "video_url_31",
            instructor: "Ms. Mia Walker",
            date: "2023-11-13"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_31",
            instructor: "Ms. Mia Walker",
            date: "2023-11-14"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_31",
            instructor: "Ms. Mia Walker",
            date: "2023-11-15"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Renaissance Art",
        videos: [
          {
            title: "Video 1",
            url: "video_url_32",
            instructor: "Ms. Mia Walker",
            date: "2023-11-16"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_32",
            instructor: "Ms. Mia Walker",
            date: "2023-11-17"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_32",
            instructor: "Ms. Mia Walker",
            date: "2023-11-18"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Modern Art Movements",
        videos: [
          {
            title: "Video 1",
            url: "video_url_33",
            instructor: "Ms. Mia Walker",
            date: "2023-11-19"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_33",
            instructor: "Ms. Mia Walker",
            date: "2023-11-20"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_33",
            instructor: "Ms. Mia Walker",
            date: "2023-11-21"
          }
        ]
      }
    ]
  },
  {
    id: 12,
    courseName: "Music",
    courseAlias: "Mus 101",
    groups: "JSS 2",
    branches: ["C", "E"],
    instructors: "Mr. Joseph Perez",
    topics: [
      "Music Theory",
      "Music Composition",
      "Music History",
      "Ethnomusicology",
      "Jazz and Blues",
      "Classical Music",
      "Popular Music",
      "Music Technology",
      "Music Psychology",
      "Music Education"
    ],
    description:
      "Discover the world of music, from theory and composition to performance and cultural significance.",
    assignments: [
      {
        title: "Music Assignment 1",
        question1:
          "Compose a short melody using a given set of notes and rhythms.",
        question2:
          "Analyze the elements of rhythm and harmony in a selected piece of music.",
        dueDate: "2023-10-25",
        setDate: "2023-09-20",
        overallScore: 100,
        videoAttachment: "link_to_video12",
        audioAttachment: "link_to_audio12",
        documentAttachment: "link_to_document12"
      }
    ],
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Music",
        videos: [
          {
            title: "Video 1",
            url: "video_url_34",
            instructor: "Mr. Joseph Perez",
            date: "2023-11-22"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_34",
            instructor: "Mr. Joseph Perez",
            date: "2023-11-23"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_34",
            instructor: "Mr. Joseph Perez",
            date: "2023-11-24"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Music Theory",
        videos: [
          {
            title: "Video 1",
            url: "video_url_35",
            instructor: "Mr. Joseph Perez",
            date: "2023-11-25"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_35",
            instructor: "Mr. Joseph Perez",
            date: "2023-11-26"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_35",
            instructor: "Mr. Joseph Perez",
            date: "2023-11-27"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Music Genres and Styles",
        videos: [
          {
            title: "Video 1",
            url: "video_url_36",
            instructor: "Mr. Joseph Perez",
            date: "2023-11-28"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_36",
            instructor: "Mr. Joseph Perez",
            date: "2023-11-29"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_36",
            instructor: "Mr. Joseph Perez",
            date: "2023-11-30"
          }
        ]
      }
    ]
  },

  {
    id: 13,
    courseName: "Foreign Languages",
    courseAlias: "Lang 201",
    groups: "SS 3",
    branches: ["A", "B"],
    instructors: "Dr. Evelyn Evans",
    topics: [
      "Language Acquisition",
      "Grammar and Syntax",
      "Language Proficiency",
      "Cultural Studies",
      "Translation and Interpretation",
      "Language Pedagogy",
      "Bilingualism",
      "Dialectology",
      "Language Preservation",
      "Linguistic Anthropology"
    ],
    description:
      "Embark on a linguistic journey, learning the beauty and intricacies of foreign languages and their cultures.",
    assignments: [
      {
        title: "Foreign Languages Assignment 1",
        question1:
          "Write a dialogue between two people discussing their travel plans.",
        question2:
          "Translate a short paragraph from English to the target language.",
        dueDate: "2023-10-30",
        setDate: "2023-09-25",
        overallScore: 100,
        videoAttachment: "link_to_video13",
        audioAttachment: "link_to_audio13",
        documentAttachment: "link_to_document13"
      }
    ],
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Linguistics",
        videos: [
          {
            title: "Video 1",
            url: "video_url_37",
            instructor: "Dr. Evelyn Evans",
            date: "2023-12-01"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_37",
            instructor: "Dr. Evelyn Evans",
            date: "2023-12-02"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_37",
            instructor: "Dr. Evelyn Evans",
            date: "2023-12-03"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Grammar and Syntax",
        videos: [
          {
            title: "Video 1",
            url: "video_url_38",
            instructor: "Dr. Evelyn Evans",
            date: "2023-12-04"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_38",
            instructor: "Dr. Evelyn Evans",
            date: "2023-12-05"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_38",
            instructor: "Dr. Evelyn Evans",
            date: "2023-12-06"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Cultural Aspects of Languages",
        videos: [
          {
            title: "Video 1",
            url: "video_url_39",
            instructor: "Dr. Evelyn Evans",
            date: "2023-12-07"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_39",
            instructor: "Dr. Evelyn Evans",
            date: "2023-12-08"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_39",
            instructor: "Dr. Evelyn Evans",
            date: "2023-12-09"
          }
        ]
      }
    ]
  },
  {
    id: 14,
    courseName: "Environmental Science",
    courseAlias: "EnvSci 301",
    groups: "YEAR 1",
    branches: ["B", "C"],
    instructors: "Prof. Alexander Rivera",
    topics: [
      "Ecology",
      "Biodiversity Conservation",
      "Climate Change",
      "Sustainability",
      "Environmental Policy",
      "Renewable Energy",
      "Ecosystem Management",
      "Pollution Control",
      "Water Resources",
      "Environmental Ethics"
    ],
    description:
      "Explore the complex web of interactions between humans and the environment, and address pressing environmental challenges.",
    assignments: [
      {
        title: "Environmental Science Assignment 1",
        question1:
          "Explain the greenhouse effect and its impact on global climate.",
        question2:
          "Discuss different strategies for sustainable waste management.",
        dueDate: "2023-11-05",
        setDate: "2023-09-30",
        overallScore: 100,
        videoAttachment: "link_to_video14",
        audioAttachment: "link_to_audio14",
        documentAttachment: "link_to_document14"
      }
    ],
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Environmental Science",
        videos: [
          {
            title: "Video 1",
            url: "video_url_40",
            instructor: "Prof. Alexander Rivera",
            date: "2023-12-10"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_40",
            instructor: "Prof. Alexander Rivera",
            date: "2023-12-11"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_40",
            instructor: "Prof. Alexander Rivera",
            date: "2023-12-12"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Ecosystems and Biodiversity",
        videos: [
          {
            title: "Video 1",
            url: "video_url_41",
            instructor: "Prof. Alexander Rivera",
            date: "2023-12-13"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_41",
            instructor: "Prof. Alexander Rivera",
            date: "2023-12-14"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_41",
            instructor: "Prof. Alexander Rivera",
            date: "2023-12-15"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Climate Change and Sustainability",
        videos: [
          {
            title: "Video 1",
            url: "video_url_42",
            instructor: "Prof. Alexander Rivera",
            date: "2023-12-16"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_42",
            instructor: "Prof. Alexander Rivera",
            date: "2023-12-17"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_42",
            instructor: "Prof. Alexander Rivera",
            date: "2023-12-18"
          }
        ]
      }
    ]
  },
  {
    id: 15,
    courseName: "Political Science",
    courseAlias: "PolSci 202",
    groups: "SS 2",
    branches: ["C", "D"],
    instructors: "Ms. Sofia Collins",
    topics: [
      "Political Theories",
      "Comparative Politics",
      "International Relations",
      "Public Policy",
      "Political Institutions",
      "Political Philosophy",
      "Human Rights",
      "Political Economy",
      "Geopolitics",
      "Election Systems"
    ],
    description:
      "Delve into the study of political systems, governance, and the dynamics of power and authority in societies.",
    assignments: [
      {
        title: "Political Science Assignment 1",
        question1:
          "Analyze the structure and functions of the branches of government.",
        question2:
          "Discuss the concept of political ideologies and their influence on policymaking.",
        dueDate: "2023-11-10",
        setDate: "2023-10-05",
        overallScore: 100,
        videoAttachment: "link_to_video15",
        audioAttachment: "link_to_audio15",
        documentAttachment: "link_to_document15"
      }
    ],
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Political Science",
        videos: [
          {
            title: "Video 1",
            url: "video_url_43",
            instructor: "Ms. Sofia Collins",
            date: "2023-12-19"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_43",
            instructor: "Ms. Sofia Collins",
            date: "2023-12-20"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_43",
            instructor: "Ms. Sofia Collins",
            date: "2023-12-21"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Political Ideologies",
        videos: [
          {
            title: "Video 1",
            url: "video_url_44",
            instructor: "Ms. Sofia Collins",
            date: "2023-12-22"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_44",
            instructor: "Ms. Sofia Collins",
            date: "2023-12-23"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_44",
            instructor: "Ms. Sofia Collins",
            date: "2023-12-24"
          }
        ]
      },
      {
        id: 3,
        lessonName: "International Relations",
        videos: [
          {
            title: "Video 1",
            url: "video_url_45",
            instructor: "Ms. Sofia Collins",
            date: "2023-12-25"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_45",
            instructor: "Ms. Sofia Collins",
            date: "2023-12-26"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_45",
            instructor: "Ms. Sofia Collins",
            date: "2023-12-27"
          }
        ]
      }
    ]
  },
  {
    id: 16,
    courseName: "Business Studies",
    courseAlias: "Bus 101",
    groups: "JSS 3",
    branches: ["A", "E"],
    instructors: "Mr. Andrew Campbell",
    topics: [
      "Business Ethics",
      "Entrepreneurship",
      "Marketing",
      "Finance",
      "Management",
      "Strategic Planning",
      "Organizational Behavior",
      "Supply Chain Management",
      "Business Law",
      "E-commerce"
    ],
    description:
      "Gain insights into the world of business, from entrepreneurship and management to marketing and finance.",
    assignments: [
      {
        title: "Business Studies Assignment 1",
        question1:
          "Create a business plan for a new startup in a chosen industry.",
        question2:
          "Discuss the importance of ethical considerations in business decision-making.",
        dueDate: "2023-11-15",
        setDate: "2023-10-10",
        overallScore: 100,
        videoAttachment: "link_to_video16",
        audioAttachment: "link_to_audio16",
        documentAttachment: "link_to_document16"
      }
    ],
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Business",
        videos: [
          {
            title: "Video 1",
            url: "video_url_46",
            instructor: "Mr. Andrew Campbell",
            date: "2023-12-28"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_46",
            instructor: "Mr. Andrew Campbell",
            date: "2023-12-29"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_46",
            instructor: "Mr. Andrew Campbell",
            date: "2023-12-30"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Entrepreneurship",
        videos: [
          {
            title: "Video 1",
            url: "video_url_47",
            instructor: "Mr. Andrew Campbell",
            date: "2023-12-31"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_47",
            instructor: "Mr. Andrew Campbell",
            date: "2024-01-01"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_47",
            instructor: "Mr. Andrew Campbell",
            date: "2024-01-02"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Marketing and Sales",
        videos: [
          {
            title: "Video 1",
            url: "video_url_48",
            instructor: "Mr. Andrew Campbell",
            date: "2024-01-03"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_48",
            instructor: "Mr. Andrew Campbell",
            date: "2024-01-04"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_48",
            instructor: "Mr. Andrew Campbell",
            date: "2024-01-05"
          }
        ]
      }
    ]
  },
  {
    id: 17,
    courseName: "Psychology",
    courseAlias: "Psych 102",
    groups: "YEAR 3",
    branches: ["B", "C"],
    instructors: "Dr. Scarlett Mitchell",
    topics: [
      "Behavioral Psychology",
      "Cognitive Psychology",
      "Clinical Psychology",
      "Developmental Psychology",
      "Social Psychology",
      "Neuropsychology",
      "Personality Theories",
      "Psychological Assessment",
      "Psychopathology",
      "Positive Psychology"
    ],
    description:
      "Explore the human mind and behavior, delving into topics like cognition, emotions, and psychological disorders.",
    assignments: [
      {
        title: "Psychology Assignment 1",
        question1:
          "Explain the major theories of personality and their key concepts.",
        question2:
          "Discuss the role of nature and nurture in human development.",
        dueDate: "2023-11-20",
        setDate: "2023-10-15",
        overallScore: 100,
        videoAttachment: "link_to_video17",
        audioAttachment: "link_to_audio17",
        documentAttachment: "link_to_document17"
      }
    ],
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Psychology",
        videos: [
          {
            title: "Video 1",
            url: "video_url_49",
            instructor: "Dr. Scarlett Mitchell",
            date: "2024-01-06"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_49",
            instructor: "Dr. Scarlett Mitchell",
            date: "2024-01-07"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_49",
            instructor: "Dr. Scarlett Mitchell",
            date: "2024-01-08"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Cognitive Psychology",
        videos: [
          {
            title: "Video 1",
            url: "video_url_50",
            instructor: "Dr. Scarlett Mitchell",
            date: "2024-01-09"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_50",
            instructor: "Dr. Scarlett Mitchell",
            date: "2024-01-10"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_50",
            instructor: "Dr. Scarlett Mitchell",
            date: "2024-01-11"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Abnormal Psychology",
        videos: [
          {
            title: "Video 1",
            url: "video_url_51",
            instructor: "Dr. Scarlett Mitchell",
            date: "2024-01-12"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_51",
            instructor: "Dr. Scarlett Mitchell",
            date: "2024-01-13"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_51",
            instructor: "Dr. Scarlett Mitchell",
            date: "2024-01-14"
          }
        ]
      }
    ]
  },
  {
    id: 18,
    courseName: "Sociology",
    courseAlias: "Soc 201",
    groups: "SS 1",
    branches: ["C", "D"],
    instructors: "Mrs. Josephine Martinez",
    topics: [
      "Social Theories",
      "Cultural Sociology",
      "Gender and Sexuality",
      "Race and Ethnicity",
      "Social Inequality",
      "Urban Sociology",
      "Family Dynamics",
      "Globalization",
      "Social Movements",
      "Sociological Research Methods"
    ],
    description:
      "Examine the structures, institutions, and dynamics that shape societies and influence human interactions.",
    assignments: [
      {
        title: "Sociology Assignment 1",
        question1:
          "Discuss the concepts of social norms and deviance in society.",
        question2:
          "Analyze the effects of social inequality on various aspects of life.",
        dueDate: "2023-11-25",
        setDate: "2023-10-20",
        overallScore: 100,
        videoAttachment: "link_to_video18",
        audioAttachment: "link_to_audio18",
        documentAttachment: "link_to_document18"
      }
    ],
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Sociology",
        videos: [
          {
            title: "Video 1",
            url: "video_url_52",
            instructor: "Mrs. Josephine Martinez",
            date: "2024-01-15"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_52",
            instructor: "Mrs. Josephine Martinez",
            date: "2024-01-16"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_52",
            instructor: "Mrs. Josephine Martinez",
            date: "2024-01-17"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Social Institutions",
        videos: [
          {
            title: "Video 1",
            url: "video_url_53",
            instructor: "Mrs. Josephine Martinez",
            date: "2024-01-18"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_53",
            instructor: "Mrs. Josephine Martinez",
            date: "2024-01-19"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_53",
            instructor: "Mrs. Josephine Martinez",
            date: "2024-01-20"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Social Change and Movements",
        videos: [
          {
            title: "Video 1",
            url: "video_url_54",
            instructor: "Mrs. Josephine Martinez",
            date: "2024-01-21"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_54",
            instructor: "Mrs. Josephine Martinez",
            date: "2024-01-22"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_54",
            instructor: "Mrs. Josephine Martinez",
            date: "2024-01-23"
          }
        ]
      }
    ]
  },
  {
    id: 19,
    courseName: "Philosophy",
    courseAlias: "Phil 301",
    groups: "YEAR 2",
    branches: ["A", "B"],
    instructors: "Mr. Michael Johnson",
    topics: [
      "Metaphysics",
      "Epistemology",
      "Ethics",
      "Political Philosophy",
      "Philosophy of Mind",
      "Philosophy of Science",
      "Aesthetics",
      "Existentialism",
      "Logic",
      "Moral Philosophy"
    ],
    description:
      "Embark on a journey of critical thinking and contemplation, exploring fundamental questions about existence and knowledge.",
    assignments: [
      {
        title: "Philosophy Assignment 1",
        question1:
          "Explain the ethical theories of utilitarianism and deontology.",
        question2:
          "Discuss the concept of free will and determinism in philosophy.",
        dueDate: "2023-11-30",
        setDate: "2023-10-25",
        overallScore: 100,
        videoAttachment: "link_to_video19",
        audioAttachment: "link_to_audio19",
        documentAttachment: "link_to_document19"
      }
    ],
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Philosophy",
        videos: [
          {
            title: "Video 1",
            url: "video_url_55",
            instructor: "Mr. Michael Johnson",
            date: "2024-01-24"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_55",
            instructor: "Mr. Michael Johnson",
            date: "2024-01-25"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_55",
            instructor: "Mr. Michael Johnson",
            date: "2024-01-26"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Ethics and Morality",
        videos: [
          {
            title: "Video 1",
            url: "video_url_56",
            instructor: "Mr. Michael Johnson",
            date: "2024-01-27"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_56",
            instructor: "Mr. Michael Johnson",
            date: "2024-01-28"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_56",
            instructor: "Mr. Michael Johnson",
            date: "2024-01-29"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Metaphysics",
        videos: [
          {
            title: "Video 1",
            url: "video_url_57",
            instructor: "Mr. Michael Johnson",
            date: "2024-01-30"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_57",
            instructor: "Mr. Michael Johnson",
            date: "2024-01-31"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_57",
            instructor: "Mr. Michael Johnson",
            date: "2024-02-01"
          }
        ]
      }
    ]
  },
  {
    id: 20,
    courseName: "Anthropology",
    courseAlias: "Anthro 202",
    groups: "JSS 2",
    branches: ["B", "E"],
    instructors: "Ms. Emily Williams",
    topics: [
      "Cultural Anthropology",
      "Archaeology",
      "Biological Anthropology",
      "Linguistic Anthropology",
      "Ethnography",
      "Anthropological Theories",
      "Human Evolution",
      "Medical Anthropology",
      "Globalization and Culture",
      "Indigenous Studies"
    ],
    description:
      "Uncover the rich tapestry of human cultures and societies, exploring their diversity and interconnectedness.",
    assignments: [
      {
        title: "Anthropology Assignment 1",
        question1:
          "Discuss the methods used in anthropological fieldwork and research.",
        question2: "Analyze the cultural relativism approach in anthropology.",
        dueDate: "2023-12-05",
        setDate: "2023-11-01",
        overallScore: 100,
        videoAttachment: "link_to_video20",
        audioAttachment: "link_to_audio20",
        documentAttachment: "link_to_document20"
      }
    ],
    lessons: [
      {
        id: 1,
        lessonName: "Introduction to Anthropology",
        videos: [
          {
            title: "Video 1",
            url: "video_url_58",
            instructor: "Ms. Emily Williams",
            date: "2024-02-02"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_58",
            instructor: "Ms. Emily Williams",
            date: "2024-02-03"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_58",
            instructor: "Ms. Emily Williams",
            date: "2024-02-04"
          }
        ]
      },
      {
        id: 2,
        lessonName: "Cultural Anthropology",
        videos: [
          {
            title: "Video 1",
            url: "video_url_59",
            instructor: "Ms. Emily Williams",
            date: "2024-02-05"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_59",
            instructor: "Ms. Emily Williams",
            date: "2024-02-06"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_59",
            instructor: "Ms. Emily Williams",
            date: "2024-02-07"
          }
        ]
      },
      {
        id: 3,
        lessonName: "Archaeology and Human Evolution",
        videos: [
          {
            title: "Video 1",
            url: "video_url_60",
            instructor: "Ms. Emily Williams",
            date: "2024-02-08"
          }
        ],
        audios: [
          {
            title: "Audio 1",
            url: "audio_url_60",
            instructor: "Ms. Emily Williams",
            date: "2024-02-09"
          }
        ],
        documents: [
          {
            title: "Document 1",
            url: "document_url_60",
            instructor: "Ms. Emily Williams",
            date: "2024-02-10"
          }
        ]
      }
    ]
  }
]

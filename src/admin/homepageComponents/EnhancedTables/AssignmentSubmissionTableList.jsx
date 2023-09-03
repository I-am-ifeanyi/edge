import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { styled } from "@mui/material/styles"
import { tableCellClasses } from "@mui/material/TableCell"
import { TbFileDownload } from "react-icons/tb"

export default function AssignmentSubmissionTableList({
  dataToDisplay,
  toggleIsDetails
}) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#F1F1F5",
      color: "#44444F"
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0
    }
  }))

  function createData(candidateName, regNumber, score, remarks, details) {
    return { candidateName, regNumber, score, remarks, details }
  }

  const [submissionsData, setSubmissionsData] = React.useState(dataToDisplay)

  const rows = submissionsData?.map((detail) => {
    return createData(
      detail.candidateName,
      detail.regNumber,
      detail.score,
      detail.remarks,
      detail.details
    )
  })

  console.log(submissionsData)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>CANDIDATE NAME</StyledTableCell>
            <StyledTableCell align="left">REG NUMBER</StyledTableCell>
            <StyledTableCell align="left">SCORE</StyledTableCell>
            <StyledTableCell align="left">REMARKS</StyledTableCell>
            <StyledTableCell align="left">DETAILS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.candidateName}
              </TableCell>
              <TableCell align="left">{row.regNumber}</TableCell>
              <TableCell align="left">{row.score}</TableCell>
              <TableCell align="left">{row.remarks}</TableCell>
              <TableCell
                align="left"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  cursor: "pointer"
                }}
              >
                <span
                  className="bg-gray-200 px-2 py-1 rounded-md font-[500] hover:translate-y-1 transition-all duration-500"
                  onClick={toggleIsDetails}
                >
                  {row.details}
                </span>
                <TbFileDownload size={20} color={"gray"} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

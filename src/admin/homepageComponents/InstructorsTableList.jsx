import * as React from "react"
import PropTypes from "prop-types"
import { alpha } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import TableSortLabel from "@mui/material/TableSortLabel"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import Checkbox from "@mui/material/Checkbox"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import FormControlLabel from "@mui/material/FormControlLabel"
import Switch from "@mui/material/Switch"
import DeleteIcon from "@mui/icons-material/Delete"
import FilterListIcon from "@mui/icons-material/FilterList"

import { visuallyHidden } from "@mui/utils"

import profileImage from "../../assets/admin/instructor-icon/profile.jpg"
import image1 from "../../assets/admin/instructor-icon/image1.jpg"
import image2 from "../../assets/admin/instructor-icon/image2.jpg"
import image3 from "../../assets/admin/instructor-icon/image3.jpg"
import image4 from "../../assets/admin/instructor-icon/image4.jpg"
import image5 from "../../assets/admin/instructor-icon/image5.jpg"
import image6 from "../../assets/admin/instructor-icon/image6.jpg"
import image7 from "../../assets/admin/instructor-icon/image7.jpg"
import image8 from "../../assets/admin/instructor-icon/image8.jpg"
import image9 from "../../assets/admin/instructor-icon/image9.jpg"
import image10 from "../../assets/admin/instructor-icon/image10.jpg"
import image11 from "../../assets/admin/instructor-icon/image11.jpg"
import image12 from "../../assets/admin/instructor-icon/image12.jpg"
import image13 from "../../assets/admin/instructor-icon/image13.jpg"
import image14 from "../../assets/admin/instructor-icon/image14.jpg"
import image15 from "../../assets/admin/instructor-icon/image15.jpg"
import image16 from "../../assets/admin/instructor-icon/image16.jpg"

import { DeleteConfirmation } from "../../components/Components"

export default function EnhancedTable({
  isDelete,
  setIsShowPrompt,
  setIsDelete
}) {
  const [order, setOrder] = React.useState("asc")
  const [orderBy, setOrderBy] = React.useState("calories")
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [dense, setDense] = React.useState(false)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  function createData(id, image, name, phone, email, group, gender) {
    return {
      id,
      image,
      name,
      phone,
      email,
      group,
      gender
    }
  }

  const [instructorDetails, setInstructorDetails] = React.useState([
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
  ])

  console.log(instructorDetails)

  const rows = instructorDetails?.map((detail) => {
    return createData(
      detail.id,
      detail.image,
      detail.name,
      detail.phone,
      detail.email,
      detail.group,
      detail.gender
    )
  })

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1
    }
    if (b[orderBy] > a[orderBy]) {
      return 1
    }
    return 0
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy)
  }

  // Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
  // stableSort() brings sort stability to non-modern browsers (notably IE11). If you
  // only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
  // with exampleArray.slice().sort(exampleComparator)
  function stableSort(array, comparator) {
    if (array) {
      const stabilizedThis = array.map((el, index) => [el, index])
      stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) {
          return order
        }
        return a[1] - b[1]
      })
      return stabilizedThis.map((el) => el[0])
    }
  }

  const headCells = [
    {
      id: "image",
      numeric: false,
      disablePadding: true,
      label: ""
    },
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Name"
    },
    {
      id: "phone",
      numeric: true,
      disablePadding: false,
      label: "Phone"
    },
    {
      id: "email",
      numeric: true,
      disablePadding: false,
      label: "Email"
    },
    {
      id: "group",
      numeric: true,
      disablePadding: false,
      label: "Group"
    },
    {
      id: "gender",
      numeric: true,
      disablePadding: false,
      label: "Gender"
    }
  ]

  function EnhancedTableHead(props) {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort
    } = props
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property)
    }

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts"
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "left" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    )
  }

  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
  }

  function EnhancedTableToolbar(props) {
    const { numSelected } = props

    const handleDeleteItems = () => {
      setInstructorDetails((prevDetails) => {
        return prevDetails.filter((item) => !selected.includes(item.id))
      })
      setSelected([])
      console.log(instructorDetails)
    }

    const [isShowPrompt, setIsShowPrompt] = React.useState(false)

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              )
          })
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Instructor's List
          </Typography>
        )}

        {numSelected > 0 ? (
          <>
            {!isShowPrompt && (
              <Tooltip title="Delete">
                <IconButton onClick={() => setIsShowPrompt(true)}>
                  <DeleteIcon style={{ color: "red" }} />
                </IconButton>
              </Tooltip>
            )}
          </>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
        {isShowPrompt && (
          <Tooltip
            open={isShowPrompt}
            title=""
            sx={{
              width: "100%",
              height: "100%",
              position: "fixed"
            }}
          >
            <div className="bg-colorWhite1 fixed z-30 w-1/2 h-[30vh] rounded flex items-center justify-center">
              <DeleteConfirmation
                onClick1={() => setIsShowPrompt(false)}
                onClick2={handleDeleteItems}
                questionPrompt={`Are you sure you want to delete ${
                  numSelected > 1 ? "Instructors?" : "Instructor"
                }`}
              />
            </div>
          </Tooltip>
        )}
      </Toolbar>
    )
  }

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }

  console.log(selected)

  const handleDeleteItems = () => {
    setInstructorDetails((prevDetails) => {
      return prevDetails.filter((item) => !selected.includes(item.id))
    })
    setSelected([])
    console.log(instructorDetails)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangeDense = (event) => {
    setDense(event.target.checked)
  }

  const isSelected = (id) => selected.indexOf(id) !== -1

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy))?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, instructorDetails]
  )

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows?.length}
            />
            <TableBody>
              {visibleRows?.map((row, index) => {
                const isItemSelected = isSelected(row.id)
                const labelId = `enhanced-table-checkbox-${index}`

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <figure className="w-[30px] h-[30px] rounded-md">
                        <img
                          src={row.image}
                          alt=""
                          className="w-full h-full  rounded-md"
                        />
                      </figure>
                    </TableCell>

                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>

                    <TableCell align="left">{row.phone}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.group}</TableCell>
                    <TableCell align="left">{row.gender}</TableCell>
                  </TableRow>
                )
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  )
}

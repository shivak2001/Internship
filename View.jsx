import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

export default function View() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeleteId] = useState(" ");

  const handleOpen = (index) => {
    setDeleteId(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const Delete = () => {
    let newdata = rows.filter((item, index) => {
      return index !== deleteId;
    });
    setRows(newdata);
    localStorage.setItem("petAdoptionUsername", JSON.stringify(newdata));
    handleClose();
  };

  useEffect(() => {
    let data = localStorage.getItem("petAdoptionUsername");
    setRows(JSON.parse(data) || []);
    console.log(data);
  }, []);

  console.log(rows);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <h1 style={{ backgroundColor: "skyblue", color: "black" }}>Table</h1>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Serial No</TableCell>
              <TableCell align="right">User Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Phone No</TableCell>
              <TableCell align="right">Email Id</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {++index}
                </TableCell>
                <TableCell align="right">{row.user_id}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">
                  <Link to={`/edit/${--index}`}>
                    <Button color="success" variant="contained">Edit</Button>
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleOpen(index)} color="error" variant="contained">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are You Sure Want To Delete?
            </Typography>
            <br />
            <Button onClick={Delete} color='success' variant="contained">YES</Button>
            <Button onClick={handleClose} color="error" variant="contained">No</Button>
          </Box>
        </Modal>
        <Link to='/Localstorage'><Button color='primary' variant="contained">Insert</Button></Link>
      </TableContainer>
    </div>
  );
}

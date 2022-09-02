import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, amount, date, category) {
  return { name, amount, date, category };
}

const rows = [
  createData("Inaka Power", "$53.50", "2 Hours Ago", "Shopping"),
  createData("Deli and Grill ", "$8.32", "7 Hours Ago", "Food"),
  createData("Chipotle Mexican Grill", "$13.66", "Friday", "Food"),
  createData("ikea.com", "$238.44", "Thursday", "Shopping"),
  createData("Apple", "$7.99", "August 18 2022", "Entertainment"),
];


const makeStyle=(category)=>{
  if(category === 'Shopping')
  {
    return {
      background: 'rgb(48 209 88)',
      color: 'white',
    }
  }
  else if(category === 'Food')
  {
    return{
      background: 'rgb(255 159 10)',
      color: 'white',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Recent Spendings</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table className="big-table" sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell className="transaction">Transaction</TableCell>
                <TableCell align="left">Amount</TableCell>
                <TableCell align="left">Time</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow className="table-name" 
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className="table-name" component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="left">{row.amount}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="category" style={makeStyle(row.category)}>{row.category}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">Details</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <a href="#">Show All</a>
      </div>
  );
}

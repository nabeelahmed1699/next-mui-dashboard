import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { alpha, styled } from "@mui/material/styles";
const columns = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "y",
  "z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: 4,
  border: 1,
  bgcolor: theme.palette.primary.main,
}));
const TableComponentLeft = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="right">#</TableCell>
            <TableCell align="right">USER</TableCell>
            <TableCell align="right">TYPE</TableCell>
            {columns.map((col) => {
              return <TableCell key={col}>{col}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">Nabeel</TableCell>
            <TableCell align="right">Alpha</TableCell>
            {columns.map((col) => {
              return <TableCell key={col}>{col}</TableCell>;
            })}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponentLeft;

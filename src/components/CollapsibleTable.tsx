import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Collapse,
  TablePagination,
} from "@mui/material";
import React, { useState } from "react";
import InfoIcon from "@public/images/icons/info.svg";
import DotIcon from "@public/images/icons/dot.svg";

type Value<T> = {
  name: string;
  value: T;
};

type Company = {
  id: Value<number>;
  inn: Value<number>;
  procedure_qty: Value<number>;
  win_qty: Value<number>;
  registration_date: Value<string>;
  license_activity_type_x: Value<string>;
  license_activity_type_y: Value<string>;
  avg_staff_qty: Value<string>;
  Статус: "Ненадежный" | "Надежный";
  inside: React.ReactNode;
};

type Props = {
  headers: string[];
  rows: Company[];
};

function CollapsibleTable({ headers, rows }: Props) {
  headers = headers.filter((header) => header !== "inside");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <TableContainer component={"div"} className="bg-white border rounded-b-lg">
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header} align="center" className="text-gray-800">
                {header}
              </TableCell>
            ))}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, i) => (
              <Row key={i} row={row} />
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

type RowProps = {
  row: Company;
};
function Row({ row }: RowProps) {
  const [open, setOpen] = React.useState(false);
  const values = Object.entries(row)
    .filter((entry) => entry[0] !== "inside")
    .map((entry) => entry[1]) as (Value<string> | Value<number>)[];
  const tagClassName = "p-2 flex items-center gap-2 w-fit m-auto rounded-xl";
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {values.map((rowValue, i) => (
          <TableCell key={i} align="center">
            <span
              className={
                rowValue.value === "Надежный"
                  ? tagClassName + " bg-green-100 text-green-600"
                  : rowValue.value === "Ненадежный"
                  ? tagClassName + " bg-red-100 text-red-600"
                  : ""
              }
            >
              {rowValue.value === "Надежный" ? (
                <DotIcon className="text-green-500 fill-current" />
              ) : rowValue.value === "Ненадежный" ? (
                <DotIcon className="text-red-500 fill-current" />
              ) : (
                ""
              )}
              {rowValue.value}
            </span>
          </TableCell>
        ))}
        <TableCell align="right">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {<InfoIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {row.inside}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default CollapsibleTable;

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
  Box,
  Typography,
} from "@mui/material";
import React from "react";

type Props<T extends Record<string, any> & { inside: React.ReactNode }> = {
  headers: Array<keyof T extends string ? string : never>;
  rows: T[];
};

function CollapsibleTable<
  T extends Record<string, any> & { inside: React.ReactNode }
>({ headers, rows }: Props<T>) {
  headers = headers.filter((header) => header !== "inside");
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <Row<T> key={i} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

type RowProps<T extends Record<string, any> & { inside: React.ReactNode }> = {
  row: T;
};
function Row<T extends Record<string, any> & { inside: React.ReactNode }>({
  row,
}: RowProps<T>) {
  const [open, setOpen] = React.useState(false);
  const values = Object.entries(row)
    .filter((entry) => entry[0] !== "inside")
    .map((entry) => entry[1]);
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {values.map((rowValue, i) => (
          <TableCell key={i}>{rowValue}</TableCell>
        ))}
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <ChevronUpIcon width={24} />
            ) : (
              <ChevronDownIcon width={24} />
            )}
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

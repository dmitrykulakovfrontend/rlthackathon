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
} from "@mui/material";
import React from "react";
import InfoIcon from "@public/images/icons/info.svg";
import DotIcon from "@public/images/icons/dot.svg";

type Props<T extends Record<string, any> & { inside: React.ReactNode }> = {
  headers: Array<keyof T extends string ? string : never>;
  rows: T[];
};

function CollapsibleTable<
  T extends Record<string, any> & { inside: React.ReactNode }
>({ headers, rows }: Props<T>) {
  headers = headers.filter((header) => header !== "inside");
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
  const tagClassName = "p-2 flex items-center gap-2 w-fit m-auto rounded-xl";
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {values.map((rowValue, i) => (
          <TableCell key={i} align="center">
            <span
              className={
                rowValue === "Надежный"
                  ? tagClassName + " bg-green-100 text-green-600"
                  : rowValue === "Ненадежный"
                  ? tagClassName + " bg-red-100 text-red-600"
                  : ""
              }
            >
              {rowValue === "Надежный" ? (
                <DotIcon className="text-green-500 fill-current" />
              ) : rowValue === "Ненадежный" ? (
                <DotIcon className="text-red-500 fill-current" />
              ) : (
                ""
              )}
              {rowValue}
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

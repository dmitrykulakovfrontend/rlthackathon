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
  TableFooter,
} from "@mui/material";
import React, { useState } from "react";
import InfoIcon from "@public/images/icons/info.svg";
import DotIcon from "@public/images/icons/dot.svg";
import CompanyDropdown from "./CompanyDropdown";
import uuid from "@/utils/uuid";

export type CompanyInnerContent = {
  id: number;
  inn: number;
  license_activity_type: string;
  msp_type: string;
  msp_category: string;
  registration_date: string;
  life_time: number;
  avg_staff_qty: number | "";
  procedure_qty: number;
  "win_part, %": number;
};
export type Company = {
  tru_okpd2_name: string;
  supplier_inn: number;
  reit: number;
  reit_classif: number;
};

type Props = {
  headers: string[];
  rows: Company[];
  innerContent: CompanyInnerContent[];
  search: string;
  typeActivitySearch: string;
  filteredStatus: number;
};

function CollapsibleTable({
  headers,
  rows,
  search,
  typeActivitySearch,
  innerContent,
  filteredStatus,
}: Props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const formatted = (s: string) => s.toLowerCase().trim();

  const filteredRows = rows.filter(
    (company) =>
      formatted(`${company.tru_okpd2_name}`).includes(
        formatted(typeActivitySearch)
      ) &&
      formatted(`${company.supplier_inn}`).includes(formatted(search)) &&
      (filteredStatus === -1 ? true : filteredStatus === company.reit_classif)
  );

  const currentPageSlice = filteredRows.length < rowsPerPage ? 0 : page;

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
          {filteredRows
            .slice(
              currentPageSlice * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            )
            .map((row, i) => (
              <Row
                key={uuid()}
                row={row}
                innerContent={innerContent[i]}
                headers={headers}
              />
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        labelRowsPerPage="Компаний на страницу"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={currentPageSlice}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

type RowProps = {
  row: Company;
  headers: string[];
  innerContent: CompanyInnerContent;
};
function Row({ row, innerContent }: RowProps) {
  const [open, setOpen] = React.useState(false);
  const tagClassName = "p-2 flex items-center gap-2 w-fit m-auto rounded-xl";
  const allowedKeys = [
    "tru_okpd2_name",
    "supplier_inn",
    "reit",
    "reit_classif",
  ];
  const values = Object.entries(row)
    .filter(([key, value]) => allowedKeys.includes(key))
    .map((value) => value[1]);
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" }, width: "100%" }}>
        {values.map((rowValue) => (
          <TableCell key={uuid()} align="center">
            <span
              className={
                rowValue === 1
                  ? tagClassName + " bg-green-100 text-green-600"
                  : rowValue === 0
                  ? tagClassName + " bg-red-100 text-red-600"
                  : ""
              }
            >
              {rowValue === 1 ? (
                <DotIcon className="text-green-500 fill-current" />
              ) : rowValue === 0 ? (
                <DotIcon className="text-red-500 fill-current" />
              ) : (
                ""
              )}
              {rowValue === 1
                ? "Надежный"
                : rowValue === 0
                ? "Ненадежный"
                : typeof rowValue === "number" && rowValue <= 20
                ? rowValue.toFixed(2)
                : rowValue}
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
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={Object.keys(row).length || 0}
        >
          <Collapse in={open} timeout="auto">
            <CompanyDropdown company={innerContent} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default CollapsibleTable;

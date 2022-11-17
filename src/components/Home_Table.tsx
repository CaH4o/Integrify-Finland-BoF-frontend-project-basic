import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  TableContainer,
  TablePagination,
  Box,
  Paper,
  LinearProgress,
  Stack,
} from "@mui/material";

import HomeTableHeader from "../components/Home_TableHeader";
import HomeTableBodyRow from "../components/Home_TableBodyRow";
import { tCountry } from "../types/tCountry";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchCountries } from "../functions/asyncThunk";

function Home_Table() {
  const countriesList = useAppSelector((state) => state.countries.countries);
  const countries = useAppSelector((state) => state.countries.backUpCountries);
  const dispatch = useAppDispatch();
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);
  const emptyRows: number =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - countriesList.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(function () {
    if (countries.length !== 250) dispatch(fetchCountries());
  }, []);

  useEffect(
    function () {
      if (page) setPage(0);
    },
    [countriesList]
  );

  return (
    <Box
      sx={{
        width: "auto",
        margin: "0.5rem",
        justifyContent: "center",
      }}
    >
      {!countriesList.length ? (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress sx={{ height: 10 }} color="primary" />
        </Stack>
      ) : (
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <HomeTableHeader />
            <TableBody>
              {countriesList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((country: tCountry) => (
                  <HomeTableBodyRow
                    key={country.name.official}
                    country={country}
                  />
                ))}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 40 * emptyRows,
                  }}
                >
                  <TableCell />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 50, 250]}
                  count={countriesList.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default Home_Table;

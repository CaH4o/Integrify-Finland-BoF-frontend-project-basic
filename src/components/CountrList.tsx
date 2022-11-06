import React, { useState, useEffect } from "react";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ExploreIcon from "@mui/icons-material/Explore";
import { Link } from "react-router-dom";
import {
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  TableContainer,
  TablePagination,
  Button,
  Container
} from "@mui/material";

import { tCountry } from "../types/tCountry";

function CountrList() {
  const url: string = "https://restcountries.com/v3.1/all";
  const [countriesList, setCountryList] = useState<tCountry[]>([]);

  useEffect(
    function () {
      fetch(url)
        .then(function (respons: Response) {
          if (!respons.ok) {
            console.log(respons);
          }
          return respons.json();
        })
        .then(function (data: tCountry[]) {
          setCountryList(data);
        })
        .catch(function (error: Error) {
          console.log("Error: " + error);
        });
    },
    [url]
  );

  return (
    <Container>
      {!countriesList.length && "Loading..."}
      <TableContainer>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Flag</TableCell>
              <TableCell align="center">Country Name</TableCell>
              <TableCell align="center">Rigion</TableCell>
              <TableCell align="center">Subregion</TableCell>
              <TableCell align="center">Capital</TableCell>
              <TableCell align="center">Area</TableCell>
              <TableCell align="center">Population</TableCell>
              <TableCell align="center">Languages</TableCell>
              <TableCell align="center">Links</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {countriesList
              //.filter((item) => item.incomeSource.includes(searchIncome))
              //.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((cntry: tCountry) => (
                <TableRow key={cntry.name.official} style={{ height: 33 }}>
                  <TableCell>
                    <img src={cntry.flags.png} alt="" />
                  </TableCell>
                  <TableCell>
                    <Link
                      to={cntry.name.common}
                      style={{ backgroundColor: "transparent" }}
                    >
                      {cntry.name.official}
                    </Link>
                  </TableCell>
                  <TableCell>{cntry.region}</TableCell>
                  <TableCell> {cntry.subregion}</TableCell>
                  <TableCell>
                    {cntry.capital &&
                      new Intl.ListFormat("en").format(cntry.capital)}
                  </TableCell>
                  <TableCell>
                    {cntry.area} km<sup>2</sup>
                  </TableCell>
                  <TableCell>{cntry.population}</TableCell>
                  <TableCell>
                    {cntry.languages &&
                      new Intl.ListFormat("en").format(
                        Object.values(cntry.languages)
                      )}
                  </TableCell>

                  <TableCell>
                    <Button href={cntry.maps.googleMaps} target="_blanck">
                      <ExploreIcon />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button href={cntry.maps.openStreetMaps} target="_blanck">
                      <TravelExploreIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            {/*       {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 33 * emptyRows,
                }}
              >
                <TableCell />
              </TableRow>
            )} */}
          </TableBody>
          <TableFooter>
            <TableRow>
              {/*  <TablePagination
                rowsPerPageOptions={[3, 5, 10]}
                count={
                  incomes.filter((item) =>
                    item.incomeSource.includes(searchIncome)
                  ).length
                }
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> */}
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default CountrList;

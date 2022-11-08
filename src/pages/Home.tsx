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
  Box,
} from "@mui/material";
import TourIcon from "@mui/icons-material/Tour";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

import { tCountry } from "../types/tCountry";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { RootState } from "../redux/store";
import searchReducer from "../redux/reducers/search";
import {
  fetchCountries,
  sortCountriesByName,
} from "../redux/reducers/countries";

function Home() {
  const countriesList = useAppSelector((state) => state.countries.countries);
  const dispatch = useAppDispatch();
  useEffect(function () {
    dispatch(fetchCountries());
  }, []);

  const search: string = useAppSelector(
    (state: RootState) => state.search
  );
  const [order, setOrder] = useState<"asc" | "dsc">("asc");
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);
  const emptyRows: number =
    page > 0
      ? Math.max(
          0,
          (1 + page) * rowsPerPage -
            countriesList.filter((cntry) => cntry.name.common.includes(search))
              .length
        )
      : 0;

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

  return (
    <Box>
      {!countriesList.length && "Loading..."}
      <TableContainer>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow style={{ height: 40 }}>
              <TableCell align="center">Flag</TableCell>
              <TableCell
                align="center"
                onClick={() => {
                  dispatch(sortCountriesByName());;
                }}
              >
                Country Name
              </TableCell>
              <TableCell align="center">Rigion</TableCell>
              <TableCell align="center">Subregion</TableCell>
              <TableCell align="center">Capital</TableCell>
              <TableCell align="center">Area</TableCell>
              <TableCell align="center">Population</TableCell>
              <TableCell align="center">Languages</TableCell>
              <TableCell align="center">Links</TableCell>
              <TableCell />
              <TableCell align="center">Favorit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countriesList
              .filter((cntry) => cntry.name.common.includes(search))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((cntry: tCountry) => (
                <TableRow key={cntry.name.official} style={{ height: 40 }}>
                  <TableCell>
                    <img src={cntry.flags.png} alt={cntry.name.official} />
                  </TableCell>
                  <TableCell>
                    <Link
                      to={cntry.name.common}
                      style={{ color: "inherit", textDecoration: "inherit" }}
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
                  <TableCell>
                    <Button>
                      {false ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                  </TableCell>
                </TableRow>
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
                count={
                  countriesList.filter((cntry) =>
                    cntry.name.common.includes(search)
                  ).length
                }
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Home;

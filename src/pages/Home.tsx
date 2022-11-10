import React, { useEffect } from "react";
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
  Container,
  TableSortLabel,
  Paper,
  LinearProgress,
  Stack,
  IconButton,
  Badge,
} from "@mui/material";
import TourIcon from "@mui/icons-material/Tour";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { tCountry } from "../types/tCountry";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  fetchCountries,
  sortCountriesByName,
  sortCountriesByRegion,
  sortCountriesByCapital,
  sortCountriesBySubregion,
  sortCountriesByAria,
  sortCountriesByPopulation,
  sortCountriesByLanguages,
  addRemoveFavoriteCountry,
  sortCountriesByFavorite,
  sortCountriesByVisited,
  addVisitedCountry,
  removeVisitedCountry,
} from "../redux/reducers/countries";

function Home() {
  const countriesList = useAppSelector((state) => state.countries.countries);
  const sortDir = useAppSelector((state) => state.countries.sortDir);
  const dispatch = useAppDispatch();
  useEffect(
    function () {
      dispatch(fetchCountries());
    },
    [dispatch]
  );

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
            <TableHead>
              <TableRow style={{ minHeight: 40 }}>
                <TableCell width="100px">Flag</TableCell>
                <TableCell width="140px">
                  <TableSortLabel
                    onClick={() => {
                      dispatch(sortCountriesByName());
                    }}
                    direction={sortDir.byName}
                  >
                    Country Name
                  </TableSortLabel>
                </TableCell>
                <TableCell width="120px">
                  <TableSortLabel
                    onClick={() => {
                      dispatch(sortCountriesByRegion());
                    }}
                    direction={sortDir.byRegion}
                  >
                    Region
                  </TableSortLabel>
                </TableCell>
                <TableCell width="120px">
                  <TableSortLabel
                    onClick={() => {
                      dispatch(sortCountriesBySubregion());
                    }}
                    direction={sortDir.bySubregion}
                  >
                    Subregion
                  </TableSortLabel>
                </TableCell>
                <TableCell width="120px">
                  <TableSortLabel
                    onClick={() => {
                      dispatch(sortCountriesByCapital());
                    }}
                    direction={sortDir.byCapital}
                  >
                    Capital
                  </TableSortLabel>
                </TableCell>
                <TableCell width="120px">
                  <TableSortLabel
                    onClick={() => {
                      dispatch(sortCountriesByAria());
                    }}
                    direction={sortDir.byAria}
                  >
                    Area
                  </TableSortLabel>
                </TableCell>
                <TableCell width="120px">
                  <TableSortLabel
                    onClick={() => {
                      dispatch(sortCountriesByPopulation());
                    }}
                    direction={sortDir.byPopulation}
                  >
                    Population
                  </TableSortLabel>
                </TableCell>
                <TableCell width="160px">
                  <TableSortLabel
                    onClick={() => {
                      dispatch(sortCountriesByLanguages());
                    }}
                    direction={sortDir.byLanguages}
                  >
                    Languages
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center" width="40px" colSpan={2}>
                  Links
                </TableCell>
                <TableCell width="20px">
                  <TableSortLabel
                    onClick={() => {
                      dispatch(sortCountriesByFavorite());
                    }}
                    direction={sortDir.byFavorite}
                  >
                    Favorit
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center" width="70px">
                  <TableSortLabel
                    onClick={() => {
                      dispatch(sortCountriesByVisited());
                    }}
                    direction={sortDir.byVisited}
                  >
                    Visited
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countriesList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((cntry: tCountry) => (
                  <TableRow key={cntry.name.official} style={{ height: 40 }}>
                    <TableCell>
                      <img
                        src={cntry.flags.png}
                        alt={cntry.name.official}
                        height="40px"
                      />
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
                      {cntry.area.toLocaleString("en")} km<sup>2</sup>
                    </TableCell>
                    <TableCell>
                      {cntry.population.toLocaleString("en")}
                    </TableCell>
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
                      <Button
                        onClick={() => {
                          dispatch(
                            addRemoveFavoriteCountry(cntry.name.official)
                          );
                        }}
                      >
                        {cntry.isFavorit ? (
                          <FavoriteIcon />
                        ) : (
                          <FavoriteBorderIcon />
                        )}
                      </Button>
                    </TableCell>
                    <TableCell >
                      <Box display="flex" flexDirection="row">
                      <Button
                        onClick={() => {
                          dispatch(addVisitedCountry(cntry.name.official));
                        }}
                      >
                        <AddIcon />
                      </Button>
                      <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                      >
                        <Badge badgeContent={cntry.visited} color="info">
                          <TourIcon />
                        </Badge>
                      </IconButton>
                      <Button
                        onClick={() => {
                          dispatch(removeVisitedCountry(cntry.name.official));
                        }}
                      >
                        <RemoveIcon />
                      </Button>
                      </Box>
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

export default Home;

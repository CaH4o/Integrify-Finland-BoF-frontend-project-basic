import React from "react";
import { TableHead, TableRow, TableCell, TableSortLabel } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  sortCountriesByName,
  sortCountriesByRegion,
  sortCountriesByCapital,
  sortCountriesBySubregion,
  sortCountriesByAria,
  sortCountriesByPopulation,
  sortCountriesByLanguages,
  sortCountriesByFavorite,
  sortCountriesByVisited,
} from "../redux/reducers/countries";

function Home_TableHeader() {
  const sortDir = useAppSelector((state) => state.countries.sortDir);
  const dispatch = useAppDispatch();

  return (
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
  );
}

export default Home_TableHeader;

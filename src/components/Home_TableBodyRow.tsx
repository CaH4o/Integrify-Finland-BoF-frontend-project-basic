import { Link } from "react-router-dom";
import { TableRow, TableCell, Button, Box, Badge } from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import TourIcon from "@mui/icons-material/Tour";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

import { tCountry } from "../types/tCountry";
import {
  addRemoveFavoriteCountry,
  addVisitedCountry,
  removeVisitedCountry,
} from "../redux/reducers/countries";
import { useAppDispatch } from "../hooks/reduxHooks";

function Home_TableBodyRow({ country }: { country: tCountry }) {
  const dispatch = useAppDispatch();

  return (
    <TableRow key={country.name.official} style={{ height: 40 }}>
      <TableCell>
        <img
          src={country.flags.png}
          alt={country.name.official}
          height="40px"
        />
      </TableCell>
      <TableCell>
        <Link
          to={country.name.common}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          {country.name.official}
        </Link>
      </TableCell>
      <TableCell>{country.region}</TableCell>
      <TableCell> {country.subregion}</TableCell>
      <TableCell>
        {country.capital && new Intl.ListFormat("en").format(country.capital)}
      </TableCell>
      <TableCell>
        {country.area.toLocaleString("en")} km<sup>2</sup>
      </TableCell>
      <TableCell>{country.population.toLocaleString("en")}</TableCell>
      <TableCell>
        {country.languages &&
          new Intl.ListFormat("en").format(Object.values(country.languages))}
      </TableCell>
      <TableCell>
        <Button href={country.maps.googleMaps} target="_blanck">
          <ExploreIcon />
        </Button>
      </TableCell>
      <TableCell>
        <Button href={country.maps.openStreetMaps} target="_blanck">
          <TravelExploreIcon />
        </Button>
      </TableCell>
      <TableCell>
        <Button
          onClick={() => {
            dispatch(addRemoveFavoriteCountry(country.name.official));
          }}
        >
          {country.isFavorit ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
      </TableCell>
      <TableCell>
        <Box display="flex" flexDirection="row">
          <Button
            onClick={() => {
              dispatch(addVisitedCountry(country.name.official));
            }}
          >
            <AddIcon />
          </Button>
          <Badge badgeContent={country.visited} color="info">
            <TourIcon />
          </Badge>
          <Button
            onClick={() => {
              dispatch(removeVisitedCountry(country.name.official));
            }}
          >
            <RemoveIcon />
          </Button>
        </Box>
      </TableCell>
    </TableRow>
  );
}

export default Home_TableBodyRow;

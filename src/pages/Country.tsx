import React, { useEffect } from "react";
import { useParams } from "react-router";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ExploreIcon from "@mui/icons-material/Explore";

import { tCountry } from "../types/tCountry";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchCountry } from "../redux/reducers/countries";

function Country() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const country: tCountry = useAppSelector(
    (state) => state.countries.country[0]
  );

  useEffect(
    function () {
      if (params.name) {
        dispatch(fetchCountry(params.name));
      }
    },
    [params.name, dispatch]
  );

  return (
    <div>
      {!country ? (
        <h2>Loading</h2>
      ) : (
        <Box sx={{ display: "flex", margin: "1rem" }}>
          <CardMedia
            component="img"
            sx={{ width: 400 }}
            image={country.flags.png}
            alt={country.name.official}
          />
          <CardContent sx={{ flex: "1 0 auto", minWidth: "400px" }}>
            <Typography
              component="div"
              variant="h5"
              color="text.primary"
              sx={{ margin: "0 0 1em" }}
            >
              {country.name.official}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  color="text.primary"
                  variant="subtitle1"
                  component="div"
                >
                  Rigion: {country.region}
                </Typography>
                <Typography
                  color="text.primary"
                  variant="subtitle1"
                  component="div"
                >
                  {country.subregion && `Subregion: ${country.subregion}`}
                </Typography>
                <Typography
                  color="text.primary"
                  variant="subtitle1"
                  component="div"
                >
                  {country.capital &&
                    `Capital: ${new Intl.ListFormat("en").format(
                      Object.values(country.capital)
                    )}`}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  color="text.primary"
                  variant="subtitle1"
                  component="div"
                >
                  Area: {country.area} km<sup>2</sup>
                </Typography>
                <Typography
                  color="text.primary"
                  variant="subtitle1"
                  component="div"
                >
                  Population: {country.population}
                </Typography>
                <Typography
                  color="text.primary"
                  variant="subtitle1"
                  component="div"
                >
                  Timezones: {new Intl.ListFormat("en").format(
                      Object.values(country.timezones)
                    )}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {country.languages &&
                    `Languages: ${new Intl.ListFormat("en").format(
                      Object.values(country.languages)
                    )}`}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
               {/*    {country.currencies &&
                    `Currencies: ${new Intl.ListFormat("en").format(
                      Object.values(country.currencies.name)
                    )}`} */}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>

        /*  

               
              
                
              </p>
            </div>
            <div>
              <Button href={country.maps.googleMaps} target="_blanck">
                <ExploreIcon />
              </Button>
              <Button href={country.maps.openStreetMaps} target="_blanck">
                <TravelExploreIcon />
              </Button>
            </div>
          </li>
        </ul> */
      )}
    </div>
  );
}
export default Country;

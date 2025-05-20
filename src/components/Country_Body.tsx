import { useEffect } from "react"
import { useParams } from "react-router"
import {
  Box,
  CardContent,
  CardMedia,
  Typography,
  Paper,
  Button,
} from "@mui/material"
import TravelExploreIcon from "@mui/icons-material/TravelExplore"
import ExploreIcon from "@mui/icons-material/Explore"

import { tCountry } from "../types/tCountry"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { fetchCountry } from "../functions/asyncThunk"
import { showLanguages, showCurrencies } from "../functions/shows"

function Country_Body() {
  const params = useParams()
  const dispatch = useAppDispatch()
  const country: tCountry = useAppSelector(
    (state) => state.countries.country[0]
  )

  useEffect(
    function () {
      if (params.name) {
        dispatch(fetchCountry(params.name))
      }
    },
    [params.name]
  )

  return (
    <Box sx={{ height: 800 }}>
      {!country ? (
        <h2>Loading</h2>
      ) : (
        <Box
          sx={{ display: "flex", margin: "1rem", width: "auto" }}
          component={Paper}
        >
          <CardMedia
            component="img"
            sx={{ width: 400, borderImage: "0.5rem secondary" }}
            image={country.flags.png}
            alt={country.name.official}
          />
          <CardContent sx={{ flex: "1 0 auto", width: "350px" }}>
            <Typography
              component="div"
              variant="h5"
              color="text.primary"
              sx={{ margin: "0 0 1em" }}
            >
              {country.name.official}
              <Button href={country.maps.googleMaps} target="_blanck">
                <ExploreIcon />
              </Button>
              <Button href={country.maps.openStreetMaps} target="_blanck">
                <TravelExploreIcon />
              </Button>
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "300px",
                }}
              >
                <Typography
                  color="text.primary"
                  variant="subtitle1"
                  component="div"
                >
                  <b>Rigion: </b>
                  {country.region}
                </Typography>
                <Typography
                  color="text.primary"
                  variant="subtitle1"
                  component="div"
                >
                  {country.subregion && (
                    <>
                      <b>Subregion: </b> {country.subregion}
                    </>
                  )}
                </Typography>
                <Typography
                  color="text.primary"
                  variant="subtitle1"
                  component="div"
                >
                  {country.capital && (
                    <>
                      <b>Capital: </b>
                      {new Intl.ListFormat("en").format(
                        Object.values(country.capital)
                      )}
                    </>
                  )}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "300px",
                }}
              >
                <Typography
                  color="text.primary"
                  variant="subtitle1"
                  component="div"
                >
                  <b>Area: </b> {country.area} km<sup>2</sup>
                </Typography>
                <Typography
                  color="text.primary"
                  variant="subtitle1"
                  component="div"
                >
                  <b>Population: </b>
                  {country.population}
                </Typography>
                <Typography
                  color="text.primary"
                  variant="subtitle1"
                  component="div"
                >
                  <b>Timezones: </b>
                  {new Intl.ListFormat("en").format(
                    Object.values(country.timezones)
                  )}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "300px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {country.languages && (
                    <>
                      <b>Languages: </b>
                      {showLanguages(country.languages)}
                    </>
                  )}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {country.currencies && (
                    <>
                      <b>Currencies: </b>
                      {showCurrencies(country.currencies)}
                    </>
                  )}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      )}
    </Box>
  )
}

export default Country_Body

import { Button } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ExploreIcon from "@mui/icons-material/Explore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { tCountry } from "../types/tCountry";

function SingleCountry() {
  const params = useParams();
  const url: string = `https://restcountries.com/v3.1/name/${params.name}`;
  const [country, setCountry] = useState<tCountry[]>([]);

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
          setCountry(data);
        })
        .catch(function (error: Error) {
          console.log("Error: " + error);
        });
    },
    [url]
  );

  console.log(country);

  return (
    <div>
      {!country.length && "Loading..."}
      <ul id="list">
        {country.length && (
          <li key={country[0].name.official}>
            <img src={country[0].flags.png} alt="" />
            <div>
              <p>Country Name: {country[0].name.official}</p>
              <p>Rigion: {country[0].region}</p>
              {country[0].subregion && <p>Subregion: {country[0].subregion}</p>}
              {country[0].languages && (
                <p>
                  Languages:{" "}
                  {new Intl.ListFormat("en").format(
                    Object.values(country[0].languages)
                  )}
                </p>
              )}
            </div>
            <div>
              {country[0].capital && (
                <p>
                  Capital:{" "}
                  {new Intl.ListFormat("en").format(country[0].capital)}
                </p>
              )}
              <p>
                Area: {country[0].area} km<sup>2</sup>
              </p>
              <p>Population: {country[0].population}</p>
              <p>
                Timezones:{" "}
                {country[0].timezones.length > 1
                  ? country[0].timezones[0] +
                    " - " +
                    country[0].timezones[country[0].timezones.length - 1]
                  : country[0].timezones[0]}
              </p>
            </div>
            <div>
              <Button href={country[0].maps.googleMaps} target="_blanck">
                <ExploreIcon />
              </Button>
              <Button href={country[0].maps.openStreetMaps} target="_blanck">
                <TravelExploreIcon />
              </Button>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
export default SingleCountry;

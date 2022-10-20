import React, { useState, useEffect } from "react";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ExploreIcon from "@mui/icons-material/Explore";
import { Button, Icon } from "@mui/material";

import { tCountry } from "../types/tCountry";

function CountrList() {
  const url: string = "https://restcountries.com/v3.1/all";
  const [countriesList, setCountryList] = useState<tCountry[]>([]);

  function getData() {
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
  }

  useEffect(function () {
    getData();
  }, []);

  console.log(countriesList);

  return (
    <div>
      <ul id="list">
        {countriesList.length > 0 &&
          countriesList.map((cntry: tCountry) => (
            <li key={cntry.name.official}>
              <img src={cntry.flags.png} alt="" />
              <div>
                <p>Country Name: {cntry.name.official}</p>
                <p>Rigion: {cntry.region}</p>
                <p>Subregion: {cntry.subregion}</p>
                <p>
                  Languages:{" "}
                  {cntry.languages &&
                    Object.entries(cntry.languages).map(([key, val]) => {
                      return " " + val;
                    }) + " "}
                </p>
              </div>
              <div>
                <p>
                  Capital:{" "}
                  {cntry.capital && cntry.capital.toString().replace(",", "; ")}
                </p>
                <p>
                  Area: {cntry.area} km<sup>2</sup>
                </p>
                <p>Population: {cntry.population}</p>
                <p>
                  Timezones:{" "}
                  {cntry.timezones.length > 1
                    ? cntry.timezones[0] +
                      " - " +
                      cntry.timezones[cntry.timezones.length - 1]
                    : cntry.timezones[0]}
                </p>
              </div>
              <div>
                <Button href={cntry.maps.googleMaps} target="_blanck">
                  <ExploreIcon />
                </Button>
                <Button href={cntry.maps.openStreetMaps} target="_blanck">
                  <TravelExploreIcon />
                </Button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CountrList;

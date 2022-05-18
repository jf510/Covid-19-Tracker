import React, { useEffect, useState } from "react";
import { MenuItem, FormControl, Select } from "@mui/material";
import "./App.css";

// BASE_URL: https://disease.sh/
// In order to make a call to the API, we need a useEffect
// Runs once when the component loads and thats it. It will also run an additional time for each varible that is passed in. [variable]
// async -> send a request, wait for it, do something with it

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide')

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select varient="outlined" value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>

            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/** HEADER */}
      {/** Title + Dropdown field */}
      {/** InfoBoxs */}
      {/** InfoBoxs */}
      {/** InfoBoxs */}

      {/** Table */}
      {/** Graph */}

      {/** Map */}
    </div>
  );
}

export default App;

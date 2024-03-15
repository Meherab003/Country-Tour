import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCounties] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([])
  const [visitedFlags, setVisitedFlags] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCounties(data));
  }, []);

  const handleVisitedCountries = country => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries)
  }

  const handleVisitedFlag = flag => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags)
  }

  return (
    <div>
      <h1>Countries: {countries.length}</h1>
      <div>
        <h3>Visited Countries: {visitedCountries.length}</h3>
        <ul>
          {
            visitedCountries.map(country => <li key={country.cca3}>
                {country.name.common}
                <img className="flag" src={country.flags.png} alt="" />
            </li>)
          }
        </ul>
        <div>
            {
                visitedFlags.map((flag, idx) => <img className="flag" key={idx} src={flag}></img>)
            }
        </div>
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccs3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

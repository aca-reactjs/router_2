import { useEffect, useState } from "react";
import { CountryList } from "../components";

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(setCountries);
  }, []);
  return <CountryList countries={countries} />;
}

export default Countries;

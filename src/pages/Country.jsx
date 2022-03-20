import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Country() {
  const [country, setCountry] = useState();
  const params = useParams();

  useEffect(() => {
    if (params.code) {
      fetch(`https://restcountries.com/v3.1/alpha/${params.code}`)
        .then((res) => res.json())
        .then((res) => {
          const current = res[0];

          setCountry(current);
        });
    }
  }, [params]);
  console.log(`🐞 / Country / country`, country);

  return country ? (
    <div>
      <h3>name: {country.name.common}</h3>
      <p>area: {country.area}</p>
      <p>population: {country.population}</p>
      <img src={country.flags.png} alt="flag" width={200} height={200} />
    </div>
  ) : null;
}

export default Country;

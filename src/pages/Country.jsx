import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const faveList = "favoriteList";

function Country() {
  const [country, setCountry] = useState();
  const [isChecked, setIsChecked] = useState(isCurrentCountryAdded());

  const params = useParams();

  const handleFaveCheckbox = (e) => {
    const list = JSON.parse(localStorage.getItem(faveList)) || [];

    if (e.target.checked) {
      list.push(country.cca2);

      localStorage.setItem(faveList, JSON.stringify(list));
    } else {
      const newList = list.filter((el) => el !== country.cca2);

      localStorage.setItem(faveList, JSON.stringify(newList));
    }

    setIsChecked(e.target.checked);
  };

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

  function isCurrentCountryAdded() {
    return !!JSON.parse(localStorage.getItem(faveList)).find(
      (el) => el === country?.cca2
    );
  }

  return country ? (
    <div>
      <div>
        <h3>name: {country.name.common}</h3>
        <label
          htmlFor="fave"
          style={{
            fontSize: "2rem",
            color: isChecked ? "#c8c849" : "black",
          }}
        >
          ★
          <input
            type="checkbox"
            name="fave"
            id="fave"
            checked={isChecked}
            onChange={handleFaveCheckbox}
            hidden
          />
        </label>
      </div>
      <p>area: {country.area}</p>
      <p>population: {country.population}</p>
      <img src={country.flags.png} alt="flag" width={200} height={200} />
    </div>
  ) : null;
}

export default Country;

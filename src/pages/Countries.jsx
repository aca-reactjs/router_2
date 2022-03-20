import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Countries() {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  const handleListItemClick = (code) => () => {
    navigate(`${code}`);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(setCountries);
  }, []);
  return (
    <div>
      {countries.map((el) => (
        <li onClick={handleListItemClick(el.cca2)} key={el.cca2}>
          {el.name.common}
        </li>
      ))}
    </div>
  );
}

export default Countries;

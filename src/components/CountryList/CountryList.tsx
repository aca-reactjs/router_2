import { useNavigate } from "react-router-dom";

function CountryList({ countries }) {
  const navigate = useNavigate();

  const handleListItemClick = (code) => () => {
    navigate(`${code}`);
  };

  return (
    <ul>
      {countries.map((el) => (
        <li onClick={handleListItemClick(el.cca2)} key={el.cca2}>
          {el.name.common}
        </li>
      ))}
    </ul>
  );
}


export default CountryList
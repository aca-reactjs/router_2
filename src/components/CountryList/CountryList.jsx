import { useNavigate } from "react-router-dom";

import styles from "./CountryList.module.css";

function CountryList({ countries }) {
  const navigate = useNavigate();

  const handleListItemClick = (code) => () => {
    navigate(`${code}`);
  };

  return (
    <ul className={styles.list}>
      {countries.map((el, idx) => (
        <li
          style={{ color: `hsl(${idx}, 50%, 50%)` }}
          onClick={handleListItemClick(el.cca2)}
          key={el.cca2}
        >
          {el.name.common}
        </li>
      ))}
    </ul>
  );
}

export default CountryList;

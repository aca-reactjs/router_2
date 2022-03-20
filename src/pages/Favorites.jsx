import { Navigate, useLocation } from "react-router-dom";
import { faveList } from "./Country";

const faveCode = "1234";

export default function Favorites() {
  const location = useLocation();

  return location.state.code === faveCode ? (
    <div>{JSON.stringify(JSON.parse(localStorage.getItem(faveList)))}</div>
  ) : (
    <Navigate to={"/"} />
  );
}

import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function MainLayout() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const navigate = useNavigate();

  const handleFaveClick = () => {
    setIsFormVisible(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { value } = e.target.elements[0];

    navigate("favorites", { state: { code: value } });
  };

  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem", margin: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="countries">countries</Link>
        <div style={{ cursor: "pointer" }} onClick={handleFaveClick}>
          favorites
        </div>
        {isFormVisible ? (
          <form onSubmit={handleFormSubmit}>
            <input type="text" name="" id="" />
          </form>
        ) : null}
      </nav>
      <Outlet />
    </div>
  );
}

export default MainLayout;

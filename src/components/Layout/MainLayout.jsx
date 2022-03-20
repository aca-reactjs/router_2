import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="countries">countries</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default MainLayout;

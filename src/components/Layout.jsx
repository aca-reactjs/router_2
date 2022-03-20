import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="countries">countries</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;

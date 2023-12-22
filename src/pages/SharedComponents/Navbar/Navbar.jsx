import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="text-lg  lg:text-xl text-black font-bold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg lg:text-xl text-black font-bold">
          About
        </NavLink>
      </li>
      {
        user && <li>
        <NavLink to={`/dashboard/${user?.email}`} className="text-lg lg:text-xl text-black font-bold">
          Dashboard
        </NavLink>
      </li>
      }
      <li>
        <NavLink className="text-lg lg:text-xl text-black font-bold">
          Register
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("successfully log out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="navbar  text-white md:px-4 lg:px-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-[#B91C1C] text-3xl font-bold">NxtTask</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogOut} className="btn bg-[#B91C1C] text-white">
            Logout
          </button>
        ) : (
          <button className="btn bg-[#B91C1C] text-white">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

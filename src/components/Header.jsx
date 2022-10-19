import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log("context", user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav>
      <div className="navbar bg-primary text-primary-content">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Awesome
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/home">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="register">
          Register
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="orders">
          Orders
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="login">
          LogIn
        </Link>
        {user && <span>Welcome, {user.email}</span>}
        {user?.email ? (
          <button onClick={handleLogOut} className="ml-5 btn btn-sm">
            Log Out
          </button>
        ) : (
          <button
            to="/login"
            onClick={handleLogOut}
            className="ml-5 btn btn-sm"
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;

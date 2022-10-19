import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log("context", user);
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
        <Link className="btn btn-ghost normal-case text-xl" to="login">
          LogIn
        </Link>
        {user && <span>Welcome, {user.displayName}</span>}
      </div>
    </nav>
  );
};

export default Header;

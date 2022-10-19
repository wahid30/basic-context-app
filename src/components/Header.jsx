import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const LandingNav = () => {
  return (
    <>
      <Link to="/">In-d house</Link>
      <div>
        <a href="https://www.vanillacoding.co/">Vaco</a>
        <a href="https://github.com/In-d-house">Git hub</a>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default LandingNav;

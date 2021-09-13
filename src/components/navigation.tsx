import * as React from "react";
import {  Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/fizzbuzz">Fizzbuzz</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
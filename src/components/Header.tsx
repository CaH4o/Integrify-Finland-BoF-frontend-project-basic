import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css";

function Header() {
  return (
    <nav>
      <Link to="" className="mainNav">Home</Link>
      <Link to="countries" className="mainNav">Countries</Link>
    </nav>
  );
}

export default Header;

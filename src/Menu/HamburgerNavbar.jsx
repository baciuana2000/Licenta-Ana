import { slide as Menu } from "react-burger-menu";
import React from "react";
import { BrowserRouter, Switch, Link } from "react-router-dom";
import "./Sidebar.css";

export default function HamburgerNavbar() {
  return (
    <Menu>
      <Link className="menu-item" to="/">
        Home
      </Link>
      <Link className="menu-item" to="/contact">
        Contact
      </Link>
      <Link className="menu-item" to="/about">
        About
      </Link>
      <Link className="menu-item" to="/movies">
        Movies
      </Link>
    </Menu>
  );
}

import { slide as Menu } from "react-burger-menu";
import React from "react";
import "./Sidebar.css";

export default function HamburgerNavbar() {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/movies">
        Movies
      </a>
    </Menu>
  );
}

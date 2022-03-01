import { slide as Menu } from 'react-burger-menu';
import React from 'react'
import './Sidebar.css';

export default function HamburgerNavbar(bbb) {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Salads
      </a>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts@@@@@@@
      </a>
    </Menu>
  );
};

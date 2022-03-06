import "./App.css";
import HamburgerNavbar from "./Menu/HamburgerNavbar";
import HomePage from "./Componente/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contact from "./Componente/Contact";
import About from "./Componente/About";
import Movies from "./Componente/Movies";
import React from "react";
function App() {
  return (
    <>
      <BrowserRouter>
        <HamburgerNavbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;

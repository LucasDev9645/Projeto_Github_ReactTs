import { useState } from "react";

import Home from "./components/Home";
import NavBar from "./components/Navbar";

import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
};

export default App;

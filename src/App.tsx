import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import FindProfile from "./components/FindProfile";

import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<FindProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

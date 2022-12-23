import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Counter from "./Pages/Counter";
import NoPage from "./Pages/NoPage";
import Chores from "./Pages/Chores";
import "./CSS/App.css";
import ToggleVisibility from "./Components/ToggleVisibility";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ToggleVisibility>
                <Home />
              </ToggleVisibility>
            }
          />
          <Route path="chores" element={<Chores />} />
          <Route path="counter" element={<Counter />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

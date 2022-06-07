import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About/About";
import { Homepage } from "../pages/Homepage/Homepage";
import { Portofolio } from "../pages/Portofolio/Portofolio";

export const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="portofolio" element={<Portofolio />}>
        <Route path=":id" element={<Portofolio />} />
      </Route>
    </Routes>
  );
};

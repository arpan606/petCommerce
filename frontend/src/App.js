import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import logo from './logo.svg';

import LandingPage from "./componenets/LandingPage/LandingPage";
import Explore from "./componenets/Explore/Explore.js";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={ <LandingPage/>} />
            <Route path="/explore/:userId" element={ <Explore/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

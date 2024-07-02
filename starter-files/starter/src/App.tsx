import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApiContext } from "./context/ApiContext";
import { NavBar } from "./components/NavBar";
import { FavoritesPage } from "./pages/FavoritesPage";
import { Home } from "./pages/Home";
import { SurprisePage } from "./pages/SurprisePage";
import { Footer } from "./components/Footer";
import { IndividualRestaurant } from "./pages/IndividualRestaurant";

const App = () => {

  return(
  <ApiContext>
   <BrowserRouter>
    <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/favorites" element={<FavoritesPage/>}/>
    <Route path="/surpriseMe" element={<SurprisePage/>}/>
    <Route path="/restaurant:nameOfRest" element={<IndividualRestaurant/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </ApiContext>
  )
};

export default App;

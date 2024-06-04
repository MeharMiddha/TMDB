import React from "react";
import HomePage from "./components/pages/HomePage";
import MovieDetails from "./components/FetchTask/MovieDetails";
import PersonDetail from "./components/FetchTask/PersonDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import { ContextProvider } from "./context/UserContext";
import Watchlist from "./components/pages/Watchlist";
import Favourites from "./components/pages/Favourites";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<MovieDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/:name/info/:id" element={<PersonDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;

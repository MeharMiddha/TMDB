import React from "react";
import SearchMovies from "../FetchTask/SearchMovies";
import Oscar from "../sections/Oscar";
import Trending from "../FetchTask/Trending";
import Popular from "../FetchTask/Popular";

function App() {
  document.title = "The Movie Database";
  return (
    <div>
      <SearchMovies />
      <Oscar />
      <Trending />
      <Popular />
    </div>
  );
}

export default App;

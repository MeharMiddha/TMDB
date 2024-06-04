import React from "react";
import Card from "../Cards/Card";
import { Link } from "react-router-dom";

function TrendingMovies({ movies }) {
  return (
    <div className="flex w-full overflow-x-auto gap-2 pl-2">
      {movies.map((item) => {
        return (
          <Link to={`/details/${item.id}`} key={item.id}>
            <Card
              name={item.title}
              date={item.release_date}
              imageUrl={item.poster_path}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default TrendingMovies;

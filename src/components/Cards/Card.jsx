import React from "react";

function Card({ name, date, imageUrl }) {
  return (
    <div className="flex flex-row">
      <div className="w-[150px]">
        <img
          className="rounded-xl"
          src={`https://image.tmdb.org/t/p/w500/${imageUrl}`}
          alt=""
        />
        <p>{name}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default Card;

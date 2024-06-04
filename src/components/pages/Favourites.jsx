import React, { useContext } from "react";
import ListCard from "../Cards/ListCard";
import { UserContext } from "../../context/UserContext";

function Favourites() {
  const { favourites } = useContext(UserContext);
  document.title = "Favourites";
  return (
    <div className="h-[100%]">
      <p className="text-[40px] justify-center flex font-bold m-2 xl:p-4">
        My Favourites:{" "}
      </p>
      {favourites.length > 0 ? (
        favourites.map((item) => (
          <ListCard key={item.id} item={item} type={"favourites"} />
        ))
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://assets.materialup.com/uploads/dbeee688-cecf-49bf-be29-a17a7653957d/frame7.png"
            alt=""
            className="w-[700px]"
          />
          <p className="text-[25px] font-semibold mb-5">
            Your TMDB Favourites Is Empty.!
          </p>
        </div>
      )}
    </div>
  );
}

export default Favourites;

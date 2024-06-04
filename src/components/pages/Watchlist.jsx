import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ListCard from "../Cards/ListCard";

function Watchlist() {
  const { watchlist } = useContext(UserContext);
  document.title = "Watchlist";
  return (
    <div className="h-[100%] min-h-[700px]">
      <p className="text-[40px] justify-center flex font-bold m-2 xl:p-4">
        My Watchlist:{" "}
      </p>
      {watchlist.length > 0 ? (
        watchlist.map((item) => (
          <ListCard key={item.id} item={item} type={"watchlist"} />
        ))
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://assets.materialup.com/uploads/dbeee688-cecf-49bf-be29-a17a7653957d/frame7.png"
            alt=""
            className="w-[700px]"
          />
          <p className="text-[25px] font-semibold mb-5">
            Your TMDB Watchlist Is Empty.!
          </p>
        </div>
      )}
    </div>
  );
}

export default Watchlist;

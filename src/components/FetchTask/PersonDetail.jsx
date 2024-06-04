import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PersonDetailsCard from "../Cards/PersonDetailsCard";

function PersonDetail() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Failed to Fetch");
        }
        const data = await response.json();
        setInfo(data);
      } catch (error) {
        console.log("Error Message : ", error);
      }
    };
    fetchMovies();
  },[apiKey]);
  if (!info) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <PersonDetailsCard info={info} />
    </div>
  );
}

export default PersonDetail;

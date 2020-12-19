import React, { useEffect, useState } from "react";
import axios from "../../requests/axios";
import "./style.css";
const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(fetchUrl);
      setMovies(data.results);
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__movies">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.title}
            className="row__poster"
          />
        ))}
      </div>
    </div>
  );
};

export default Row;

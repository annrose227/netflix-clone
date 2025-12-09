import React, { useEffect } from "react";
import "./Banner.css";
import axios from "../../axios.js";
import { API_KEY, imageUrl } from "../../constants/constants";
import { useState } from "react";

function Banner() {
  const [Movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const results = response.data.results;
        const randomIndex = Math.floor(Math.random() * results.length);
        setMovie(results[randomIndex]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${Movie ? imageUrl + Movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">
          {Movie
            ? Movie.name || Movie.original_title || Movie.original_name
            : ""}
        </h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{Movie ? Movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;

import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios.js";
import { API_KEY, imageUrl } from "../../constants/constants";

function RowPost(props) {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`discover/tv?api_key=${API_KEY}&with_networks=213`)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network error");
      });
  }, []);
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {Movies.map((obj) => (
          <img
            className={props.isSmall ? "small_poster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
          />
        ))}
      </div>
    </div>
  );
}

export default RowPost;

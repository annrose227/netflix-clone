import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios.js";
import { imageUrl, API_KEY } from "../../constants/constants";
import Youtube from "react-youtube";

function RowPost(props) {
  const [Movies, setMovies] = useState([]);
  const [urlId, seturlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network error");
      });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovieTrailer = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          seturlId(response.data.results[0]);
        } else {
          console.log("Trailer not available");
        }
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {Movies.map((obj) => (
          <img
            key={obj.id}
            onClick={() => handleMovieTrailer(obj.id)}
            className={props.isSmall ? "small_poster" : "poster"}
            src={`${imageUrl + (obj.backdrop_path || obj.poster_path)}`}
          />
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
